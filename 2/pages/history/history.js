Page({
  data: {
    //expr:"历史记录"
    exprs:[]
  },
onLoad:function(options){
this.setData({
  //expr:wx.getStorageSync("expr")
  exprs: wx.getStorageSync("exprs")||[]
})
}
  
})