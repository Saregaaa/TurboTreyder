// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Update download counter dynamically
    function updateDownloadCounter() {
        const counters = document.querySelectorAll('.stat-number');
        counters.forEach(counter => {
            if (counter.textContent === '217') {
                const currentValue = parseInt(counter.textContent);
                const newValue = currentValue + Math.floor(Math.random() * 3);
                counter.textContent = newValue.toString();
            }
        });
    }

    // Update counter every 30 seconds
    setInterval(updateDownloadCounter, 30000);

    // Download button functionality
    const downloadButtons = document.querySelectorAll('.btn-primary, .btn-outline');
    downloadButtons.forEach(button => {
        if (button.textContent.includes('Скачать') || button.textContent.includes('Получить')) {
            button.addEventListener('click', function(e) {
                e.preventDefault();

                // Show loading state
                const originalText = this.textContent;
                this.textContent = 'Подготовка загрузки...';
                this.disabled = true;

                // Simulate download preparation
                setTimeout(() => {
                    // Create fake download
                    const link = document.createElement('a');
                    link.download = 'TurboTreyder_Setup.exe';
                    link.href = '#';

                    // Show success message
                    this.textContent = 'Загрузка начата!';
                    this.style.background = '#059669';

                    // Restore original state after 3 seconds
                    setTimeout(() => {
                        this.textContent = originalText;
                        this.disabled = false;
                        this.style.background = '';
                    }, 3000);

                    // Show download modal
                    showDownloadModal();
                }, 2000);
            });
        }
    });

    // FAQ toggle functionality
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

        // Initially hide all answers
        answer.style.display = 'none';
        question.style.cursor = 'pointer';
        question.style.userSelect = 'none';

        // Add click event
        question.addEventListener('click', function() {
            const isOpen = answer.style.display === 'block';

            // Close all other FAQ items
            faqItems.forEach(otherItem => {
                const otherAnswer = otherItem.querySelector('.faq-answer');
                const otherQuestion = otherItem.querySelector('.faq-question');
                otherAnswer.style.display = 'none';
                otherQuestion.style.color = '#152138';
            });

            // Toggle current item
            if (!isOpen) {
                answer.style.display = 'block';
                question.style.color = '#4f46e5';
            }
        });
    });

    // Pricing card animations
    const pricingCards = document.querySelectorAll('.pricing-card');
    pricingCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            if (!this.classList.contains('featured')) {
                this.style.transform = 'translateY(-8px)';
                this.style.boxShadow = '0 20px 40px rgba(79, 70, 229, 0.15)';
            }
        });

        card.addEventListener('mouseleave', function() {
            if (!this.classList.contains('featured')) {
                this.style.transform = '';
                this.style.boxShadow = '';
            }
        });
    });

    // Scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.feature-card, .review-card, .download-card, .screenshot-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s, transform 0.6s';
        observer.observe(el);
    });

    // Live stats updates
    function updateLiveStats() {
        const onlineUsers = document.querySelector('.stat-number');
        if (onlineUsers && onlineUsers.textContent === '32') {
            const currentUsers = parseInt(onlineUsers.textContent);
            const change = Math.floor(Math.random() * 5) - 2; // -2 to +2
            const newUsers = Math.max(25, Math.min(45, currentUsers + change));
            onlineUsers.textContent = newUsers.toString();
        }
    }

    // Update live stats every 10 seconds
    setInterval(updateLiveStats, 10000);

    // Profit animation in trading interface
    function animateProfit() {
        const profitAmount = document.querySelector('.profit-amount');
        if (profitAmount) {
            const currentAmount = parseFloat(profitAmount.textContent.replace('+$', ''));
            const increase = (Math.random() * 5).toFixed(2);
            const newAmount = (currentAmount + parseFloat(increase)).toFixed(2);
            profitAmount.textContent = `+$${newAmount}`;

            // Flash animation
            profitAmount.style.background = '#22c55e';
            profitAmount.style.color = 'white';
            profitAmount.style.padding = '2px 6px';
            profitAmount.style.borderRadius = '4px';

            setTimeout(() => {
                profitAmount.style.background = '';
                profitAmount.style.color = '#059669';
                profitAmount.style.padding = '';
                profitAmount.style.borderRadius = '';
            }, 1000);
        }
    }

    // Animate profit every 15 seconds
    setInterval(animateProfit, 15000);

    // Header scroll effect
    let lastScrollTop = 0;
    const header = document.querySelector('.header');

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            header.style.transform = 'translateY(0)';
        }

        // Add shadow when scrolled
        if (scrollTop > 0) {
            header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
        } else {
            header.style.boxShadow = '';
        }

        lastScrollTop = scrollTop;
    });

    // Add transition to header
    header.style.transition = 'transform 0.3s, box-shadow 0.3s';
});

// Download modal functionality
function showDownloadModal() {
    // Create modal HTML
    const modalHTML = `
        <div id="downloadModal" style="
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
        ">
            <div style="
                background: white;
                padding: 40px;
                border-radius: 16px;
                max-width: 500px;
                width: 90%;
                text-align: center;
                position: relative;
            ">
                <div style="font-size: 48px; margin-bottom: 20px;">🎉</div>
                <h3 style="color: #152138; margin-bottom: 16px;">Загрузка начата!</h3>
                <p style="color: #64748b; margin-bottom: 24px;">
                    TurboTreyder успешно загружается. Если загрузка не началась автоматически,
                    <a href="#" style="color: #4f46e5;">нажмите здесь</a>.
                </p>
                <div style="background: #f8fafc; padding: 16px; border-radius: 8px; margin-bottom: 24px;">
                    <h4 style="color: #152138; margin-bottom: 12px;">Следующие шаги:</h4>
                    <ol style="text-align: left; color: #64748b; padding-left: 20px;">
                        <li>Установите TurboTreyder</li>
                        <li>Создайте API ключи на бирже</li>
                        <li>Запустите бота и начните торговать</li>
                    </ol>
                </div>
                <button onclick="closeDownloadModal()" style="
                    background: #4f46e5;
                    color: white;
                    border: none;
                    padding: 12px 24px;
                    border-radius: 8px;
                    font-weight: 600;
                    cursor: pointer;
                ">Понятно</button>
                <button onclick="closeDownloadModal()" style="
                    position: absolute;
                    top: 12px;
                    right: 16px;
                    background: none;
                    border: none;
                    font-size: 24px;
                    cursor: pointer;
                    color: #64748b;
                ">×</button>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);
}

function closeDownloadModal() {
    const modal = document.getElementById('downloadModal');
    if (modal) {
        modal.remove();
    }
}

// Add some dynamic content updates
setInterval(function() {
    // Update "today downloads" counter
    const todayDownloads = document.querySelector('.stat-number');
    if (todayDownloads && todayDownloads.textContent.match(/^\d+$/)) {
        const current = parseInt(todayDownloads.textContent);
        if (Math.random() < 0.3) { // 30% chance to increment
            todayDownloads.textContent = (current + 1).toString();
        }
    }
}, 45000); // Every 45 seconds

// Add typing effect to hero title (on page load)
window.addEventListener('load', function() {
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        heroTitle.textContent = '';

        let i = 0;
        const typeWriter = setInterval(function() {
            heroTitle.textContent += originalText.charAt(i);
            i++;
            if (i > originalText.length) {
                clearInterval(typeWriter);
            }
        }, 50);
    }
});

// Add some fake "live activity" indicators
function showLiveActivity() {
    const activities = [
        "@bitmaxed скачал TurboTreyder (Москва)",
        "@dmitrix получил прибыль +$23.45 (Саратов)",
        "@cryptomaster запустил AI скальпера (Минск)",
        "@andron подключил Binance API (СПб)",
        "@olgabtc скачала PRO версию (Алматы)",
        "@vladcore получил прибыль +$41.20 (Тбилиси)",
        "@foxman скачал TurboTreyder (Ереван)",
        "@traderd подключил Binance API (Казань)",
        "@profitrun получил прибыль +$19.80 (Астана)",
        "@cryptolena скачала PRO версию (Красноярск)",
    
        "@rushbtc запустил AI скальпера (Новосибирск)",
        "@alexpump подключил Binance API (Бишкек)",
        "@smartbear скачал TurboTreyder (Владивосток)",
        "@minerboy получил прибыль +$67.20 (Уфа)",
        "@darknik скачал PRO версию (Омск)",
        "@satoshin подключил Binance API (Грозный)",
        "@leopump получил прибыль +$12.34 (Иркутск)",
        "@lightbtc скачала TurboTreyder (Тюмень)",
        "@coinpilot подключил Binance API (Пермь)",
        "@btcforce получил прибыль +$45.90 (Махачкала)",
    
        "@niktrader запустил AI скальпера (Пенза)",
        "@atomik скачал TurboTreyder (Сочи)",
        "@ironbit подключил Binance API (Нижний Новгород)",
        "@cryptorush получил прибыль +$34.10 (Барнаул)",
        "@blockwolf скачал PRO версию (Хабаровск)",
        "@paveldoge подключил Binance API (Волгоград)",
        "@dencrypt получил прибыль +$26.99 (Якутск)",
        "@flashmax скачал TurboTreyder (Астрахань)",
        "@pumpniko подключил Binance API (Сургут)",
        "@solminer получил прибыль +$60.25 (Калуга)"
      
    ];

    const activity = activities[Math.floor(Math.random() * activities.length)];

    const notification = document.createElement('div');
    notification.innerHTML = `
        <div style="
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: white;
            padding: 16px 20px;
            border-radius: 8px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
            border-left: 4px solid #059669;
            z-index: 1000;
            font-size: 14px;
            max-width: 300px;
            animation: slideIn 0.5s ease;
        ">
            <div style="display: flex; align-items: center; gap: 8px;">
                <span style="color: #059669;">🟢</span>
                <span style="color: #152138; font-weight: 500;">${activity}</span>
            </div>
        </div>
        <style>
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
        </style>
    `;

    document.body.appendChild(notification);

    // Remove notification after 4 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 500);
    }, 4000);
}

// Show live activity every 20-40 seconds
setInterval(showLiveActivity, Math.random() * 80000 + 80000);
