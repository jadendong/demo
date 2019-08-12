# Passage-by-Passage Flow on Monthly Days
## Brief description：
- User Registration Interface
## Request URL：
- `http://xx.com/api/passengerFlow/getMonthPassengerFlow`
## Request mode：
- POST
## Parameter：
Parameter Name  | Mandatory   |  Type  |  Explain  |
-------| -----:  | :----:  | :----:  |
passagewayId |	Y |	string |	Channel ID |
key	| Y |	string |	Verify User Information|
startDate |	N|	string |	Start Time |
endDate |	N	| string |	End Time |
## Actual Format
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
## Return Parameters
Parameter Name  |  Type |  Explain  |
-------| -----:  | :----:  | :----:  |
id |	int |	id|
passagewayId |	int |	Channel ID|
yearAndMonth |	 String |	DATE |
date |	String |	Time|
sumPeopleNum |	int |	Total people number|
createTime |	String |	Creation time |
## Remarks
- Passage-by-Passage Flow on Monthly Days