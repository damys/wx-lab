// pages/form/index.js

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)

    if (e.detail.value.name.length == 0 && e.detail.value.telephone.length == 0) {

      wx.showToast({

        title: '手机号码或密码不得为空!',

        icon: 'loading',

        duration: 1500

      })
    } else {

      wx.request({
        url: 'http://post.aihuagrp.com/email', //仅为示例，并非真实的接口地址
        data: e.detail.value,
        header: {
          'content-type': 'application/json'
        },
        success: function (res) {
          console.log('success: ' + res.data)
        },
        fail: function (res) {
          console.log('fail: ' + res.data)
        }
      })
    }


  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})