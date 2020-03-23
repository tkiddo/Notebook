import React, { Fragment } from "react";
import WordItem from "./wordItem";
import "./index.scss";

const data = [
  {
    content: "哈哈哈",
    top: 20
  },
  // {
  //   content: "awesome,great",
  //   top: 60
  // },
  // {
  //   content: "awesome,hahaha",
  //   top: 80
  // },
  // {
  //   content: "awesome,great",
  //   top: 120
  // }
];
export default class WordsFly extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      list: [],
      val:''
    };
  }
  handleAdd=()=>{
      const {list,val} = this.state
      const top = Math.ceil(Math.random()*10)*30
      this.setState({
          list:[...list,{
              content:val,
              top:top
          }]
      })
  }
  handleChange=(e)=>{
    this.setState({
      val:e.target.value
    })
  }
  componentDidMount() {
    
  }
  render() {
    const { list,val } = this.state;
    return (
      <Fragment>
        <div className="wrapper">
          {list.map((item, idx) => {
            return <WordItem info={item} key={idx} />;
          })}
        </div>
        <div className='form'>
            <input placeholder='message' value={val} onChange={this.handleChange}/>
            <button onClick={this.handleAdd}>add</button>
        </div>
      </Fragment>
    );
  }
}
