/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#111827',
                surface: '#1F2937',
                text: '#F9FAFB',
                primary: '#60A5FA',
                secondary: '#34D399',
                border: '#374151',
                muted: '#6B7280',
                accent: '#14b8a6',
            }
        },
    },
    plugins: [],
}
