// 组件引用
import React from "react";
import "./ComDefault.css";

function Ex1(props) {
  return (
    <div>
      <h3>传入参数name：{props.name}</h3>
      <h3>传入参数age：{props.age}</h3>
    </div>
  );
}

class Ex2 extends React.Component {
  render() {
    return (
      <div>
        <h3>传入参数name：{this.props.name}</h3>
        <h3>传入参数age：{this.props.age}</h3>
      </div>
    );
  }
}

function Main() {
  return (
    <div className="Com">
      <Ex1 name="Herry" age="23"></Ex1>
      <Ex2 name="Gaga" age="32"></Ex2>
    </div>
  );
}

export default Main;
