
Page({
    data: {
       "contents":[
            {"name":"不限","condition":""},
        ],
        "carTypes":[
            {"name":"不限","condition":""},
            {"name":"轿车","condition":""},
            {"name":"跑车","condition":""},
        ],
        "brands":[
            {"name":"不限","condition":""},
            {"name":"奥迪","condition":""},
            {"name":"马自达","condition":""},
        ],
        "output":[
            {"name":"不限","condition":""},
            {"name":"国一","condition":""},
            {"name":"国二","condition":""},
        ],
        "price":[
            {"name":"不限","condition":""},
            {"name":"3万以下","condition":""},
            {"name":"3-5万","condition":""},
        ],
        "years":[
            {"name":"不限","condition":""},
            {"name":"1年内","condition":""},
            {"name":"1-3年","condition":""},
        ],
        "distance":[
            {"name":"不限","condition":""},
            {"name":"1万公里以内","condition":""},
            {"name":"3万公里以内","condition":""},
        ],
        "color":[
            {"name":"不限","condition":""},
            {"name":"红色","condition":""},
            {"name":"黑色","condition":""},
        ],
        "gearbox":[
            {"name":"不限","condition":""},
            {"name":"手动","condition":""},
            {"name":"自动","condition":""},
        ]
    },
    toCondition(data:any){
        // console.log("content name:",data.currentTarget.dataset.name)
        wx.navigateBack({
            success:()=>{
                const eventChannel = this.getOpenerEventChannel()
                eventChannel.emit('acceptDataFromOpenedPage', {data: data.currentTarget.dataset.name});
            }
        })
    },
    onLoad: function(option:any){
        console.log("query=:",option.query)
        const eventChannel = this.getOpenerEventChannel()
        // eventChannel.emit('acceptDataFromOpenedPage', {data: 'test'});
        // eventChannel.emit('someEvent', {data: 'test'});
        // 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
        var that = this
        eventChannel.on('acceptDataFromOpenerPage', function(data) {
            var da = [
                {"name":"不限","condition":""},
            ]
            switch(data.data){
                case 1:
                    da = that.data.carTypes
                    break;
                case 2:
                    da = that.data.brands
                    break;
                case 3:
                    da = that.data.output
                    break;
                case 4:
                    da = that.data.price
                    break;
                case 5:
                    da = that.data.years
                    break;
                case 6:
                    da = that.data.distance
                    break;
                case 7:
                    da = that.data.color
                    break;
                case 8:
                    da = that.data.gearbox
                    break;
                default:
                    console.log("no this condition")
            }
            that.setData({
                contents:da
            })
            console.log("get condition data:",data)
        })
      }
  });