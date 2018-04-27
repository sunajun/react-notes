const React= require('react')
const Item=require('./Item')
const ItemEditor = require('./ItemEditor')
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

module.exports = List