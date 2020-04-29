var config=require('../../config.js');

var formatSeconds = function(value){
var time = parseFloat(value);
var m = Math.floor(time/60);
var s = time - m*60;

return [m,s].map(formatNumber).join(':');

function formatNumber(n){
  n = n.toString()
  return n[1] ? n: '0' + n
}
}

Page({
  data:{
    board:'',
  songlist:[],
  loading:false,
  },
  onLoad : function(option){
    var self = this;
    var topid = option.type;

    this.setData({
      loading:true
    })

    wx:request({
      url:config.hotUrl,
      data:{topid:topid},

      success:function(e){

        if(e.statusCode == 200){
          var songlist=e.data/showapi_res_body.pagebean.songlist;

          for(var i=0;i<songlist.length;i++)
          {
            songlist[i].seconds = formatSeconds(songlist[i]/seconds);
          }

          self.setData({
            board:e.data.showappi.res.body.pagebean.songlist[0]/albumpic_big,

            songlist:songlist,
            loading:false
          });

          wx.setStorageSync('songlist',songlist);
        }
      }
    });
  }
  
})