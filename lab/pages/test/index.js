// pages/logs/index.js


Page({

  /**
   * 页面的初始数据
   */
  data: {
    page:'log/index.html',
    message:{id:5},
    list:[{name:'jack'},{name:'rose'},{name:'tom'}],
    array:[1,2,3,4],
    view:'log',

    staffA: { firstName: 'A', lastName: 'aaa' },
    staffB: { firstName: 'B', lastName: 'bbb' },
    staffC: { firstName: 'C', lastName: 'ccc' },

    flag:false,
    x:1,
    y:2,

    foo: 'my-foo',
    bar: 'my-bar'
  },

  /**
   * 点击
  */
  clickme:function(event){
    console.log('clickme..........')
    

    // 不能同步页面内容
    // this.data.page='clickme.html'
    // console.log(this.data.page)

    // 这样可以同步，修改数据
    this.setData({
      page: this.data.page + '?id=10'
    })

    // console.log(getCurrentPages())
    
    console.log(event)
  },


  /**
   * 生命周期函数--监听页面加载
   * 一个页面只会调用一次，可以在 onLoad 中获取打开当前页面所调用的 query 参数
   */
  onLoad: function (options) {
    console.log('-1-onload--')
    // setData 函数用于将数据从逻辑层发送到视图层，同时改变对应的 this.data 的值
    // 单次设置的数据不能超过1024kB
    this.setData({
      // page:'test/test.html',
      //message:{id:6}
    })
    // console.log(this.data)

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   * 一个页面只会调用一次，代表页面已经准备妥当，可以和视图层进行交互。
   * 对界面的设置如wx.setNavigationBarTitle请在onReady之后设置
   */
  onReady: function () {
    console.log('-3-onReady--')
  },

  /**
   * 生命周期函数--监听页面显示
   * 每次打开页面都会调用一次。
   */
  onShow: function () {
    console.log('-2-onShow--')
  },

  /**
   * 生命周期函数--监听页面隐藏
   * 当navigateTo或底部tab切换时调用
   */
  onHide: function () {
    console.log('--onHide--')
  },

  /**
   * 生命周期函数--监听页面卸载
   * 当redirectTo或navigateBack的时候调用。
   */
  onUnload: function () {
    console.log('--onUnload--')
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   * 需要在config的window选项中开启enablePullDownRefresh
   * 当处理完数据刷新后，wx.stopPullDownRefresh可以停止当前页面的下拉刷新。
   */
  onPullDownRefresh: function () {
    console.log('--onPullDownRefresh--')
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('--onReachBottom--')
  },

  /**
   * 用户点击右上角分享
   * 此事件需要 return 一个 Object，用于自定义转发内容
   */
  onShareAppMessage: function () {
    return {
      title: '自定义转发标题--test',
      path: '/page/user?id=123'
    }
    console.log('--onShareAppMessage--')
  }
})