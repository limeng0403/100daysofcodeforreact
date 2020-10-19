// 条件判断
import React from "react";
import "./ComDefault.css";

// 用户状态为登录，显示此组件
class UserLogin extends React.Component {
  render() {
    return <h1>Welcome User!</h1>;
  }
}

// 用户状态为游客，显示此组件
class GuestLogin extends React.Component {
  render() {
    return <h1>Welcome Guest,please login.</h1>;
  }
}

// 用户登录状态组件
class UserStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      isHiden: false,
    };
  }

  // 切换登录、登出状态
  ButtonEvent = () => {
    this.setState({
      isLogin: !this.state.isLogin,
    });
  };

  // 切换显示、隐藏状态
  HidenEvent = () => {
    this.setState({
      isHiden: !this.state.isHiden,
    });
  };

  render() {
    let display;

    if (this.state.isLogin) {
      display = <UserLogin></UserLogin>;
    } else {
      display = <GuestLogin></GuestLogin>;
    }

    // 隐藏状态下，组件返回null，实现隐藏。
    if (this.state.isHiden) {
      display = null;
    }

    return (
      <div>
        <button onClick={this.ButtonEvent}>{this.state.isLogin ? "退出" : "登录"}</button>
        <button onClick={this.HidenEvent}>{this.state.isHiden ? "显示状态信息" : "隐藏状态信息"}</button>
        {display}
      </div>
    );
  }
}

function Main() {
  return (
    <div className="Com">
      <UserStatus></UserStatus>
    </div>
  );
}

export default Main;
