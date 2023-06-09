
Page({
    data: {
       "conditions":[
           {"id":1,"name":"车型","condition":""},
           {"id":2,"name":"品牌","condition":""},
           {"id":3,"name":"排放","condition":""},
           {"id":4,"name":"价格","condition":""},
           {"id":5,"name":"年份","condition":""},
           {"id":6,"name":"里程","condition":""},
           {"id":7,"name":"颜色","condition":""},
           {"id":8,"name":"变速箱","condition":""}
        ]
    },
  
    toContent(data:any) {
        console.log("data:",data)
        wx.navigateTo({
            url:"./content/content",
            events: {
                // 为指定事件添加一个监听器，获取被打开页面传送到当前页面数据
                acceptDataFromOpenedPage: function(data:any) {
                    console.log("get content data:",data)
                },
                someEvent: function(data:any) {
                }
            },
            success: function(res) {
                if (data.currentTarget.dataset && data.currentTarget.dataset.id){
                    // 通过eventChannel向被打开页面传送数据
                    res.eventChannel.emit('acceptDataFromOpenerPage', { data: data.currentTarget.dataset.id })
                }
                // res.eventChannel.emit('acceptDataFromOpenerPage', { data: 'test' })
            }
        })
    },
    toIndex(){
        wx.navigateBack({
        })
    }
  });