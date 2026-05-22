function showSection(sectionId) {
    // 1. Nascondi tutte le sezioni
    const sections = document.querySelectorAll('.section-content');
    sections.forEach(sec => {
        sec.classList.add('hidden-section');
        sec.classList.remove('fade-in');
    });
    
    // 2. Rimuovi stato attivo dai link
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => link.classList.remove('active', 'text-blue-600'));

    // 3. Mostra la sezione specifica con animazione
    const activeSection = document.getElementById('section-' + sectionId);
    if (activeSection) {
        activeSection.classList.remove('hidden-section');
        // Timeout per riattivare l'animazione
        setTimeout(() => {
            activeSection.classList.add('fade-in');
        }, 10);
        
        // Torna in cima dolcemente
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // 4. Aggiorna lo stato visivo della navbar
    const activeLink = document.getElementById('link-' + sectionId);
    if (activeLink) {
        activeLink.classList.add('active', 'text-blue-600');
    }
}

// Inizializzazione al caricamento
window.addEventListener('DOMContentLoaded', () => {
    console.log("Blog caricato correttamente.");
    showSection('index');
});