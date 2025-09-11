// Load sections dynamically
function loadAllSections() {
    // Load About section
    fetch('sections/about.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('about-section-container').innerHTML = html;
        })
        .catch(error => console.error('Error loading about section:', error));

    // Load News section
    fetch('sections/news.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('news-section-container').innerHTML = html;
        })
        .catch(error => console.error('Error loading news section:', error));

    // Load Research section
    fetch('sections/research.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('research-section-container').innerHTML = html;
        })
        .catch(error => console.error('Error loading research section:', error));

    // Load Publications section
    fetch('sections/publications.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('publications-section-container').innerHTML = html;
        })
        .catch(error => console.error('Error loading publications section:', error));

    // Load Mentoring section
    fetch('sections/mentoring.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('mentoring-section-container').innerHTML = html;
        })
        .catch(error => console.error('Error loading mentoring section:', error));

    // Load Others section
    fetch('sections/others.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('others-section-container').innerHTML = html;
        })
        .catch(error => console.error('Error loading others section:', error));
}