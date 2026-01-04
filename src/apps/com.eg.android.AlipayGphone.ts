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
      fastQuery: false, // 关键：小程序内建议关闭快速查询
      rules: [
        {
          // 移除 ActivityId 限制，或者使用不带 $Appxx 的通用前缀（如果支持正则）
          // 尝试匹配可点击的节点，或者直接点击文本
          matches: '[text="确认不选择"]',
          snapshotUrls: ['https://i.gkd.li/i/24352804'],
        },
      ],
    },
    {
      key: 2,
      name: 'U净-下方的确定',
      fastQuery: false,
      rules: [
        {
          // 优化选择器：查找文本为"确定"，且其父节点或自身可点击
          // 移除了 width=1026 这种极其容易失效的条件
          matches: '@[clickable=true] > [text="确定"]',
          // 备选方案：如果上面不行，尝试直接点击文本，并在必要时使用 child/parent
          // matches: '[text="确定"]',
          snapshotUrls: ['https://i.gkd.li/i/24352813'],
        },
      ],
    },
    {
      key: 3,
      name: 'U净-右下方的立即支付',
      fastQuery: false,
      rules: [
        {
          // 查找包含"立即支付"的节点，移除宽度限制
          // 使用 text* 包含匹配以防有空格
          matches: '[text*="立即支付"]',
          snapshotUrls: ['https://i.gkd.li/i/24352821'],
        },
      ],
    },
    {
      key: 4,
      name: 'U净-中间的启动洗衣',
      fastQuery: false,
      rules: [
        {
          // 优先尝试点击包含该文本的可点击父元素
          matches: '@[clickable=true] > [text="启动洗衣"]',
          snapshotUrls: ['https://i.gkd.li/i/24352824'],
        },
      ],
    },
  ],
});
