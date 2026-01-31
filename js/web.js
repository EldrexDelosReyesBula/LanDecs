        // Header scroll effect
        window.addEventListener('scroll', function() {
            const header = document.getElementById('header');
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileMenuContainer = document.getElementById('mobileMenuContainer');
        const header = document.getElementById('header');

        mobileMenuBtn.addEventListener('click', function() {
            mobileMenuContainer.classList.toggle('show');
            mobileMenuBtn.classList.toggle('active');
            header.classList.toggle('menu-open');
            
            // Change icon based on menu state
            if (mobileMenuContainer.classList.contains('show')) {
                mobileMenuBtn.innerHTML = '<i class="fas fa-times"></i>';
                document.body.style.overflow = 'hidden';
            } else {
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                document.body.style.overflow = '';
            }
        });

        // Close mobile menu when clicking on a link
        const mobileMenuLinks = document.querySelectorAll('.mobile-menu-nav a');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenuContainer.classList.remove('show');
                mobileMenuBtn.classList.remove('active');
                header.classList.remove('menu-open');
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                document.body.style.overflow = '';
            });
        });

        // Close mobile menu when clicking outside
        mobileMenuContainer.addEventListener('click', function(e) {
            if (e.target === mobileMenuContainer) {
                mobileMenuContainer.classList.remove('show');
                mobileMenuBtn.classList.remove('active');
                header.classList.remove('menu-open');
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                document.body.style.overflow = '';
            }
        });

        // Smooth Scrolling for Anchor Links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();

                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Animation on Scroll
        function animateOnScroll() {
            const elements = document.querySelectorAll('.animate-on-scroll');

            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.3;
                const delay = element.dataset.delay || 0;

                if (elementPosition < screenPosition) {
                    setTimeout(() => {
                        element.classList.add('animated');
                    }, delay * 1000);
                }
            });
        }

        // Initialize animations on load
        window.addEventListener('load', animateOnScroll);
        // Check for new elements on scroll
        window.addEventListener('scroll', animateOnScroll);

        // Hero image parallax effect
        const heroImage = document.querySelector('.hero-image img');

        if (heroImage && window.innerWidth > 768) {
            window.addEventListener('mousemove', (e) => {
                const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
                const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
                heroImage.style.transform = `perspective(1000px) rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
            });
        }

        // Enhanced button ripple effect
        document.querySelectorAll('.btn').forEach(button => {
            button.addEventListener('click', function(e) {
                const x = e.clientX - e.target.getBoundingClientRect().left;
                const y = e.clientY - e.target.getBoundingClientRect().top;
                
                const ripple = document.createElement('span');
                ripple.style.left = `${x}px`;
                ripple.style.top = `${y}px`;
                ripple.classList.add('ripple');
                
                this.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });
