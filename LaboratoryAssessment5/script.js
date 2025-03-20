document.addEventListener("DOMContentLoaded", () => {
    fetch("https://github.com/enricobriones20/LaboratoryAssesment5")
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById("projects-container");
            data.slice(0, 6).forEach(repo => {
                const project = document.createElement("div");
                project.innerHTML = `<h3>${repo.name}</h3><p>${repo.description || 'No description'}</p><a href="${repo.html_url}" target="_blank">View on GitHub</a>`;
                container.appendChild(project);
            });
        })
        .catch(error => console.error("Error fetching GitHub repositories:", error));

    document.getElementById("contact-form").addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Form submitted! We will get back to you soon.");
    });
});
