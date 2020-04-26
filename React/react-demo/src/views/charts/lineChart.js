import React from 'react'
import * as d3 from 'd3'

const width = 600
const height = 400
const margin = { top: 50, left: 50, bottom: 50, right: 50 }
const chartWidth = width - margin.left - margin.right
const chartHeight = height - margin.top - margin.bottom

const data = [
    { year: "1991", value: 3 },
    { year: "1992", value: 4 },
    { year: "1993", value: 3.5 },
    { year: "1994", value: 5 },
    { year: "1995", value: 4.9 },
    { year: "1996", value: 6 },
    { year: "1997", value: 7 },
    { year: "1998", value: 9 },
    { year: "1999", value: 13 }
];

const LineChart = (props) => {
    const xScale = d3
        .scaleBand()
        .domain(data.map(item => item.year))
        .range([0, chartWidth])
        .paddingInner(0.3)
        .paddingOuter(0.4)
        .round(true)

    const bandWidth = xScale.bandwidth()

    const yScale =d3
        .scaleLinear()
        .domain([0,d3.max(data.map(item=>item.value))])
        .range([chartHeight,0])
        .nice()

    const line = d3
        .line()
        .x(d=>{
            return xScale(d.year)+bandWidth/2
        })
        .y(d=>{
            return yScale(d.value)
        })
        .curve(d3.curveCatmullRom)
    
    return (
        <svg width={width} height={height}>
            {/* 边框 */}
            <rect x={0} y={0} width={width} height={height} stroke={'#666666'} fill="#fff" />
            <g
                transform={`translate(${margin.left},${margin.top})`}>
                {/* 标题 */}
                <text x={chartWidth/2} y={0} textAnchor={'middle'}>
                    折线图
                </text>
                {/* x轴 */}
                <g
                transform={`translate(0,${chartHeight})`}>
                    {/* 轴线 */}
                    <line x1={0} y1={0} x2={chartWidth} y2={0} stroke={'#111111'} />
                    {/* 轴名称 */}
                    <text x={chartWidth} y={24} textAnchor='middle' fill={'orange'}>
                        year
                    </text>
                    {/* 轴点 */}
                    {
                        data.map((item, idx) => {
                            const x = xScale(item.year) + bandWidth / 2
                            return (
                                <g key={idx}>
                                    <line x1={x} y1={0} x2={x} y2={6} stroke={'#111111'} />
                                    <text x={x} y={24} fontSize={12} textAnchor={'middle'}>
                                        {item.year}
                                    </text>
                                </g>
                            )
                        })
                    }
                    {/* 箭头标记 */}
                    <path d={`M ${chartWidth} -5 L ${chartWidth+15} 0 L ${chartWidth} 5`} fill={'#111111'}/>
                </g>
                {/* y轴 */}
                <g>
                    <line x1={0} y1={0} x2={0} y2={chartHeight} stroke={'#111111'}/>
                    {/* 轴名称 */}
                    <text x={-24} y={-10} textAnchor='middle' fill={'orange'}>
                        value
                    </text>
                    {
                        yScale.ticks(8).map((item,idx)=>{
                            const y = yScale(item)
                            return (
                                <g key={idx}>
                                    <line x1={0} y1={y} x2={-6} y2={y} stroke={'#111111'}/>
                                    <text x={-24} y={y} fontSize={12} textAnchor={'start'}>
                                        {item}
                                    </text>
                                </g>
                            )
                        })
                    }
                    {/* 箭头标记 */}
                    <path d={`M -5 0 L 0 -15 L 5 0`} fill={'#111111'}/>
                </g>

                {/* 数据点 */}
                <g>
                    {
                        data.map((item,idx)=>{
                            const x=xScale(item.year)+bandWidth/2
                            const y=yScale(item.value)
                            return (
                                <g key={idx}>
                                    <circle cx={x} cy={y} r={'5'} fill={'red'}/>
                                    <text x={x} y={y-10} textAnchor={'middle'}>
                                        {item.value}
                                    </text>
                                </g>
                            )
                        })
                    }
                    {/* 连线 */}
                    <path d={line(data)} stroke={'purple'} fill={'none'}/>
                </g>
            </g>
        </svg>
    )
}

export default LineChart