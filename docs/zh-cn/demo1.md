#  按通道按天各时间人流情况

## 简要描述：
- 提供按通道按天各时间人流情况
## 请求URL：
- `http://xx.com/api/passengerFlow/getDayPassengerFlow`
## 请求方式：
- POST
## 参数
参数名  | 必选   |  类型 |  说明  |
-------| -----:  | :----:  | :----:  |
rq  | 	是   |   	string    |  	日期     |
passagewayId |  是   |   	string   |  通道id    |
key        |    是    |  	string  |  校验用户信息是否正确    |
## 实际格式
```javascript
  {
    "error_code": 0,
    "data": [
    {
     "photoId":123456,
     "passagewayId":123456,
     "peopleNum":100,
     "rq":20190725
     "photoId":"photoId",
     "time":"2019-07-24 15:48:00",
     "photoAddress":"C:/photo",
     },{
     "photoId":123456,
     "passagewayId":123456,
     "peopleNum":100,
     "rq":20190725
     "photoId":"photoId",
     "time":"2019-07-24 15:48:00",
     "photoAddress":"C:/photo",
     }
    ]
  }
```
## 返回参数说明
参数名  |  类型 |  说明  |
-------| :----:  | :----:  |
photoId  | int    |  	图片识别id     |
peopleNum |  int   |  人数    |
passagewayId |    string  |  通道id    |
rq |    string  |  日期    |
time |    string  |  	时间    |
photoAddress |    string  |  	图片访问路径    |
## 备注
- 返回某天的人流数据
