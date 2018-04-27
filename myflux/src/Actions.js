const Dispatcher = require('./Dispatcher')
const WebAPI = require('./WebAPI')
class Actions {
  constructor(){
  }
  add(name){
    // WebAPI.add(function(success){
    //   var action;
    //  if(success){
    //     action = {
    //      actionType:'add',
    //      name:name
    //    }
    //  }else {
    //     action = {
    //      actionType:'addError',
    //      name:name
    //    }
    //  }
    // })
    var action = {
      actionType:'add',
      name:name
    }
    Dispatcher.dispacth(action)
  }

  getAll(){

    //server
    WebAPI.getAll(function (data) {
      var action = {
        actionType:"getAll",
        list:data
      }
      Dispatcher.dispacth(action)
    })
  }

}

module.exports = Actions