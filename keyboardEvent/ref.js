
class Comp extends React.Component{

  constructor(props) {
    super(props)
    this.keyup = this.keyup.bind(this)
    this.state = {
      top:0,
      left:0
    }
  }

  keyup(event){
    switch (event.keyCode){
      case 37:
        this.setState({
          left:this.state.left-5
        })
        break;
      case 38:
        this.setState({
          top:this.state.top-5
        })
        break;
      case 39:
        this.setState({
          left:this.state.left+5
        })
        break;
      case 40:
        this.setState({
          top:this.state.top+5
        })
        break;
    }
  }

  render(){
    return <div style={{position:'relative',width:'450px',height:'450px',backgroundColor:'yellow'}} tabIndex={1} ref={dom=>{if(dom)dom.focus()}} onKeyUp={this.keyup}>
      <div style={{top: this.state.top+'px',left:this.state.left+'px',position:'absolute',width:'10px',height:'10px',backgroundColor:'red'}}></div>
    </div>
  }

}

ReactDOM.render(<Comp/>,document.getElementById('test'))