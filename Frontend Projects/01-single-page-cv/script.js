document.addEventListener("DOMContentLoaded", () => {
    const emailLink = document.querySelector("address a");
    emailLink.addEventListener("click", (event) => {
        event.preventDefault();
        alert("Email feature is disabled for demo purposes.");
    });
});
