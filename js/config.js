// Website Configuration
const config = {
    // Site Information
    siteName: "Maanas Varma Datla",
    siteDescription: "Software Engineer, Data Engineer and a whole lot of other things",
    siteEmail: "d.maanas@gmail.com",
    
    // Site Assets
    assets: {
        logo: "images/logo.jpg",
        profile: "images/profile.jpg"
    },
    
    // Social Links
    social: {
        github: "https://github.com/mdatla",
        linkedin: "https://www.linkedin.com/in/mdatla",
        bluesky: "https://bsky.app/profile/the-maanstr.bsky.social"
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

    // Update site description
    const siteDescriptionElements = document.querySelectorAll('[data-site-description]');
    siteDescriptionElements.forEach(element => {
        element.textContent = config.siteDescription;
    });

    // Update logo image
    const logoImages = document.querySelectorAll('[data-logo]');
    logoImages.forEach(img => {
        img.src = config.assets.logo;
        img.alt = config.siteName;
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