# 一、Text Api

## 1. 参数速查表

按签名顺序排列，`必填` 列只有 `text` 是 ✔。

| # | 参数 | 类型 | 默认值 | 必填 | 一句话 |
| --- | --- | --- | --- | --- | --- |
| 1 | `text` | `String` | 无 | ✔ | 要显示的文字 |
| 2 | `modifier` | `Modifier` | `Modifier` | — | 布局/绘制/手势修饰链 |
| 3 | `color` | `Color` | `Unspecified` | — | 文字颜色，未设则回退 |
| 4 | `fontSize` | `TextUnit` | `Unspecified` | — | 字号，一般用 `sp` |
| 5 | `fontStyle` | `FontStyle?` | `null` | — | 正常 / 斜体 |
| 6 | `fontWeight` | `FontWeight?` | `null` | — | 字重（粗细） |
| 7 | `fontFamily` | `FontFamily?` | `null` | — | 字体族 |
| 8 | `letterSpacing` | `TextUnit` | `Unspecified` | — | 字间距 |
| 9 | `lineHeight` | `TextUnit` | `Unspecified` | — | 行高 |
| 10 | `textDecoration` | `TextDecoration?` | `null` | — | 下划线 / 删除线 |
| 11 | `textAlign` | `TextAlign?` | `null` | — | 水平对齐 |
| 12 | `overflow` | `TextOverflow` | `Clip` | — | 溢出怎么处理 |
| 13 | `softWrap` | `Boolean` | `true` | — | 是否允许自动换行 |
| 14 | `maxLines` | `Int` | `Int.MAX_VALUE` | — | 最多几行 |
| 15 | `minLines` | `Int` | `1` | — | 最少占几行 |
| 16 | `onTextLayout` | `((TextLayoutResult) -> Unit)?` | `null` | — | 测量完成回调 |
| 17 | `style` | `TextStyle` | `LocalTextStyle.current` | — | 样式基线（继承来源） |

<!--editor-kit-table-meta=%7B%22version%22%3A1%2C%22cells%22%3A%5B%7B%22row%22%3A4%2C%22col%22%3A5%2C%22ops%22%3A%5B%7B%22insert%22%3A%22*%22%2C%22attributes%22%3A%7B%22lmkr%22%3A%221%22%7D%7D%2C%7B%22insert%22%3A%22%E5%AD%97%E5%8F%B7%EF%BC%8C%E4%B8%80%E8%88%AC%E7%94%A8%20%22%7D%2C%7B%22insert%22%3A%22sp%22%2C%22attributes%22%3A%7B%22inlineCode%22%3A%22true%22%7D%7D%2C%7B%22insert%22%3A%22%5Cn%22%7D%5D%7D%5D%7D-->

***

## 2. 参数逐个详解
### 1. `text` — 要显示的文字

```kotlin
text: String,
```

- **类型**：`String`｜**默认值**：无，**全函数唯一必填参数**
- **作用**：唯一决定"显示什么内容"的参数。
- **注意**：类型被固定成 `String`，**不接受 `AnnotatedString`**。所以一段文字里要混排多种样式（半句加粗、半句标红、局部可点击），`Text` 做不到，必须降到 `BasicText` + `buildAnnotatedString`。

```kotlin
Text("你好，Compose")
```

***

### 2. `modifier` — 修饰链

```kotlin
modifier: Modifier = Modifier,
```

- **类型**：`Modifier`｜**默认值**：`Modifier`（空链，无任何修饰）
- **作用**：挂尺寸、内边距、背景、圆角、点击等外部行为。它是 Compose **所有组件**的固定约定：第一个可选参数一定是 `modifier`。
- **注意**：默认值必须是空 `Modifier` 而不是某个具体修饰，否则调用方传入的 `Modifier` 会和组件内部默认值**叠加**，导致"内部自带 padding + 外部再来 padding"的顺序不可控。约定俗成：**组件只接受 modifier，不自己造默认修饰**。

```kotlin
Text(
    "标题",
    modifier = Modifier.padding(16.dp).fillMaxWidth()
)
```

***

### 3. `color` — 文字颜色

```kotlin
color: Color = Color.Unspecified,
```

- **类型**：`Color`（inline value class）｜**默认值**：`Color.Unspecified`
- **作用**：本段文字的最终颜色。
- **可取值**：内置常量 `Color.Red`；十六进制 `Color(0xFF3366FF)`；主题色 `MaterialTheme.colorScheme.onSurface`。
- **注意（最常踩的坑）**：`Color.Unspecified` 表达的是\*\*"调用方没有指定"这个状态\*\*，不是黑色、**也不是透明**。它会往下一级回退：
    1. 显式 `color`
    2. `style.color`
    3. `LocalContentColor.current`

想让文字透明，必须写 `Color.Transparent`；写 `Color.Unspecified` 只会静默回退到默认色。

```kotlin
Text("仅本段标红", color = Color.Red)
Text("隐形占位", color = Color.Transparent)
```

***

### 4. `fontSize` — 字号

```kotlin
fontSize: TextUnit = TextUnit.Unspecified,
```

- **类型**：`TextUnit`（inline value class，打包"数值 + 单位"）｜**默认值**：`TextUnit.Unspecified`
- **作用**：字号大小。
- **可取值**：`16.sp`（推荐）、`14.sp`；**不要用 `em` 就对了**——`em` 是相对单位，会随用户的系统字体缩放设置成倍放大，视觉上失控。
- **注意**：`TextUnit` 本身不带单位语义，必须自己写 `.sp` / `.em`；`Unspecified` 时回退到 `style.fontSize`。

```kotlin
Text("正文", fontSize = 15.sp)
```

***

### 5. `fontStyle` — 正常 / 斜体

```kotlin
fontStyle: FontStyle? = null,
```

- **类型**：`FontStyle?`｜**默认值**：`null`（未设置，走继承）
- **可取值**：`FontStyle.Normal`、`FontStyle.Italic`
- **注意**：中文字体大多没有真正的斜体字重，`Italic` 往往是\*\*几何倾斜（skew）\*\*而非字形变化，英文混排时才明显。需要中文强调优先用 `fontWeight`。

```kotlin
Text("斜体", fontStyle = FontStyle.Italic)
```

***

### 6. `fontWeight` — 字重

```kotlin
fontWeight: FontWeight? = null,
```

- **类型**：`FontWeight?`｜**默认值**：`null`（未设置，走继承）
- **可取值**：`FontWeight.W100` ~ `W900`，常用别名 `Normal(400)`、`Medium(500)`、`Bold(700)`、`Black(900)`
- **注意**：能否真正变粗取决于字体族是否提供对应字重。`FontFamily.Default`（系统字体）通常只有 400/500/700 三档，写 `W300` 会被就近映射；要细体需引入带完整字重的字体文件（`Font(R.font.xxx, FontWeight.Light)`）。

```kotlin
Text("加粗标题", fontWeight = FontWeight.Bold)
```

***

### 7. `fontFamily` — 字体族

```kotlin
fontFamily: FontFamily? = null,
```

- **类型**：`FontFamily?`｜**默认值**：`null`（未设置，走继承）
- **可取值**：`FontFamily.Default`、`SansSerif`、`Serif`、`Monospace`、`Cursive`；或 `FontFamily(Font(R.font.my_font))` 自定义
- **注意**：自定义字体要放在 `res/font/`，文件名只能小写下划线；`.ttf` / `.otf` 均可。数字等宽场景（金额、计时）建议 `FontFamily.Monospace` 或用 `fontFeatureSettings = "tnum"`。

```kotlin
Text("12345", fontFamily = FontFamily.Monospace)
```

***

### 8. `letterSpacing` — 字间距

```kotlin
letterSpacing: TextUnit = TextUnit.Unspecified,
```

- **类型**：`TextUnit`｜**默认值**：`Unspecified`（回退到 `style.letterSpacing`）
- **作用**：字符之间的额外间距，可为负值做收紧。
- **注意**：同样应使用 `sp`。用 `em` 时，同一段样式在不同 `fontSize` 下缩放行为不一致，容易在适配大字号时出现字挤在一起或散开。
- **典型场景**：全大写英文小标题加 `0.1.sp` 更透气；中文标题加 `0.5.sp` 提升质感；大数字收 `-0.5.sp` 更紧凑。

```kotlin
Text("S E C T I O N", letterSpacing = 1.sp)
```

***

### 9. `textDecoration` — 装饰线

```kotlin
textDecoration: TextDecoration? = null,
```

- **类型**：`TextDecoration?`｜**默认值**：`null`（未设置）
- **可取值**：`TextDecoration.None`、`Underline`、`LineThrough`；组合用 `TextDecoration.Combined(Underline, LineThrough)`
- **注意**：这是**纯视觉装饰**，不带语义——下划线不等于可点击。要表达链接语义请加 `Modifier.clickable` + 无障碍描述。

```kotlin
Text("删除价", textDecoration = TextDecoration.LineThrough)
```

***

### 10. `lineHeight` — 行高

```kotlin
lineHeight: TextUnit = TextUnit.Unspecified,
```

- **类型**：`TextUnit`｜**默认值**：`Unspecified`
- **作用**：多行文本的每行高度。
- **注意**：`Unspecified` 时由字体自带度量（font metrics）决定，通常是字号的 1.2~1.4 倍。**设了 `lineHeight` 但没设 `fontSize` 时容易出问题**——尤其配合 `includeFontPadding = false`（在 `style` 里）时，首行可能出现裁切，建议二者一起调。

```kotlin
Text(
    "多行正文，行距偏紧更耐读",
    fontSize = 14.sp,
    lineHeight = 22.sp
)
```

***

### 11. `textAlign` — 水平对齐

```kotlin
textAlign: TextAlign? = null,
```

- **类型**：`TextAlign?`｜**默认值**：`null`（未设置）
- **可取值**：`Start`、`End`、`Center`、`Justify`、`Left`、`Right`；`TextAlign.Unspecified` 是内部哨兵值
- **注意**：为什么用可空？因为要区分"**没设**"和"**显式设为 Start**"——前者要继承 `style.textAlign`，后者要覆盖。`null` 表示继承。
- **注意**：`textAlign` 只在**文本宽度大于内容宽度**时才有效果。如果 `Text` 是 wrap-content 包住文字，对齐看不出变化，必须配合 `Modifier.fillMaxWidth()`。
- **建议**：优先用 `Start` / `End`（自动适配 RTL 阿拉伯语、希伯来语），只有明确要"物理左/右"时才用 `Left` / `Right`。

```kotlin
Text(
    "居中标题",
    modifier = Modifier.fillMaxWidth(),
    textAlign = TextAlign.Center
)
```

***

### 12. `overflow` — 溢出策略

```kotlin
overflow: TextOverflow = TextOverflow.Clip,
```

- **类型**：`TextOverflow`｜**默认值**：`Clip`——**这是真实行为，不是"未设置"**
- **可取值**：
    - `Clip`：超出部分直接裁掉，**不显示省略号**（默认）
    - `Ellipsis`：末尾显示 `…`
    - `StartEllipsis` / `MiddleEllipsis`：首部 / 中部省略（适合长路径、长文件名，保留尾部信息）
    - `Visible`：不裁剪，溢出到边界外（`minLines` + `softWrap=false` 场景下有用）
- **注意**：`overflow` 只有在**超出约束**时才起作用，而"超出"的前提通常是设了 `maxLines` 或 `softWrap = false`。只写 `overflow = Ellipsis` 而不限行数，等于没写。

```kotlin
Text(
    "这是一段很长的描述文字，超出后显示省略号",
    maxLines = 1,
    overflow = TextOverflow.Ellipsis
)
```

***

### 13. `softWrap` — 是否允许自动换行

```kotlin
softWrap: Boolean = true,
```

- **类型**：`Boolean`｜**默认值**：`true`
- **作用**：`true` 时到达宽度边界自动折行；`false` 时**宁可溢出也不换行**，此时 `overflow` 才真正发挥作用。
- **典型场景**：价格、编号、版本号、身份证号这类**不能被断开**的文本，用 `softWrap = false` + `maxLines = 1` + `Ellipsis`。

```kotlin
Text(
    "¥1,288,000.00",
    softWrap = false,
    maxLines = 1,
    overflow = TextOverflow.Ellipsis
)
```

***

### 14. `maxLines` — 最多行数

```kotlin
maxLines: Int = Int.MAX_VALUE,
```

- **类型**：`Int`｜**默认值**：`Int.MAX_VALUE`（不限制）
- **作用**：行数上限，超出的部分按 `overflow` 处理。
- **注意**：`maxLines` 必须 ≥ `minLines`，否则行为未定义（内部会按测量约束裁剪，容易得到 0 高度的结果）。

```kotlin
Text("最多两行，超出省略……", maxLines = 2, overflow = TextOverflow.Ellipsis)
```

***

### 15. `minLines` — 最少行数

```kotlin
minLines: Int = 1,
```

- **类型**：`Int`｜**默认值**：`1`
- **作用**：无论内容多短，都至少占这么多行的高度。
- **注意（很实用的一个默认值）**：`1` 保证了**空字符串也占一行高度**。如果没有它，`Text(mutableStateOf(""))` 在数据加载中会塌成 0 高度，加载完成后撑开，造成**列表跳动 / 布局抖动**。
- **典型场景**：列表项标题可能为空、表单占位、异步加载的摘要文本。

```kotlin
// 内容为空时依然保留两行高度，避免加载完成后跳一下
Text(desc, minLines = 2)
```

***

### 16. `onTextLayout` — 测量完成回调

```kotlin
onTextLayout: ((TextLayoutResult) -> Unit)? = null,
```

- **类型**：`((TextLayoutResult) -> Unit)?`｜**默认值**：`null`
- **作用**：拿到文字**实际排版结果**后的回调，参数是这一帧的 `TextLayoutResult`。
- **能拿到什么**：`lineCount`、`getLineTop(i)` / `getLineBottom(i)`、`getLineLeft(i)` / `getLineRight(i)`、`getLineEnd(i)`、`didOverflowHeight`、`didOverflowWidth`、`getBoundingBox(offset)`。
- **典型用途**：
    1. **判断是否被截断** → 决定要不要显示"展开全文"（`didOverflowHeight` 或 `lineCount == maxLines`）
    2. 折叠/展开动画（用测量出的高度做 `animateContentSize`）
    3. 给某一行单独画背景高亮（拿行边界自己画）
    4. 取最后一行的真实宽度，做"行内尾随图标"
- **注意**：回调在**测量阶段之后**触发，此时**不能在回调里改会触发重新测量的状态**（例如直接 `setState` 改 `maxLines`），否则会陷入"测量 → 改状态 → 再测量"的循环。需要改状态时用 `snapshotFlow` 或做一次性的标记位。

```kotlin
var expanded by remember { mutableStateOf(false) }
var overflowed by remember { mutableStateOf(false) }

Text(
    text = longText,
    maxLines = if (expanded) Int.MAX_VALUE else 3,
    overflow = TextOverflow.Ellipsis,
    onTextLayout = { result ->
        if (!expanded) overflowed = result.hasVisualOverflow
    }
)
```

***

### 17. `style` — 样式基线

```kotlin
style: TextStyle = LocalTextStyle.current
```

- **类型**：`TextStyle`｜**默认值**：`LocalTextStyle.current`（CompositionLocal）
- **作用**：整套文字样式的**继承基线**——颜色、字号、字重、行高、字体族、字间距全部从这里起步，前面的 17 个参数只是叠在它之上的**覆盖层**。
- **默认值来自哪**：`LocalTextStyle` 由上层 `ProvideTextStyle` 注入。Material 主题的 typography 就是这样生效的——默认是 `bodyLarge`；而把 `Text` 放进 `Button` / `TextField` / `TopAppBar` 时，组件内部会用 `ProvideTextStyle` 换成**它自己的 style**，所以你会发现"同样的 `Text` 放进按钮里字变小了"。
- **注意**：这也是排查"我在主题里改了排版但没生效"的关键位置——先确认那个 `Text` 是否被组件内部的 `ProvideTextStyle` 覆盖了。
- **`TextStyle` 里还有个容易忽略的开关**：`platformStyle`（`TextStyle.platformStyle`）可设 `includeFontPadding = false`，去掉安卓字体自带的上下留白，让行高完全可控——现代 UI 排版几乎都建议关掉。

```kotlin
Text(
    "完全自定义",
    style = MaterialTheme.typography.titleLarge.copy(
        platformStyle = PlatformTextStyle(includeFontPadding = false)
    )
)
```

***

## 3. 参数之间的联动规则

单看某个参数很容易误判，真正的行为由下面这三组规则决定。

### 3.1 颜色：三级回退

```
显式 color  →  style.color  →  LocalContentColor.current
```

`Text` 函数体第一段就在做这件事：

```kotlin
val textColor = color.takeOrElse {
    style.color.takeOrElse { LocalContentColor.current }
}
```

- `takeOrElse`：接收者是 `Unspecified` 时返回 lambda 的值，否则返回自身。inline 实现，编译后只是几次 `==` 判断。
- 第三级 `LocalContentColor` 让文字**自动跟随容器反色**——放进 `Button` 自动变白，就是这个机制。
- 所以：**`Unspecified` ≠ 透明**。要透明写 `Color.Transparent`。

### 3.2 换行与裁剪：四个参数一起看

`softWrap` / `maxLines` / `minLines` / `overflow` 是**一组**，单独设一个经常"没反应"：

| 目标效果 | 正确组合 |
| --- | --- |
| 单行 + 末尾省略号 | `maxLines = 1` + `overflow = Ellipsis` |
| 最多 N 行 + 省略号 | `maxLines = N` + `overflow = Ellipsis` |
| 不可断行（价格/编号） | `softWrap = false` + `maxLines = 1` |
| 空文本也占位，防跳动 | `minLines = 2` |
| 允许溢出到边界外 | `softWrap = false` + `overflow = Visible` |

<!--editor-kit-table-meta=%7B%22version%22%3A1%2C%22cells%22%3A%5B%7B%22row%22%3A1%2C%22col%22%3A1%2C%22ops%22%3A%5B%7B%22insert%22%3A%22*%22%2C%22attributes%22%3A%7B%22lmkr%22%3A%221%22%7D%7D%2C%7B%22insert%22%3A%22maxLines%20%3D%201%22%2C%22attributes%22%3A%7B%22inlineCode%22%3A%22true%22%7D%7D%2C%7B%22insert%22%3A%22%20%2B%20%22%7D%2C%7B%22insert%22%3A%22overflow%20%3D%20Ellipsis%22%2C%22attributes%22%3A%7B%22inlineCode%22%3A%22true%22%7D%7D%2C%7B%22insert%22%3A%22%5Cn%22%7D%5D%7D%2C%7B%22row%22%3A2%2C%22col%22%3A1%2C%22ops%22%3A%5B%7B%22insert%22%3A%22*%22%2C%22attributes%22%3A%7B%22lmkr%22%3A%221%22%7D%7D%2C%7B%22insert%22%3A%22maxLines%20%3D%20N%22%2C%22attributes%22%3A%7B%22inlineCode%22%3A%22true%22%7D%7D%2C%7B%22insert%22%3A%22%20%2B%20%22%7D%2C%7B%22insert%22%3A%22overflow%20%3D%20Ellipsis%22%2C%22attributes%22%3A%7B%22inlineCode%22%3A%22true%22%7D%7D%2C%7B%22insert%22%3A%22%5Cn%22%7D%5D%7D%2C%7B%22row%22%3A3%2C%22col%22%3A1%2C%22ops%22%3A%5B%7B%22insert%22%3A%22*%22%2C%22attributes%22%3A%7B%22lmkr%22%3A%221%22%7D%7D%2C%7B%22insert%22%3A%22softWrap%20%3D%20false%22%2C%22attributes%22%3A%7B%22inlineCode%22%3A%22true%22%7D%7D%2C%7B%22insert%22%3A%22%20%2B%20%22%7D%2C%7B%22insert%22%3A%22maxLines%20%3D%201%22%2C%22attributes%22%3A%7B%22inlineCode%22%3A%22true%22%7D%7D%2C%7B%22insert%22%3A%22%5Cn%22%7D%5D%7D%2C%7B%22row%22%3A5%2C%22col%22%3A1%2C%22ops%22%3A%5B%7B%22insert%22%3A%22*%22%2C%22attributes%22%3A%7B%22lmkr%22%3A%221%22%7D%7D%2C%7B%22insert%22%3A%22softWrap%20%3D%20false%22%2C%22attributes%22%3A%7B%22inlineCode%22%3A%22true%22%7D%7D%2C%7B%22insert%22%3A%22%20%2B%20%22%7D%2C%7B%22insert%22%3A%22overflow%20%3D%20Visible%22%2C%22attributes%22%3A%7B%22inlineCode%22%3A%22true%22%7D%7D%2C%7B%22insert%22%3A%22%5Cn%22%7D%5D%7D%5D%7D-->

规律：**`maxLines` 和 `softWrap` 决定"会不会超出"，`overflow` 只决定"超出后怎么画"**。没有超出，`overflow` 什么也不会做。

### 3.3 两种"未设置"：`Unspecified` 与 `null`

同一个函数里存在两种"没指定"的表达，不是随手写的：

| 表达 | 用在 | 原因 |
| --- | --- | --- |
| `Color.Unspecified` / `TextUnit.Unspecified` | `color`、`fontSize`、`letterSpacing`、`lineHeight` | `Color`、`TextUnit` 是 inline value class，底层是 `ULong` / `Float`，**没有 null 可用**，只能靠哨兵值表达"未设置" |
| `null` | `fontStyle`、`fontWeight`、`fontFamily`、`textDecoration`、`textAlign`、`onTextLayout` | 本身就是可空类型，`null` 天然能表达未设置 |

<!--editor-kit-table-meta=%7B%22version%22%3A1%2C%22cells%22%3A%5B%7B%22row%22%3A1%2C%22col%22%3A0%2C%22ops%22%3A%5B%7B%22insert%22%3A%22*%22%2C%22attributes%22%3A%7B%22lmkr%22%3A%221%22%7D%7D%2C%7B%22insert%22%3A%22Color.Unspecified%22%2C%22attributes%22%3A%7B%22inlineCode%22%3A%22true%22%7D%7D%2C%7B%22insert%22%3A%22%20%2F%20%22%7D%2C%7B%22insert%22%3A%22TextUnit.Unspecified%22%2C%22attributes%22%3A%7B%22inlineCode%22%3A%22true%22%7D%7D%2C%7B%22insert%22%3A%22%5Cn%22%7D%5D%7D%2C%7B%22row%22%3A1%2C%22col%22%3A2%2C%22ops%22%3A%5B%7B%22insert%22%3A%22*%22%2C%22attributes%22%3A%7B%22lmkr%22%3A%221%22%7D%7D%2C%7B%22insert%22%3A%22Color%22%2C%22attributes%22%3A%7B%22inlineCode%22%3A%22true%22%7D%7D%2C%7B%22insert%22%3A%22%E3%80%81%22%7D%2C%7B%22insert%22%3A%22TextUnit%22%2C%22attributes%22%3A%7B%22inlineCode%22%3A%22true%22%7D%7D%2C%7B%22insert%22%3A%22%20%E6%98%AF%20inline%20value%20class%EF%BC%8C%E5%BA%95%E5%B1%82%E6%98%AF%20%22%7D%2C%7B%22insert%22%3A%22ULong%22%2C%22attributes%22%3A%7B%22inlineCode%22%3A%22true%22%7D%7D%2C%7B%22insert%22%3A%22%20%2F%20%22%7D%2C%7B%22insert%22%3A%22Float%22%2C%22attributes%22%3A%7B%22inlineCode%22%3A%22true%22%7D%7D%2C%7B%22insert%22%3A%22%EF%BC%8C%22%7D%2C%7B%22insert%22%3A%22%E6%B2%A1%E6%9C%89%20null%20%E5%8F%AF%E7%94%A8%22%2C%22attributes%22%3A%7B%22bold%22%3A%22true%22%7D%7D%2C%7B%22insert%22%3A%22%EF%BC%8C%E5%8F%AA%E8%83%BD%E9%9D%A0%E5%93%A8%E5%85%B5%E5%80%BC%E8%A1%A8%E8%BE%BE%5C%22%E6%9C%AA%E8%AE%BE%E7%BD%AE%5C%22%5Cn%22%7D%5D%7D%2C%7B%22row%22%3A2%2C%22col%22%3A2%2C%22ops%22%3A%5B%7B%22insert%22%3A%22*%22%2C%22attributes%22%3A%7B%22lmkr%22%3A%221%22%7D%7D%2C%7B%22insert%22%3A%22%E6%9C%AC%E8%BA%AB%E5%B0%B1%E6%98%AF%E5%8F%AF%E7%A9%BA%E7%B1%BB%E5%9E%8B%EF%BC%8C%22%7D%2C%7B%22insert%22%3A%22null%22%2C%22attributes%22%3A%7B%22inlineCode%22%3A%22true%22%7D%7D%2C%7B%22insert%22%3A%22%20%E5%A4%A9%E7%84%B6%E8%83%BD%E8%A1%A8%E8%BE%BE%E6%9C%AA%E8%AE%BE%E7%BD%AE%5Cn%22%7D%5D%7D%5D%7D-->

这是 API 历史演进的产物。写代码时记住：**看到 `Unspecified` 就想"会被继承覆盖"，看到 `null` 就想"没设，走继承"**。

### 3.4 覆盖语义：`style.merge`

```kotlin
style.merge(
    color = textColor,
    fontSize = fontSize,
    ...
)
```

`TextStyle.merge` 的规则是**只覆盖"有值"的字段**：

- 传入 `Unspecified` / `null` 的字段 → **忽略，保留 `style` 原值**
- 有值的字段 → 覆盖上去
- 返回**新的不可变 `TextStyle`**，不改原对象

所以上表那一整排参数，本质是"**叠在 `style` 上的一层补丁**"。这也解释了为什么 `Text` 不会破坏主题。

***

## 4. 常见场景速查写法

```kotlin
// 1. 单行标题，超出省略
Text(title, maxLines = 1, overflow = TextOverflow.Ellipsis)

// 2. 正文两行截断
Text(content, maxLines = 2, overflow = TextOverflow.Ellipsis)

// 3. 价格不换行
Text("¥1,288,000.00", softWrap = false, maxLines = 1)

// 4. 富文本混排（必须降级到 BasicText）
Text(
    buildAnnotatedString {
        withStyle(SpanStyle(fontWeight = FontWeight.Bold)) { append("协议：") }
        withStyle(SpanStyle(color = Color(0xFF3366FF))) { append("查看详情") }
    }
)

// 5. 检测是否被截断，再决定显示"展开"
var overflowed by remember { mutableStateOf(false) }
Text(
    text = body,
    maxLines = 3,
    overflow = TextOverflow.Ellipsis,
    onTextLayout = { overflowed = it.hasVisualOverflow }
)

// 6. 对齐生效的前提：必须撑满宽度
Text(
    "居中",
    modifier = Modifier.fillMaxWidth(),
    textAlign = TextAlign.Center
)
```

***

## 5. 一句话总结

`Text` = **"`Unspecified` 哨兵 + 三级回退 + `merge` 覆盖"** 的一套默认值解析逻辑。它自己不做渲染，解析完就把一份完整的 `TextStyle` 丢给 `BasicText`。

记住三条就够用：

1. **优先级**：显式参数 > `style` > `LocalTextStyle` / `LocalContentColor`
2. **`Unspecified` 是"没设"，不是"透明/黑色"**
3. **`overflow` 不负责"要不要超出"，只负责"超出后怎么画"**