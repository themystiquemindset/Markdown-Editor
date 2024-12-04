// script.js

// Initialize EasyMDE
const easyMDE = new EasyMDE({
    element: document.getElementById('markdown-editor'),
    spellChecker: false,
    autosave: {
        enabled: true,
        uniqueId: "markdown-editor",
        delay: 1000,
    },
    toolbar: [
        "bold", "italic", "heading", "|",
        "quote", "unordered-list", "ordered-list", "|",
        "link", "image", "code", "|",
        "preview", "side-by-side", "fullscreen", "|",
        "guide"
    ],
    status: false, // Disable the status bar
    placeholder: "Type your markdown here...",
});

// Function to render Markdown to HTML
function renderPreview() {
    const previewContent = document.getElementById('preview-content');
    const markdownText = easyMDE.value();
    previewContent.innerHTML = easyMDE.options.previewRender(markdownText);
}

// Initial render
renderPreview();

// Update preview on content change
easyMDE.codemirror.on("change", () => {
    renderPreview();
});
