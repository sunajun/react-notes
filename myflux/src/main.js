const List = require('./List')
const ReactDOM = require('react-dom')
const React = require('react')
const Dispatcher = require('./Dispatcher')

//中间件
// Dispatcher.use(function log(action,next) {
//   setTimeout(function () {
//     console.log('log-----',action.actionType)
//     next()
//   },2000)
// }).use(function unkown(action,next) {
//   setTimeout(function () {
//     console.log('unkown-----',action.actionType)
//     next()
//   },2000)
// })
ReactDOM.render(<List/>,document.body)