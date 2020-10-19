import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch } from "react-router-dom";
import "./index.css";
import App from "./App";
import Day3 from "./Day3";
import Day4 from "./Day4";
import Day5 from "./Day5";
import Day6 from "./Day6";
import Day7 from "./Day7";
import Day8 from "./Day8";
import Day9 from "./Day9";
import Day10 from "./Day10";
import NoMatch from "./NoMatch";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <div>
    <ul className="nav_list">
      <li>
        <a href="/#app">App</a>
      </li>
      <li>
        <a href="/#day3">day 3:Hello World!</a>
      </li>
      <li>
        <a href="/#day4">day 4:组件引用</a>
      </li>
      <li>
        <a href="/#day5">day 5:state及生命周期</a>
      </li>
      <li>
        <a href="/#day6">day 6:事件绑定</a>
      </li>
      <li>
        <a href="/#day7">day 7:条件判断</a>
      </li>
      <li>
        <a href="/#day8">day 8:列表</a>
      </li>
      <li>
        <a href="/#day9">day 9:表单</a>
      </li>
      <li>
        <a href="/#day10">day 10:实战一，温度计</a>
      </li>
    </ul>
    <HashRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/app" component={App} />
        <Route path="/day3" component={Day3} />
        <Route path="/day4" component={Day4} />
        <Route path="/day5" component={Day5} />
        <Route path="/day6" component={Day6} />
        <Route path="/day7" component={Day7} />
        <Route path="/day8" component={Day8} />
        <Route path="/day9" component={Day9} />
        <Route path="/day10" component={Day10} />
        <Route path="*" component={NoMatch} />
      </Switch>
    </HashRouter>
  </div>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
