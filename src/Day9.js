// 列表
import React from "react";
import "./ComDefault.css";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      contry: "China",
      readme: "",
    };
  }

  // 控制发生改变时，调用事件
  ChangeEvent = (e) => {
    let name = e.target.name;

    this.setState({
      [name]: e.target.value, // 处理多个输入
    });
  };

  render() {
    return (
      <div>
        <form>
          <p>
            <span>姓名：</span>
            <input name="name" value={this.state.name} onChange={this.ChangeEvent}></input>
          </p>
          <p>
            <span>国籍：</span>
            <select name="contry" value={this.state.contry} onChange={this.ChangeEvent}>
              <option value="China">中国</option>
              <option value="USA">美国</option>
              <option value="Japan">日本</option>
            </select>
          </p>
          <p>
            <span>其它：</span>
            <textarea name="readme" value={this.state.readme} onChange={this.ChangeEvent}></textarea>
          </p>
        </form>
        <div>
          <ul>
            <li>姓名:{this.state.name}</li>
            <li>国籍:{this.state.contry}</li>
            <li>备注:{this.state.readme}</li>
          </ul>
        </div>
      </div>
    );
  }
}

function Main() {
  return (
    <div className="Com">
      <Form></Form>
    </div>
  );
}

export default Main;
