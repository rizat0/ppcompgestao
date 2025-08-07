// Alterna entre seções da SPA
function showSection(sectionName) {
    const allSections = document.querySelectorAll('.section');
    allSections.forEach(section => {
        if (section.dataset.section === sectionName) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
}

// Ativa menu lateral retrátil
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
    document.body.classList.toggle('sidebar-open');
}

// Troca visual ativo no menu e mostra seção correspondente
document.querySelectorAll('.sidebar a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = link.dataset.target;
        showSection(target);

        document.querySelectorAll('.sidebar a').forEach(a => a.classList.remove('active'));
        link.classList.add('active');
    });
});

// Botões internos com data-target (como "Saiba mais")
document.querySelectorAll('[data-target]').forEach(btn => {
    btn.addEventListener('click', () => {
        const target = btn.dataset.target;
        showSection(target);

        // marca o menu lateral se existir
        const menuLink = document.querySelector(`.sidebar a[data-target="${target}"]`);
        if (menuLink) {
            document.querySelectorAll('.sidebar a').forEach(a => a.classList.remove('active'));
            menuLink.classList.add('active');
        }
    });
});
