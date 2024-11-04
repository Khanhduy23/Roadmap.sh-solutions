document.addEventListener("DOMContentLoaded", () => {
    const emailLinks = document.querySelectorAll("a");

    emailLinks.forEach((emailLink) => {
        emailLink.addEventListener("click", (event) => {
            event.preventDefault();
            alert("Email feature is disabled for demo purposes.");
        });
    });

    const themeToggleButton = document.getElementById('theme-toggle');
    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', function(){
            document.body.classList.toggle('dark-mode');

            const icon = this.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-sun');
                icon.classList.toggle('fa-moon');
            }
        });
    }
});
