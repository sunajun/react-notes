class Item extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      value:this.props.value
    }
  }

  
  render(){
    return <div>
      <input value={this.state.value} onChange={this.changeValue}/><button>save</button>
    </div>
  }

  componentWillMount() {
    
  }

  componentDidMount() {
    const dom = ReactDOM.findDOMNode(this);
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

  componentWillReceiveProps(nextProps) { //更新阶段对state进行更改
    this.state.value = nextProps.value;
  }

  shouldComponentUpdate(nextProps,nextState) { //forceUpdate 可以绕过此判断

    return true
  }

  componentWillUpdate(nextProps,nextState){
    //update database
  }
  componentDidUpdate(oldProps,oldState) {
    let dom = ReactDOM.findDOMNode(this);
    let oldStyle = dom.style.border;
    dom.style.border = '1px solid red';
    setTimeout(function () {
      dom.style.border = oldStyle;
    },2000)
  }


  
  componentWillUnMount() {
    console.log('componentWillUnMount')
    clearInterval(this.state.timer)
  }
}

Item.defaultProps = {
  value:'no value'
}


ReactDOM.render(
  <div>
    <Item/>
  </div>,
  document.getElementById('test')
)

