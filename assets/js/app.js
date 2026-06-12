const { createApp } = Vue;

createApp({
  data() {
    return {
      // 头像
      avatar: "CydiaIcon.png",
      avatarAlt: "头像",

      // 标题
      title: "A-Zhooo",
      subtitle: "个人软件源 · Sileo Repository",

      // 源地址
      urlLabel: "Repository URL",
      repoUrl: "https://repo.zhooo.cn",

      // 按钮
      copyBtnText: "复制源地址",
      addBtnPrefix: "在",
      addBtnSuffix: "中添加",

      // Toast
      toastText: "已复制到剪贴板",
      isToastVisible: false,

      // 底部
      copyright: "© 2019-2024 我的Cydia源. 保留所有权利.",

      // 商店列表
      stores: [
        {
          name: "Cydia",
          url: "cydia://url/https://cydia.saurik.com/api/share#?source=",
          btnClass: "btn-cydia",
        },
        {
          name: "Sileo",
          url: "sileo://source/",
          btnClass: "btn-sileo",
        },
      ],
    };
  },
  methods: {
    async copyRepoUrl() {
      try {
        await navigator.clipboard.writeText(this.repoUrl);
        this.showToast();
      } catch (err) {
        console.error("复制失败:", err);
      }
    },
    showToast() {
      this.isToastVisible = true;
      setTimeout(() => {
        this.isToastVisible = false;
      }, 2000);
    },
  },
}).mount("#app");
