const LinkedStateMixin = React.addons.LinkedStateMixin
const Comp = React.createClass({

  mixins:[LinkedStateMixin],
  getInitialState(){
    return {
      name:'',
      name2:''
    }
  },
  render(){
    var myLink = {
      value:this.state.name2,
      requestChange:(newValue) => {
        this.setState({
          name2:newValue
        })
      }
    }
    return <div>
      {this.state.name}
      <input type='text' valueLink={this.linkState('name')}/>
      {this.state.name2}
      <input type='text' valueLink={myLink}/>
    </div>
  }
})

ReactDOM.render(<Comp/>,document.getElementById('test'))