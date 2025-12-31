import { defineGkdApp } from '@gkd-kit/define';

// 仿照：https://github.com/AIsouler/GKD_subscription/blob/main/src/apps/com.eg.android.AlipayGphone.ts
// 搜索"功能类-支付后自动点击完成"

export default defineGkdApp({
  id: 'world.letsgo.booster.android.pages.home.HomeActivity',
  name: '快连 VPN',
  groups: [
    {
      key: 0,
      name: '快快收下+开启快连',
      fastQuery: true,
      rules: [
        {
          activityIds: ['world.letsgo.booster.android.pages.home.HomeActivity'],
          matches: ['[text="快快收下"]', '[text="开启快连"]'],
          snapshotUrls: [
            'https://i.gkd.li/i/24390652',
            'https://i.gkd.li/i/24390653',
          ],
        },
      ],
    },
  ],
});
