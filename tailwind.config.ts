import type { Config } from 'tailwindcss'
export default <Partial<Config>>{
    theme: {
        extend: {
            height: {
                '128': '28.35rem',
            },
            colors: {
                primary: "6867C5",
            },
            container: {
                screens: {
                    sm: "470px",
                    md: "598px",
                    lg: "854px",
                    xl: "1110px",
                },
                center: true,
            },
            keyframes: {
                wiggle: {
                  '0%, 100%': { transform: 'rotate(-3deg)' },
                  '50%': { transform: 'rotate(3deg)' },
                }
            },
            animation: {
                wiggle: 'wiggle 1s ease-in-out infinite',
            }
        },
    }
}