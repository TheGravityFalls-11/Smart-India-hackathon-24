document.addEventListener('DOMContentLoaded', function () {
    const textElement = document.getElementById('type-text');
    const texts = [
        'Siksha Sarthi',
        'शिक्षा सारथी',
        'শিক্ষা সারথি',
        'கல்வி சாரதி',
        'విద్య సారథి'
    ];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        if (isDeleting) {
            if (charIndex > 0) {
                textElement.textContent = texts[textIndex].substring(0, charIndex - 1);
                charIndex--;
                setTimeout(typeEffect, 100);
            } else {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                setTimeout(typeEffect, 500);
            }
        } else {
            if (charIndex < texts[textIndex].length) {
                textElement.textContent = texts[textIndex].substring(0, charIndex + 1);
                charIndex++;
                setTimeout(typeEffect, 100);
            } else {
                isDeleting = true;
                setTimeout(typeEffect, 2000);
            }
        }
    }

    typeEffect();
});