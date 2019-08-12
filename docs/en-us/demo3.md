#  real-time traffic on channel request
## Brief description：

- Provide real-time traffic on channel request

## Request URL：

- `http://xx.com/api/passengerFlow/realPassengerFlow`

## Request mode：

- POST

## Parameter：

Parameter Name  | Mandatory   |  Type  |  Explain  |
-------| -----:  | :----:  | :----:  |
passagewayId |  是 | string |    Corresponding channel|
key | 是 |   string |    Verify User Information|

## Actual Format

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

## Return Parameters

Parameter Name  |  Type |  Explain  |
-------| :----:  | :----:  |
  photoId     |	int   |	Picture recognition ID |
  peopleNum   |	int   |	People Number   |
  passagewayId|	String|	Channel ID  |
  rq          |	String|	Date    |
  time        |	String|	Time    |
  photoAddress|	String|	Picture access path  |

##  Remarks

- Return the latest passenger flow information
