(function () {
    const CONFIG = {
        showThreshold: 300,
        scrollBehavior: 'smooth',
        position: { bottom: '40px', right: '90px' },
        styles: {
            backgroundColor: '#007bff',
            color: 'white',
            width: '70px',
            height: '70px',
            borderRadius: '50%',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            zIndex: '1000',
            fontSize: '30px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'opacity 0.3s, transform 0.3s'
        },
        icon: '&#8679;'
    };

    const button = document.createElement('button');
    button.innerHTML = CONFIG.icon;
    button.id = 'go-to-up-btn';
    button.title = 'Go to Top';

    Object.assign(button.style, {
        position: 'fixed',
        bottom: CONFIG.position.bottom,
        right: CONFIG.position.right,
        ...CONFIG.styles,
        opacity: '0',
        visibility: 'hidden',
        transform: 'translateY(10px)'
    });

    // Safe append to body
    if (document.body) {
        document.body.appendChild(button);
    } else {
        document.addEventListener('DOMContentLoaded', () => {
            document.body.appendChild(button);
        });
    }

    const handleScroll = () => {
        if (window.scrollY > CONFIG.showThreshold) {
            button.style.opacity = '1';
            button.style.visibility = 'visible';
            button.style.transform = 'translateY(0)';
        } else {
            button.style.opacity = '0';
            button.style.visibility = 'hidden';
            button.style.transform = 'translateY(10px)';
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: CONFIG.scrollBehavior
        });
    };

    window.addEventListener('scroll', handleScroll);
    button.addEventListener('click', scrollToTop);

    // Initial check
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', handleScroll);
    } else {
        handleScroll();
    }
})();
