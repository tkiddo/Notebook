import React, { Fragment } from "react";
import WordItem from "./wordItem";
import style from "./index.module.scss";


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
        <div className={`${style['wrapper']}`}>
          {list.map((item, idx) => {
            return <WordItem info={item} key={idx} />;
          })}
        </div>
        <div className={`${style['form']}`}>
            <input placeholder='message' value={val} onChange={this.handleChange}/>
            <button onClick={this.handleAdd}>add</button>
        </div>
      </Fragment>
    );
  }
}
