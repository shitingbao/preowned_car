
Page({
    data: {
       "contents":[
           {"name":"aa","condition":""},
           {"name":"bb","condition":""},
           {"name":"cc","condition":""},
           {"name":"dd","condition":""},
           {"name":"ee","condition":""},
           {"name":"ff","condition":""},
           {"name":"gg","condition":""},
           {"name":"hh","condition":""}
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
        eventChannel.on('acceptDataFromOpenerPage', function(data) {
          console.log("get condition data:",data)
        })
      }
  });