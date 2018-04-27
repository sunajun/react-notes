const storeCallbackList = []
const midllewareList = []

module.exports = {
  use(middleware){
    midllewareList.push(middleware);
    return this
  },

  register(storeCallback){
    storeCallbackList.push(storeCallback)
  },

  dispacth(action) {
    let index = -1
    let that = this

    function next() {
      const middle = midllewareList[++index]
      if (middle) {
        middle(action, next)
      } else {
        that._dispacth(action)
      }
    }
    next()
  },

  _dispacth(action){
    for (let callback of storeCallbackList){
      callback(action)
    }
  }

}