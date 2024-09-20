

// ==========  Faq  ==========
const faqItems = document.querySelectorAll('.faq-area .faq-item');


faqItems.forEach(item => {
    item.addEventListener('click', function () {
        const ans = this.querySelector('.ans');
        const icon = this.querySelector('.icon');

        ans.classList.toggle('active');
        item.classList.toggle('active');
        icon.classList.toggle('rotate'); // Use a separate 'rotate' class for the icon rotation
    });
});
