
class Form extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      inputValue:'hello',
      inputValue2:'',
      checkboxValue:false,
      radioValue:false,
      selectValue:'A'
    }
    this.changeHandle = this.changeHandle.bind(this)
    this.changeHandle2 = this.changeHandle2.bind(this)
    this.changeCheckboxHandle = this.changeCheckboxHandle.bind(this)
    this.changeRadioHandle = this.changeRadioHandle.bind(this)
    this.selectHandle = this.selectHandle.bind(this)
  }
  changeHandle(event){
    this.setState({
      inputValue:event.target.value
    })
  }

  changeHandle2(event){
    this.setState({
      inputValue2:event.target.value
    })
  }

  changeCheckboxHandle(event){
    this.setState({
      checkboxValue:!this.state.checkboxValue
    })
  }

  changeRadioHandle(event){
    this.setState({
      radioValue:!this.state.radioValue
    })
    console.log(this.state.radioValue)
  }
  selectHandle(event){
    this.setState({
      selectValue:event.target.value
    })
  }
  render(){
    return <form>
      <input type='text' defaultValue='hello world' onChange={this.changeHandle2}/>
      <input type='text' value={this.state.inputValue} onChange={this.changeHandle}/>
      <br/>
      <input type='checkbox' checked={this.state.checkboxValue} onChange={this.changeCheckboxHandle}/>
      <br/>
      <input type='radio' checked={this.state.radioValue} onChange={this.changeRadioHandle}/>
      <br/>
      <select value={this.state.selectValue} onChange={this.selectHandle}>
        <option value='A'>A</option>
        <option value='B'>B</option>
        <option value='C'>C</option>
      </select>
      <br/>
      <select multiple value={['B','C']} onChange={this.selectHandle}>
        <option value='A'>A</option>
        <option value='B'>B</option>
        <option value='C'>C</option>
      </select>
      <br/>
      <textarea></textarea>
    </form>
  }
}

ReactDOM.render(<Form/>,document.getElementById('test'))