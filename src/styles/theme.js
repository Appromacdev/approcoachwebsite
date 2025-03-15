export const theme = {
    colors: {
        primary: '#0A84FF',       // Brighter blue for main accent
        secondary: '#091428',     // Dark blue from League of Legends
        dark: '#0A1428',          // Darker variant
        light: '#F8F9FA',         // Light background
        accent: '#C89B3C',        // Gold accent (League's gold)
        background: '#FFFFFF',    // White background
        text: '#333333',          // Main text color
        error: '#FF4444',         // Error red
        success: '#00C853',       // Success green
        muted: '#6C757D',         // Muted text color
        border: '#E9ECEF',        // Border color
        darkGradient: 'linear-gradient(135deg, #091428 0%, #0A1428 100%)',
        primaryGradient: 'linear-gradient(135deg, #0A84FF 0%, #0063CC 100%)',
        accentGradient: 'linear-gradient(135deg, #C89B3C 0%, #A17D33 100%)',
    },
    fonts: {
        heading: "'Montserrat', sans-serif",
        body: "'Open Sans', sans-serif",
    },
    breakpoints: {
        mobile: '576px',
        tablet: '768px',
        desktop: '992px',
        large: '1200px',
    },
    shadows: {
        small: '0 2px 8px rgba(0, 0, 0, 0.1)',
        medium: '0 5px 15px rgba(0, 0, 0, 0.1)',
        large: '0 10px 30px rgba(0, 0, 0, 0.1)',
        primaryShadow: '0 5px 15px rgba(10, 132, 255, 0.2)',
        accentShadow: '0 5px 15px rgba(200, 155, 60, 0.2)',
    },
    transitions: {
        standard: 'all 0.3s ease',
        fast: 'all 0.2s ease',
        slow: 'all 0.5s ease',
        bounce: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    },
    borderRadius: {
        small: '4px',
        medium: '8px',
        large: '12px',
        circle: '50%',
    },
    spacing: {
        xs: '0.25rem',    // 4px
        sm: '0.5rem',     // 8px
        md: '1rem',       // 16px
        lg: '1.5rem',     // 24px
        xl: '2rem',       // 32px
        xxl: '3rem',      // 48px
        xxxl: '5rem',     // 80px
    },
    animation: {
        fadeIn: 'fadeIn 0.5s ease-out',
        slideUp: 'slideUp 0.5s ease-out',
        pulse: 'pulse 2s infinite ease-in-out',
        float: 'float 6s infinite ease-in-out',
    },
    zIndex: {
        base: 1,
        above: 2,
        dropdown: 10,
        modal: 100,
        toast: 1000,
    }
};