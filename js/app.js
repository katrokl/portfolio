const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allsections= document.querySelector('.main-content')

function PageTransitions(){
    //button click active class
    for(let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            if (currentBtn[0]) {
                currentBtn[0].classList.remove('active-btn');
            }
            sectBtn[i].classList.add('active-btn');
        });
    }

// Sections Active
allsections.addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    if (id) {
        // Fjerner 'active' fra andre knapper
        sectBtns.forEach((btn) => {
            btn.classList.remove('active');
        });
        e.target.classList.add('active');

        // Skjuler andre seksjoner
        sections.forEach((section) => {
            section.classList.remove('active');
        });

        // Legger til 'active' i den valgte seksjonen
        const selectedSection = document.getElementById(id);
        if (selectedSection) {
            selectedSection.classList.add('active');
        }
    }
});
}
PageTransitions()
