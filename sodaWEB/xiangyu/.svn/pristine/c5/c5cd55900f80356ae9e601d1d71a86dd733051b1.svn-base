var single = function(){
    this.paramList = [];
    this.callfun = true;
    this.id = 0;
    this.number = 1;
}
single.prototype.singleRequest = function(callback){
  this.paramList.push({"Funcname": callback.name});
  if(this.callfun){
      callback(this.number++);
      this.callfun = false;
  }
}
single.prototype.setResolve = function(res){
  if(res === false){
    this.callfun = false;
  }else {
    this.callfun = true;
  }
}
var oneRequest = new single();
