function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });

        section.classList.add('fade-in');

        setTimeout(() => {
            section.classList.remove('fade-in');
        }, 1000); 
    }
}
