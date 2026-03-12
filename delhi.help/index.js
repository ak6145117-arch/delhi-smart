document.addEventListener('DOMContentLoaded', () => {
    
    // 1. ADVANCED CURSOR LOGIC (Centered & Smooth)
    const cursor = document.querySelector('.cursor');
    
    
    document.addEventListener('mousemove', (e) => {
        // RequestAnimationFrame use karna better hota hai performance ke liye
        requestAnimationFrame(() => {
            cursor.style.left = `${e.clientX}px`;
            
            cursor.style.top = `${e.clientY}px`;
        });
    });

    // Cursor interaction (Buttons aur Links par hover effect)
    const interactables = document.querySelectorAll('a, .btn-glow, .glass-card-advanced');
    interactables.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(2.5)';
            cursor.style.backgroundColor = 'rgba(0, 242, 255, 0.1)';
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursor.style.backgroundColor = 'transparent';
        });
    });

    // 2. CARD HOVER EFFECTS (CSS Variables fix)
    const cards = document.querySelectorAll('.glass-card-advanced');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.borderColor = 'var(--neon-blue)';
            card.style.boxShadow = '0 0 30px rgba(0, 242, 255, 0.2)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.borderColor = 'rgba(255, 255, 255, 0.05)';
            card.style.boxShadow = 'none';
        });
    });

    // 3. AUTO-GLITCH STABILIZER
    const glitchTitle = document.querySelector('.glitch');
    if (glitchTitle) {
        setInterval(() => {
            const hasGlitch = Math.random() > 0.8;
            glitchTitle.style.textShadow = hasGlitch 
                ? '3px 0 #ff0055, -3px 0 #00f2ff' 
                : '0 0 15px rgba(0, 242, 255, 0.3)';
        }, 200);
    }

    // 4. SMOOTH SCROLLING
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});