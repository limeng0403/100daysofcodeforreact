// state及生命周期
import React from "react";
import "./ComDefault.css";

class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
    };
  }

  // 组件生命周期，组件被删除时运行
  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  // 组件生命周期，组件已经被渲染到DOM中后运行
  componentDidMount() {
    this.timerId = setInterval(() => {
      this.tick();
    }, 1000);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.date.toLocaleString()}</h1>
      </div>
    );
  }
}

function Main() {
  return (
    <div className="Com">
      <Clock></Clock>
    </div>
  );
}

export default Main;
