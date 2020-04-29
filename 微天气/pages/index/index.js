var util= require('../../utils/util.js')

Page({

  data: {
    weather:{},
    forecast:[
      {
        data:'18日星期五',
        type:'阴',
        high:'高温 16',
        low:'低温 8',
        fengli:'微风级',
        fengxiang:'南风'
      }, {
        data: '18日星期五',
        type: '阴',
        high: '高温 16',
        low: '低温 8',
        fengli: '微风级',
        fengxiang: '南风'
      }, {
        data: '18日星期五',
        type: '阴',
        high: '高温 16',
        low: '低温 8',
        fengli: '微风级',
        fengxiang: '南风'
      }, {
        data: '18日星期五',
        type: '阴',
        high: '高温 16',
        low: '低温 8',
        fengli: '微风级',
        fengxiang: '南风'
      }, {
        data: '18日星期五',
        type: '阴',
        high: '高温 16',
        low: '低温 8',
        fengli: '微风级',
        fengxiang: '南风'
      }
    ],
    today:'2016-11-18',
    city:'北京',
    inputCity:'',
  },

  onLoad:function(options){
    this.setData({
      today:util.formatTime(new Data()).split(' ')[0]
    });
    var self=this;
    wx.getLocation({
      type: 'wgs84',
     // altitude: true,
      success: function(res) {
        wx.request({
          url: 'http://api.map.baidu.com/geocoder/v2/'+'?ak=ASAT5N3tnHIa4APW0SNPeXN5&location='+res.latitude+','+res.longitude+'&output=json&pois=0',
          data:{},
          header:{
            'Content-Type':'application/json'
          },
          
          /*fail:function(){
            "desc": "invilad-citykey",
            "status": 1002
          },*/

          success:function(res){
            var city=res.data.result.addressComponent.city.replace('市','');
            self.searchWeather(city);
          }
          
        })
      }
    })
  },

  searchWeather:function(cityName){
  var self=this;
  wx:request({
    url:'http://wthrcdn.etouch.cn/weather_mini?city='+cityName,
    data:{},
    header:{
      'Content_Type':'application/json'
    },
    success:function(res){
      if(res.data.status == 1002)
      {
        wx:wx.showModal({
          title: '提示',
          content: '输入的城市名称有误，请重新输入',
          showCancel: false,
          success: function(res) {
            self.setData({inputCity:''});
          },
        })
      }else{
        var weather = res.data.data;

        for(var i=0;i<weather.forecast.length;i++)
        {
          var d = weather.forecast[i].data;
          weather.forecast[i].data= ' '+d.replace('星期',' 星期');
        }
        self.setData({
          city:cityName,
          weather:weather,
          inputCity:''
        })
      }
    }
  })

}
inputing:function(e){
  this.setData({inputCity:e.detail.value});
},
bindSearch:function(){
  this.searchWeather(this.data,inputCity);
}


})

