// pages/guide/guide.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    statusBarHeight: app.globalData.statusBarHeight,
    rubbish_guide: {
      "reason": "success",
      "result": [
        {
          "id": "1",
          "name": "可回收垃圾",
          "color": "#00BFFF",
          "image": "/imgs/pic/khslj.png",
          "explain": "废纸张、废塑料、废玻璃制品、废金属、废织物等适宜回收、可循环利用的生活废弃物",
          "require": "轻投轻放；清洁干燥，避免污染；废纸尽量平整；立体包装物请清空内容物，清洁后压扁投放；有尖锐边角的，应包裹后投放",
          "common": "报纸、纸箱、书本、纸袋、塑料瓶、玩具、油桶、乳液罐、食品保鲜盒、衣架、酒瓶、玻璃杯、易拉罐、锅、螺丝刀、皮鞋、衣物、包、毛绒玩具、电路板、砧板、插座"
        },
        {
          "id": "2",
          "name": "有害垃圾",
          "color": "#FF6A6A",
          "image": "/imgs/pic/yhlj.png",
          "explain": "对人体健康或自然环境造成直接或潜在的危害废弃物。",
          "require": "充电电池、纽扣电池、蓄电池投放时应注意轻放；油漆桶、杀虫剂如有残留请密闭后投放；荧光灯、节能灯易破损连带包装或包裹后投放；废药品及其包装一并投放",
          "common": "电池类、荧光灯管类、过期药物、药品包装、过期指甲油、指甲水、染发剂壳、废油漆桶、水银体温计\/血压计、消毒剂、老鼠药、杀虫喷雾、X光片、相片底片"
        },
        {
          "id": "3",
          "name": "厨余垃圾",
          "color": "#4EEE94",
          "image": "/imgs/pic/cylj.png",
          "explain": "部分地区又称”湿垃圾”，日常生活垃圾产生的容易腐烂的生物质废物。",
          "require": "餐厨垃圾应沥干水分后再投放，有包装物的应取出后分类投放；大块骨头和椰子壳，榴莲壳等不易生化降解，作为干垃圾进行投放；纯液体（如牛奶等），可直接倒入下水口",
          "common": "剩饭剩菜、面包、鸡肉、干果仁、蔬菜、花卉、蛋糕饼干、动物内脏、苹果核、鸡蛋及蛋壳、大米及豆类、中药药渣、宠物饲料"
        },
        {
          "id": "4",
          "name": "其他垃圾",
          "color": "#f8fa29",
          "image": "/imgs/pic/qtlj.png",
          "explain": "部分地区又称”干垃圾”，除有害垃圾、可回收物、厨余垃圾以外的生活废弃物。",
          "require": "尽量沥干水分；难以辨别的生活垃圾应投入其他垃圾容器内",
          "common": "餐巾纸、纸巾、纸尿裤、烟蒂、陶瓷花盆、胶带、橡皮泥、创可贴、笔、灰土、眼镜、头发、内衣裤、防碎气泡膜、旧毛巾、污损纸张、塑料袋"
        }
      ],
      "error_code": 0
    },
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