import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

const CustomBarChart = ({ data, year, month }) => {
    const chartRef = useRef(null);
    const [dimensions, setDimensions] = useState({ width: 100, height: 100 });

    useEffect(() => {
        const handleResize = () => {
            if (chartRef.current) {
                const { width, height } = chartRef.current.getBoundingClientRect();
                setDimensions({ width, height });
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (!Array.isArray(data) || data.length === 0) return;
        const { width, height } = dimensions;
        const margin = { top: 5, right: 5, bottom: 20, left: 25 };
        const innerWidth = width - margin.left - margin.right;
        const innerHeight = height - margin.top - margin.bottom;

        // Generate full data for the current month
        const daysInMonth = new Date(year, month, 0).getDate();
        const fullData = Array.from({ length: daysInMonth }, (_, i) => ({
            Date: new Date(year, month - 1, i + 1).toISOString(),
            OrderCount: 0
        }));

        // Merge data into fullData
        try {
            data.forEach(d => {
                if (!d.Date) return;
                const date = new Date(d.Date).toISOString();
                const index = fullData.findIndex(x => x.Date === date);
                if (index >= 0) {
                    fullData[index].OrderCount = d.OrderCount;
                }
            });
        } catch (error) {
            console.log(error)
        }

        // Parse data
        const parsedData = fullData.map(item => ({
            ...item,
            Date: new Date(item.Date)
        }));

        // Scales
        const x = d3
            .scaleBand()
            .domain(parsedData.map(d => d.Date))
            .range([0, innerWidth])
            .padding(0.2);

        const y = d3
            .scaleLinear()
            .domain([0, d3.max(parsedData, d => d.OrderCount)])
            .nice()
            .range([innerHeight, 0]);

        // Clear existing chart
        d3.select(chartRef.current).selectAll("*").remove();

        // Create SVG
        const svg = d3
            .select(chartRef.current)
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", `translate(${margin.left},${margin.top})`);

        // Add X-axis
        const xAxis = d3.axisBottom(x)
            .tickValues(x.domain().filter((d, i) => i % 5 === 0))
            .tickFormat(d3.timeFormat("%d"));

        svg.append("g")
            .attr("transform", `translate(0,${innerHeight})`)
            .call(xAxis)
            .selectAll(".tick text")
            .style("font-size", "10px")
            .style("fill", "rgba(0, 0, 0, 0.5)");

        // Add Y-axis
        svg.append("g")
            .call(d3.axisLeft(y).ticks(5));

        // Tooltip div
        const tooltip = d3.select("body")
            .append("div")
            .attr("class", "tooltip")
            .style("position", "absolute")
            .style("background", "#fff")
            .style("border", "1px solid #000")
            .style("padding", "5px")
            .style("display", "none")
            .style("font-size", "12px")
            .style("pointer-events", "none");

        // Draw bars
        const bars = svg.selectAll(".bar")
            .data(parsedData)
            .enter()
            .append("rect")
            .attr("class", "bar")
            .attr("x", d => x(d.Date))
            .attr("width", x.bandwidth())
            .attr("y", innerHeight)
            .attr("height", 0)
            .attr("fill", "steelblue")
            .on("mouseover", function (event, d) {
                tooltip.style("display", "block")
                    .html(`
                        <strong>Date:</strong> ${d3.timeFormat("%Y-%m-%d")(d.Date)}<br/>
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

        // Animate bars
        bars.transition()
            .duration(800)
            .attr("y", d => y(d.OrderCount))
            .attr("height", d => innerHeight - y(d.OrderCount));

    }, [data, dimensions, year, month]);

    return <div className="relative w-full h-full overflow-hidden" ref={chartRef}></div>;
};

export default CustomBarChart;