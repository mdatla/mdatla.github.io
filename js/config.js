// Website Configuration
const config = {
    // Site Information
    siteName: "Maanas Varma Datla",
    siteDescription: "Software Developer & Tech Enthusiast",
    siteEmail: "your.email@example.com",
    
    // Social Links
    social: {
        github: "https://github.com/yourusername",
        linkedin: "https://linkedin.com/in/yourprofile",
        twitter: "https://twitter.com/yourhandle"
    },
    
    // Navigation Links
    navLinks: [
        { text: "Home", href: "index.html" },
        { text: "Resume", href: "resume.html" },
        { text: "Blog", href: "blog.html" },
        { text: "Contact", href: "#contact" }
    ],
    
    // Copyright Information
    copyright: {
        year: new Date().getFullYear(),
        text: "All rights reserved."
    }
};

// Function to update common elements across pages
function updateCommonElements() {
    // Update site name in various places
    const siteNameElements = document.querySelectorAll('[data-site-name]');
    siteNameElements.forEach(element => {
        element.textContent = config.siteName;
    });

    // Update navigation links
    const navLinksContainer = document.querySelector('.nav-links');
    if (navLinksContainer) {
        navLinksContainer.innerHTML = config.navLinks.map(link => `
            <li><a href="${link.href}" class="${window.location.pathname.includes(link.href) ? 'active' : ''}">${link.text}</a></li>
        `).join('');
    }

    // Update footer copyright
    const footerCopyright = document.querySelector('[data-copyright]');
    if (footerCopyright) {
        footerCopyright.innerHTML = `&copy; ${config.copyright.year} ${config.siteName}. ${config.copyright.text}`;
    }

    // Update contact information
    const emailLink = document.querySelector('[data-email]');
    if (emailLink) {
        emailLink.href = `mailto:${config.siteEmail}`;
        emailLink.textContent = config.siteEmail;
    }

    // Update social links
    const socialLinks = document.querySelectorAll('[data-social]');
    socialLinks.forEach(link => {
        const platform = link.getAttribute('data-social');
        if (config.social[platform]) {
            link.href = config.social[platform];
        }
    });
}

// Run when DOM is loaded
document.addEventListener('DOMContentLoaded', updateCommonElements); 