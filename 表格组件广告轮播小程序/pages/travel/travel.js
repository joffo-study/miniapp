Page({

  data: {
    regions:[
      {name:'CH',value:'中国',checked:'true'},
      { name: 'US', value: '美国'},
      { name: 'BR', value: '巴西' },
      { name: 'EN', value: '美国' },
      { name: 'TA', value: '法国' },
    ],
    data:'2016-01-01',
    time:'08:00'
    
  },
  formsubmit:function(e){
    console.log('提交表单');
    console.log(e.detail.value)
  },
  formreset:function(){
    console.log('form发生了reset事件')
  },

  binddata:function(e){
    console.log('日期发生了改变')
    console.log(e.detail.value)
    
  },
  bindtime:function(e){
    console.log(e.detail.value)
    this.setData({
      time:e.detail.value
    })
  }

})