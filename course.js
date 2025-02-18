// Function to update progress bar and text percentage
function updateProgress(courseId, percentage) {
    const progressBar = document.getElementById(courseId + '-progress');
    progressBar.style.width = percentage + '%';
    progressBar.textContent = percentage + '%';
}

// Update progress for all courses
updateProgress('web-development', 85);      // Update "Web Development" progress to 85%
updateProgress('data-science', 60);         // Update "Data Science" progress to 60%
updateProgress('mobile-app-development', 30);  // Update "Mobile App Development" progress to 30%
updateProgress('cybersecurity', 80);        // Update "Cybersecurity" progress to 80%
updateProgress('ai', 40);                   // Update "Artificial Intelligence" progress to 40%
updateProgress('blockchain', 60);           // Update "Blockchain & Cryptocurrency" progress to 60%
updateProgress('game-development', 20);     // Update "Game Development" progress to 20%
updateProgress('digital-marketing', 90);    // Update "Digital Marketing" progress to 90%