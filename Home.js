document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.hs-collapse-toggle');
    const collapseElement = document.querySelector('#navbar-collapse-with-animation');

    toggleButton.addEventListener('click', function () {
        collapseElement.classList.toggle('hidden');
    });
});

function smoothScrolls(target) {
    const targetElement = document.querySelector(target);
    const navbarHeight = document.querySelector('.nav').offsetHeight; // Adjust this line with the class or ID of your navbar

    if (targetElement) {
        const targetPosition = targetElement.offsetTop - navbarHeight;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 800;
        let start = null;

        function step(timestamp) {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
            if (progress < duration) {
                window.requestAnimationFrame(step);
            }
        }

        function easeInOutCubic(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t * t + b;
            t -= 2;
            return c / 2 * (t * t * t + 2) + b;
        }

        window.requestAnimationFrame(step);
    }
}
