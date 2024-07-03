const V = '1.0.0.0';
document.getElementById("version").innerHTML = 'v' + V;
document.getElementById("author").innerHTML = 'Code Master Ltd.';

const preview = document.getElementById('preview-container');

// Function to toggle between dark and light mode
function toggleTheme() {
    var body = document.body;
    body.classList.toggle("dark-mode");
    
    var containers = document.querySelectorAll('.container, .challenge, .preview-container, footer, .save, .previewBtn, .version, .author, .html, .css');
    containers.forEach(container => {
        container.classList.toggle("dark-mode");
    });
}

// Function to save HTML code to index.html
function saveHTML() {
    var htmlContent = document.getElementById('html-editor').value;
    var blob = new Blob([htmlContent], { type: 'text/html' });
    var link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'index.html';
    link.click();
    window.URL.revokeObjectURL(link.href);
}

// Function to save CSS code to styles.css
function saveCSS() {
    var cssContent = document.getElementById('css-editor').value;
    var blob = new Blob([cssContent], { type: 'text/css' });
    var link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'styles.css';
    link.click();
    window.URL.revokeObjectURL(link.href);
}

// Function to check HTML code
function checkHTML() {
    var userCode = document.getElementById('html-editor').value.trim();
    
    if (userCode) {
        updatePreview('html-preview', userCode);
        preview.style.display = 'block';
        // Implement code to proceed to next challenge or level
    }
}

// Function to check CSS code
function checkCSS() {
    var userCode = document.getElementById('css-editor').value.trim();
    
    if (userCode) {
        updatePreview('html-preview', document.getElementById('html-editor').value.trim()); // Update HTML preview with current HTML
        updatePreview('css-preview', userCode);
        preview.style.display = 'block';
        // Implement code to proceed to next challenge or level
    }
}

// Function to update preview based on language
function updatePreview(language, code) {
    var previewFrame = document.getElementById('preview-frame');
    var previewDoc = previewFrame.contentDocument || previewFrame.contentWindow.document;

    switch (language) {
        case 'html-preview':
            previewDoc.open();
            previewDoc.write('<html><head><style>' + document.getElementById('css-editor').value.trim() + '</style></head><body>' + code + '</body></html>');
            document.getElementById('preview-frame').scrollIntoView({ behavior: 'smooth', block: 'end' });
            previewDoc.close();
            break;
        case 'css-preview':
            previewDoc.open();
            previewDoc.write('<html><head><style>' + code + '</style></head><body>' + document.getElementById('html-editor').value.trim() + '</body></html>');
            document.getElementById('preview-frame').scrollIntoView({ behavior: 'smooth', block: 'end' });
            previewDoc.close();
            break;
        default:
            break;
    }
}

document.getElementById('title').textContent = `Learn to Code Game | Code Master`;