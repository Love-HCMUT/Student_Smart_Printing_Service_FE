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

        // Initial resize with a delay to ensure dimensions are set
        setTimeout(handleResize, 100);

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const { width, height } = dimensions;
        console.log("Dimensions:", width, height);
        const margin = { top: 10, right: 10, bottom: 30, left: 30 };
        const innerWidth = Math.max(width - margin.left - margin.right, 250);
        const innerHeight = Math.max(height - margin.top - margin.bottom, 125);

        if (innerWidth <= 0 || innerHeight <= 0) {
            console.error("Chart dimensions are too small to render.");
            return;
        }

        // Retrieve data from localStorage
        const storageKey = `chartData-${year}-${month}`;
        const storedData = JSON.parse(localStorage.getItem(storageKey)) || data;

        // Clear existing chart
        d3.select(chartRef.current).selectAll("*").remove();

        // Create SVG
        const svg = createSvg(chartRef.current, width, height, margin);

        // Generate full data for the current month
        const fullData = generateFullData(year, month, storedData);

        // Parse data
        const parsedData = parseData(fullData);

        // Scales
        const x = createXScale(parsedData, innerWidth);
        const y = createYScale(parsedData, innerHeight);

        // Add axes
        addXAxis(svg, x, innerHeight);
        addYAxis(svg, y);

        // Tooltip div
        const tooltip = createTooltip();

        // Draw bars
        drawBars(svg, parsedData, x, y, innerHeight, tooltip);

    }, [data, dimensions, year, month]);

    return <div ref={chartRef} style={{ width: "100%", height: "100%" }} />;
};

const createSvg = (container, width, height, margin) => {
    return d3.select(container)
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);
};

const generateFullData = (year, month, data) => {
    const daysInMonth = new Date(year, month, 0).getDate();
    const fullData = Array.from({ length: daysInMonth }, (_, i) => ({
        Date: new Date(year, month - 1, i + 1).toISOString(),
        OrderCount: 0
    }));

    if (Array.isArray(data) && data.length > 0) {
        data.forEach(d => {
            if (!d.Date) return;
            const date = new Date(d.Date).toISOString();
            const index = fullData.findIndex(x => x.Date === date);
            if (index >= 0) {
                fullData[index].OrderCount = d.OrderCount;
            }
        });
    }

    return fullData;
};

const parseData = (fullData) => {
    return fullData.map(item => {
        const parsedDate = new Date(item.Date);
        if (isNaN(parsedDate)) {
            console.error(`Invalid date format: ${item.Date}`);
            return { ...item, Date: new Date() }; // Fallback to current date
        }
        return { ...item, Date: parsedDate };
    });
};

const createXScale = (data, width) => {
    return d3.scaleBand()
        .domain(data.map(d => d.Date))
        .range([0, width])
        .padding(0.1); // Reduced padding
};

const createYScale = (data, height) => {
    return d3.scaleLinear()
        .domain([0, d3.max(data, d => d.OrderCount) || 1])
        .nice()
        .range([height, 0]);
};

const addXAxis = (svg, x, height) => {
    const xAxis = d3.axisBottom(x)
        .tickValues(x.domain().filter((d, i) => i % 5 === 0 || i === x.domain().length - 1))
        .tickFormat(d3.timeFormat("%d"));

    svg.append("g")
        .attr("transform", `translate(0,${height})`)
        .call(xAxis)
        .selectAll(".tick text")
        .style("font-size", "8px") // Reduced font size
        .style("fill", "rgba(0, 0, 0, 0.5)");
};

const addYAxis = (svg, y) => {
    svg.append("g")
        .call(d3.axisLeft(y)
            .tickValues(d3.range(0, d3.max(y.domain()) + 1))
            .tickFormat(d => Number.isInteger(d) ? d : ''))
        .selectAll(".tick text")
        .style("font-size", "8px"); // Reduced font size
};

const createTooltip = () => {
    return d3.select("body")
        .append("div")
        .attr("class", "tooltip")
        .style("position", "absolute")
        .style("background", "#fff")
        .style("border", "1px solid #000")
        .style("padding", "5px")
        .style("display", "none")
        .style("font-size", "10px") // Reduced font size
        .style("pointer-events", "none");
};

const drawBars = (svg, data, x, y, height, tooltip) => {
    console.log("Drawing bars:", data);
    const bars = svg.selectAll(".bar")
        .data(data)
        .enter()
        .append("rect")
        .attr("class", "bar")
        .attr("x", d => x(d.Date))
        .attr("width", x.bandwidth())
        .attr("y", d => y(d.OrderCount))
        .attr("height", d => Math.max(0, height - y(d.OrderCount)))
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

    bars.transition()
        .duration(800)
        .attr("y", d => y(d.OrderCount))
        .attr("height", d => Math.max(0, height - y(d.OrderCount)));
};

export default CustomBarChart;
