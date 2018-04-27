const React= require('react')
class Item extends React.Component{
  constructor(props){
    super(props);
    this.edit = this.edit.bind(this);
    this.remove = this.remove.bind(this);
  }

  edit(){
    this.props.onEdit(this.props.id,this.props.value);
  }

  remove(){
    this.props.onRemove(this.props.id)
  }

  render(){
    return <li className = "list-group-item"> {this.props.value}
      <a className = "right glyphicon glyphicon-remove-sign" href = "#" onClick={this.remove}></a>
      <a className="right glyphicon glyphicon-edit" href="#" onClick={this.edit}></a>
    </li>
  }
};

module.exports = Item