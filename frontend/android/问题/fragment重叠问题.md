# 开启不保留模式底部导航切换后重新进入应用fragment显示重叠问题

Activity中添加:

```
    /**
     *  解决开启不保留模式fragment显示重叠问题
     */
    override fun onSaveInstanceState(outState: Bundle) {
        super.onSaveInstanceState(outState)
        mainActivityLogic.onSaveInstanceState(outState)
    }
    
 ```   

 MainActivityLogic中:

 ```  
 1、
    private final static String SAVED_CURRENT_ID = "SAVED_CURRENT_ID";
 2、
    public MainActivityLogic(ActivityProvider activityProvider, @Nullable Bundle savedInstanceState) {
        this.activityProvider = activityProvider;
        if (savedInstanceState != null) {
            currentItemIndex = savedInstanceState.getInt(SAVED_CURRENT_ID, 0);
        }
     
    }
 3、
        public void onSaveInstanceState(@NonNull Bundle outState) {
        outState.putInt(SAVED_CURRENT_ID, currentItemIndex);
    }    

 4、
     hiTabBottomLayout.addTabSelectedChangeListener(new IHiTabLayout.OnTabSelectedListener<HiTabBottomInfo<?>>() {
            @Override
            public void onTabSelectedChange(int index, @Nullable HiTabBottomInfo<?> prevInfo, @NonNull HiTabBottomInfo<?> nextInfo) {
//                选中了某个Tab，通过fragmentTabView切换Fragment
                fragmentTabView.setCurrentItem(index);
                MainActivityLogic.this.currentItemIndex = index;
            }
        });
        hiTabBottomLayout.defaultSelected(infoList.get(currentItemIndex));


 ```  