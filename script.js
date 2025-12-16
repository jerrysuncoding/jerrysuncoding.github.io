// ========================================
// DARK/LIGHT MODE TOGGLE
// ========================================
function initThemeToggle() {
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const body = document.body;

    if (!themeToggleBtn) {
        console.error('Theme toggle button not found');
        return;
    }

    // Check for saved theme preference or default to dark mode
    const currentTheme = localStorage.getItem('theme') || 'dark';
    if (currentTheme === 'light') {
        body.classList.add('light-mode');
    }

    // Toggle theme on button click
    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('light-mode');

        // Save preference
        const theme = body.classList.contains('light-mode') ? 'light' : 'dark';
        localStorage.setItem('theme', theme);
    });
}

// ========================================
// POPULATE PAGE WITH DATA
// ========================================

function initializePage() {
    // Personal information
    document.getElementById('statusText').textContent = portfolioData.personal.status;
    document.getElementById('name').textContent = portfolioData.personal.name;
    document.getElementById('bio').innerHTML = portfolioData.personal.bio;
    document.getElementById('emailText').textContent = portfolioData.personal.email;

    // Social links
    document.getElementById('githubLink').href = portfolioData.social.github;
    document.getElementById('linkedinLink').href = portfolioData.social.linkedin;

    // Latest experience
    document.getElementById('companyName').textContent = portfolioData.experience.company;
    document.getElementById('jobTitle').textContent = portfolioData.experience.position;
    document.getElementById('workPeriod').textContent = portfolioData.experience.period;
    document.getElementById('jobDescription').textContent = portfolioData.experience.description;

    // Work tech stack
    const workTechStack = document.getElementById('workTechStack');
    portfolioData.experience.techStack.forEach(tech => {
        const badge = document.createElement('span');
        badge.className = 'badge';
        badge.textContent = tech;
        workTechStack.appendChild(badge);
    });

    // Education
    const educationList = document.getElementById('educationList');
    portfolioData.education.forEach(edu => {
        const eduItem = document.createElement('div');
        eduItem.className = 'education-item';
        eduItem.innerHTML = `
            <h4 class="school-name">${edu.school}</h4>
            <p class="degree">${edu.degree}</p>
            <p class="education-period">${edu.period}</p>
        `;
        educationList.appendChild(eduItem);
    });

    // Tech stack with 2x2 grid layout
    const techStackGrid = document.getElementById('techStackGrid');

    // Create each category and append directly to grid
    const categories = [
        { label: 'Languages', icon: 'code-2', data: portfolioData.techStack.languages, class: 'languages' },
        { label: 'Frontend', icon: 'monitor', data: portfolioData.techStack.frontend, class: 'frontend' },
        { label: 'Backend', icon: 'server', data: portfolioData.techStack.backend, class: 'backend' },
        { label: 'Tools & DevOps', icon: 'wrench', data: portfolioData.techStack.tools, class: 'tools' }
    ];

    categories.forEach(cat => {
        const categoryDiv = createTechCategory(cat.label, cat.icon, cat.data, cat.class);
        techStackGrid.appendChild(categoryDiv);
    });

    // Projects
    const projectsList = document.getElementById('projectsList');
    portfolioData.projects.forEach(project => {
        const projectCard = createProjectCard(project);
        projectsList.appendChild(projectCard);
    });

    // Footer
    document.getElementById('footerText').textContent = portfolioData.footer;

    // Re-initialize icons after dynamic content
    setTimeout(() => {
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }, 100);
}

// ========================================
// HELPER: CREATE TECH CATEGORY
// ========================================
function createTechCategory(label, iconName, technologies, categoryClass) {
    const categoryDiv = document.createElement('div');
    categoryDiv.className = 'tech-category';

    const headerDiv = document.createElement('div');
    headerDiv.className = 'category-header';

    // Create icon element with category-specific color
    const iconElement = document.createElement('i');
    iconElement.setAttribute('data-lucide', iconName);
    iconElement.className = `category-icon ${categoryClass}`;

    // Create label element
    const labelDiv = document.createElement('div');
    labelDiv.className = 'category-label';
    labelDiv.textContent = label;

    headerDiv.appendChild(iconElement);
    headerDiv.appendChild(labelDiv);

    const tagsDiv = document.createElement('div');
    tagsDiv.className = 'tech-tags';

    technologies.forEach(tech => {
        const badge = document.createElement('span');
        badge.className = `tech-badge ${categoryClass}`;

        // Create icon element for badge
        const badgeIcon = document.createElement('i');
        badgeIcon.setAttribute('data-lucide', tech.icon);

        // Create text span
        const badgeText = document.createElement('span');
        badgeText.textContent = tech.name;

        badge.appendChild(badgeIcon);
        badge.appendChild(badgeText);
        tagsDiv.appendChild(badge);
    });

    categoryDiv.appendChild(headerDiv);
    categoryDiv.appendChild(tagsDiv);

    return categoryDiv;
}

// ========================================
// HELPER: CREATE PROJECT CARD
// ========================================
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';

    // Header with icon and link
    const header = document.createElement('div');
    header.className = 'project-header';

    const iconDiv = document.createElement('div');
    iconDiv.className = 'project-icon';
    const icon = document.createElement('i');
    icon.setAttribute('data-lucide', 'box');
    iconDiv.appendChild(icon);

    const link = document.createElement('a');
    link.href = project.link;
    link.className = 'project-link';
    const linkIcon = document.createElement('i');
    linkIcon.setAttribute('data-lucide', 'arrow-up-right');
    link.appendChild(linkIcon);

    header.appendChild(iconDiv);
    header.appendChild(link);

    // Title
    const title = document.createElement('h3');
    title.className = 'project-title';
    title.textContent = project.title;

    // Description
    const description = document.createElement('p');
    description.className = 'project-description';
    description.textContent = project.description;

    // Tech stack tags
    const tags = document.createElement('div');
    tags.className = 'project-tags';
    project.techStack.forEach(tech => {
        const badge = document.createElement('span');
        badge.className = 'badge';
        badge.textContent = tech;
        tags.appendChild(badge);
    });

    // Assemble card
    card.appendChild(header);
    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(tags);

    return card;
}

// ========================================
// EMAIL COPY FUNCTIONALITY
// ========================================
function copyEmail() {
    const email = portfolioData.personal.email;

    // Copy to clipboard
    navigator.clipboard.writeText(email).then(() => {
        const btn = document.getElementById('emailBtn');
        const txt = document.getElementById('emailText');

        // Show "Copied!" feedback
        txt.textContent = "Copied!";
        btn.classList.add('copied');

        // Reset after 2 seconds
        setTimeout(() => {
            txt.textContent = email;
            btn.classList.remove('copied');
        }, 1000);
    }).catch(err => {
        console.error('Failed to copy email:', err);
    });
}

// ========================================
// INITIALIZE ON PAGE LOAD
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    initializePage();
    initThemeToggle();

    // Initialize Lucide icons after everything is loaded
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});