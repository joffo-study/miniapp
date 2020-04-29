Page({

  data: {
    backg:[
      '/../../images/1.png',
      '/../../images/2.jpg',
      '/../../images/3.jpg'
    ],
    indicatorD:true,
    vertical:false,
    autoplay:false,
    interval:3000,
    duration:1200
  },
  changeDot:function(e){
    this.setData({
      indicatorD:!this.data.indicatorD
    })
  },

  changeVer: function(e) {
    this.setData({
      vertical: !this.data.vertical
    })
  },

  changeAuto: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },

  changeinter:function(e) {
    this.setaData({
      interval: e.detail.value
    })
  },
  changeduration: function (e) {
    this.setaData({
      duration: e.detail.value
    })
  },

})