import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.eg.android.AlipayGphone',
  name: '支付宝',
  groups: [
    {
      key: 1, // 规则组的唯一ID，自己定一个数字即可
      name: '关闭特定弹窗', // 给这个规则起个名字，方便自己认
      desc: '自动点击"确认不选择"', // 描述
      rules: [
        {
          matches: '[text="确认不选择"]', // 核心：匹配文字内容
        },
      ],
    },
  ],
});
