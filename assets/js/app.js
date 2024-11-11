// 从Vue中解构createApp方法
const { createApp } = Vue

// 创建Vue应用实例
const app = createApp({
    // 定义响应式数据
    data() {
        return {
            // 头像图片路径（根目录）
            avatar: 'CydiaIcon.png',
            // 网站描述文字
            description: 'A-Zhooo个人软件源',
            // 软件源地址
            repoUrl: 'https://repo.zhooo.cn',
            // 版权信息
            copyright: '© 2019-2024 我的Cydia源. 保留所有权利.',
            // 商店配置数组
            stores: [
                {
                    name: 'Cydia',  // 商店名称
                    url: 'cydia://url/https://cydia.saurik.com/api/share#?source=',  // Cydia添加源的URL scheme
                    btnClass: 'btn-cydia'  // 按钮样式类
                },
                {
                    name: 'Sileo',
                    url: 'sileo://source/',  // Sileo添加源的URL scheme
                    btnClass: 'btn-sileo'  // 按钮样式类
                }
            ]
        }
    },
    // 定义方法
    methods: {
        /**
         * 复制源地址到剪贴板
         * 使用async/await处理异步操作
         * 成功时显示提示，失败时在控制台输出错误
         */
        async copyRepoUrl() {
            try {
                await navigator.clipboard.writeText(this.repoUrl);
                alert('源地址已复制到剪贴板！');
            } catch (err) {
                console.error('复制失败:', err);
            }
        }
    }
}).mount('#app')  // 将Vue应用挂载到#app元素