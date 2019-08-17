// pages/search/search.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    statusBarHeight: app.globalData.statusBarHeight,
    resultShow: false,
    colorindex: 0,
    hotindex: 0,
    hot: [
      ["纸巾", "垃圾袋", "瓜子", "方便面"],
      ["苹果", "包装纸", "小龙虾", "电池"],
      ["橡皮泥", "猫砂", "西瓜", "卫生纸"],
      ["猫冻干", "灰土", "铅笔", "男朋友"],
      ["香水瓶", "木头", "花盆", "玫瑰花"],
      ["电灯泡", "充电宝", "碎碗", "骨头"],
      ["八宝粥", "果酱", "报纸", "暖宝宝"],
    ],
    colorArrays: [
      ["#EEDC82", "#EA6D56", "#F2946B", "#D7DAB7"],
      ["#D0E6A5", "#FFDD94", "#FA897B", "#CCABD8"],
      ["#8ac58b", "#7ca271", "#abcb88", "#9daf85"],
      ["#f2adc2", "#f39ab0", "#f7b1cd", "#f0c3e0"],
      ["#C8E2EF", "#FEC97C", "#F6D985", "#F9E2B3"],
      ["#8EC7CD", "#66CDAA", "#20B2AA", "#72ADAD"],
    ],
  },

  onInput: function(event) {
    var that = this;
    var text = event.detail.value;
    if (typeof(text) == "undefined" || text.length == 0) {
      this.setData({
        resultShow: false,
      })
    }
    this.setData({
      searchValue: text,
      resultShow: true,
    });
  },

  toResult: function() {
    var searchValue = this.data.searchValue;
    var resultShow = this.data.resultShow;
    console.log(searchValue);
    if (resultShow == true) {
      wx.navigateTo({
        //实现跳转的函数，url附带跳转时传送的数据
        url: '../search_detail/search_detail?text=' + searchValue,
      })
    }
  },

  towordReault:function(e){
    console.log(e.currentTarget.dataset.word);
    var searchValue = e.currentTarget.dataset.word;
    wx.navigateTo({
      //实现跳转的函数，url附带跳转时传送的数据
      url: '../search_detail/search_detail?text=' + searchValue,
    })
  },

  toRefresh:function(){
    var that = this;
    var color = (that.data.colorindex + 1)%6;
    var word = (that.data.hotindex + 1)%7;
    that.setData({
      colorindex: color,
      hotindex: word,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})