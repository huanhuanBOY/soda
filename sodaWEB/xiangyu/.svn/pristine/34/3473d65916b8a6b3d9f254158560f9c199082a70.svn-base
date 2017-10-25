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


// oneRequest.setResolve(true);

// oneRequest.singleRequest(get_next_page,[n++,"b","c"]);

















// (function($){
// 　//el操纵对象，option属性值
// 　 $.love = function(el,option){
// 　　　　var lo = $(el);
// 　　　　var lo.vars =  $.extend({},$.love.default ,option); //合并成新对象，则是新的属性列表
// 　　　　//定义其他属性
// 　　　　　　......
// 　　　　　　var method = {};
// 　　　　//私有方法,私有方法之间可互相调用
// 　　　　method={
// 　　　　　　functionA: function() {...},
// 　　　　　　functionB: function() {...},
// 　　　　　　functionC: function() {...},
// 　　　　　　...
// 　　　　}
// 　　　　//公有方法（特权方法），供类外调用
// 　　　　this.publicFunction = function(a,b,c){
// 　　　　　　....
// 　　　　　　/*调用私有函数*/
// 　　　　　　method.functionA();
// 　　　　　　...
// 　　　　}
// 　　　　...
// 　}
// 　//可设置默认属性
// 　$.love.default = {
// 　　option1:...,
// 　　option2:...,
// 　　....
// 　　}
// })(jQuery);
//  /*类外调用*/
// 　　var a = new $.love("#id",{title:"name",age:12,...});
// 　　a.publicFunction(a,b,c);
//
// /*相对高级点*/
// (function($){
// 　//el操纵对象，option属性值
// 　 $.love = function(el,option){
// 　　　　var lo = $(el);
// 　　　　var lo.vars =  $.extend({},$.love.default ,option); //合并成新对象，则是新的属性列表
// 　　　　//定义其他属性
// 　　　　　　......
// 　　　　　　var method = {};
// 　　　　$.data(el, "love", lo); //在元素上存放数据，包括lo的所有属性，方法
// 　　　　//私有方法,私有方法之间可互相调用
// 　　　　method={
// 　　　　　　functionA: function() {...},
// 　　　　　　functionB: function() {...},
// 　　　　　　functionC: function() {...},
// 　　　　　　...
// 　　　　}
// 　　　　//公有方法（特权方法），供类外调用
//  　　　　lo.pfunctionA = function(){
// 　　　　　　/*调用私有函数*/
// 　　　　　　method.functionA();
// 　　　　},
// 　　　　 lo.pfunctionB = function(){...},
// 　　　　...
// 　}
// 　//可设置默认属性
// 　$.love.default = {
// 　　option1:...,
// 　　option2:...,
// 　　....
// 　　}
// 　　$.fn.love(option){
// 　　　　var $this = $(this);
// 　　　　if( $this.data('love')===undefined){
// 　　　　　new $.love(this,option);
// 　　　　}else{
// 　　　　　 var love = $this.data('love'); //直接使用类中的函数等
// 　　　　　 love.pfunctionA();
// 　　　　}
// 　　}
// })(jQuery);
// $ ==> "$ "就是 jQuery 对象的引用，等于"jQuery "
// (function(){}) ==>模仿块级作用域
// $.xxx ==>针对 jQuery 对象添加方法（我的理解）
// $.fn.xxx ==》针对元素添加方法（我的理解）
