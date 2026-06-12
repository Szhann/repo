/*
 * @Author: Zhooo && 24381779@qq.com
 * @Date: 2026-06-12 22:59:58
 * @LastEditors: Zhooo && 24381779@qq.com
 * @LastEditTime: 2026-06-12 23:15:27
 * @FilePath: /repo/assets/js/tailwind.config.js
 * @Description:
 *
 * Copyright (c) 2026 by Zhooo, All Rights Reserved.
 */
window.tailwind = {
  config: {
    theme: {
      extend: {
        colors: {
          primary: "#667eea",
          secondary: "#764ba2",
          accent: "#f093fb",
          "bg-dark": "#0a0a0f",
          "text-secondary": "#8b8b9a",
        },
        fontFamily: {
          sans: ["Noto Sans SC", "sans-serif"],
          mono: ["Space Mono", "monospace"],
        },
        animation: {
          float: "float 20s ease-in-out infinite",
          "spin-slow": "spin 8s linear infinite",
          "fade-in-up": "fadeInUp 0.8s ease-out",
        },
        keyframes: {
          float: {
            "0%, 100%": { transform: "translate(0, 0) scale(1)" },
            "25%": { transform: "translate(30px, -30px) scale(1.05)" },
            "50%": { transform: "translate(-20px, 20px) scale(0.95)" },
            "75%": { transform: "translate(20px, 10px) scale(1.02)" },
          },
          fadeInUp: {
            from: { opacity: "0", transform: "translateY(30px)" },
            to: { opacity: "1", transform: "translateY(0)" },
          },
        },
      },
    },
  },
};
