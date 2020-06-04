import React,{useState} from 'react'
import './index.scss'

const SlideView = (props)=>{
	const [flag,setFlag]=useState('')
	return(
		<div>
			<button onClick={()=>setFlag('up')}>slide up</button>
			<button onClick={()=>setFlag('down')}>slide down</button>
			<div className={`box ${flag?(flag==='up'?'slide-up':'slide-down'):''}`}></div>
		</div>
	)
}

export default SlideView