
Page({
    data: {
       "elementNameList":{
        "A": [
          "奥迪",
          "阿斯顿·马丁"
        ],
        "B": [
          "奔驰","宝马","本田"
        ],
        "C": [
            "长安","长城","成功"
          ],
          "D": [
            "大众","东风","道奇"
          ],
          "E": [
          ],
          "F": [
            "丰田","福特","法拉利"
          ],
          "G": [
            "GMC","国金","高合"
          ],
        "H": [
          "哈弗",
          "海马"
        ],
        "I": [],
        "J": ["吉利","江铃","金杯"],
        "K": ["凯迪拉克","铠马"],
        "L": [
          "雷克萨斯"
        ],
        "M": [
            "马自达","名爵"
        ],
        "N": [
            "纳智捷","哪吒"
        ],
        "O": [
            "讴歌","欧宝"
        ],
        "P": [
            "帕加尼","朋克"
        ],
        "Q": [
            "启腾","起亚"
        ],
        "R": [
            "荣威","瑞奇"
        ],
        "S": [
            "斯科达","双龙"
        ],
        "T": [
            "特斯拉","坦克"
        ],
        "U": [
        ],
        "V": [
        ],
        "W": [
            "沃尔沃","五菱"
        ],
        "X": [
            "现代","雪铁龙"
        ],
        "Y": [
            "一汽","野马"
        ],
        "Z": [
          "中华","众泰"
        ]
      }
    },
  
    onChange() {
      
    },
    changeElement(element:any){
        console.log("your elementval:",element.currentTarget.dataset.elementname)
        wx.navigateBack({
            
        })
    },
  });