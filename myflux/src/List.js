const React = require('react')
const Store = require('./Store')
const Actions = require('./Actions')
const actions = new Actions()
const store = new Store()

//Top level component ,container and controller-view
class List extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      list:[]
    }
  }

  add(){
    //伪代码'
    //store._add(this.refs.nameInput.value)
    actions.add(this.refs.nameInput.value)
  }
  del(id){
    actions.del(id)
  }

  componentDidMount() {
    store.on('change',(list) => {
      this.setState({
        list:list
      })
    })
    actions.getAll()
  }
  render(){
    return <ul>
      {this.state.list.map(item =>
        <li>{item}</li>
      )}
      <li>
        <input ref="nameInput"/>
        <button onClick={this.add.bind(this)}>add</button>
      </li>
    </ul>
  }
}

module.exports = List