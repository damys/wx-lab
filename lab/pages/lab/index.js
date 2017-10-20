var test = require('test');

Page({
  onLoad(){

    // 模块引入测试
    test.sayHello('jack');
    test.sayGoodby('jack');
  }
})