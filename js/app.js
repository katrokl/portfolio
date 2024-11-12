const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.control');

function PageTransitions() {
    // Button click active class
    sectBtns.forEach((btn) => {
        btn.addEventListener('click', function () {
            // Remove 'active-btn' from any currently active button
            sectBtns.forEach((button) => button.classList.remove('active-btn'));
            this.classList.add('active-btn'); // Add 'active-btn' to the clicked button

            const id = this.dataset.id; // Get the data-id attribute of the clicked button
            if (id) {
                // Hide all sections
                sections.forEach((section) => {
                    section.classList.remove('active');
                });

                // Display the selected section
                const selectedSection = document.getElementById(id);
                if (selectedSection) {
                    selectedSection.classList.add('active');
                }
            }
        });
    });
}

PageTransitions();
