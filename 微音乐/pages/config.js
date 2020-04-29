(
  function (module){
    var exports= module.export={};

    var appid = 63622;
    var secret ="c25161ff5bd84d53b20bf3b72509914c";
    var param="?showapi_appid="+appid+"&showapi_sign="+ secret;
    var hotUrl ="http://route.showapi.com/213-4"+param;
    var searchByNameUrl ="http://route.showapi.com/213-1"+param;
    var searchByIdUrl ="http://route.showapi.com/213-2"+param;

    module.exports ={
      config:{
      hotUrl:hotUrl,
      searchByNameUrl: searchByNameUrl,
      searchByIdUrl: searchByIdUrl
      }
    };
  })(module);