# mini-menu

> 小程序底部弹出式导航菜单

[在开发者工具中预览效果](https://developers.weixin.qq.com/s/gCEq06mR7nia)=>代码片段ID:`gCEq06mR7nia`

## 安装使用
### 1. 获取组件
#### git
可能不稳定，但包含最新功能更新
```sh
git clone https://github.com/MakerGYT/mini-menu.git
```
将项目中components/menu文件夹拷贝到组件路径下

### 2. 引入组件
在使用该组件的页面对应json文件中添加：
```json
{
  "usingComponents": {
    "menu":"/components/menu/menu" 
  }
}
```

### 3. 使用组件
参考[/pages](https://github.com/makergyt/mini-menu/tree/master/demo/index/index)
```html
<!-- index.wxml -->
<menu navs="{{navs}}" />
```
```js
Page({
  data:{
		navs: [{
			name: '动态',
			src: 'https://cdn.nlark.com/yuque/0/2019/png/280373/1568102197856-assets/web-upload/0a3840c5-1699-4507-b1d8-dfbbe0683fd0.png',
			url: '../pages/other'
		},
  }
}) 
```
## 属性列表
| 属性 |类型| 默认值|必填|说明|
| -- | --|--|--|--|
| navs | Array | [] | 是 |导航菜单列表 {name,icon,url}|

## License
[MIT](https://github.com/MakerGYT/mini-menu/blob/master/LICENSE) © MakerGYT