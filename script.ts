// script.ts


function generateResume() {
    // Get user input
    const names = document.getElementById('name') as HTMLInputElement | null;
    const  name = names ? names.value : ""

    const emails = document.getElementById('email') as HTMLInputElement | null;
    const email = emails ? emails.value : "" ;

    const phones = document.getElementById('phone') as HTMLInputElement | null;
    const phone = phones ? phones.value : "" ;

    const educations = document.getElementById('education') as HTMLInputElement | null;
    const education = educations ? educations.value : "";

    const works = document.getElementById('work') as HTMLInputElement | null;
    const work = works ? works.value : "";

    const skillsElement = document.getElementById('skills') as HTMLInputElement | null;
    const skills = skillsElement ? skillsElement.value : "";

    // Create resume preview HTML
    const resumeHTML = `
        <h2><span contenteditable="true">${name}</span></h2>
        <p>Email: <b><span contenteditable="true">${email}</span></b></p>
        <p>Phone: <b><span contenteditable="true">${phone}</span></b></p>

        <h3>Education</h3>
        <p contenteditable="true">${education}</p>

        <h3>Work Experience</h3>
        <p contenteditable="true">${work}</p>

        <h3>Skills</h3>
        <p contenteditable="true">${skills.split(',').map(skill => `<span>${skill.trim()}</span>`).join(', ')}</p>`;

    // Insert the HTML into the resume preview section

    const resumePreviewElement = document.getElementById('resume-preview');
        if (resumePreviewElement) {
        resumePreviewElement.innerHTML = resumeHTML;
        };
}


