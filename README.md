# Portfolio Website - Santhosh Kumar

A clean, modern, and responsive personal portfolio website designed for an AI & Data Science enthusiast. This project showcases my skills, projects, and professional background.

## Features

- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices.
- **Sticky Navbar**: Navigation bar remains accessible while scrolling, with a clean "Santhosh Kumar" logo.
- **Modern UI**: Dark-themed aesthetic with teal/green accents (`#00A78E`) and smooth reveal animations.
- **Hero Section**: Features social media links (LinkedIn, GitHub, Mail) and a resume download button.
- **Project Showcase**: Cards with "Source" buttons linking directly to GitHub repositories, styled with a custom green outline.
- **Functional Contact Form**: Integrated with **EmailJS** for serverless email delivery directly to your inbox.

## Project Structure

```
/
├── index.html      # Main HTML structure
├── css/
│   └── style.css   # Custom styling (CSS variables, animations, responsiveness)
├── js/
│   └── script.js   # Logic for sticky nav, scroll spy, and EmailJS integration
└── README.md       # Project documentation
```

## Configuration (EmailJS)

The contact form is powered by EmailJS. To make it work for your own email:

1.  **Sign Up**: Create an account at [EmailJS.com](https://www.emailjs.com/).
2.  **Create Service**: Add a new email service (e.g., Gmail).
3.  **Create Template**: Create an email template with the following variables:
    *   `{{name}}`
    *   `{{email}}`
    *   `{{message}}`
4.  **Update Keys**: Open `index.html` and `js/script.js` to replace the keys:
    *   **Public Key**: In `index.html` (line ~21)
    *   **Service ID**: In `js/script.js` (line ~137)
    *   **Template ID**: In `js/script.js` (line ~138)

*Note: The current project is pre-configured with the user's keys.*

## How to Run Locally

1.  Clone this repository.
2.  Open `index.html` in your web browser.
3.  (Optional) Use a robust local server like "Live Server" in VS Code for the best experience.

## Deployment

This website is ready for generic static hosting services like **GitHub Pages** or **Netlify**.

### GitHub Pages
1.  Push the code to a GitHub repository.
2.  Go to **Settings** > **Pages**.
3.  Select the `main` branch and `/ (root)` folder.
4.  Save.
