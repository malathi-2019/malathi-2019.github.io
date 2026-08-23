function toggleMenu() {
    const navLinks = document.getElementById("navLinks");

    navLinks.classList.toggle("show");
const statCircles = document.querySelectorAll(".stat-circle");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            statCircles.forEach((circle, index) => {

                setTimeout(() => {
                    circle.classList.add("show");
                }, index * 300);

            });

        }

    });

}, {
    threshold: 0.3
});


const advocateSection = document.querySelector(".advocate-profile");

if (advocateSection) {
    observer.observe(advocateSection);
}
}
