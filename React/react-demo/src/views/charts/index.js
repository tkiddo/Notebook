import React,{Fragment,useEffect,useState} from 'react'
import BarChart from './barChart'
import LineChart from './lineChart'

const data = [
    {
        x: "x1",
        y: 320
    },
    {
        x: "x2",
        y: 200
    },
    {
        x: "x3",
        y: 25
    },
    {
        x: "x4",
        y: 190
    },
    {
        x: "x5",
        y: 90
    }
];

const Charts = (props)=>{
    const [value,setValue] = useState([])
    useEffect(()=>{
        setTimeout(() => {
            setValue(data)
        }, 1000);
    },[])
    return (
        <Fragment>
            <BarChart data={data}/>
            <LineChart />
        </Fragment>
    )
}

export default Charts