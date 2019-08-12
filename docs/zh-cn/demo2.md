# 按通道按月各天人流情况
## 简要描述：
- 用户注册接口
## 请求URL：
- `http://xx.com/api/passengerFlow/getMonthPassengerFlow`
## 请求方式：
- POST
## 参数：

参数名 |	必选  |	类型  |	说明 |
-------| -----:  | :----:  | :----:  |
passagewayId |	是 |	string |	通道id|
key	| 是 |	string |	校验用户信息是否正确|
startDate |	否 |	string |	开始日期|
endDate |	否	| string |	结束日期|
## 实际格式
```javascript
  {
    "error_code": 0,
    "data": {
      "id": "1",
      "passagewayId": "1",
      "yearAndMonth": "201907",
      "date": "20190729" ,
      "sumPeopleNum":100000,
      "createTime": "2019-07-29 10:14:00",
    }
  }
  ```
## 返回参数说明

参数名 |	类型 |	说明 |
-------| -----:  | :----:  | :----:  |
id |	int |	id|
passagewayId |	int |	通道id|
yearAndMonth |	 String |	年月|
date |	String |	日期|
sumPeopleNum |	int |	总人数|
createTime |	String |	创建时间|
## 备注
- 按通道按月各天人流情况