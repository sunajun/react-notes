// ReactDOM.render(
// <div>
// <button className="btn btn-default">Add</button>
//   <ul className = "list-group">
//   <li className = "list-group-item"> Crasjustoodio
//   <a className = "right glyphicon glyphicon-remove-sign" href = "#"></a>
//   <a className="right glyphicon glyphicon-edit" href="#"></a>
//   </li>
//   <li className="list-group-item">
//   <input className="item-edit"/>
//   <a href="#" className="glyphicon glyphicon-ok-sign"></a>
//   <a className="glyphicon glyphicon-remove-sign" href="#"></a>
//   </li>
//   </ul>
//   </div>
//   ,
//   document.getElementById('example')
// )

//Item
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

//ItemEditor
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

//List
class List extends React.Component{

  constructor(props){
    super(props);
    this.state = {list: new Map(),editList:new Map(),key:0};
    this.add = this.add.bind(this)
    this.removeItem = this.removeItem.bind(this)
    this.removeItemEditor = this.removeItemEditor.bind(this)
    this.save=this.save.bind(this)
    this.edit = this.edit.bind(this)
  }

  render(){
    const listDOM = [];
    const editListDOM = [];
    for(let [key,value] of this.state.list){
      listDOM.push(<Item onEdit={this.edit} onRemove={this.removeItem} id={key} value={value} key={key}/>)
    }
    for(let [key,value] of this.state.editList){
      editListDOM.push(<ItemEditor onSave={this.save} onRemove={this.removeItemEditor} id={key} value={value} key={key}/>)
    }
    return <div>
      <button className="btn btn-default" onClick={this.add}>Add</button>
      <ul className = "list-group">
        {listDOM}
        {editListDOM}
      </ul>
    </div>
  }

  add(){
    const key = ++this.state.key;
    this.state.editList.set(key)
    this.forceUpdate();
  }

  edit(id,value){
    console.log('编辑')
    this.state.list.delete(id);
    this.state.editList.set(id,value);
    this.forceUpdate();
  }

  save(id,value){
    console.log('保存')
    this.state.editList.delete(id);
    this.state.list.set(id,value);
    this.forceUpdate();
  }

  removeItem(id){
    list:this.state.list.delete(id)
    this.forceUpdate();
  }

  removeItemEditor(id){
    // console.log('删除')
    this.state.editList.delete(id)
    this.forceUpdate();
  }
};

ReactDOM.render(<List/>,document.getElementById('example'))