import{_t as e,it as t,n,rt as r}from"./chunks/framework.BJvQKzTo.js";import{C as i,S as a,T as o,_ as s,a as c,b as l,c as u,d,f,g as p,h as m,i as h,l as g,m as _,n as v,o as y,p as b,r as x,s as S,t as C,u as w,v as T,w as E,x as D,y as O}from"./chunks/assets.UyU1AKuv.js";var k=JSON.parse(`{"title":"使用npm搭建并部署vitepress网站","description":"","frontmatter":{},"headers":[],"relativePath":"other/index.md","filePath":"other/index.md"}`),A={name:`other/index.md`};function j(n,k,A,j,M,N){return e(),r(`div`,null,[...k[0]||=[t(`<h1 id="使用npm搭建并部署vitepress网站" tabindex="-1">使用npm搭建并部署vitepress网站 <a class="header-anchor" href="#使用npm搭建并部署vitepress网站" aria-label="Permalink to “使用npm搭建并部署vitepress网站”">​</a></h1><p>[vitepress官网][<a href="https://vitepress.dev/zh/guide/getting-started" target="_blank" rel="noreferrer">https://vitepress.dev/zh/guide/getting-started</a>]</p><h3 id="一、开发工具安装和环境配置" tabindex="-1">一、开发工具安装和环境配置 <a class="header-anchor" href="#一、开发工具安装和环境配置" aria-label="Permalink to “一、开发工具安装和环境配置”">​</a></h3><p>安装vscode或者HBuilder</p><p>配置node环境</p><p>22.16.0</p><p>安装npm</p><p>10.9.2</p><h3 id="二、安装vitepress" tabindex="-1">二、安装vitepress <a class="header-anchor" href="#二、安装vitepress" aria-label="Permalink to “二、安装vitepress”">​</a></h3><p>新建文件夹，打开cmd窗口</p><p><code>npm add -D vitepress@next</code></p><h3 id="三、初始化vitepress" tabindex="-1">三、初始化vitepress <a class="header-anchor" href="#三、初始化vitepress" aria-label="Permalink to “三、初始化vitepress”">​</a></h3><p><code>npx vitepress init</code></p><p>需要回答下面几个简单问题：</p><h4 id="我当前项目的选择" tabindex="-1">我当前项目的选择 <a class="header-anchor" href="#我当前项目的选择" aria-label="Permalink to “我当前项目的选择”">​</a></h4><p><img src="`+o+`" alt="alt text" width="2160" height="1166"></p><h4 id="官方文档的选择" tabindex="-1">官方文档的选择 <a class="header-anchor" href="#官方文档的选择" aria-label="Permalink to “官方文档的选择”">​</a></h4><p><img src="`+E+`" alt="alt text" width="1048" height="1506"></p><h3 id="四、使用vscode打开项目项目" tabindex="-1">四、使用VSCode打开项目项目 <a class="header-anchor" href="#四、使用vscode打开项目项目" aria-label="Permalink to “四、使用VSCode打开项目项目”">​</a></h3><p><img src="`+i+`" alt="alt text" width="1648" height="484"><img src="`+a+`" alt="alt text" width="1390" height="366"><img src="`+D+`" alt="alt text" width="652" height="882"></p><h4 id="执行项目" tabindex="-1">执行项目 <a class="header-anchor" href="#执行项目" aria-label="Permalink to “执行项目”">​</a></h4><p><code>npm run dev</code></p><h3 id="五、首页修改" tabindex="-1">五、首页修改 <a class="header-anchor" href="#五、首页修改" aria-label="Permalink to “五、首页修改”">​</a></h3><h4 id="底部配置" tabindex="-1">底部配置 <a class="header-anchor" href="#底部配置" aria-label="Permalink to “底部配置”">​</a></h4><p>.vitepress中打开config.mjs <img src="`+l+`" alt="alt text" width="1100" height="200"></p><h4 id="中间区域设置" tabindex="-1">中间区域设置 <a class="header-anchor" href="#中间区域设置" aria-label="Permalink to “中间区域设置”">​</a></h4><p>imdex.md文件修改位置和视图对应 <img src="`+O+`" alt="alt text" width="2306" height="1026"><img src="`+T+`" alt="alt text" width="972" height="1296"></p><h4 id="右上导航设置" tabindex="-1">右上导航设置 <a class="header-anchor" href="#右上导航设置" aria-label="Permalink to “右上导航设置”">​</a></h4><h5 id="根目录新建文件夹-新建-md文件" tabindex="-1">根目录新建文件夹，新建.md文件 <a class="header-anchor" href="#根目录新建文件夹-新建-md文件" aria-label="Permalink to “根目录新建文件夹，新建.md文件”">​</a></h5><p><strong style="color:red;">注意：新文件夹中必须包含一个index.md</strong></p><p><img src="`+s+`" alt="alt text" width="652" height="1598"></p><h5 id="首页设置单级显示" tabindex="-1">首页设置单级显示 <a class="header-anchor" href="#首页设置单级显示" aria-label="Permalink to “首页设置单级显示”">​</a></h5><div class="language-"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>{ text: &#39;Python&#39;, link: &#39;/backend/python/&#39; },</span></span>
<span class="line"><span>{ text: &#39;Android&#39;, link: &#39;/frontend/android/&#39; },</span></span></code></pre></div><h5 id="首页设置多级显示" tabindex="-1">首页设置多级显示 <a class="header-anchor" href="#首页设置多级显示" aria-label="Permalink to “首页设置多级显示”">​</a></h5><div class="language-"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>    { text: &#39;Python&#39;, items: [</span></span>
<span class="line"><span>        { text: &#39;Python基础&#39;, link: &#39;/backend/python/基础&#39; },</span></span>
<span class="line"><span>        { text: &#39;PythonWeb&#39;, link: &#39;/backend/python/pythonWeb&#39; },</span></span>
<span class="line"><span>        { text: &#39;AI大模型&#39;, link: &#39;/backend/python/AIAgent&#39; },</span></span>
<span class="line"><span>        { text: &#39;爬虫&#39;, link: &#39;/backend/python/&#39; },</span></span>
<span class="line"><span>    ] },</span></span></code></pre></div><strong style="color:red;"> 注意：<br> 1、文件夹中只有一个index.md文件的link路径，如/backend/python/ <br> 2、有多个md文件要link选取到对应的文件，如/backend/python/pythonWeb </strong><h4 id="首页logo和标题修改" tabindex="-1">首页logo和标题修改 <a class="header-anchor" href="#首页logo和标题修改" aria-label="Permalink to “首页logo和标题修改”">​</a></h4><p>根目录新建public文件加入图片 <img src="`+p+`" alt="alt text" width="518" height="1006"></p><p>themeConfig中添加</p><div class="language-"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>logo: &#39;/logo.png&#39;,</span></span></code></pre></div><p>export default defineConfig中添加</p><div class="language-"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>base: &#39;/docs-demo/&#39;,</span></span>
<span class="line"><span>head: [[&quot;link&quot;, { rel: &quot;icon&quot;, href: &quot;/logo.png&quot; }]], //美化地址栏icon</span></span>
<span class="line"><span>title: &quot;我的博客&quot;,  // 博客标题</span></span>
<span class="line"><span>description: &quot;SEO优化使用&quot;,</span></span></code></pre></div><h4 id="添加社交链接" tabindex="-1">添加社交链接 <a class="header-anchor" href="#添加社交链接" aria-label="Permalink to “添加社交链接”">​</a></h4><div class="language-"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>socialLinks: [</span></span>
<span class="line"><span>  { icon: &#39;github&#39;, link: &#39;https://github.com/lixiaodong1222&#39; },</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    icon: {</span></span>
<span class="line"><span>      svg: \`&lt;svg t=&quot;1791595097159&quot; class=&quot;icon&quot; viewBox=&quot;0 0 1024 1024&quot; version=&quot;1.1&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; p-id=&quot;20454&quot; width=&quot;32&quot; height=&quot;32&quot;&gt;&lt;path d=&quot;M512 1024C229.2224 1024 0 794.7776 0 512S229.2224 0 512 0s512 229.2224 512 512-229.2224 512-512 512z m259.1488-568.8832H480.4096a25.2928 25.2928 0 0 0-25.2928 25.2928l-0.0256 63.2064c0 13.952 11.3152 25.2928 25.2672 25.2928h177.024c13.9776 0 25.2928 11.3152 25.2928 25.2672v12.6464a75.8528 75.8528 0 0 1-75.8528 75.8528H366.592a25.2928 25.2928 0 0 1-25.2672-25.2928v-240.1792a75.8528 75.8528 0 0 1 75.8272-75.8528h353.9456a25.2928 25.2928 0 0 0 25.2672-25.2928l0.0768-63.2064a25.2928 25.2928 0 0 0-25.2672-25.2928H417.152a189.6192 189.6192 0 0 0-189.6192 189.6448v353.9456c0 13.9776 11.3152 25.2928 25.2928 25.2928h372.9408a170.6496 170.6496 0 0 0 170.6496-170.6496v-145.408a25.2928 25.2928 0 0 0-25.2928-25.2672z&quot; fill=&quot;#C71D23&quot; p-id=&quot;20455&quot;&gt;&lt;/path&gt;&lt;/svg&gt;\`</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    link: &#39;https://gitee.com/lixiaodong93&#39;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>],</span></span></code></pre></div><h3 id="六、md文件格式设置" tabindex="-1">六、md文件格式设置 <a class="header-anchor" href="#六、md文件格式设置" aria-label="Permalink to “六、md文件格式设置”">​</a></h3><h4 id="utils中创建auto-sidebar-mjs文件" tabindex="-1">utils中创建auto_sidebar.mjs文件 <a class="header-anchor" href="#utils中创建auto-sidebar-mjs文件" aria-label="Permalink to “utils中创建auto_sidebar.mjs文件”">​</a></h4><p><img src="`+m+`" alt="alt text" width="552" height="416"></p><div class="language-"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import path from &quot;node:path&quot;;</span></span>
<span class="line"><span>import fs from &quot;node:fs&quot;;</span></span>
<span class="line"><span>console.log(&quot;==== auto_sidebar 模块加载成功 ====&quot;);</span></span>
<span class="line"><span>// 文件根目录</span></span>
<span class="line"><span>const DIR_PATH = path.resolve();</span></span>
<span class="line"><span>// 白名单,过滤不是文章的文件和文件夹</span></span>
<span class="line"><span>const WHITE_LIST = [</span></span>
<span class="line"><span>  &quot;index.md&quot;,</span></span>
<span class="line"><span>  &quot;.vitepress&quot;,</span></span>
<span class="line"><span>  &quot;node_modules&quot;,</span></span>
<span class="line"><span>  &quot;.idea&quot;,</span></span>
<span class="line"><span>  &quot;assets&quot;,</span></span>
<span class="line"><span>];</span></span>
<span class="line"><span>// 判断是否是文件夹</span></span>
<span class="line"><span>const isDirectory = (p) =&gt; fs.lstatSync(p).isDirectory();</span></span>
<span class="line"><span>// 取差值</span></span>
<span class="line"><span>const intersections = (arr1, arr2) =&gt;</span></span>
<span class="line"><span>  Array.from(new Set(arr1.filter((item) =&gt; !new Set(arr2).has(item))));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 递归生成侧边栏</span></span>
<span class="line"><span>function getList(params, path1, pathname) {</span></span>
<span class="line"><span>  const res = [];</span></span>
<span class="line"><span>  for (const file of params) {</span></span>
<span class="line"><span>    const fullPath = path.join(path1, file);</span></span>
<span class="line"><span>    const isDir = isDirectory(fullPath);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if (isDir) {</span></span>
<span class="line"><span>      // 文件夹递归</span></span>
<span class="line"><span>      const subFiles = fs.readdirSync(fullPath);</span></span>
<span class="line"><span>      res.push({</span></span>
<span class="line"><span>        text: file,</span></span>
<span class="line"><span>        collapsible: true,</span></span>
<span class="line"><span>        items: getList(subFiles, fullPath, \`\${pathname}/\${file}\`),</span></span>
<span class="line"><span>      });</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>      const filename = path.basename(file);</span></span>
<span class="line"><span>      const suffix = path.extname(filename);</span></span>
<span class="line"><span>      if (suffix !== &quot;.md&quot;) continue;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      // ✅ 提前去除 .md</span></span>
<span class="line"><span>      const title = filename.replace(/\\.md$/, &quot;&quot;);</span></span>
<span class="line"><span>      let link;</span></span>
<span class="line"><span>      if (filename === &quot;index.md&quot;) {</span></span>
<span class="line"><span>        // index.md 路由末尾带斜杠</span></span>
<span class="line"><span>        link = \`\${pathname}/\`;</span></span>
<span class="line"><span>      } else {</span></span>
<span class="line"><span>        // 普通md，不带后缀</span></span>
<span class="line"><span>        link = \`\${pathname}/\${title}\`;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      res.push({</span></span>
<span class="line"><span>        text: title,</span></span>
<span class="line"><span>        link: link,</span></span>
<span class="line"><span>      });</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  return res;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export const set_sidebar = (pathname) =&gt; {</span></span>
<span class="line"><span>  const dirPath = path.join(DIR_PATH, pathname);</span></span>
<span class="line"><span>  console.log(&quot;【set_sidebar】读取目录：&quot;, dirPath);</span></span>
<span class="line"><span>  try {</span></span>
<span class="line"><span>    const files = fs.readdirSync(dirPath);</span></span>
<span class="line"><span>    console.log(&quot;【set_sidebar】目录下文件列表：&quot;, files);</span></span>
<span class="line"><span>    const items = intersections(files, WHITE_LIST);</span></span>
<span class="line"><span>    console.log(&quot;【set_sidebar】过滤后文件：&quot;, items);</span></span>
<span class="line"><span>    const sidebarData = getList(items, dirPath, pathname);</span></span>
<span class="line"><span>    console.log(&quot;【set_sidebar】生成侧边栏结果：&quot;, JSON.stringify(sidebarData,null,2));</span></span>
<span class="line"><span>    return sidebarData;</span></span>
<span class="line"><span>  } catch(err) {</span></span>
<span class="line"><span>    console.error(&quot;【set_sidebar 读取文件夹异常】&quot;, err);</span></span>
<span class="line"><span>    return [];</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>};</span></span></code></pre></div><p>在config.mjs中引入</p><div class="language-"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import { set_sidebar } from &quot;../.vitepress/utils/auto_sidebar.mjs&quot;; // 改成自己的路径</span></span></code></pre></div><h4 id="三栏设置" tabindex="-1">三栏设置 <a class="header-anchor" href="#三栏设置" aria-label="Permalink to “三栏设置”">​</a></h4><p>themeConfig中添加</p><div class="language-"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span> sidebar: { </span></span>
<span class="line"><span>      &quot;/frontend/android/&quot;: set_sidebar(&quot;frontend/android&quot;),</span></span>
<span class="line"><span>      &quot;/backend/python/&quot;: set_sidebar(&quot;backend/python&quot;),</span></span>
<span class="line"><span>    },</span></span></code></pre></div><h4 id="两栏设置" tabindex="-1">两栏设置 <a class="header-anchor" href="#两栏设置" aria-label="Permalink to “两栏设置”">​</a></h4><p>themeConfig中添加下面两个</p><div class="language-"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span> outline: { // 右侧大纲级别</span></span>
<span class="line"><span>      level: [2, 6],</span></span>
<span class="line"><span>      label: &quot;目录&quot;,</span></span>
<span class="line"><span>      expand: true,</span></span>
<span class="line"><span>    },</span></span></code></pre></div><div class="language-"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>sidebar: false, // 关闭默认侧边栏</span></span>
<span class="line"><span>aside:&quot;left&quot;, // 右侧边栏在左侧显示</span></span></code></pre></div><h5 id="三栏设置为两栏左边显示太宽-需要添加自定义的css样式" tabindex="-1">三栏设置为两栏左边显示太宽，需要添加自定义的css样式 <a class="header-anchor" href="#三栏设置为两栏左边显示太宽-需要添加自定义的css样式" aria-label="Permalink to “三栏设置为两栏左边显示太宽，需要添加自定义的css样式”">​</a></h5><div class="language-"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * Customize default theme styling by overriding CSS variables:</span></span>
<span class="line"><span> * https://github.com/vuejs/vitepress/blob/main/src/client/theme-default/styles/vars.css</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Colors</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> * Each colors have exact same color scale system with 3 levels of solid</span></span>
<span class="line"><span> * colors with different brightness, and 1 soft color.</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> * - \`XXX-1\`: The most solid color used mainly for colored text. It must</span></span>
<span class="line"><span> *   satisfy the contrast ratio against when used on top of \`XXX-soft\`.</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> * - \`XXX-2\`: The color used mainly for hover state of the button.</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> * - \`XXX-3\`: The color for solid background, such as bg color of the button.</span></span>
<span class="line"><span> *   It must satisfy the contrast ratio with pure white (#ffffff) text on</span></span>
<span class="line"><span> *   top of it.</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> * - \`XXX-soft\`: The color used for subtle background such as custom container</span></span>
<span class="line"><span> *   or badges. It must satisfy the contrast ratio when putting \`XXX-1\` colors</span></span>
<span class="line"><span> *   on top of it.</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> *   The soft color must be semi transparent alpha channel. This is crucial</span></span>
<span class="line"><span> *   because it allows adding multiple &quot;soft&quot; colors on top of each other</span></span>
<span class="line"><span> *   to create an accent, such as when having inline code block inside</span></span>
<span class="line"><span> *   custom containers.</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> * - \`default\`: The color used purely for subtle indication without any</span></span>
<span class="line"><span> *   special meanings attached to it such as bg color for menu hover state.</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> * - \`brand\`: Used for primary brand colors, such as link text, button with</span></span>
<span class="line"><span> *   brand theme, etc.</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> * - \`tip\`: Used to indicate useful information. The default theme uses the</span></span>
<span class="line"><span> *   brand color for this by default.</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> * - \`warning\`: Used to indicate warning to the users. Used in custom</span></span>
<span class="line"><span> *   container, badges, etc.</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> * - \`danger\`: Used to show error, or dangerous message to the users. Used</span></span>
<span class="line"><span> *   in custom container, badges, etc.</span></span>
<span class="line"><span> * -------------------------------------------------------------------------- */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>:root {</span></span>
<span class="line"><span>  --vp-c-default-1: var(--vp-c-gray-1);</span></span>
<span class="line"><span>  --vp-c-default-2: var(--vp-c-gray-2);</span></span>
<span class="line"><span>  --vp-c-default-3: var(--vp-c-gray-3);</span></span>
<span class="line"><span>  --vp-c-default-soft: var(--vp-c-gray-soft);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  --vp-c-brand-1: var(--vp-c-indigo-1);</span></span>
<span class="line"><span>  --vp-c-brand-2: var(--vp-c-indigo-2);</span></span>
<span class="line"><span>  --vp-c-brand-3: var(--vp-c-indigo-3);</span></span>
<span class="line"><span>  --vp-c-brand-soft: var(--vp-c-indigo-soft);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  --vp-c-tip-1: var(--vp-c-brand-1);</span></span>
<span class="line"><span>  --vp-c-tip-2: var(--vp-c-brand-2);</span></span>
<span class="line"><span>  --vp-c-tip-3: var(--vp-c-brand-3);</span></span>
<span class="line"><span>  --vp-c-tip-soft: var(--vp-c-brand-soft);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  --vp-c-warning-1: var(--vp-c-yellow-1);</span></span>
<span class="line"><span>  --vp-c-warning-2: var(--vp-c-yellow-2);</span></span>
<span class="line"><span>  --vp-c-warning-3: var(--vp-c-yellow-3);</span></span>
<span class="line"><span>  --vp-c-warning-soft: var(--vp-c-yellow-soft);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  --vp-c-danger-1: var(--vp-c-red-1);</span></span>
<span class="line"><span>  --vp-c-danger-2: var(--vp-c-red-2);</span></span>
<span class="line"><span>  --vp-c-danger-3: var(--vp-c-red-3);</span></span>
<span class="line"><span>  --vp-c-danger-soft: var(--vp-c-red-soft);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Component: Button</span></span>
<span class="line"><span> * -------------------------------------------------------------------------- */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>:root {</span></span>
<span class="line"><span>  --vp-button-brand-border: transparent;</span></span>
<span class="line"><span>  --vp-button-brand-text: var(--vp-c-white);</span></span>
<span class="line"><span>  --vp-button-brand-bg: var(--vp-c-brand-3);</span></span>
<span class="line"><span>  --vp-button-brand-hover-border: transparent;</span></span>
<span class="line"><span>  --vp-button-brand-hover-text: var(--vp-c-white);</span></span>
<span class="line"><span>  --vp-button-brand-hover-bg: var(--vp-c-brand-2);</span></span>
<span class="line"><span>  --vp-button-brand-active-border: transparent;</span></span>
<span class="line"><span>  --vp-button-brand-active-text: var(--vp-c-white);</span></span>
<span class="line"><span>  --vp-button-brand-active-bg: var(--vp-c-brand-1);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Component: Home</span></span>
<span class="line"><span> * -------------------------------------------------------------------------- */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>:root {</span></span>
<span class="line"><span>  --vp-home-hero-name-color: transparent;</span></span>
<span class="line"><span>  --vp-home-hero-name-background: -webkit-linear-gradient(</span></span>
<span class="line"><span>    120deg,</span></span>
<span class="line"><span>    #bd34fe 30%,</span></span>
<span class="line"><span>    #41d1ff</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  --vp-home-hero-image-background-image: linear-gradient(</span></span>
<span class="line"><span>    -45deg,</span></span>
<span class="line"><span>    #bd34fe 50%,</span></span>
<span class="line"><span>    #47caff 50%</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>  --vp-home-hero-image-filter: blur(44px);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@media (min-width: 40rem) {</span></span>
<span class="line"><span>  :root {</span></span>
<span class="line"><span>    --vp-home-hero-image-filter: blur(56px);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@media (min-width: 60rem) {</span></span>
<span class="line"><span>  :root {</span></span>
<span class="line"><span>    --vp-home-hero-image-filter: blur(68px);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Component: Custom Block</span></span>
<span class="line"><span> * -------------------------------------------------------------------------- */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>:root {</span></span>
<span class="line"><span>  --vp-custom-block-tip-border: transparent;</span></span>
<span class="line"><span>  --vp-custom-block-tip-text: var(--vp-c-text-1);</span></span>
<span class="line"><span>  --vp-custom-block-tip-bg: var(--vp-c-brand-soft);</span></span>
<span class="line"><span>  --vp-custom-block-tip-code-bg: var(--vp-c-brand-soft);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* 自定义侧边栏在最左边，右边撑满宽度 */</span></span>
<span class="line"><span>.VPDoc .container {</span></span>
<span class="line"><span>  margin: 0 !important;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>@media (min-width: 960px) {</span></span>
<span class="line"><span>  .VPDoc:not(.has-sidebar) .content {</span></span>
<span class="line"><span>    max-width: 1552px !important;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.VPDoc.has-aside .content-container {</span></span>
<span class="line"><span>  max-width: 1488px !important;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>@media (min-width: 960px) {</span></span>
<span class="line"><span>  .VPDoc:not(.has-sidebar) .container {</span></span>
<span class="line"><span>    display: flex;</span></span>
<span class="line"><span>    justify-content: center;</span></span>
<span class="line"><span>    max-width: 1562px !important;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.aside-container {</span></span>
<span class="line"><span>  position: fixed;</span></span>
<span class="line"><span>  top: 0;</span></span>
<span class="line"><span>  padding-top: calc(</span></span>
<span class="line"><span>    var(--vp-nav-height) + var(--vp-layout-top-height, 0px) +</span></span>
<span class="line"><span>      var(--vp-doc-top-height, 0px) + 10px</span></span>
<span class="line"><span>  ) !important;</span></span>
<span class="line"><span>  width: 224px;</span></span>
<span class="line"><span>  height: 100vh;</span></span>
<span class="line"><span>  overflow-x: hidden;</span></span>
<span class="line"><span>  overflow-y: auto;</span></span>
<span class="line"><span>  scrollbar-width: none;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* 自定义h2的间距 */</span></span>
<span class="line"><span>.vp-doc h2 {</span></span>
<span class="line"><span>  margin: 0px 0 16px;</span></span>
<span class="line"><span>  padding-top: 24px;</span></span>
<span class="line"><span>  border: none;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="七、搜索框设置" tabindex="-1">七、搜索框设置 <a class="header-anchor" href="#七、搜索框设置" aria-label="Permalink to “七、搜索框设置”">​</a></h3><p>themeConfig中添加</p><div class="language-"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span> // 设置搜索框的样式</span></span>
<span class="line"><span>    search: {</span></span>
<span class="line"><span>      provider: &quot;local&quot;,</span></span>
<span class="line"><span>      options: {</span></span>
<span class="line"><span>        translations: {</span></span>
<span class="line"><span>          button: {</span></span>
<span class="line"><span>            buttonText: &quot;搜索文档&quot;,</span></span>
<span class="line"><span>            buttonAriaLabel: &quot;搜索文档&quot;,</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>          modal: {</span></span>
<span class="line"><span>            noResultsText: &quot;无法找到相关结果&quot;,</span></span>
<span class="line"><span>            resetButtonTitle: &quot;清除查询条件&quot;,</span></span>
<span class="line"><span>            footer: {</span></span>
<span class="line"><span>              selectText: &quot;选择&quot;,</span></span>
<span class="line"><span>              navigateText: &quot;切换&quot;,</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>    },</span></span></code></pre></div><h3 id="八、github-pages部署" tabindex="-1">八、github pages部署 <a class="header-anchor" href="#八、github-pages部署" aria-label="Permalink to “八、github pages部署”">​</a></h3><p>基于git 支持CI/CD</p><h4 id="_1、创建仓库" tabindex="-1">1、创建仓库 <a class="header-anchor" href="#_1、创建仓库" aria-label="Permalink to “1、创建仓库”">​</a></h4><p><img src="`+_+`" alt="alt text" width="1540" height="1520"></p><h4 id="_2、添加忽略文件" tabindex="-1">2、添加忽略文件 <a class="header-anchor" href="#_2、添加忽略文件" aria-label="Permalink to “2、添加忽略文件”">​</a></h4><p>根目录添加.gitignore文件，添加忽略设置</p><div class="language-"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>node_modules/</span></span>
<span class="line"><span>.DS_Store</span></span>
<span class="line"><span>dist/</span></span>
<span class="line"><span>dist-ssr/</span></span>
<span class="line"><span>cache/</span></span>
<span class="line"><span>.cache/</span></span>
<span class="line"><span>.temp/</span></span>
<span class="line"><span>*.local</span></span>
<span class="line"><span>Thumbs.db</span></span>
<span class="line"><span>desktop.ini</span></span></code></pre></div><h4 id="_3、仓库同步" tabindex="-1">3、仓库同步 <a class="header-anchor" href="#_3、仓库同步" aria-label="Permalink to “3、仓库同步”">​</a></h4><p><img src="`+b+`" alt="alt text" width="1178" height="296"></p><h4 id="_4、设置" tabindex="-1">4、设置 <a class="header-anchor" href="#_4、设置" aria-label="Permalink to “4、设置”">​</a></h4><h5 id="_4-1、选择github-actions" tabindex="-1">4.1、选择github Actions <a class="header-anchor" href="#_4-1、选择github-actions" aria-label="Permalink to “4.1、选择github Actions”">​</a></h5><p>github -&gt;settings -&gt;pages -&gt;Build and deployment 1、Source选择 Deploy from a branch 2、Branch：选 gh-pages，目录选 / (root) 点 Save 保存</p><h5 id="_4-2、设置工作流" tabindex="-1">4.2、设置工作流 <a class="header-anchor" href="#_4-2、设置工作流" aria-label="Permalink to “4.2、设置工作流”">​</a></h5><p><img src="`+f+`" alt="alt text" width="760" height="410"> 重命名并设置deploy脚本 <img src="`+d+`" alt="alt text" width="390" height="390"></p><div class="language-"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>name: Deploy</span></span>
<span class="line"><span>on:</span></span>
<span class="line"><span>  push:</span></span>
<span class="line"><span>    branches:</span></span>
<span class="line"><span>      - master</span></span>
<span class="line"><span>permissions:</span></span>
<span class="line"><span>  contents: write # 允许写入仓库，创建gh-pages分支</span></span>
<span class="line"><span>jobs:</span></span>
<span class="line"><span>  deploy:</span></span>
<span class="line"><span>    runs-on: ubuntu-latest</span></span>
<span class="line"><span>    steps:</span></span>
<span class="line"><span>      - uses: actions/checkout@v4</span></span>
<span class="line"><span>        with:</span></span>
<span class="line"><span>          fetch-depth: 0</span></span>
<span class="line"><span>      - uses: actions/setup-node@v4</span></span>
<span class="line"><span>        with:</span></span>
<span class="line"><span>          node-version: 20</span></span>
<span class="line"><span>          cache: npm</span></span>
<span class="line"><span>      - run: npm install</span></span>
<span class="line"><span>      - name: Build</span></span>
<span class="line"><span>        run: npm run build</span></span>
<span class="line"><span>      - name: Deploy</span></span>
<span class="line"><span>        uses: peaceiris/actions-gh-pages@v3</span></span>
<span class="line"><span>        with:</span></span>
<span class="line"><span>          github_token: \${{ secrets.GITHUB_TOKEN }}</span></span>
<span class="line"><span>          publish_dir: .vitepress/dist</span></span>
<span class="line"><span>          publish_branch: gh-pages</span></span>
<span class="line"><span>          full_commit_message: \${{ github.event.head_commit.message }}</span></span></code></pre></div><p><img src="`+w+`" alt="alt text" width="2968" height="976"><img src="`+g+`" alt="alt text" width="1016" height="1056"></p><h5 id="点击确定等待15秒-actions中可以查看是否成功-不成功需要修改yml再次提交" tabindex="-1">点击确定等待15秒，Actions中可以查看是否成功，不成功需要修改yml再次提交 <a class="header-anchor" href="#点击确定等待15秒-actions中可以查看是否成功-不成功需要修改yml再次提交" aria-label="Permalink to “点击确定等待15秒，Actions中可以查看是否成功，不成功需要修改yml再次提交”">​</a></h5><p><img src="`+u+`" alt="alt text" width="3808" height="1730"></p><h5 id="成功后显示" tabindex="-1">成功后显示 <a class="header-anchor" href="#成功后显示" aria-label="Permalink to “成功后显示”">​</a></h5><p><img src="`+S+`" alt="alt text" width="2524" height="1092"></p><h5 id="直接点击打开显示错错乱-没有css样式-需要添加-nojekyll这个文件-让github构建时不要使用这个构建工具" tabindex="-1">直接点击打开显示错错乱，没有css样式，需要添加.nojekyll这个文件，让github构建时不要使用这个构建工具 <a class="header-anchor" href="#直接点击打开显示错错乱-没有css样式-需要添加-nojekyll这个文件-让github构建时不要使用这个构建工具" aria-label="Permalink to “直接点击打开显示错错乱，没有css样式，需要添加.nojekyll这个文件，让github构建时不要使用这个构建工具”">​</a></h5><p>.vitepress中新建一个同名的空文件即可 <img src="`+y+`" alt="alt text" width="676" height="1090"> 因为访问的地址带docs-demo所以还需要改这两处 <img src="`+c+`" alt="alt text" width="1686" height="192"></p><h5 id="添加自定义域名" tabindex="-1">添加自定义域名 <a class="header-anchor" href="#添加自定义域名" aria-label="Permalink to “添加自定义域名”">​</a></h5><p>下面输入框输入域名 -&gt; 点击save -&gt; 在自己的服务器添加一条记录，填写githug分配好的域名</p><p><img src="`+h+`" alt="alt text" width="2850" height="1394"><img src="`+x+`" alt="alt text" width="2188" height="118"></p><p>使用域名需要把这行注释掉，不然找不到 <img src="`+v+`" alt="alt text" width="668" height="110"></p><p>等待分配完成后，需要强制开启HTTPS <img src="`+C+`" alt="alt text" width="2582" height="570"></p>`,89)]])}var M=n(A,[[`render`,j]]);export{k as __pageData,M as default};