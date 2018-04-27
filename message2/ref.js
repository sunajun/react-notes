const eventbus = new eventemitter.EventEmitter()

class Comp extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      colors:['yellow','red'],
      colorIndex:0
    }
    this.changeColor = this.changeColor.bind(this)
  }
  render(){
    return <div style={{backgroundColor:this.state.colors[this.state.colorIndex]}}>
      <p>{this.props.name}</p>
      <button onClick={this.changeColor}>click me</button>
    </div>
  }

  componentWillMount() {
    this.state.color = this.props.color
    eventbus.on('changeColor', (id, color) => {
      if (this.props.id !== id && this.state.colors[this.state.colorIndex] === color) {

      }
    })
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.color !== nextProps.color) {
      this.state.color = nextProps.color
    }
  }

  changeColor(){
    this.setState({
      colorIndex:this.state.colorIndex ? 0: 1
    })
    eventbus.emit('changeColor',this.props.id,this.props.c)
  }

}

Comp.defaultProps ={
  colors:['yellow','red'],
  colorIndex:0
}

ReactDOM.render(<div>
  <Comp id='one'/>
  <Comp id='two'/>
</div>,document.getElementById('test'))
