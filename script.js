// toggle burger menu 
const toggleBurgerMenu = () => {
    const burger = document.querySelector('.burger');
    const burgerLine = document.querySelectorAll('.burger_line');
    const navlinks = document.querySelector('.mobile_nav_div .header_nav');

    burger.addEventListener('click', (e) => {
        e.stopPropagation();

        burgerLine[0].classList.toggle('burger_line1');
        burgerLine[1].classList.toggle('burger_line2');
        burgerLine[2].classList.toggle('burger_line3');

        navlinks.classList.toggle('show_header_nav');
    });

    // Click event on the document
    document.documentElement.addEventListener('click', () => {
        // Close the navigation menu if it's open
        if (navlinks.classList.contains('show_header_nav')) {
            navlinks.classList.remove('show_header_nav');
            burgerLine.forEach(line => line.classList.remove('burger_line1', 'burger_line2', 'burger_line3'));
        }
    });
};

toggleBurgerMenu();
// 

//toggle FAQ accordion
const accordionToggle = () => {
    // Get all FAQ triggers
    const faqTriggers = document.querySelectorAll('.accordion_trigger');

    //Default expanded answer
    const defaultExpandedTrigger = faqTriggers[0];
    const defaultExpandedAnswer = defaultExpandedTrigger.parentElement.nextElementSibling;
    defaultExpandedAnswer.classList.add('show_faq_answer');
    defaultExpandedAnswer.setAttribute('aria-hidden', 'false');
    defaultExpandedTrigger.setAttribute('aria-expanded', 'true');

    // Click event listeners to each FAQ trigger
    faqTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {

            const faqAnswer = trigger.parentElement.nextElementSibling;

            // Close other answers
            faqTriggers.forEach(otherTrigger => {
                if (otherTrigger !== trigger) {
                    const otherAnswer = otherTrigger.parentElement.nextElementSibling;
                    otherAnswer.classList.remove('show_faq_answer');
                    otherAnswer.setAttribute('aria-hidden', 'true');
                    otherTrigger.setAttribute('aria-expanded', 'false');
                }
            });

            // Toggle the 'show_faq_answer' class on the FAQ answer
            faqAnswer.classList.toggle('show_faq_answer');

            // Toggle the 'aria-expanded' attribute on the trigger button
            const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
            trigger.setAttribute('aria-expanded', (!isExpanded).toString());

            // Toggle the 'aria-hidden' attribute on the FAQ answer
            const isHidden = faqAnswer.getAttribute('aria-hidden') === 'true';
            faqAnswer.setAttribute('aria-hidden', (!isHidden).toString());
        });
    });
}

accordionToggle();
//


//animations on page scroll
const animationOnScroll = () => {
    //from bottom to top
    const observer = new IntersectionObserver (entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('bottom_to_top');
            } else {
                entry.target.classList.remove('bottom_to_top');
            }
        })
    });

    observer.observe(document.querySelectorAll('.feature')[2]);
    observer.observe(document.querySelectorAll('.feature')[3]);

    //from left to right
    const observerTwo = new IntersectionObserver (entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('left_to_right');
            } else {
                entry.target.classList.remove('left_to_right');
            }
        })
    });

    observerTwo.observe(document.querySelector('.features_section .first_child'));
    observerTwo.observe(document.querySelectorAll('.feature')[0]);
    observerTwo.observe(document.querySelector('.global_scaling div'));
    observerTwo.observe(document.querySelector('.global_connection div'));

    //from right to left
    const observerThree = new IntersectionObserver (entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('right_to_left');
            } else {
                entry.target.classList.remove('right_to_left');
            }
        })
    });

    observerThree.observe(document.querySelectorAll('.feature')[1]);
    observerThree.observe(document.querySelector('.global_reach div'));
};

animationOnScroll();
//
