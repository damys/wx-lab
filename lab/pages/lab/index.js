var test = require('test');

Page({
  onLoad(){

    // 模块引入测试
    test.sayHello('jack');
    test.sayGoodby('jack');
  },

  handleTap1: function (event) { console.log('handleTap1') },
  handleTap2: function (event) { console.log('handleTap2') },
  handleTap3: function (event) { console.log('handleTap3') },

})