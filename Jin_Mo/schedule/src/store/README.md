# Vuex store

```
|-- store
    |-- index.js
    |-- rootState.js
    |-- mutations.js
    |-- actions.js
    |-- getters.js
```

## rootState

#### currentDate
> 當前選擇日期

#### currentEmployee
> 當前選擇的員工

#### defaultClass
> 預設的班別

#### employeesList
> 所有員工基本資訊 -> 名稱、編號

#### employeeInfo
> 當前員工資料

#### dayInfo
> 當前選擇日期的資訊

#### holiday
> 國定假日

#### today
> 當天日期，這是為了讓日曆上的當天日期顏色不會被改變



## mutations

### public

#### `initCurrentDate()`
> ### `說明:`
> 初始化當前日期與當天日期，預設為當天日期

#### `initilization(data)`
> ### `說明:`
> 初始化state中的資料，員工列表與預設班別，並將資料轉換為較容易使用的格式
> ### `參數:`
> #### `data`
> 員工列表的API取得的資料

#### `setCurrentDate(currentDate)`
> ### `說明:`
> 設定當前日期
> ### `參數:`
> #### `currentDate`
> 傳入當前日期的字串，格式為"YYYY-MM-DD"

#### `setEmployee(employee)`
> ### `說明:`
> 設定當前員工編號
> ### `參數:`
> #### `employee`
> 傳入員工編號，type is number or object

#### `setDayInfo(dayInfo)`
> ### `說明:`
> 設定當天資訊
> ### `參數:`
> #### `dayInfo`
> 傳入當日資訊，type is object

#### `setEmployeeInfo(employeeInfo)`
> ### `說明:`
> 設定當前員工資訊
> ### `參數:`
> #### `employeeInfo`
> 傳入當前員工的資訊，type is object

#### `setHoliday(data)`
> ### `說明:`
> 設定國定假日，將傳入的資料進行過濾
> ### `參數:`
> #### `data`
> 傳入API取得的國定假日，type is object

### private

#### `filterData(data)`
> ### `descirption:`
> 將例假日過濾掉，並轉換日期格式為"YYYY-MM-DD"
> ### `parameters:`
> #### `data`
> 傳入國定假日API取得的資料，type is object
> ### `return:`
> type is string，日期格式為"YYYY-MM-DD"

#### `formatData(data)`
> ### `descirption:`
> 將資料轉換成較方便使用的格式
> ### `parameters:`
> #### `data`
> 傳入員工列表與預設班別API取得的所有資料，type is object
> ### `return:`
> type is object，裡面有`employeeData`員工列表，`classData`預設班別

#### `formatClassData(data)`
> ### `descirption:`
> 將預設班別資料轉換成以ID為Key值的資料格式
> ### `parameters:`
> #### `data`
> 傳入員工列表與預設班別API取得的`shifts`資料
> ### `return:`
> type is object，預設班別資料

#### `formatEmployeesData(data)`
> ### `descirption:`
> 將員工資料轉換成以員工ID為Key值的資料格式
> ### `parameters:`
> #### `data`
> 傳入員工列表與預設班別API取得的`employees`資料
> ### `return:`
> type is object，員工列表

#### `formatEmployeesOffData(data)`
> ### `descirption:`
> 將員工休假資料轉換成以員工ID為Key的資料格式
> ### `parameters:`
> #### `data`

#### `formatWorkDayData(data)`
> ### `descirption:`
> 將員工工作日期轉換成以ID為Key值的資料格式
> ### `parameters:`
> #### `data`

#### `getDateStr(date)`
> ### `descirption:`
> 返回當天的日期，格式為 YYYY-MM-DD
> ### `parameters:`
> #### `date`
> 傳入當天的日期
> ### `return:`
> type is string，日期格式為"YYYY-MM-DD"


## actions

#### `getAllInfo()`
> ### `descirption:`
> using API.getEmployees()，並將結果傳入mutations中的`initilization`方法

## getters

#### `getCurrentDate()`
> ### `descirption:`
> 取得當前日期

#### `getEmployeeInfo()`
> ### `descirption:`
> 取得當前員工資訊

#### `getDefaultClass()`
> ### `descirption:`
> 取得預設班別

#### `getHoliday()`
> ### `descirption:`
> 取得國定假日

#### `getToday()`
> ### `descirption:`
> 取得當天日期

#### `getEmployee()`
> ### `descirption:`
> 取得當前選擇的員工編號

#### `getEmployeesList()`
> ### `descirption:`
> 取得所有員工資料

#### `getDayInfo()`
> ### `descirption:`
> 取得當日資料
