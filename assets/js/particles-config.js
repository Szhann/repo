// 检测是否为深色模式
const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

const particlesConfig = {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: isDarkMode ? [
                "#ffffff",  // 深色模式下使用较亮的颜色
                "#f1c40f",
                "#e74c3c",
                "#2ecc71",
                "#3498db",
                "#9b59b6"
            ] : [
                "#2c3e50",  // 浅色模式下使用较深的颜色
                "#c0392b",
                "#16a085",
                "#8e44ad",
                "#2980b9",
                "#d35400"
            ]
        },
        shape: {
            type: "circle"
        },
        opacity: {
            value: isDarkMode ? 0.5 : 0.6,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: isDarkMode ? 0.2 : 0.3,
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
            color: isDarkMode ? "rgba(255,255,255,0.4)" : "rgba(44,62,80,0.4)",
            opacity: isDarkMode ? 0.4 : 0.3,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            random: true
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

// 初始化粒子系统
function initParticles() {
    particlesJS('particles-js', particlesConfig);
}

// 监听深色模式变化并平滑过渡
const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
darkModeMediaQuery.addEventListener('change', (e) => {
    // 更新配置中的颜色
    particlesConfig.particles.color.value = e.matches ? [
        "#ffffff", "#f1c40f", "#e74c3c", "#2ecc71", "#3498db", "#9b59b6"
    ] : [
        "#2c3e50", "#c0392b", "#16a085", "#8e44ad", "#2980b9", "#d35400"
    ];
    
    particlesConfig.particles.line_linked.color = e.matches ? 
        "rgba(255,255,255,0.4)" : "rgba(44,62,80,0.4)";
    
    // 重新初始化粒子
    setTimeout(() => {
        initParticles();
    }, 300); // 等待背景色过渡完成
});

// 初始化
initParticles(); 