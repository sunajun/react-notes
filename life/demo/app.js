const database = {

  add(article){
    list.push(article);
    return list.length - 1
  },
  del(index){
    list[index] = null
  },
  update(index,newArticle){
    list.splice(index,1,newArticle);
  },
  get list(){
    return list;
  },
};
class Item extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      value:this.props.value,
      history:[],
      currentHistory:''
    }
    this.update = this.update.bind(this)
    this.changeValue = this.changeValue.bind(this)
    this.prev = this.prev.bind(this)
    this.next = this.next.bind(this)
    this.save = this.save.bind(this)
  }
  
  render(){
    return <div>
      <div><button onClick={this.prev}>pre</button><p>{this.state.currentHistory}</p><button onClick={this.next}>next</button></div>
      <input value={this.state.value} onChange={this.changeValue}/><button onClick={this.save}>save</button>
    </div>
  }
  changeValue(event){
    this.setState({
      value:event.target.value
    })
  }

  prev(){
    const history = this.state.history
  }

  next(){

  }

  save(){

    const currentHistory = this.state.value
    const history = this.state.history
    history.push(value)
    this.setState({
      currentHistory,
      history
    })
  }

  update(){

    this.forceUpdate()
  }

  componentWillMount() {
    this.state.dbkey = database.add({value:this.state.value})
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
    this.state.value = nextProps.value
  }

  shouldComponentUpdate(nextProps,nextState) { //forceUpdate 可以绕过此判断

    return true
  }

  componentWillUpdate(nextProps,nextState){
    //update database
    let dbkey = this.state.dbkey
    database.update(dbkey,{value:this.state.value})
  }
  componentDidUpdate(oldProps,oldState) {
    let dom = ReactDOM.findDOMNode(this);
    let oldStyle = dom.style.border;
    dom.style.border = '2px solid red';
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

ReactDOM.render(<div>
  <Item/>
</div>,document.getElementById('test'))
