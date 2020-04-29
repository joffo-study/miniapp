var saveExprs = function(expr){
  var exprs = wx.getStorageSync('exprs')||[]
  exprs.unshift(expr);
  wx.setStorageSync('exprs', exprs)
}


Page({
  data: {
    result: "0",
    id1: "history",
    id2: "clear",
    id3: "back",
    id4: "div",
    id5: "num_7",
    id6: "num_8",
    id7: "num_9",
    id8: "mul",
    id9: "num_4",
    id10: "num_5",
    id11: "num_6",
    id12: "sub",
    id13: "num_1",
    id14: "num_2",
    id15: "num_3",
    id16: "add",
    id17: "negative",
    id18: "num_0",
    id19: "dot",
    id20: "equ",
    record:false,
    expr:""

  },

clickButton:function(e){
  var data = this.data.result;    //获取上一次结果

  var tmp = this.data.temp;       //取上一次临时结果
  var lastoper1 = this.data.lastoper;    //上一次运算符
  var noNumFlag = this.data.flag;     //上一次非数字按钮

  var expr1 = this.data.expr;

  if(e.target.id>='num_0' && e.target.id<='num_9'){
    data += e.target.id.split("_")[1];      //正常情况，串接输入的值
    if(this.data.result == '0' || noNumFlag){    //原值为0或  上一次非数字
      data=e.target.id.split("_")[1];          //用输入值代替
    }
    noNumFlag = false;
  }else{          //不是数字按钮
    noNumFlag = true;        
    console.log(e.target.id);   //在控制台输出按钮id
    if (e.target.id == "dot") {     //小数点
      if (data.toString().indexOf(".")== -1) 
      {    //上一次输入没有小数点
        data += ".";                  
      }  
    } else if (e.target.id == "history") {
      wx.navigateTo({
        url:'../history/history'
      })
    }else if (e.target.id == "clear") {      //清除按钮

    expr1 = expr1.substr(0,exor1.length-1) + "=" + temp;
    //if(this.data.record){
      //wx.setStorageSync("expr", expr1)  
    //}
    saveExprs(expr1);
    expr1="";

      data = 0;
      tmp = 0;
      lastoper1 = "+";
    } else if (e.target.id == "negative") {      //取负
      data = -1 * data;
    } else if (e.target.id == "back") {          //回退一个字符
      if (data.toString().length>1) {
        data = data.substr(0, data.toString().length -1);   //超过一个字符
      } else {
        data = 0;      //否则，置0
      }
    } else if (e.target.id == "div") {

      expr1 += data.toString() + "/";

      data = calculate(tmp, lastoper1, data);
      tmp = data;
      lastoper1 = "/";
    } else if (e.target.id == "mul") {

      expr1 += data.toString() + "*";

      data = calculate(tmp, lastoper1, data);
      tmp = data;
      lastoper1 = "*";
    } else if (e.target.id == "add") {

      expr1 += data.toString() + "+";

      data = calculate(tmp, lastoper1, data);
      tmp = data;
      lastoper1 = "+";
    } else if (e.target.id == "sub") {

      expr1 += data.toString() + "-";

      data = calculate(tmp, lastoper1, data);
      tmp = data;
      lastoper1 = "-";
    } else if (e.target.id == "equ") {

      expr1 += data.toString();

      data = calculate(tmp, lastoper1, data);

      expr1 += "=" + data;
     // if(this.data.record){
     //   wx.setStorageSync("expr", expr1);
      //}
      saveExprs(expr1);
      expr1="";


      tmp = 0;
      lastoper1 = "+ ";
    }
  }

  this.setData({        //更新结果值
    result: data,
    lastoper: lastoper1,
    temp: tmp,
    flag: noNumFlag,
    expr:expr1
  });
 },

RecordHistory:function(e){
  console.log(e);
  this.setData({
    record:e.detail.value
  })
}
})



var calculate = function (data1, oper, data2) {
  var data;
  data1 = parseFloat(data1);
  data2 = parseFloat(data2);
  switch (oper) {
    case "+":
      data = data1 + data2;
      break;
    case "-":
      data = data1 - data2;
      break;
    case "*":
      data = data1 * data2;
      break;
    case "/":
      if (data2 !== 0) {
        data = data1 / data2;
      } else {
        data = 0;
      }
      break;
  }
  return data;
}
