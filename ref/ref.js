
class Comp extends React.Component{
  constructor(props) {
    super(props)
    this.click = this.click.bind(this)
  }

  click(){
    this.refs.myinput.focus()
  }


  render(){
    return <div>
      <input ref={function (dom) {
        dom.focus()
      }}/>
      <input ref='myinput'/>
      <input ref='myinput2'/>
      <button onClick={this.click}>click me</button>
    </div>
  }

  componentDidMount() {
    this.refs.myinput2.focus()
  }
}

ReactDOM.render(<Comp/>,document.getElementById('test'))