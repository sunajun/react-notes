// ReactDOM.render(
//   <h1>hello</h1>,
//   document.getElementById('test')
// )


class Item extends React.Component{
  render(){
    return <li>one test</li>
  }
}
//JSX渲染本质
// ReactDOM.render(
//   // React.createElement('h1',null,'hello'),
//   React.createElement(Item,null,null),
//   document.getElementById('test')
// )
//

//JSX渲染本质
// ReactDOM.render(
//   // React.createElement('ul',null,React.createElement(Item),React.createElement(Item),React.createElement(Item)),
//   React.createElement('ul',null,[React.createElement(Item),React.createElement(Item),React.createElement(Item)]),
//   document.getElementById('test')
// )

//属性与行内样式
// ReactDOM.render(
//   <ul style={{color:'red'}}>
//     <Item/>
//     <Item/>
//   </ul>,
//   document.getElementById('test')
// )

//WebKit ms
//属性与行内样式
// ReactDOM.render(
//   React.createElement('ul',{style:{color:'red'}},[React.createElement(Item),React.createElement(Item),React.createElement(Item)]),
//   document.getElementById('test')
// )

//三元运算与复杂判断
const bool = true
const result = []
if (bool) {
  result.push(<Item/>);
  result.push(<Item/>);
  result.push(<Item/>);
}else {
  result.push(<h1>hello world</h1>);
}

// ReactDOM.render(
//   <ul style={{color:'red'}}>
//     {bool ? <Item/> : <h1>hello world</h1>}
//     <Item/>
//   </ul>,
//   document.getElementById('test')
// )

ReactDOM.render(
  <ul style={{color:bool ?'green':'red'}}>
    {result}
    <Item/>
  </ul>,
  document.getElementById('test')
)