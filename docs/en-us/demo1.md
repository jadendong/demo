#  Flow by channel at different times of the day
## Brief description：
- roviding the flow of people by channel at different times of the day
## Request URL：
- `http://xx.com/api/passengerFlow/getDayPassengerFlow`
## Request mode：
- POST
## Parameter:
Parameter Name  | Mandatory   |  Type  |  Explain  |
-------| -----:  | :----:  | :----:  |
rq  | 	Y   |   	string    |  	Date     |
passagewayId |  Y   |   	string   |  Channel ID    |
key        |    Y    |  	string  |  Verify User Information    |
## Actual Format
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
## Return Parameters
Parameter Name  |  Type |  Explain  |
-------| :----:  | :----:  |
photoId  | int    |  	Picture Recognition ID    |
peopleNum |  int   |  People Number    |
passagewayId |    string  |  Channel ID   |
rq |    string  |  Date    |
time |    string  |  	Time    |
photoAddress |    string  |  	Picture access path    |
## Remarks
- Return the flow data for a certain day
