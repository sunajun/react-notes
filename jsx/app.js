// ReactDOM.render(
//   <h1>hello</h1>,
//   document.getElementById('test')
// )


class Item extends React.Component{
  render(){
    return <li>one test</li>
  }
}

// ReactDOM.render(
//   // React.createElement('h1',null,'hello'),
//   React.createElement(Item,null,null),
//   document.getElementById('test')
// )

ReactDOM.render(
  React.createElement('ul',null,React.createElement(Item),React.createElement(Item),React.createElement(Item)),
  document.getElementById('test')
)