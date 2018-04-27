const EventEmitter = require('events').EventEmitter;
const Dispatcher = require('./Dispatcher')

class Store extends EventEmitter{
  constructor(dispatcher){
    super()
    this._list = []
    Dispatcher.register(action => {
      switch (action.actionType){
        case 'add':
          this._add(action.name)
          break;
        case 'getAll':
          this._list = action.list;
          this.emit("change",this.list)
          break;
      }
    })
  }

  get list(){
    return this._list
  }

  //私有方法
  _add(item){
    this._list.push(item)
    this.emit('change',this.list)
  }

  _del(id){

  }
}

module.exports = Store