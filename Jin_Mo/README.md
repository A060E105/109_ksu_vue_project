# Vue.js

```vue
new Vue({
	el,				// 要綁定的 DOM element
	data,			// 綁定的資料
	props,			// 可用來接收父元件資料的屬性
	template,		// 要解析的樣板，可以是 #id, HTML 或某個 DOM element 實體
	computed,		// 定義資料的 getter 與 setter ，即需要計算後才能使用的屬性
	components,		// 定義子元件，可用 ES6 簡寫法，例如 { MyHeader }
	methods,		// 定義可以在元件或樣板內使用的方法
	propaData,		// 存放預設的 propss 內容，方便測試用
	replace			// 要不要用 template 取代 el 指向的 DOM Element ，預設為 true
})
```
