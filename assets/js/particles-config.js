// 检测系统是否处于深色模式
const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

// 粒子效果配置
const particlesConfig = {
    // 粒子相关配置
    particles: {
        // 粒子数量配置
        number: {
            value: 80,  // 粒子数量
            density: {
                enable: true,
                value_area: 800  // 粒子密度区域
            }
        },
        // 粒子颜色配置（使用多种鲜艳的颜色）
        color: {
            value: [
                "#E74C3C",  // 深红
                "#2980B9",  // 深蓝
                "#27AE60",  // 深绿
                "#8E44AD",  // 深紫
                "#D35400",  // 深橙
                "#16A085",  // 深青
                "#C0392B",  // 暗红
                "#2C3E50"   // 深灰蓝
            ]
        },
        // 粒子形状
        shape: {
            type: "circle"  // 使用圆形粒子
        },
        // 粒子透明度配置
        opacity: {
            value: isDarkMode ? 0.7 : 0.5,  // 根据深色模式调整透明度
            random: true,  // 随机透明度
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.3,  // 最小透明度
                sync: false
            }
        },
        // 粒子大小配置
        size: {
            value: 4,  // 粒子大小
            random: true  // 随机大小
        },
        // 粒子连线配置
        line_linked: {
            enable: true,
            distance: 150,  // 连线距离
            color: isDarkMode ? "#ffffff" : "#2C3E50",  // 根据模式调整连线颜色
            opacity: isDarkMode ? 0.5 : 0.4,  // 连线透明度
            width: 1  // 连线宽度
        },
        // 粒子运动配置
        move: {
            enable: true,
            speed: 2,  // 运动速度
            random: true  // 随机运动
        }
    },
    // 交互配置
    interactivity: {
        detect_on: "canvas",
        events: {
            // 鼠标悬停效果
            onhover: {
                enable: true,
                mode: "grab"  // 抓取效果
            },
            // 点击效果
            onclick: {
                enable: true,
                mode: "push"  // 添加粒子
            },
            resize: true  // 自适应窗口大小
        },
        // 交互模式配置
        modes: {
            // 抓取模式配置
            grab: {
                distance: 140,
                line_linked: {
                    opacity: 1
                }
            },
            // 点击添加配置
            push: {
                particles_nb: 4  // 每次点击添加4个粒子
            }
        }
    },
    retina_detect: true  // 支持视网膜显示屏
};

// 初始化粒子系统
particlesJS('particles-js', particlesConfig);

// 监听深色模式变化，重新加载粒子效果
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    particlesJS('particles-js', particlesConfig);
}); 