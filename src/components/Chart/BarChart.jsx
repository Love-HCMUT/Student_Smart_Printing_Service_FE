import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

const CustomBarChart = ({ data, year, month }) => {
    const chartRef = useRef(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const handleResize = () => {
            if (chartRef.current) {
                const { width, height } = chartRef.current.parentElement.getBoundingClientRect();
                setDimensions({ width, height });
            }
        };

        setTimeout(handleResize, 100);

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const { width, height } = dimensions;
        const margin = { top: 10, right: 10, bottom: 30, left: 30 };
        const innerWidth = Math.max(width - margin.left - margin.right, 250);
        const innerHeight = Math.max(height - margin.top - margin.bottom, 125);

        if (innerWidth <= 0 || innerHeight <= 0) {
            return;
        }

        d3.select(chartRef.current).selectAll("*").remove();

        const svg = d3.select(chartRef.current)
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", `translate(${margin.left},${margin.top})`);

        const fullData = Array.from({ length: new Date(year, month, 0).getDate() }, (_, i) => ({
            Date: new Date(year, month - 1, i + 1).toISOString(),
            OrderCount: 0
        }));

        data.forEach(d => {
            if (d.Date) {
                const date = new Date(d.Date).toISOString();
                const index = fullData.findIndex(x => x.Date === date);
                if (index >= 0) fullData[index].OrderCount = d.OrderCount;
            }
        });

        const xScale = d3.scaleBand()
            .domain(fullData.map(d => d.Date))
            .range([0, innerWidth])
            .padding(0.1);

        const yScale = d3.scaleLinear()
            .domain([0, d3.max(fullData, d => d.OrderCount) || 1])
            .range([innerHeight, 0])
            .nice();

        svg.append("g")
            .attr("transform", `translate(0,${innerHeight})`)
            .call(
                d3.axisBottom(xScale)
                    .tickValues(xScale.domain().filter((d, i) => i % Math.ceil(fullData.length / 10) === 0)) // Hiển thị nhãn cách quãng
                    .tickFormat(d3.timeFormat("%d"))
            )
            .selectAll("text")
            .style("font-size", "8px")
            .style("fill", "rgba(0, 0, 0, 0.5)")
            .attr("transform", "rotate(-45)") // Xoay nhãn
            .style("text-anchor", "end"); // Căn chỉnh nhãn

        svg.append("g")
            .call(d3.axisLeft(yScale).ticks(Math.min(10, d3.max(fullData, d => d.OrderCount) || 1)))
            .selectAll("text")
            .style("font-size", "8px");

        const tooltip = d3.select("body")
            .append("div")
            .attr("class", "tooltip")
            .style("position", "absolute")
            .style("background", "#fff")
            .style("border", "1px solid #000")
            .style("padding", "5px")
            .style("display", "none")
            .style("font-size", "10px")
            .style("pointer-events", "none");

        svg.selectAll(".bar")
            .data(fullData)
            .enter()
            .append("rect")
            .attr("class", "bar")
            .attr("x", d => xScale(d.Date))
            .attr("y", d => yScale(d.OrderCount))
            .attr("width", xScale.bandwidth())
            .attr("height", d => innerHeight - yScale(d.OrderCount))
            .attr("fill", "steelblue")
            .on("mouseover", function (event, d) {
                tooltip.style("display", "block")
                    .html(`
                        <strong>Date:</strong> ${d3.timeFormat("%Y-%m-%d")(new Date(d.Date))}<br/>
                        <strong>Orders:</strong> ${d.OrderCount}<br/>
                        <strong>Message:</strong> ${d.OrderCount > 50 ? "High demand" : "Normal demand"}
                    `);
                d3.select(this).style("fill", "darkorange");
            })
            .on("mousemove", function (event) {
                tooltip.style("left", (event.pageX + 10) + "px")
                    .style("top", (event.pageY - 20) + "px");
            })
            .on("mouseout", function () {
                tooltip.style("display", "none");
                d3.select(this).style("fill", "steelblue");
            });
    }, [data, dimensions, year, month]);

    return <div ref={chartRef} style={{ width: "100%", height: "100%" }} />;
};

export default CustomBarChart;
