import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.eg.android.AlipayGphone',
  name: '支付宝',
  groups: [
    {
      key: 1,
      name: '确认不选择',
      rules: [
        {
          matches: '[text="确认不选择"]',
        },
      ],
    },
  ],
});
