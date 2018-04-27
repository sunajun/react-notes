module.exports ={
  getAll(callback){
    setTimeout(function () {
      callback(["aaa","bbb","ccc"]);
    },2000)
  }
}