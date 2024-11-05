function openTab(event, tabId) {
    // Remove active class from all tab links
    let tabLinks = document.getElementsByClassName("tab-link");
    for (let link of tabLinks) {
        link.classList.remove("active");
    }
    // Hide all tab content
    let tabContents = document.getElementsByClassName("tab-content");
    for (let content of tabContents) {
        content.classList.remove("active");
    }

    // Add active class to the cliked tab and its content
    event.currentTarget.classList.add("active");
    document.getElementById(tabId).classList.add("active");
}