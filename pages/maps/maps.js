// pages/maps/maps.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    statusBarHeight: app.globalData.statusBarHeight,
    Height: 0,
    scale: 16,
    latitude: "",
    longitude: "",

    markers: [{
        id: 1,
        latitude: 31.84811666204875,
        longitude: 117.25719569395714,
        title: "分类垃圾桶",
        iconPath: '/imgs/maps/location_blue.png',
        callout: {
          content: " 分类垃圾桶\n 开放时间：全天\n 安徽大学龙河校区\n 北门保安室旁",
          fontSize: 14,
          bgColor: "#FFF",
          borderWidth: 1,
          borderColor: "#CCC",
          padding: 4,
          display: "BYCLICK",
          textAlign: "left"
        }

      }, {
        id: 2,
        latitude: 31.843947670389046,
        longitude: 117.25444297502725,
        title: "分类垃圾桶",
        iconPath: '/imgs/maps/location_blue.png',
        callout: {
          content: " 分类垃圾桶\n 开放时间：全天\n 安徽大学龙河校区主教楼\n 北边门外自行车棚",
          fontSize: 14,
          bgColor: "#FFF",
          borderWidth: 1,
          borderColor: "#CCC",
          padding: 4,
          display: "BYCLICK",
          textAlign: "left"
        },
        },{
        id: 3,
        latitude: 31.84749265201312,
        longitude: 117.2558869989215,
        title: "分类垃圾桶",
        iconPath: '/imgs/maps/location_blue.png',
        callout: {
          content: " 分类垃圾桶\n 开放时间：全天\n 安徽大学三食堂后\n 停车场处",
          fontSize: 14,
          bgColor: "#FFF",
          borderWidth: 1,
          borderColor: "#CCC",
          padding: 4,
          display: "BYCLICK",
          textAlign: "left"
        }
      }, {
        id: 4,
        latitude: 31.847789720849192,
        longitude: 117.25712588923534,
        title: "旧衣物回收点",
        iconPath: '/imgs/maps/location_green.png',
        callout: {
          content: " 分类垃圾桶\n 开放时间：全天\n 安徽大学家属宿舍158栋旁",
          fontSize: 14,
          bgColor: "#FFF",
          borderWidth: 1,
          borderColor: "#CCC",
          padding: 4,
          display: "BYCLICK",
          textAlign: "left"
        }
      }, {
        id: 5,
        latitude: 31.848142894930707,
        longitude: 117.25704141100023,
        title: "旧衣物回收点",
        iconPath: '/imgs/maps/location_green.png',
        callout: {
          content: " 分类垃圾桶\n 开放时间：全天\n 安徽大学家属宿舍与北门附近",
          fontSize: 14,
          bgColor: "#FFF",
          borderWidth: 1,
          borderColor: "#CCC",
          padding: 4,
          display: "BYCLICK",
          textAlign: "left"
        }
      }, {
        id: 6,
        latitude: 31.84282363397401,
        longitude: 117.25243045787587,
        title: "分类垃圾桶",
        iconPath: '/imgs/maps/location_blue.png',
        callout: {
          content: " 分类垃圾桶\n 开放时间：全天\n 安徽大学学生宿舍300栋\n 旁边路口",
          fontSize: 14,
          bgColor: "#FFF",
          borderWidth: 1,
          borderColor: "#CCC",
          padding: 4,
          display: "BYCLICK",
          textAlign: "left"
        }
      },

    ],



    controls: [{
        id: 1,
        iconPath: '/imgs/maps/reduce.png',
        position: {
          left: 360,
          top: 20,
          width: 40,
          height: 40
        },
        clickable: true
      },
      {
        id: 2,
        iconPath: '/imgs/maps/plus.png',
        position: {
          left: 300,
          top: 20,
          width: 40,
          height: 40
        },
        clickable: true
      },
      {
        id: 3,
        iconPath: '/imgs/maps/findlocation.png',
        position: {
          left: 20,
          top: 400,
          width: 40,
          height: 40
        },
        clickable: true
      }
    ],
    circles: []

  },

  onLoad: function() {
    var _this = this;
    var that = this;

    wx.getSystemInfo({
      success: function(res) {
        console.log(res)
        //设置map高度，根据当前设备宽高满屏显示
        _this.setData({
          view: {
            screenHeight: res.screenHeight,
            Height: res.windowHeight,
            windowWidth: res.windowWidth,
          }
        })

        console.log(that.data.view.Height);
        console.log(that.data.view.windowWidth);
        //var query = wx.createSelectorQuery();

        //var query = wx.createSelectorQuery();
        //query.select('#bottom-layout').boundingClientRect()
        //query.exec(function (res) {
        // console.log("res");
        //console.log(res)
        //bottomHeight = res[0].height;
        //  that.setMapHeight();
        // })
      }
    })

    wx.getLocation({
      type: 'gcj02', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
      success: function(res) {
        console.log(res.latitude);
        console.log(res.longitude);
        var latitude = res.latitude
        var longitude = res.longitude
        _this.setData({
          latitude: latitude,
          longitude: longitude,


          circles: [{
            latitude: res.latitude,
            longitude: res.longitude,
            color: '#7cb5ecDD',
            fillColor: '#7cb5ec88',
            radius: 400,
            strokeWidth: 1
          }]

        })

      }

    })

    var statusBarHeight = that.data.statusBarHeight;
    var windowWidth = that.data.view.windowWidth;
    var windowHeight = that.data.view.Height;
    console.log("设置控件")
    var controls = that.data.controls;
    console.log(controls)

    //设置控件的位置
    controls[0].position.left = windowWidth - 60;
    controls[1].position.left = windowWidth - 120;
    controls[2].position.top = windowHeight - 140;
    
    that.setData({
      controls: controls,
    })
    console.log(controls)


  },

  setMapHeight: function(params) {
    var that = this;
    that.setData({
      mapHeight: (windowHeight - bottomHeight) + 'px'
    })
    var controlsWidth = 40;
    var controlsHeight = 48;
    var bottomHeight = 50;
    var windowWidth = that.data.windowWidth;
    var windowHeight = that.data.Height;

    //设置中间部分指针
    /*
    that.setData({
      controls: [{
        id: 1,
        iconPath: '/imgs/maps/my.png',
        position: {
          left: (windowWidth - controlsWidth) / 2,
          top: (windowHeight - bottomHeight) / 2 - controlsHeight * 3 / 4,
          width: controlsWidth,
          height: controlsHeight
        },
        clickable: true
      }]
    })
    */
  },

  //regionchange(e) {
  //  console.log("regiοnchange===" + e.type)
  //},

  moveTolocation: function() {
    //mapId 就是你在 map 标签中定义的 id
    var mapCtx = wx.createMapContext("mymap");
    mapCtx.moveToLocation();

  },

  regionchange: function(res) {
    var that = this;
    // 改变中心点位置  
    if (res.type == "end") {
      that.getCenterLocation();
    }
  },

  /**
   * 得到中心点坐标
   */
  getCenterLocation: function() {
    var that = this;
    //mapId 就是你在 map 标签中定义的 id
    var mapCtx = wx.createMapContext("mymap");
    mapCtx.getCenterLocation({
      success: function(res) {
        console.log('getCenterLocation----------------------->');
        console.log(res);
        that.updateCenterLocation(res.latitude, res.longitude);
        that.regeocodingAddress();
        that.queryMarkerInfo();
      }
    })
  },


  //点击merkers
  markertap(e) {
    console.log(e.markerId)
  },

  //点击控件按钮动态请求数据
  controltap(e) {
    var that = this;
    
    if (e.controlId === 1) {
      console.log("scale===" + this.data.scale)
      // if (this.data.scale === 13) {
      if (3<that.data.scale<20){
        that.setData({
          scale: --this.data.scale
        })
      }
      
      // }
    } else if (e.controlId === 2){
      console.log("scale===" + this.data.scale)
      if (3 < that.data.scale < 20) {
        that.setData({
          scale: ++this.data.scale
        })
      }
      
      
    } else if (e.controlId === 3) {
      that.setData({
        scale: 16
      })
      var mapCtx = wx.createMapContext("mymap");
      mapCtx.moveToLocation();
    }
  },

  /**
   * 逆地址解析
   */
  regeocodingAddress: function() {
    var that = this;
    //不在发布页面，不进行逆地址解析，节省调用次数，腾讯未申请额度前一天只有10000次
    if (!that.data.showConfirm) {
      return;
    }
    //通过经纬度解析地址
    qqmapsdk.reverseGeocoder({
      location: {
        latitude: that.data.centerLatitude,
        longitude: that.data.centerLongitude
      },
      success: function(res) {
        console.log(res);
        that.setData({
          centerAddressBean: res.result,
          selectAddress: res.result.formatted_addresses.recommend,
          currentProvince: res.result.address_component.province,
          currentCity: res.result.address_component.city,
          currentDistrict: res.result.address_component.district,
        })
      },
      fail: function(res) {
        console.log(res);
      }
    });
  },

  /**
   * 查询 marker 信息
   */
  queryMarkerInfo: function() {
    var that = this;
    console.log('查询当前坐标 marker 点信息')
    //调用请求 marker 点的接口就好了
  },

  updateCenterLocation: function(latitude, longitude) {
    var that = this;
    that.setData({
      centerLatitude: latitude,
      centerLongitude: longitude
    })
  },

  onReady: function(e) {
    this.mapCtx = wx.createMapContext('mymap')
  },


})