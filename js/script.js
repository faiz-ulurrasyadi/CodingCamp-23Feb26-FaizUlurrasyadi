const nameInput = document.getElementById('name');
const bornDateInput = document.getElementById('born-date');
const messageInput = document.getElementById('message');
const resultForm = document.getElementById('result-form');
const submitBtn = document.getElementById('submit-btn');
const projectDesc = document.getElementById('project-desc');
const projectDescContainer = document.getElementById('project-desc-container');
const contactForm = document.getElementById('contact-form');
const projects = document.querySelectorAll('#list-project .project');
const userCallname = document.getElementById('user-callname');
const nameModal = document.getElementById('nameModal');
const welcomeTitle = document.getElementById('welcome-title');

contactForm.addEventListener('submit', e => e.preventDefault());
submitBtn.addEventListener('click', () => {
    const gender = document.querySelector('label[for="jenis-kelamin"] input[type="radio"]:checked');
    resultForm.innerHTML = `
    <p class="text-white"><strong>Current Time:</strong> ${new Date()}</p>
    <br/>
    <p class="text-white"><strong>Name:</strong> ${nameInput.value}</p>
    <p class="text-white"><strong>Birth Date:</strong> ${bornDateInput.value}</p>
    <p class="text-white"><strong>Gender:</strong> ${gender.value}</p>
    <p class="text-white"><strong>Message:</strong> ${messageInput.value}</p>`;
}) 

projects.forEach(project => {
    project.addEventListener('click', (p) => {
        const imgSrc = project.querySelector('img')
        const paragraph = project.querySelector('p')
        const title = project.querySelector('h3')
        projectDescContainer.querySelector('h3').textContent = title.textContent;
        projectDescContainer.querySelector('p').textContent = paragraph.textContent;
        projectDescContainer.querySelector('img').src = imgSrc.src;
        projectDesc.hidden = false;
    })
})

projectDescContainer.addEventListener('click', () => {
    projectDesc.hidden = true;
})

userCallname.addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    welcomeTitle.textContent += `${userCallname.value}`;
    nameModal.hidden = true;
  }
});