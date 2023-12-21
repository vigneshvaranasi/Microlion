document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.hs-collapse-toggle');
    const collapseElement = document.querySelector('#navbar-collapse-with-animation');

    toggleButton.addEventListener('click', function () {
        collapseElement.classList.toggle('hidden');
    });
});