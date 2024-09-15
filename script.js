// script.ts
function generateResume() {
    // Get user input
    var names = document.getElementById('name');
    var name = names ? names.value : "";
    var emails = document.getElementById('email');
    var email = emails ? emails.value : "";
    var phones = document.getElementById('phone');
    var phone = phones ? phones.value : "";
    var educations = document.getElementById('education');
    var education = educations ? educations.value : "";
    var works = document.getElementById('work');
    var work = works ? works.value : "";
    var skillsElement = document.getElementById('skills');
    var skills = skillsElement ? skillsElement.value : "";
    // Create resume preview HTML
    var resumeHTML = "\n        <h2><span contenteditable=\"true\">".concat(name, "</span></h2>\n        <p>Email: <b><span contenteditable=\"true\">").concat(email, "</span></b></p>\n        <p>Phone: <b><span contenteditable=\"true\">").concat(phone, "</span></b></p>\n\n        <h3>Education</h3>\n        <p contenteditable=\"true\">").concat(education, "</p>\n\n        <h3>Work Experience</h3>\n        <p contenteditable=\"true\">").concat(work, "</p>\n\n        <h3>Skills</h3>\n        <p contenteditable=\"true\">").concat(skills.split(',').map(function (skill) { return "<span>".concat(skill.trim(), "</span>"); }).join(', '), "</p>");
    // Insert the HTML into the resume preview section
    var resumePreviewElement = document.getElementById('resume-preview');
    if (resumePreviewElement) {
        resumePreviewElement.innerHTML = resumeHTML;
    }
    ;
}
