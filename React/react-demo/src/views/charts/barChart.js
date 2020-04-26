import React, { useEffect, useState } from 'react'
import * as d3 from 'd3'


const margin = {
    top: 20,
    right: 0,
    bottom: 30,
    left: 40
};

const WIDTH = 450;
const HEIGHT = 400;
const BarChart = (props) => {
    const {data} = props;
    const chartWidth = WIDTH - margin.left - margin.right;
    const chartHeight = HEIGHT - margin.bottom - margin.top;

    const [value, setValue] = useState(() => data.map(d => ({ ...d, y: 0 })));

    useEffect(() => {
        const t = d3.transition().duration(1000);
        
        t.tween("height", () => {
            let interpolates = data.map((d, i) => {
                let start = (value[i] && value[i].y) || 0;
                return d3.interpolateNumber(start, d.y);
            });
            return t => {
                let newData = data.map((d, i) => {
                    return { ...d, y: interpolates[i](t) };
                });

                setValue(newData);
            };
        });
    }, []);
    //x轴
    const xScale = d3
        .scaleBand()
        .domain(data.map(item => item.x))
        .range([0, chartWidth])
        .paddingInner(0.2)
        .paddingOuter(0.3)
        .round(true)
    const bindWidth = xScale.bandwidth()

    //y轴
    const yScale = d3
        .scaleLinear()
        .domain([0,d3.max(data.map(item=>item.y))])
        .range([chartHeight-margin.bottom,0])
        .nice()
    return (
        <svg width={WIDTH} height={HEIGHT}>
            <linearGradient id="linear-gradient" x1={0} x2={0} y1={1} y2={0}>
                <stop offset="0%" stopColor="#16a3ff" />
                <stop offset="100%" stopColor="#6ddead" />
            </linearGradient>
            {/* x轴 */}
            <g 
            transform={`translate(${margin.left},${chartHeight-margin.bottom})`}>
                <line x1={0} y1={0} x2={chartWidth} y2={0} stroke='#444' />
                {
                    data.map((item,idx) => {
                        const x = xScale(item.x) + bindWidth / 2
                        return (
                            <g key={idx}>
                                <line x1={x} y1={0} x2={x} y2={6} stroke='#444' />
                                <text x={x} y={20} fontSize={12} textAnchor={"middle"}>
                                    {item.x}
                                </text>
                            </g>

                        )
                    })
                }
            </g>

            {/* y轴 */}
            <g 
            transform={`translate(${margin.left})`}>
                <line x1={0} y1={0} x2={0} y2={chartHeight-margin.bottom} stroke='#444'/>
                {
                    //https://segmentfault.com/a/1190000008750211 ticks
                    yScale.ticks(5).map(item=>{
                        const y = yScale(item)

                        return (
                            <g key={item}>
                                <line x1={0} y1={y} x2={-12} y2={y} stroke='#444'/>
                                <text x={-15} y={y} fontSize={12} textAnchor={'end'}>
                                    {item}
                                </text>
                            </g>
                        )
                    })
                }
            </g>

            {/* 数据 */}
            <g
            fill={'url(#linear-gradient)'}
            transform={`translate(${margin.left})`}>
                {
                    value.map((item,idx)=>{
                        const x = xScale(item.x)
                        const y = yScale(item.y)
                        const height = chartHeight-y-margin.bottom;
                        return (
                            <g key={idx}>
                                <rect x={x} y={y} width={bindWidth} height={height}/>
                                <text x={x+bindWidth/2} y={y-12} fontSize={12} textAnchor={'middle'}>
                                    {item.y.toFixed(0)}
                                </text>
                            </g>
                        )
                    })
                }
            </g>

        </svg>
    )
}

export default BarChart

//https://zhuanlan.zhihu.com/p/85862899