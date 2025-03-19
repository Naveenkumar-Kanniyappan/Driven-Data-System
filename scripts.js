
    document.addEventListener('DOMContentLoaded', () => {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.forEach(nav => nav.classList.remove('active'));
                link.classList.add('active');
            });
        });

        window.addEventListener('scroll', () => {
            const sections = document.querySelectorAll('section');
            let scrollPosition = window.scrollY;

            sections.forEach(section => {
                const sectionTop = section.offsetTop - 80; 
                const sectionHeight = section.offsetHeight;

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    const id = section.getAttribute('id');
                    navLinks.forEach(nav => {
                        nav.classList.remove('active');
                        if (nav.getAttribute('href') === `#${id}`) {
                            nav.classList.add('active');
                        }
                    });
                }
            });
        });
    });
