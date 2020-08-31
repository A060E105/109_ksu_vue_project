# API description


## public methods

### `getEmployees()`
> ### `description:`
> 取得所有員工列表與預設班別

### `getEmpInfo(date, e_id)`
> ### `description:`
> 取得當前員工資訊
> ### `parameter:`
> #### `date`
> 傳入當前日期，格式為`YYYY-MM-DD`，type is string
> #### `e_id`
> 傳入當前員工ID，type is number or string

### `getDayInfo(date)`
> ### `description:`
> 取得當日資訊
> ### `parameter:`
> #### `date`
> 傳入當前日期，格式為`YYYY-MM-DD`，type is string

### `getMonthInfo()`
> ### `description:`
> 取得當月資訊

### `getHoliday()`
> ### `description:`
> 取得國定假期

### `setDayInfo(date, dayInfo)`
> ### `description:`
> 設定當前日期的資訊，將資訊上傳至伺服器
> ### `parameter:`
> #### `date`
> 要設定的當前日期，格式為`YYYY-MM-DD`，type is string
> #### `dayInfo`
> 傳入要設定的當前日期的班別資訊


## private methods

### `replaceData(date)`
> ### `description:`
> 刪除字串的雙引號，讓格式符合JSON物件

### `getDateValue(date)`
> ### `description:`
> 拆解日期字串
> ### `return:`
> `year`、`month` and `day`，type is object
