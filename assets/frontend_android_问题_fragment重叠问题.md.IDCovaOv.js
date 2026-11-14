import{_t as e,it as t,n,rt as r}from"./chunks/framework.BJvQKzTo.js";var i=JSON.parse(`{"title":"开启不保留模式底部导航切换后重新进入应用fragment显示重叠问题","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/android/问题/fragment重叠问题.md","filePath":"frontend/android/问题/fragment重叠问题.md"}`),a={name:`frontend/android/问题/fragment重叠问题.md`};function o(n,i,a,o,s,c){return e(),r(`div`,null,[...i[0]||=[t(`<h1 id="开启不保留模式底部导航切换后重新进入应用fragment显示重叠问题" tabindex="-1">开启不保留模式底部导航切换后重新进入应用fragment显示重叠问题 <a class="header-anchor" href="#开启不保留模式底部导航切换后重新进入应用fragment显示重叠问题" aria-label="Permalink to “开启不保留模式底部导航切换后重新进入应用fragment显示重叠问题”">​</a></h1><p>Activity中添加:</p><div class="language-"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>    /**</span></span>
<span class="line"><span>     *  解决开启不保留模式fragment显示重叠问题</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    override fun onSaveInstanceState(outState: Bundle) {</span></span>
<span class="line"><span>        super.onSaveInstanceState(outState)</span></span>
<span class="line"><span>        mainActivityLogic.onSaveInstanceState(outState)</span></span>
<span class="line"><span>    }</span></span></code></pre></div><p>MainActivityLogic中:</p><div class="language-"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>1、</span></span>
<span class="line"><span>   private final static String SAVED_CURRENT_ID = &quot;SAVED_CURRENT_ID&quot;;</span></span>
<span class="line"><span>2、</span></span>
<span class="line"><span>   public MainActivityLogic(ActivityProvider activityProvider, @Nullable Bundle savedInstanceState) {</span></span>
<span class="line"><span>       this.activityProvider = activityProvider;</span></span>
<span class="line"><span>       if (savedInstanceState != null) {</span></span>
<span class="line"><span>           currentItemIndex = savedInstanceState.getInt(SAVED_CURRENT_ID, 0);</span></span>
<span class="line"><span>       }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>3、</span></span>
<span class="line"><span>       public void onSaveInstanceState(@NonNull Bundle outState) {</span></span>
<span class="line"><span>       outState.putInt(SAVED_CURRENT_ID, currentItemIndex);</span></span>
<span class="line"><span>   }    </span></span>
<span class="line"><span></span></span>
<span class="line"><span>4、</span></span>
<span class="line"><span>    hiTabBottomLayout.addTabSelectedChangeListener(new IHiTabLayout.OnTabSelectedListener&lt;HiTabBottomInfo&lt;?&gt;&gt;() {</span></span>
<span class="line"><span>           @Override</span></span>
<span class="line"><span>           public void onTabSelectedChange(int index, @Nullable HiTabBottomInfo&lt;?&gt; prevInfo, @NonNull HiTabBottomInfo&lt;?&gt; nextInfo) {</span></span>
<span class="line"><span>//                选中了某个Tab，通过fragmentTabView切换Fragment</span></span>
<span class="line"><span>               fragmentTabView.setCurrentItem(index);</span></span>
<span class="line"><span>               MainActivityLogic.this.currentItemIndex = index;</span></span>
<span class="line"><span>           }</span></span>
<span class="line"><span>       });</span></span>
<span class="line"><span>       hiTabBottomLayout.defaultSelected(infoList.get(currentItemIndex));</span></span></code></pre></div>`,5)]])}var s=n(a,[[`render`,o]]);export{i as __pageData,s as default};