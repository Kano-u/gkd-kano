import { defineGkdApp } from '@gkd-kit/define';

// 仿照：https://github.com/AIsouler/GKD_subscription/blob/main/src/apps/com.eg.android.AlipayGphone.ts
// 搜索"功能类-支付后自动点击完成"

export default defineGkdApp({
  id: 'com.eg.android.AlipayGphone',
  name: '支付宝',
  groups: [
    {
      key: 1,
      name: 'U净-确认不选择',
      fastQuery: true,
      rules: [
        {
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$App01',
          ],
          matches: '[text="确认不选择"]',
          snapshotUrls: ['https://i.gkd.li/i/24352804'],
        },
      ],
    },
    {
      key: 2,
      name: 'U净-下方的确定',
      fastQuery: true,
      rules: [
        {
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$App01',
          ],
          matches: 'TextView[text="确定"][width=1026][visibleToUser=true]',
          snapshotUrls: ['https://i.gkd.li/i/24352813'],
        },
      ],
    },
    {
      key: 3,
      name: 'U净-右下方的立即支付',
      fastQuery: true,
      rules: [
        {
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$App01',
          ],
          matches: '[text="立即支付"][width=549]',
          snapshotUrls: ['https://i.gkd.li/i/24352821'],
        },
      ],
    },
    {
      key: 4,
      name: 'U净-中间的启动洗衣',
      fastQuery: true,
      rules: [
        {
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$App01',
          ],
          matches: '[text="启动筒自洁"] + [text="启动洗衣"]',
          snapshotUrls: ['https://i.gkd.li/i/24352824'],
        },
      ],
    },
  ],
});
