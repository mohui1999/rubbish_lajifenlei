// pages/search/search.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    statusBarHeight: app.globalData.statusBarHeight,
    resultShow: false
  },

  onInput: function (event) {
    var that = this;
    var text = event.detail.value;
    if (typeof (text) == "undefined" || text.length == 0) {
      this.setData({
        resultShow: false,
      })
    }
    this.setData({
      searchValue: text,
      resultShow: true,
    });
  },

  toResult: function(){
    var searchValue = this.data.searchValue;
    var resultShow = this.data.resultShow;
    console.log(searchValue);
    if (resultShow == true){
      wx.navigateTo({
        //实现跳转的函数，url附带跳转时传送的数据
        url: '../search_detail/search_detail?text=' + searchValue,
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