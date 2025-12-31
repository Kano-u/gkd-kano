import { defineGkdApp } from '@gkd-kit/define';

// 仿照：https://github.com/AIsouler/GKD_subscription/blob/main/src/apps/com.eg.android.AlipayGphone.ts
// 搜索"功能类-支付后自动点击完成"

export default defineGkdApp({
  id: 'world.letsgo.booster.android.pro',
  name: '快连 VPN',
  groups: [
    {
      key: 0,
      name: '快快收下+开启快连',
      fastQuery: true,
      activityIds: ['world.letsgo.booster.android.pages.home.HomeActivity'],
      rules: [
        {
          key: 10, // 第一步的唯一ID
          name: '第一步-点击快快收下',
          // 匹配 Button 且文本为"快快收下"
          matches: 'Button[text="快快收下"]',
          // 也可以用更通用的写法: '[text="快快收下"]'
          snapshotUrls: 'https://i.gkd.li/i/24390652',
        },
        {
          preKeys: [10], // 关键点：指定必须先执行 key 10
          key: 11, // 第二步的唯一ID
          name: '第二步-点击开启快连',
          // 匹配 TextView 且文本为"开启快连"
          matches: 'TextView[text="开启快连"]',
          // 建议加上延迟，防止页面未刷新就检测
          actionDelay: 500, // 单位毫秒，可根据实际情况调整
          snapshotUrls: 'https://i.gkd.li/i/24390653',
        },
      ],
    },
  ],
});
