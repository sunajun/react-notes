import React from 'react'
class ItemEditor extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      value:this.props.value
    }
    this.remove = this.remove.bind(this);
    this.save = this.save.bind(this)
    this.changeHandler = this.changeHandler.bind(this)
  }

  remove(){
    this.props.onRemove(this.props.id)
  }

  save(){
    this.props.onSave(this.props.id,this.state.value)
  }

  changeHandler(event){
    // this.state.value = event.target.value;
    // this.forceUpdate();
    //下面的这段代码就是同时执行了上面两段代码
    this.setState({
      value:event.target.value
    })
  }
  render(){
    return <li className="list-group-item">
      <input className="item-edit" value={this.state.value} onChange={this.changeHandler}/>
      <a href="#" className="glyphicon glyphicon-ok-sign" onClick={this.save}></a>
      <a className="glyphicon glyphicon-remove-sign" href="#" onClick={this.remove}></a>
    </li>
  }
};
module.exports = ItemEditor