const maxCharCount = 250;

function updateCharacterCount() {
    const textarea = document.getElementById("message");
    const charCounter = document.getElementById("charCounter");
    const container = document.getElementById("textarea-container");
    
    const charCount = textarea.value.length;
    charCounter.textContent = `${charCount} / ${maxCharCount}`;

    if (charCount >= maxCharCount) {
        container.classList.add("limit-reached");
    } else {
        container.classList.remove("limit-reached");
    }
}