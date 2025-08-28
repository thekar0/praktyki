// footer.js
document.addEventListener("DOMContentLoaded", function() {
    fetch("assets/footer.html")
        .then(response => response.text())
        .then(html => {
            document.getElementById("footer_container").innerHTML = html;
        })
        .catch(err => console.error("Failed to load footer:", err));
});
