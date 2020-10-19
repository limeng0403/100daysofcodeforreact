// 事件绑定
import React from "react";
import "./ComDefault.css";

class Toggle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isToggleOn: false,
      isSmile: false,
    };

    // 第一种事件绑定方式
    this.ToggleEvent = this.ToggleEvent.bind(this);
  }

  ToggleEvent() {
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
    }));
  }

  // 第二种事件绑定方式
  SmileEvent = () => {
    this.setState({
      isSmile: !this.state.isSmile,
    });
  };

  render() {
    return (
      <div>
        <div>
          <span>开关：</span>
          <button onClick={this.ToggleEvent}>{this.state.isToggleOn ? "ON" : "OFF"}</button>
        </div>
        <div>
          <span>微笑：</span>
          <button onClick={this.SmileEvent}>{this.state.isSmile ? "Smile" : "Nomore"}</button>
        </div>
      </div>
    );
  }
}

function Main() {
  return (
    <div className="Com">
      <Toggle></Toggle>
    </div>
  );
}

export default Main;
