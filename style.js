document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent the default link behavior
            const destination = e.target.href;
            // Apply a temporary style change
            e.target.style.transition = 'color 0.3s';
            e.target.style.color = '#007bff';
            setTimeout(() => {
                window.location.href = destination; // Redirect after the style change
            }, 300);
        });
    });
});

window.addEventListener('load', () => {
    const loader = document.getElementById('loader-wrapper');
    loader.style.opacity = 0;
    loader.style.visibility = 'hidden';
    setTimeout(() => {
        loader.remove();
    }, 500);
});
