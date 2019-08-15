// pages/search_detail/search_detail.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    statusBarHeight: app.globalData.statusBarHeight,
    searchResult: [],

    class_list: ["可回收垃圾", "有害垃圾", "厨余垃圾", "其他垃圾"],
    color: ["#00BFFF", "#FF6A6A", "#4EEE94","#f8fa29"]
  },

  back: function(){
    wx.navigateBack();
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var searchValue = options.text;
    this.setData({
      searchValue: searchValue,
    })
    this.loadSearch();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  loadSearch: function(e){
    var that = this;
    var text = that.data.searchValue;
    wx.request({
      //调用接口获得当前信件详细内容
      url: 'http://api.tianapi.com/txapi/lajifenlei/?key=367f6d1bd8e7cacbb14485af77f1ed6b&word=' + text,
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res);
        that.setData({
          searchResult: res.data,
        })
      }
    })
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