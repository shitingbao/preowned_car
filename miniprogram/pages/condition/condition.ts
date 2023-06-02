
Page({
    data: {
       "conditions":[
           {"name":"车型","condition":""},
           {"name":"品牌","condition":""},
           {"name":"排放","condition":""},
           {"name":"价格","condition":""},
           {"name":"年份","condition":""},
           {"name":"里程","condition":""},
           {"name":"颜色","condition":""},
           {"name":"变速箱","condition":""}
        ]
    },
  
    onChange() {
      
    },
    toIndex(){
        wx.navigateBack({
        })
    }
  });