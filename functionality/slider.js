const prev = document.getElementById('prev');
const next = document.getElementById('next');
const projects = document.querySelectorAll('.project');
let index = 0;

next.addEventListener('click', () => {
    index = (index + 1) % projects.length;
    console.log(index);
    updateSlider();
});

prev.addEventListener('click', () => {
    index = (index - 1 + projects.length) % projects.length;
    console.log(index);
    updateSlider();
});

function updateSlider() {
    projects.forEach((project, i) => {
        project.style.display = i === index ? 'flex' : 'none';
    });
}

updateSlider(); // Initial state
