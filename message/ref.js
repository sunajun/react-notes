const eventbus = new eventemitter.EventEmitter()

class Comp extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      list:[]
    }
  }

  componentWillMount() {
    this.props.bus.on('test event',() => {
      console.log('handle is ' + this.props.name)
    })
    this.state.list = this.props.data.map(item =>{return {name:item,actived:false}})
    // console.log(this.state.list)
  }

  callback(item){
    alert(item.name)
  }
  render(){
    let itemList = []
    for (let [index,item] of this.state.list.entries()){
      // console.log(item)
      itemList.push(<Item callback={this.callback.bind(this,item)} actived={item.actived} name={item.name} key={item.name}></Item>)
    }
    return <ul>
      {itemList}
    </ul>
  }

  componentDidMount() {
    setTimeout(()=>{
      this.state.list[1].actived = true;
      this.forceUpdate()
    },3000)
  }

}

class Item extends React.Component{
  constructor(props) {
    super(props)
  }

  render(){
    let style = this.props.actived? {border:'1px solid green'} : {}
    return <li onClick={this.props.callback} style={style}>{this.props.name}</li>
  }

}

const list = ['AAA','BBB','CCC','DDD']
ReactDOM.render(<div>
  <Comp bus={eventbus} name='comp one' data={list}/>
  <Comp bus={eventbus} name='comp two' data={list}/>
</div>,document.getElementById('test'))


setTimeout(function () {
  eventbus.emit('test event')
},5000)