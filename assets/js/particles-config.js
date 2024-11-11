// 检测是否为深色模式
const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

// 创建粒子配置生成函数
function createParticlesConfig(isDark) {
    return {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: isDark ? [
                    "#FFFFFF",  // 白色
                    "#F1C40F",  // 明亮的黄色
                    "#E74C3C",  // 鲜艳的红色
                    "#2ECC71",  // 鲜艳的绿色
                    "#3498DB",  // 明亮的蓝色
                    "#9B59B6",  // 明亮的紫色
                    "#1ABC9C",  // 明亮的青色
                    "#F39C12"   // 明亮的橙色
                ] : [
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
            shape: {
                type: "circle"
            },
            opacity: {
                value: isDark ? 0.7 : 0.5,
                random: true,
                anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.3,
                    sync: false
                }
            },
            size: {
                value: 4,
                random: true
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: isDark ? "#FFFFFF" : "#2C3E50",
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                random: true,
                direction: "none",
                straight: false,
                out_mode: "out",
                bounce: false
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: true,
                    mode: "grab"
                },
                onclick: {
                    enable: true,
                    mode: "push"
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 140,
                    line_linked: {
                        opacity: 1
                    }
                },
                push: {
                    particles_nb: 4
                }
            }
        },
        retina_detect: true
    };
}

// 初始化粒子系统
function initParticles(isDark) {
    const canvas = document.querySelector('.particles-js-canvas-el');
    if (canvas) {
        canvas.style.transition = 'opacity 0.3s ease';
        canvas.style.opacity = '0';
    }
    
    setTimeout(() => {
        particlesJS('particles-js', createParticlesConfig(isDark));
        if (canvas) {
            setTimeout(() => {
                canvas.style.opacity = '1';
            }, 50);
        }
    }, 300);
}

// 初始化
initParticles(isDarkMode);

// 监听深色模式变化
const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
darkModeMediaQuery.addEventListener('change', (e) => {
    initParticles(e.matches);
}); 