import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

const CustomLineChart = ({ data, xAccessor, yAccessor, xLabel, yLabel, gradientColors, tooltipLabel = "OrderCount", month, year, otherFlag = false }) => {
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
        if (!data) return;
        const { width, height } = dimensions;

        const margin = { top: 20, right: 20, bottom: 50, left: 50 };
        const innerWidth = width - margin.left - margin.right;
        const innerHeight = height - margin.top - margin.bottom;

        const xDomain = month ? [
            new Date(year, month - 1, 1),
            new Date(year, month - 1, 30)
        ] : [
            new Date(year, 0, 1),
            new Date(year, 11, 31)
        ];

        const normalizedData = [];

        if (otherFlag) {
            if (month) {
                for (let i = 1; i <= 30; i++) {
                    const date = new Date(year, month - 1, i);
                    const found = data.find(d => new Date(d.Date).getTime() === date.getTime());

                    if (tooltipLabel === "Order Count") {
                        normalizedData.push({
                            Date: date,
                            OrderCount: found ? found.OrderCount : 0
                        });
                    } else {
                        normalizedData.push({
                            Date: date,
                            TransactionCount: found ? found.TransactionCount : 0
                        });
                    }
                }
            } else {
                for (let i = 0; i < 12; i++) {
                    const date = new Date(year, i, 1);

                    const found = data.find(
                        d => d.MonthYear === `${year}-${String(i + 1).padStart(2, "0")}`
                    );

                    if (tooltipLabel === "Order Count") {
                        normalizedData.push({
                            MonthYear: date,
                            OrderCount: found ? found.OrderCount : 0
                        });
                    } else {
                        normalizedData.push({
                            MonthYear: date,
                            TransactionCount: found ? found.TransactionCount : 0
                        });
                    }
                }
            }

            data = normalizedData;
        }

        // Scales
        const x = d3
            .scaleTime()
            .domain(xDomain)
            .range([0, innerWidth]);

        const y = d3
            .scaleLinear()
            .domain([0, d3.max(data, yAccessor)])
            .nice()
            .range([innerHeight, 0]);

        // Line generator
        const line = d3
            .line()
            .x(d => x(xAccessor(d)))
            .y(d => y(yAccessor(d)))
            .curve(d3.curveMonotoneX);

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

        // Create gradient
        const gradient = svg.append("defs")
            .append("linearGradient")
            .attr("id", "line-gradient")
            .attr("gradientUnits", "userSpaceOnUse")
            .attr("x1", 0)
            .attr("y1", innerHeight)
            .attr("x2", 0)
            .attr("y2", 0);

        gradientColors.forEach(({ offset, color, opacity }) => {
            gradient.append("stop")
                .attr("offset", offset)
                .attr("stop-color", color)
                .attr("stop-opacity", opacity);
        });

        // Draw line with gradient
        svg.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("stroke", "url(#line-gradient)")
            .attr("stroke-width", 2)
            .attr("d", line);

        // Add animation
        const path = svg.select("path");
        const totalLength = path.node().getTotalLength();

        path.attr("stroke-dasharray", `${totalLength} ${totalLength}`)
            .attr("stroke-dashoffset", totalLength)
            .transition()
            .duration(2000)
            .ease(d3.easeLinear)
            .attr("stroke-dashoffset", 0);

        // Add axes
        svg.append("g")
            .attr("transform", `translate(0,${innerHeight})`)
            .call(d3.axisBottom(x).tickFormat(month ? d3.timeFormat("%d") : d3.timeFormat("%b")));

        svg.append("g")
            .call(d3.axisLeft(y)
                .tickValues(d3.range(0, Math.ceil(d3.max(data, yAccessor)) + 1))
                .tickFormat(d => Number.isInteger(d) ? d : ''));

        // Add labels
        svg.append("text")
            .attr("class", "x label")
            .attr("text-anchor", "middle")
            .attr("x", innerWidth / 2)
            .attr("y", innerHeight + margin.bottom - 10)
            .text(xLabel);

        svg.append("text")
            .attr("class", "y label")
            .attr("text-anchor", "middle")
            .attr("transform", "rotate(-90)")
            .attr("x", -innerHeight / 2)
            .attr("y", -margin.left + 15)
            .text(yLabel);

        const tooltip = d3.select("body")
            .append("div")
            .attr("class", "tooltip")
            .style("position", "absolute")
            .style("background", "#fff")
            .style("border", "1px solid #000")
            .style("padding", "5px")
            .style("display", "none")
            .style("font-size", "12px")
            .style("pointer-events", "none")
            .style("border-radius", "4px")
            .style("box-shadow", "0 2px 4px rgba(0, 0, 0, 0.2)");

        // Add circles for each data point
        svg.selectAll(".dot")
            .data(data)
            .enter()
            .append("circle")
            .attr("class", "dot")
            .attr("cx", d => x(xAccessor(d)))
            .attr("cy", d => y(yAccessor(d)))
            .attr("r", 4)
            .attr("fill", "darkorange")
            .on("mouseover", function (event, d) {
                tooltip.style("display", "block")
                    .html(`
                        <strong>MonthYear:</strong> ${d3.timeFormat("%Y-%m")(xAccessor(d))}<br/>
                        <strong>${tooltipLabel}:</strong> ${yAccessor(d)}
                    `);
                d3.select(this).attr("fill", "steelblue");
            })
            .on("mousemove", function (event) {
                tooltip.style("left", (event.pageX + 10) + "px")
                    .style("top", (event.pageY - 20) + "px");
            })
            .on("mouseout", function () {
                tooltip.style("display", "none");
                d3.select(this).attr("fill", "darkorange");
            });

    }, [data, dimensions, xAccessor, yAccessor, gradientColors, xLabel, yLabel, month, year]);

    return <div className="relative w-full h-64 overflow-hidden" ref={chartRef}></div>;
};

export default CustomLineChart;