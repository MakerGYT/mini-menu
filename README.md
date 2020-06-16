# mini-menu

> 小程序底部弹出式导航菜单

[在开发者工具中预览效果](https://developers.weixin.qq.com/s/gCEq06mR7nia)=>代码片段ID:`gCEq06mR7nia`

## 样例
![screenshot](https://cdn.nlark.com/yuque/0/2020/gif/284449/1592180000986-7285c383-dafa-4aa7-ad01-80e407c37f31.gif)

## 安装使用
### 1. 获取组件
```sh
git clone https://github.com/MakerGYT/mini-menu.git
```
将项目中/components/navs-bong文件夹拷贝到组件路径下

### 2. 引入组件
在使用该组件的页面对应json文件中添加：
```json
{
  "usingComponents": {
    "menu":"/components/navs-bong/navs-bong" 
  }
}
```

### 3. 使用组件
参考[/pages](https://github.com/makergyt/mini-menu/tree/master/pages/index)
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
    ...
  }
}) 
```

### colorUI
结合[操作条cu-bar](https://github.com/weilanwl/ColorUI/tree/master/demo/pages/component/bar)使用
```html
<!-- index.wxml -->
<menu navs="{{navs}}" />
<view class="cu-bar foot tabbar bg-white">
  <view class="action text-green">
    <view class="cuIcon-homefill"></view> 首页
  </view>
  <view class="action text-gray">
    <view class="cuIcon-similar"></view> 分类
  </view>
  <view class="action text-gray add-action">
    <!-- 此处删去原有button-->
    发布
  </view>
  <view class="action text-gray">
    <view class="cuIcon-cart">
      <view class="cu-tag badge">99</view>
    </view>
    购物车
  </view>
  <view class="action text-gray">
    <view class="cuIcon-my">
      <view class="cu-tag badge"></view>
    </view>
    我的
  </view>
</view>
```

```css
/* app.wxss */
@import "colorui/main.css";
@import "colorui/icon.css";
page {
	--add-action:#39b54a; /*定义颜色*/
}
```
![colorUI预览](https://imgkr.cn-bj.ufileos.com/467557c4-a24c-4e16-a6a7-1d5492d8c72f.gif)

## 属性列表
| 属性 |类型| 默认值|必填|说明|
| -- | --|--|--|--|
| navs | Array | [] | 是 |导航菜单列表 {name,icon,url}|

## ToDo
- [ ] 待修复:展开边界有像素点不顺畅

## License
[MIT](https://github.com/MakerGYT/mini-menu/blob/master/LICENSE) © MakerGYT