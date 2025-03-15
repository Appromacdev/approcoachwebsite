import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyles = createGlobalStyle`
  :root {
    --primary: ${theme.colors.primary};
    --secondary: ${theme.colors.secondary};
    --dark: ${theme.colors.dark};
    --light: ${theme.colors.light};
    --accent: ${theme.colors.accent};
    --background: ${theme.colors.background};
    --text: ${theme.colors.text};
    --error: ${theme.colors.error};
    --success: ${theme.colors.success};
    --heading-font: ${theme.fonts.heading};
    --body-font: ${theme.fonts.body};
    --shadow-small: ${theme.shadows.small};
    --shadow-medium: ${theme.shadows.medium};
    --shadow-large: ${theme.shadows.large};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: var(--body-font);
    font-size: 16px;
    line-height: 1.6;
    color: var(--text);
    background-color: var(--background);
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--heading-font);
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1rem;
    color: var(--dark);
  }

  h1 {
    font-size: 3.5rem;
    
    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }

  h2 {
    font-size: 2.8rem;
    
    @media (max-width: 768px) {
      font-size: 2.2rem;
    }
  }

  h3 {
    font-size: 2rem;
    
    @media (max-width: 768px) {
      font-size: 1.8rem;
    }
  }

  p {
    margin-bottom: 1rem;
    line-height: 1.7;
  }

  a {
    color: var(--primary);
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      color: var(--accent);
    }
  }

  img {
    max-width: 100%;
    height: auto;
  }

  .container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
  }

  section {
    padding: 80px 0;
    position: relative;
  }

  .app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    position: relative;
  }

  main {
    flex: 1;
    padding-top: 0; /* Adjusted for the fixed navbar */
  }

  /* Scrollbar Styling */
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(var(--primary), var(--secondary));
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(var(--primary), var(--accent));
  }

  /* Selection styling */
  ::selection {
    background-color: var(--primary);
    color: white;
  }

  /* Animations */
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    section {
      padding: 60px 0;
    }
  }
  
  /* Focus styles for accessibility */
  :focus {
    outline: 3px solid rgba(10, 132, 255, 0.5);
    outline-offset: 2px;
  }
  
  /* Button reset */
  button {
    border: none;
    background: none;
    font-family: inherit;
    cursor: pointer;
  }
  
  /* List styling */
  ul, ol {
    padding-left: 1.5rem;
    margin-bottom: 1rem;
  }
  
  li {
    margin-bottom: 0.5rem;
  }
  
  /* Transitions for smooth hover effects */
  a, button, input, textarea {
    transition: all 0.3s ease;
  }
`;