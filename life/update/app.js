class Item extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      name:'saj'
    }
    console.log('init state')
    this.update = this.update.bind(this)
  }

  update(){
    // this.setState({
    //   name:'react'
    // })
    this.forceUpdate()
  }
  render(){
    console.log('render')
    return <div>{this.props.group + this.state.name}<button onClick={this.update}>update</button></div>
  }

  componentWillMount() {
    console.log('componentWillMount')
    this.state.name = 'hello'  //可以对state进行修改
  }

  componentDidMount() {
    console.log('componentDidMount')
    const dom = ReactDOM.findDOMNode(this);
    console.log(dom)
    dom.style.backgroundColor = 'yellow'
    let isYellow = false
    this.state.timer = setInterval(function () {
      if (isYellow){
        dom.style.backgroundColor = 'red'
        isYellow = false;
      } else{
        dom.style.backgroundColor = 'yellow'
        isYellow = true
      }
    },1000)
  }

  componentWillUpdate(nextProps,nextState){
    console.log('componentWillUpdate')
  }
  componentDidUpdate(oldProps,oldState) {
    console.log('componentDidUpdate')
  }

  shouldComponentUpdate(nextProps,nextState) { //forceUpdate 可以绕过此判断
    console.log('shouldComponentUpdate')
    return true
  }
  componentWillReceiveProps(nextProps) { //更新阶段对state进行更改
    console.log('componentWillReceiveProps')
  }

  componentWillUnMount() {
    console.log('componentWillUnMount')
    clearInterval(this.state.timer)
  }
}

Item.defaultProps = {
  group:123
}

function render(bool){
  ReactDOM.render(
    <div>
      <Item/>
      {bool ? <Item/> :''}
    </div>,
    document.getElementById('test')
  )
}


// class List extends React.Component{
//   render(){
//     return <div>
//       <Item/>
//     </div>
//   }
// }
render(true)

document.getElementById('clear').onclick = function () {
  render()
};
