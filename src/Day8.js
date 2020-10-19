// 列表
import React from "react";
import "./ComDefault.css";

// 行组件
function ListItem(props) {
  const obj = props.obj;
  return (
    <div className="item">
      ID:{obj.id}--name:{obj.name}--age:{obj.age}
    </div>
  );
}

// 列表组件
function List(props) {
  const arr = props.arr.map((item, index) => {
    return <ListItem key={index} obj={item}></ListItem>;
  });

  return <div>{arr}</div>;
}

function Main() {
  let arr = [
    { id: 1, name: "Jerry", age: "23" },
    { id: 2, name: "Tom", age: "32" },
    { id: 3, name: "Carry", age: "28" },
  ];

  return (
    <div className="Com">
      <List arr={arr}></List>
    </div>
  );
}

export default Main;
