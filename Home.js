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
/* Contact Us Google Sheet Start */
function submitForm() {
    var form = document.getElementById("myForm");
    var formData = new FormData(form);
    
    fetch('https://script.google.com/macros/s/AKfycbwrJ7FqVZTVdAKPE_0dwJMUiluX3ynd8vAem6rnZ2wVSIWC0O42rk1lLceMKASmw84Xnw/exec', {
      method: 'POST',
      body: formData
    })
    .then(response => {
        console.log('Success:', response);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
/* Contact Us Google Sheet End */