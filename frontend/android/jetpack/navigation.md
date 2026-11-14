# Jetpack Navigation

## 什么是Navigation，有哪些优点，怎么用？

Navigation 是 Jetpack 的官方路由组件，统一管理页面跳转、返回栈，把页面之间的跳转关系写到一张导航图里，不用自己手动写 Intent、FragmentTransaction、管理回退栈

### 支持Activoty、fragment、Dialog三种组件的路由行为

以前：

- Fragment：手动 `replace`、`addToBackStack`，代码散落在各处
- Activity：`startActivity(intent)`
- Dialog：自己 `show()`，路由很难统一管理

Navigation：**都可以在导航图里声明成 destination（目的地），统一用 `navController.navigate()` 跳转，统一管理返回栈**。

- Fragment：最常用，放在 NavHost 容器里切换
- Activity：可以作为导航节点，自动 startActivity
- Dialog：`dialog` 类型目标，navigate 的时候弹出 Dialog，返回自动关闭，自动进返回栈

> 
> 好处：整个 APP 的路由规则在一张图里看得见，不用到处找跳转代码。

### 支持DeepLink深度链接、端外唤醒能力

eepLink = 用一个 URI 链接直接打开 APP 里**指定页面**，而不是只能打开首页。
例子：`myapp://detail?id=100`

- 浏览器、别的 APP、推送点击这个链接 → 直接跳转到详情页
- 可以配置参数，自动传给目标页面，和普通导航参数打通
- 也支持 HTTP 网页链接（App Links）

### ViewModel支持，将viewmodel的生命周期限定为导航图，方便目标页面之间共享数据

点：**`navGraphViewModels()`**Android De...

- 普通 `viewModels()`：生命周期绑定单个 Fragment，页面销毁 ViewModel 就清
- `activityViewModels()`：绑定整个 Activity，只要 Activity 不杀就一直存在，容易残留脏数据
- ✅ **导航图作用域 ViewModel**：ViewModel 的生命周期 = 这个导航图还在返回栈里。

> 
> 典型场景：结账流程（订单确认→填地址→支付），这 3 个 Fragment 放在同一个嵌套导航图。
> 三个页面共用一份订单 ViewModel；**当你退出整个结账流程、导航图弹出回退栈时，ViewModel 自动销毁**，不会残留到下一次下单。

一句话：**局部流程共享数据，流程结束自动释放，比 Activity 范围更安全**。

### Safe Args目标之间传递数据提供类型安全的Gradle插件

生 Bundle 传参的痛点：

```
// 字符串key，容易手敲错；类型写错运行时才崩
bundle.putLong("id", 100)
val id = bundle.getString("id") // 写反了，编译不报，线上崩溃
```

Safe Args 是 Gradle 插件：

1. 在 navGraph 里给目标页面声明参数（名字、类型、是否可选）
2. **编译期自动生成 Directions、Args 类**
3. 跳转时调用生成方法，参数是强类型；接收页面直接拿属性

```
// 跳转
findNavController().navigate(HomeFragmentDirections.actionToDetail(itemId = 100L))
// 接收
val args: DetailFragmentArgs by navArgs()
val id = args.itemId
```

- 类型不对、少传必填参数 → **编译报错，不是线上崩溃**
- 没有魔法字符串 key，杜绝 key 拼写错误

> 
> 这就是所谓**类型安全**

### Navigation 整体优点

1. **统一路由**：Fragment / Activity / Dialog 一套 API 跳转，返回栈自动管理，popUpTo、singleTop 都支持
2. **可视化导航图**：Android Studio 导航编辑器，可视化看到页面流向，方便维护、新人看懂
3. **自动返回栈、返回逻辑**：不用自己写 back 拦截、Fragment 回退
4. **DeepLink 原生支持**：推送、外部唤醒统一走导航，参数自动解析
5. **多种 ViewModel 作用域**：单页面 / 导航图流程 / Activity 三级作用域，灵活共享数据
6. **SafeArgs 类型安全传参**，减少 Bundle 传参的线上 BUG
7. 和 Jetpack 生态适配：Lifecycle、ViewModel、SavedStateHandle

### 补充一个坑点

navGraph scope ViewModel 依赖：**这个嵌套导航图作为一个节点存在返回栈里**；如果里面所有页面都 pop 出去了，这个 graph 会出栈，ViewModel 立刻清空。适合一次性流程（下单、表单），不适合全局数据。

## Navigations APIs

## Deeplink 深度链接

## Navigation有哪些缺点？