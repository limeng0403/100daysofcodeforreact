// 列表
import React from "react";
import "./ComDefault.css";

const trans = {
  c: "摄氏度",
  f: "华氏度",
};

// 输入组件
class Temperature extends React.Component {
  constructor(props) {
    super(props);

    this.inputEvent = this.inputEvent.bind(this);
  }

  inputEvent(e) {
    this.props.TEvent(e.target.value);
  }

  render() {
    const type = this.props.type; // 提示输入类型
    const t = this.props.t; // 输入温度值

    return (
      <fieldset>
        <legend>请输入{trans[type]}</legend>
        <input value={t} onChange={this.inputEvent}></input>
      </fieldset>
    );
  }
}

// 摄氏度与华氏度转化组件
class CF extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "c",
      value: 0,
    };

    this.ToCEvent = this.ToCEvent.bind(this);
    this.ToFEvent = this.ToFEvent.bind(this);
  }

  // 摄氏度与华氏度转换
  transCF(value, to) {
    value = parseFloat(value);

    if (Number.isNaN(value)) {
      return "";
    }

    if (to === "c") {
      value = ((value - 32) * 5) / 9;
    } else if (to === "f") {
      value = (value * 9) / 5 + 32;
    }

    value = Math.round(value * 1000) / 1000;

    return value;
  }

  ToCEvent(value) {
    this.setState({
      type: "c",
      value: value,
    });
  }

  ToFEvent(value) {
    this.setState({
      type: "f",
      value: value,
    });
  }

  render() {
    const type = this.state.type;
    const t = this.state.value;
    // 对当前输入值进行转换
    const tc = type === "c" ? t : this.transCF(t, "c");
    // 对当前输入值进行转换
    const tf = type === "f" ? t : this.transCF(t, "f");

    return (
      <div className="Com">
        <Temperature type="c" t={tc} TEvent={this.ToCEvent}></Temperature>
        <Temperature type="f" t={tf} TEvent={this.ToFEvent}></Temperature>
      </div>
    );
  }
}

function Main() {
  return (
    <div>
      <CF></CF>
    </div>
  );
}

export default Main;
