class Item extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      name:'saj'
    }
    console.log('init state')
  }

  render(){
    console.log('render')
    return <div>{this.props.group + this.state.name}</div>
  }

  componentWillMount() {
    console.log('componentWillMount')
    this.state.name = 'hello'
  }

  componentDidMount() {
    console.log('componentDidMount')
    const dom = ReactDOM.findDOMNode(this);
    console.log(dom)
    dom.style.backgroundColor = 'yellow'
    let isYellow = false
    setInterval(function () {
      if (isYellow){
        dom.style.backgroundColor = 'red'
        isYellow = false;
      } else{
        dom.style.backgroundColor = 'yellow'
        isYellow = true
      }
    },1000)
  }
}

Item.defaultProps = {
  group:123
}


ReactDOM.render(
  <Item/>,
  document.getElementById('test')
)