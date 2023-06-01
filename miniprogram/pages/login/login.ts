import { setNodeName } from "XrFrame/kanata/lib/index"

Page(
    {
        data: {
            showTopTips: false,
            date: "2016-09-01",
            isAgree: false,
            username:"",
            password:"",
            sms:""
        },

        submitForm() {
        },
        sendSms(){
            console.log("send sms",this.data.username,this.data.password,this.data.sms, ":")
        },
        bingToIndex(){
            wx.navigateTo(
               { url:"../index/index"},
            )
        }
    }
)