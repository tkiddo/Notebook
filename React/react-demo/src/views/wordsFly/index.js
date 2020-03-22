import React, { Fragment } from "react";
import WordItem from "./wordItem";
import "./index.scss";

const data = [
  {
    content: "awesome,hahaha",
    top: 20
  },
  {
    content: "awesome,great",
    top: 60
  },
  {
    content: "awesome,hahaha",
    top: 80
  },
  {
    content: "awesome,great",
    top: 120
  }
];
export default class WordsFly extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      list: []
    };
  }
  handleAdd=()=>{
      const {list} = this.state
      this.setState({
          list:[...list,{
              content:'new line',
              top:140
          }]
      })
  }
  componentDidMount() {
    this.setState({
      list: data
    });
  }
  render() {
    const { list } = this.state;
    return (
      <Fragment>
        <div className="wrapper">
          {list.map((item, idx) => {
            return <WordItem info={item} key={idx} />;
          })}
        </div>
        <div>
            <button onClick={this.handleAdd}>add</button>
        </div>
      </Fragment>
    );
  }
}
