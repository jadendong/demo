#  按通道请求的实时人流情况

## 简要描述：

- 提供按通道请求的实时人流情况

## 请求URL：

- `http://xx.com/api/passengerFlow/realPassengerFlow`

## 请求方式：

- POST

## 参数：

参数名 |   必选  |   类型  |   说明 |
-------| -----:  | :----:  | :----:  |
passagewayId |  是 | string |    对应通道 |
key | 是 |   string |    校验用户信息是否正确|

## 实际格式

```javascript

 {
 "error_code": 0,
 "data": {
 "photoId":123456,
 "passagewayId":123456,
 "peopleNum":100,
 "rq":20190725
 "photoId":"photoId",
 "time":"2019-07-24 15:48:00",
 "photoAddress":"C:/photo",
 }
 }
```

## 返回参数说明

参数名 |   类型 |    说明 |
-------| -----:  | :----:  | :----:  |
  photoId |    	int   |	图片识别id|
  peopleNum   |	int   |	人数    |
  passagewayId|	String|	通道id  |
  rq      |    	String|	日期    |
  time   |     	String|	时间    |
  photoAddress|	String|	图片访问路径|

##  备注

- 返回最新的客流信息
