(function () {
    const CONFIG = {
        showThreshold: 300,
        scrollBehavior: 'smooth',
        // Sleek SVG Arrow
        icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 19V5M5 12L12 5L19 12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
               </svg>`
    };

    // Inject CSS for better styling and animations
    const style = document.createElement('style');
    style.innerHTML = `
        #go-to-up-btn {
            position: fixed;
            bottom: 40px;
            right: 90px;
            background-color: #007bff;
            width: 70px;
            height: 70px;
            border-radius: 50%;
            border: none;
            cursor: pointer;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            z-index: 1000;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            visibility: hidden;
            transform: translateY(20px) scale(0.8);
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        
        #go-to-up-btn:hover {
            background-color: #0056b3;
            transform: translateY(0) scale(1.1) !important;
            box-shadow: 0 10px 15px rgba(0,0,0,0.2);
        }

        #go-to-up-btn.visible {
            opacity: 1;
            visibility: visible;
            transform: translateY(0) scale(1);
        }

        #go-to-up-btn svg {
            transition: transform 0.3s ease;
        }

        #go-to-up-btn:hover svg {
            transform: translateY(-3px);
        }
    `;
    document.head.appendChild(style);

    const button = document.createElement('button');
    button.innerHTML = CONFIG.icon;
    button.id = 'go-to-up-btn';
    button.title = 'Go to Top';

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
            button.classList.add('visible');
        } else {
            button.classList.remove('visible');
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
