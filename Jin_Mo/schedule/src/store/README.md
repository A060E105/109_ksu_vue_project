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

#### currentMonth
> 當前月份

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

#### restDays
> 休假日

#### offDays
> 例假日

#### currentClassID
> 當前選擇的班別ID

#### workday_pre_off
> 當前月份員工預排休假日


## mutations

### public

#### `initCurrentDate()`
> ### `說明:`
> 初始化當前日期、當前月份與當天日期，預設為當天日期

#### `initilization(data)`
> ### `說明:`
> 初始化state中的員工列表、預設班別、休假日與例假日，並將資料轉換為較容易使用的格式
> ### `參數:`
> #### `data`
> 員工列表的API取得的資料

#### `setCurrentDate(currentDate)`
> ### `說明:`
> 設定當前日期與當前月份
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
> 設定當前日期的班別資訊，若傳入的資料為`undefined`則將資料射為空物件，並將修改旗標設定為false
> ### `參數:`
> #### `dayInfo`
> 傳入當日資訊，type is object

#### `setDayInfo_add(payload)`
> ### `說明:`
> 設定當前日期的班別資訊，新增員工至指定的班別，並將修改的旗標設為true
> ### `參數:`
> #### `payload`
> type is object，`classID`為指定的班別ID，`e_id`為員工ID

#### `setDayInfo_remove(payload)`
> ### `說明:`
> 設定當前日期的班別資訊，刪除指定班別中的員工，並將修改的旗標設為true
> ### `參數:`
> #### `payload`
> type is object，`classID`為指定的班別ID，`e_id`為員工ID

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

#### `setWorkDayPreOff(pre_off)`
> ### `說明:`
> 設定當前月份員工預排休假日
> ### `參數:`
> ### `pre_off`
> 從伺服器取得的當前月份員工預排休假日

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
> type is object，裡面有`employeeData`員工列表，`classData`預設班別，`offDays`例假日，`restDays`休假日

#### `formatObjectKeyBits(data)`
> ### `description:`
> 將數字的key值，格式化為兩個位數，小於10的則在前面補0
> ### `parameters:`
> #### `data`
> 傳入key值為數字的物件

#### `formatDataKeys(data, key)`
> ### `description:`
> 將物件中的資料設為物件的key值
> ### `parameters:`
> #### `data`
> 傳入要設定的物件，type is object
> #### `key`
> 指定物件中要使用那個資料為新的key值，type is string

#### `getDateStr(date)`
> ### `descirption:`
> 返回當天的日期，格式為 YYYY-MM-DD
> ### `parameters:`
> #### `date`
> 傳入當天的日期
> ### `return:`
> type is string，日期格式為"YYYY-MM-DD"

#### `splitDate(date)`
> ### `descirption:`
> 將日期"YYYY-MM-DD"，拆分為，年、月、日
> ### `parameters:`
> #### `date`
> type is string，格式為"YYYY-MM-DD"
> ### `return:`
> type is object，回傳的物件包含`year`年、`month`月、`day`日

## actions

#### `getAllInfo()`
> ### `descirption:`
> using API.getEmployees()，將結果傳入mutations中的`initilization`方法，並呼叫mutations中的`initCurrentDate`方法，初始化當前時間與當前月份，透過當前時間抓取當天的班別資訊與當前月份員工預排休假日

## getters

#### `getCurrentDate()`
> ### `descirption:`
> 取得當前日期
> ### `return:`
> type is string

#### `getEmployeeInfo()`
> ### `descirption:`
> 取得當前員工資訊
> ### `return:`
> type is object

#### `getDefaultClass()`
> ### `descirption:`
> 取得預設班別
> ### `return:`
> type is object

#### `getHoliday()`
> ### `descirption:`
> 取得國定假日
> ### `return:`
> type is object

#### `getToday()`
> ### `descirption:`
> 取得當天日期
> ### `return:`
> type is string

#### `getEmployee()`
> ### `descirption:`
> 取得當前選擇的員工編號
> ### `return:`
> type is string or number

#### `getEmployeesList()`
> ### `descirption:`
> 取得所有員工資料
> ### `return:`
> type is object

#### `getDayInfo()`
> ### `descirption:`
> 取得當日資料
> ### `return:`
> type is object

#### `getCurrentMonth()`
> ### `descirption:`
> 取得當前月份
> ### `return:`
> type is string or number

#### `getRestDays()(month)`
> ### `descirption:`
> 取得月份的休假日，回傳一個函式，並透過回傳的函式來取得資料
> ### `parameters:`
> #### `month`
> 要查詢的月份
> ### `return:`
> type is function

#### `getOffDays()(month)`
> ### `descirption:`
> 取得月份的例假日，回傳一個函式，並透過回傳的函式來取得資料
> ### `parameters:`
> #### `month`
> 要查詢的月份
> ### `return:`
> type is function

#### `getDayWorkFlag()(e_id)`
> ### `descirption:`
> 查詢員工在當前日期有沒有上班
> ### `parameters:`
> #### `e_id`
> 要查詢的員工ID
> ### `return:`
> true or false

#### `getEmpClassName()(e_id)`
> ### `descirption:`
> 取得員工所在的班別簡稱
> ### `parameters:`
> #### `e_id`
> 要查詢的員工ID
> ### `return:`
> 班別簡稱

#### `getEmpWorkClassID()(e_id)`
> ### `descirption:`
> 取得員工所在的班別ID
> ### `parameters:`
> #### `e_id`
> 要查詢的員工ID
> ### `return:`
> 班別ID

#### `getCurrentClassID()`
> ### `descirption:`
> 取得當前班別ID
> ### `return:`
> type is string or number

#### `get_isPreOff()(e_id)`
> ### `descirption:`
> 查詢員工在當前日期是否有預排休假
> ### `parameters:`
> #### `e_id`
> 要查詢的員工ID
> ### `return:`
> true or false
