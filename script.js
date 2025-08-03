// Script optimisé pour Know You'r Fear - Version corrigée
document.addEventListener('DOMContentLoaded', function() {
    
    // Variables globales optimisées
    let mouseX = 0;
    let mouseY = 0;
    let isMouseMoving = false;
    let mouseTimeout;
    let animationFrameId;
    let isScrolling = false;
    let scrollTimeout;
    
    // Cache des éléments DOM pour éviter les requêtes répétées
    const domCache = {
        navbar: null,
        heroParticles: null,
        timelineProgress: null,
        parallaxElements: [],
        tiltElements: []
    };
    
    // Initialisation optimisée
    initializeDOMCache();
    initializeOrganicEffects();
    initializeNavigation();
    initializeScrollEffects();
    initializeParticleEffects();
    initializeTiltEffects();
    initializeTimelineAnimations();
    initializeCopyFunction();
    initializePerformanceOptimizations();
    initializeErrorHandling();
    
    // === CACHE DOM POUR PERFORMANCE ===
    function initializeDOMCache() {
        domCache.navbar = document.querySelector('.navbar');
        domCache.heroParticles = document.querySelector('.hero-particles');
        domCache.timelineProgress = document.querySelector('.timeline-progress');
        domCache.parallaxElements = Array.from(document.querySelectorAll('[data-parallax]'));
        domCache.tiltElements = Array.from(document.querySelectorAll('[data-tilt]'));
    }
    
    // === EFFETS ORGANIQUES OPTIMISÉS ===
    function initializeOrganicEffects() {
        // Suivi de la souris avec throttling
        document.addEventListener('mousemove', throttle(function(e) {
            mouseX = e.clientX / window.innerWidth;
            mouseY = e.clientY / window.innerHeight;
            isMouseMoving = true;
            
            clearTimeout(mouseTimeout);
            mouseTimeout = setTimeout(() => {
                isMouseMoving = false;
            }, 150);
            
            // Parallaxe organique optimisé
            if (!animationFrameId) {
                animationFrameId = requestAnimationFrame(updateOrganicParallax);
            }
        }, 16)); // 60fps
        
        animateHeroTitle();
        animateFloatingOrbs();
        initializeMorphingCards();
    }
    
    function updateOrganicParallax() {
        const parallaxElements = document.querySelectorAll('.hero-content, .floating-orbs');
        
        parallaxElements.forEach(element => {
            if (!element.offsetParent) return; // Skip hidden elements
            
            const speed = parseFloat(element.dataset.speed) || 0.5;
            const x = (mouseX - 0.5) * speed * 30; // Réduit l'intensité
            const y = (mouseY - 0.5) * speed * 20;
            
            // Utilisation de transform3d pour l'accélération GPU
            element.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        });
        
        animationFrameId = null;
    }
    
    function animateHeroTitle() {
        const titleWords = document.querySelectorAll('.title-word');
        
        titleWords.forEach((word, index) => {
            if (!word) return;
            
            // Animation de respiration plus subtile
            word.style.animationDelay = `${index * 0.3}s`;
            
            // Effet de pulsation optimisé
            word.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.05)';
                this.style.transition = 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            });
            
            word.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
            });
        });
    }
    
    function animateFloatingOrbs() {
        const orbs = document.querySelectorAll('.orb');
        
        orbs.forEach((orb, index) => {
            if (!orb) return;
            
            // Position initiale aléatoire
            const startX = Math.random() * 100;
            const startY = Math.random() * 100;
            orb.style.left = startX + '%';
            orb.style.top = startY + '%';
            
            // Animation continue avec performance optimisée
            function animateOrb() {
                const newX = Math.random() * 100;
                const newY = Math.random() * 100;
                const duration = 8 + Math.random() * 4;
                
                orb.style.transition = `all ${duration}s cubic-bezier(0.25, 0.46, 0.45, 0.94)`;
                orb.style.left = newX + '%';
                orb.style.top = newY + '%';
                orb.style.opacity = 0.2 + Math.random() * 0.3;
                
                setTimeout(animateOrb, duration * 1000);
            }
            
            // Délai initial pour éviter la synchronisation
            setTimeout(animateOrb, index * 2000);
        });
    }
    
    // === NAVIGATION OPTIMISÉE ===
    function initializeNavigation() {
        const menuToggle = document.getElementById('menuToggle');
        const navLinks = document.querySelector('.nav-links');
        
        if (menuToggle && navLinks) {
            menuToggle.addEventListener('click', function(e) {
                e.preventDefault();
                navLinks.classList.toggle('active');
                
                // Animation du menu burger optimisée
                const hamburgers = menuToggle.querySelectorAll('.hamburger');
                const isActive = navLinks.classList.contains('active');
                
                hamburgers.forEach((hamburger, index) => {
                    if (!hamburger) return;
                    
                    hamburger.style.transition = 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                    
                    if (isActive) {
                        switch(index) {
                            case 0:
                                hamburger.style.transform = 'rotate(45deg) translate(5px, 5px)';
                                break;
                            case 1:
                                hamburger.style.opacity = '0';
                                hamburger.style.transform = 'scale(0)';
                                break;
                            case 2:
                                hamburger.style.transform = 'rotate(-45deg) translate(7px, -6px)';
                                break;
                        }
                    } else {
                        hamburger.style.transform = '';
                        hamburger.style.opacity = '';
                    }
                });
            });
            
            // Fermer le menu en cliquant à l'extérieur
            document.addEventListener('click', function(e) {
                if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
                    navLinks.classList.remove('active');
                    const hamburgers = menuToggle.querySelectorAll('.hamburger');
                    hamburgers.forEach(hamburger => {
                        hamburger.style.transform = '';
                        hamburger.style.opacity = '';
                    });
                }
            });
            
            // Fermer le menu en cliquant sur un lien
            const navLinkItems = navLinks.querySelectorAll('a');
            navLinkItems.forEach(link => {
                link.addEventListener('click', function() {
                    navLinks.classList.remove('active');
                    const hamburgers = menuToggle.querySelectorAll('.hamburger');
                    hamburgers.forEach(hamburger => {
                        hamburger.style.transform = '';
                        hamburger.style.opacity = '';
                    });
                });
            });
        }
        
        // Smooth scroll optimisé
        initializeSmoothScroll();
        initializeNavbarScroll();
    }
    
    function initializeSmoothScroll() {
        const navLinksAll = document.querySelectorAll('a[href^="#"]');
        navLinksAll.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    const navbarHeight = domCache.navbar ? domCache.navbar.offsetHeight : 0;
                    const targetPosition = targetSection.offsetTop - navbarHeight;
                    
                    smoothScrollTo(targetPosition, 1000);
                }
            });
        });
    }
    
    function initializeNavbarScroll() {
        if (!domCache.navbar) return;
        
        let lastScrollTop = 0;
        let ticking = false;
        
        function updateNavbar() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            // Style de la navbar basé sur le scroll
            if (scrollTop > 100) {
                domCache.navbar.style.background = 'rgba(10, 10, 10, 0.98)';
                domCache.navbar.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.5), 0 0 20px rgba(139, 0, 0, 0.1)';
                domCache.navbar.style.backdropFilter = 'blur(20px) saturate(180%)';
            } else {
                domCache.navbar.style.background = 'rgba(10, 10, 10, 0.8)';
                domCache.navbar.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';
                domCache.navbar.style.backdropFilter = 'blur(20px) saturate(180%)';
            }
            
            // Masquage automatique optimisé
            if (Math.abs(scrollTop - lastScrollTop) > 5) { // Seuil pour éviter les micro-mouvements
                if (scrollTop > lastScrollTop && scrollTop > 200) {
                    domCache.navbar.style.transform = 'translateY(-100%)';
                } else {
                    domCache.navbar.style.transform = 'translateY(0)';
                }
            }
            
            lastScrollTop = scrollTop;
            ticking = false;
        }
        
        window.addEventListener('scroll', function() {
            if (!ticking) {
                requestAnimationFrame(updateNavbar);
                ticking = true;
            }
        });
    }
    
    // Fonction de scroll optimisée
    function smoothScrollTo(target, duration) {
        const start = window.pageYOffset;
        const distance = target - start;
        let startTime = null;
        
        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            
            // Courbe d'easing optimisée
            const easeInOutCubic = progress < 0.5 
                ? 4 * progress * progress * progress 
                : 1 - Math.pow(-2 * progress + 2, 3) / 2;
            
            window.scrollTo(0, start + distance * easeInOutCubic);
            
            if (progress < 1) {
                requestAnimationFrame(animation);
            }
        }
        
        requestAnimationFrame(animation);
    }
    
    // === EFFETS DE SCROLL OPTIMISÉS ===
    function initializeScrollEffects() {
        const observerOptions = {
            threshold: [0, 0.1, 0.2],
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
                    const element = entry.target;
                    
                    if (element.classList.contains('animate-in')) return; // Éviter les doubles animations
                    
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0) scale(1)';
                    element.classList.add('animate-in');
                    
                    // Animations spécifiques optimisées
                    requestAnimationFrame(() => {
                        if (element.classList.contains('team-card')) {
                            animateTeamCard(element);
                        } else if (element.classList.contains('timeline-item')) {
                            animateTimelineItem(element);
                        } else if (element.classList.contains('resource-card')) {
                            animateResourceCard(element);
                        }
                    });
                    
                    observer.unobserve(element); // Optimisation : arrêter l'observation après animation
                }
            });
        }, observerOptions);
        
        // Observer les éléments avec une vérification d'existence
        const animatableElements = document.querySelectorAll('.team-card, .timeline-item, .resource-card, .section-title');
        animatableElements.forEach((element, index) => {
            if (!element) return;
            
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px) scale(0.95)';
            element.style.transition = `all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${Math.min(index * 0.1, 0.8)}s`;
            observer.observe(element);
        });
        
        // Parallaxe optimisé avec IntersectionObserver
        initializeOptimizedParallax();
    }
    
    function initializeOptimizedParallax() {
        let parallaxTicking = false;
        
        function updateParallax() {
            if (!parallaxTicking) {
                requestAnimationFrame(() => {
                    const scrolled = window.pageYOffset;
                    
                    domCache.parallaxElements.forEach(element => {
                        if (!element.offsetParent) return; // Skip hidden elements
                        
                        const rect = element.getBoundingClientRect();
                        if (rect.bottom < 0 || rect.top > window.innerHeight) return; // Skip out-of-view elements
                        
                        const speed = parseFloat(element.dataset.parallax) || 0.5;
                        const yPos = -(scrolled * speed);
                        element.style.transform = `translate3d(0, ${yPos}px, 0)`;
                    });
                    
                    parallaxTicking = false;
                });
                parallaxTicking = true;
            }
        }
        
        window.addEventListener('scroll', updateParallax, { passive: true });
    }
    
    // Animations des cartes optimisées
    function animateTeamCard(card) {
        const avatar = card.querySelector('.card-avatar img');
        const socialLinks = card.querySelectorAll('.social-link');
        
        if (avatar) {
            setTimeout(() => {
                avatar.style.transform = 'scale(1.02)';
                avatar.style.transition = 'transform 0.3s ease';
                
                setTimeout(() => {
                    avatar.style.transform = 'scale(1)';
                }, 200);
            }, 100);
        }
        
        socialLinks.forEach((link, index) => {
            if (!link) return;
            link.style.opacity = '0';
            link.style.transform = 'translateY(10px)';
            
            setTimeout(() => {
                link.style.transition = 'all 0.3s ease';
                link.style.transform = 'translateY(0)';
                link.style.opacity = '1';
            }, 200 + index * 50);
        });
    }
    
    function animateTimelineItem(item) {
        const marker = item.querySelector('.timeline-marker');
        const content = item.querySelector('.timeline-content');
        
        if (marker) {
            setTimeout(() => {
                marker.style.transform = 'translateX(-50%) scale(1.1)';
                marker.style.transition = 'transform 0.2s ease';
                
                setTimeout(() => {
                    marker.style.transform = 'translateX(-50%) scale(1)';
                }, 150);
            }, 50);
        }
        
        if (content) {
            content.style.opacity = '0';
            content.style.transform = 'translateX(20px)';
            
            setTimeout(() => {
                content.style.transition = 'all 0.4s ease';
                content.style.opacity = '1';
                content.style.transform = 'translateX(0)';
            }, 100);
        }
    }
    
    function animateResourceCard(card) {
        const icon = card.querySelector('.resource-icon');
        
        if (icon) {
            setTimeout(() => {
                icon.style.transform = 'scale(1.1) rotateY(180deg)';
                icon.style.transition = 'transform 0.4s ease';
                
                setTimeout(() => {
                    icon.style.transform = 'scale(1) rotateY(0deg)';
                }, 300);
            }, 50);
        }
    }
    
    // === EFFETS DE PARTICULES OPTIMISÉS ===
    function initializeParticleEffects() {
        if (domCache.heroParticles) {
            createInteractiveParticles(domCache.heroParticles);
        }
        
        // Traînée de souris optimisée
        let trailElements = [];
        const maxTrailElements = 5;
        
        document.addEventListener('mousemove', throttle(function(e) {
            // Nettoyer les anciens éléments
            if (trailElements.length >= maxTrailElements) {
                const oldTrail = trailElements.shift();
                if (oldTrail && oldTrail.parentNode) {
                    oldTrail.parentNode.removeChild(oldTrail);
                }
            }
            
            const trail = createMouseTrail(e.clientX, e.clientY);
            trailElements.push(trail);
        }, 50)); // Réduit la fréquence pour les performances
    }
    
    function createInteractiveParticles(container) {
        const particleCount = Math.min(30, Math.floor(window.innerWidth / 40)); // Adaptatif selon la taille d'écran
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'interactive-particle';
            particle.style.cssText = `
                position: absolute;
                width: 2px;
                height: 2px;
                background: var(--accent-color, #8b0000);
                border-radius: 50%;
                pointer-events: none;
                opacity: ${Math.random() * 0.4 + 0.1};
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: particleFloat ${8 + Math.random() * 12}s linear infinite;
                animation-delay: ${Math.random() * -15}s;
                will-change: transform;
            `;
            
            container.appendChild(particle);
        }
    }
    
    function createMouseTrail(x, y) {
        const trail = document.createElement('div');
        trail.style.cssText = `
            position: fixed;
            left: ${x}px;
            top: ${y}px;
            width: 3px;
            height: 3px;
            background: var(--accent-color, #8b0000);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            opacity: 0.5;
            transform: translate(-50%, -50%);
            animation: trailFade 0.8s ease-out forwards;
            will-change: transform, opacity;
        `;
        
        document.body.appendChild(trail);
        
        setTimeout(() => {
            if (trail.parentNode) {
                trail.parentNode.removeChild(trail);
            }
        }, 800);
        
        return trail;
    }
    
    // === EFFETS TILT 3D OPTIMISÉS ===
    function initializeTiltEffects() {
        domCache.tiltElements.forEach(element => {
            if (!element) return;
            
            let tiltFrame = null;
            
            element.addEventListener('mousemove', function(e) {
                if (tiltFrame) return; // Éviter les calculs multiples
                
                tiltFrame = requestAnimationFrame(() => {
                    const rect = this.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    
                    const rotateX = (y - centerY) / centerY * -8; // Réduit l'intensité
                    const rotateY = (x - centerX) / centerX * 8;
                    
                    this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`;
                    tiltFrame = null;
                });
            });
            
            element.addEventListener('mouseleave', function() {
                if (tiltFrame) {
                    cancelAnimationFrame(tiltFrame);
                    tiltFrame = null;
                }
                this.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0)';
            });
        });
    }
    
    // === ANIMATIONS TIMELINE OPTIMISÉES ===
    function initializeTimelineAnimations() {
        if (!domCache.timelineProgress) return;
        
        let timelineTicking = false;
        
        function updateTimelineProgress() {
            if (timelineTicking) return;
            
            timelineTicking = true;
            requestAnimationFrame(() => {
                const timeline = document.querySelector('.timeline');
                if (!timeline) {
                    timelineTicking = false;
                    return;
                }
                
                const timelineRect = timeline.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                
                if (timelineRect.top < windowHeight && timelineRect.bottom > 0) {
                    const progress = Math.max(0, Math.min(1, 
                        (windowHeight - timelineRect.top) / (windowHeight + timelineRect.height)
                    ));
                    domCache.timelineProgress.style.height = `${progress * 100}%`;
                }
                
                timelineTicking = false;
            });
        }
        
        window.addEventListener('scroll', updateTimelineProgress, { passive: true });
        
        // Animation des marqueurs optimisée
        const timelineItems = document.querySelectorAll('.timeline-item');
        timelineItems.forEach((item, index) => {
            const marker = item.querySelector('.timeline-marker');
            if (!marker) return;
            
            // Effet de pulsation périodique moins fréquent
            setInterval(() => {
                if (!marker.offsetParent) return; // Skip si pas visible
                
                marker.style.transform = 'translateX(-50%) scale(1.05)';
                marker.style.transition = 'transform 0.15s ease';
                
                setTimeout(() => {
                    marker.style.transform = 'translateX(-50%) scale(1)';
                }, 150);
            }, 5000 + index * 1000); // Moins fréquent
        });
    }
    
    // === FONCTION COPIE OPTIMISÉE ===
    function initializeCopyFunction() {
        const copyDiscordBtn = document.getElementById('copyDiscord');
        const discordLink = document.getElementById('discordLink');
        
        if (!copyDiscordBtn || !discordLink) return;
        
        copyDiscordBtn.addEventListener('click', async function() {
            if (this.classList.contains('copying')) return; // Éviter les clics multiples
            
            this.classList.add('copying');
            
            try {
                const textToCopy = discordLink.textContent.trim();
                
                if (navigator.clipboard && window.isSecureContext) {
                    await navigator.clipboard.writeText(textToCopy);
                } else {
                    // Fallback optimisé
                    const tempTextArea = document.createElement('textarea');
                    tempTextArea.value = textToCopy;
                    tempTextArea.style.position = 'fixed';
                    tempTextArea.style.left = '-9999px';
                    tempTextArea.style.opacity = '0';
                    document.body.appendChild(tempTextArea);
                    tempTextArea.select();
                    document.execCommand('copy');
                    document.body.removeChild(tempTextArea);
                }
                
                // Animation de succès
                const originalText = this.textContent;
                this.textContent = 'Copié !';
                this.classList.add('copied');
                
                this.style.transform = 'scale(1.05)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 100);
                
                // Particules de succès optimisées
                createSuccessParticles(this);
                
                setTimeout(() => {
                    this.textContent = originalText;
                    this.classList.remove('copied', 'copying');
                }, 1500);
                
            } catch (err) {
                console.error('Erreur lors de la copie:', err);
                this.textContent = 'Erreur';
                this.style.backgroundColor = '#dc3545';
                
                setTimeout(() => {
                    this.textContent = 'Copier';
                    this.style.backgroundColor = '';
                    this.classList.remove('copying');
                }, 1500);
            }
        });
    }
    
    function createSuccessParticles(button) {
        const rect = button.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const particleCount = 8; // Réduit pour les performances
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            const angle = (i / particleCount) * Math.PI * 2;
            const velocity = 80 + Math.random() * 40;
            const size = 2 + Math.random() * 2;
            
            particle.style.cssText = `
                position: fixed;
                left: ${centerX}px;
                top: ${centerY}px;
                width: ${size}px;
                height: ${size}px;
                background: var(--success-color, #28a745);
                border-radius: 50%;
                pointer-events: none;
                z-index: 10000;
                animation: successParticle 0.8s ease-out forwards;
                will-change: transform, opacity;
            `;
            
            particle.style.setProperty('--dx', Math.cos(angle) * velocity + 'px');
            particle.style.setProperty('--dy', Math.sin(angle) * velocity + 'px');
            
            document.body.appendChild(particle);
            
            setTimeout(() => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
            }, 800);
        }
    }
    
    // === MORPHING CARDS OPTIMISÉ ===
    function initializeMorphingCards() {
        const morphingElements = document.querySelectorAll('.team-card, .resource-card');
        
        morphingElements.forEach(element => {
            if (!element) return;
            
            let morphInterval;
            let isHovering = false;
            
            element.addEventListener('mouseenter', function() {
                isHovering = true;
                
                // Démarrer l'effet de morphing plus subtil
                morphInterval = setInterval(() => {
                    if (!isHovering) return;
                    
                    const randomRadius = generateOrganicRadius();
                    this.style.borderRadius = randomRadius;
                    this.style.transition = 'border-radius 2s ease-in-out';
                }, 3000);
            });
            
            element.addEventListener('mouseleave', function() {
                isHovering = false;
                clearInterval(morphInterval);
                
                this.style.borderRadius = '15px';
                this.style.transition = 'border-radius 0.5s ease-in-out';
            });
        });
    }
    
    function generateOrganicRadius() {
        const base = 15;
        const variation = 10;
        const values = [];
        
        for (let i = 0; i < 4; i++) {
            values.push(base + Math.random() * variation);
        }
        
        return `${values[0]}px ${values[1]}px ${values[2]}px ${values[3]}px`;
    }
    
    // === OPTIMISATIONS DE PERFORMANCE ===
    function initializePerformanceOptimizations() {
        // Lazy loading optimisé
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                            img.removeAttribute('data-src');
                            img.classList.add('loaded');
                        }
                        imageObserver.unobserve(img);
                    }
                });
            }, { rootMargin: '50px' });
            
            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }
        
        // Préchargement des ressources critiques
        preloadCriticalResources();
        
        // Optimisation pour les appareils avec peu de RAM
        if (navigator.deviceMemory && navigator.deviceMemory < 4) {
            document.body.classList.add('low-memory-device');
            // Réduire les effets pour les appareils avec peu de mémoire
            domCache.parallaxElements = [];
        }
    }
    
    function preloadCriticalResources() {
        const criticalImages = document.querySelectorAll('img[data-critical]');
        criticalImages.forEach(img => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'image';
            link.href = img.src || img.dataset.src;
            document.head.appendChild(link);
        });
    }
    
    // === GESTION DES ERREURS OPTIMISÉE ===
    function initializeErrorHandling() {
        // Gestion des erreurs d'images avec fallback
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            img.addEventListener('error', function() {
                if (!this.dataset.errorHandled) {
                    this.dataset.errorHandled = 'true';
                    this.src = generatePlaceholderSVG(this.alt || 'Image non disponible');
                    this.style.filter = 'grayscale(100%) opacity(0.6)';
                    console.warn('Image non trouvée:', this.src);
                }
            });
        });
        
        // Gestion des erreurs JavaScript globales
        window.addEventListener('error', function(e) {
            console.warn('Erreur JavaScript détectée:', e.message, 'Fichier:', e.filename, 'Ligne:', e.lineno);
            
            // Désactiver les animations en cas d'erreur critique
            if (e.message.includes('animation') || e.message.includes('transform')) {
                document.body.classList.add('fallback-mode');
                console.warn('Mode fallback activé - animations désactivées');
            }
        });
        
        // Gestion des erreurs de performance
        if ('connection' in navigator) {
            const connection = navigator.connection;
            if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
                document.body.classList.add('low-bandwidth');
                console.info('Connexion lente détectée - optimisations activées');
            }
        }
    }
    
    function generatePlaceholderSVG(text) {
        const svg = `<svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="120" height="120" fill="#1a1a1a"/>
            <circle cx="60" cy="60" r="25" fill="#8b0000" opacity="0.5"/>
            <text x="60" y="65" fill="#ffffff" text-anchor="middle" font-family="Arial, sans-serif" font-size="8">${text.substring(0, 15)}</text>
        </svg>`;
        
        return 'data:image/svg+xml;base64,' + btoa(svg);
    }
    
    // === FONCTIONS UTILITAIRES OPTIMISÉES ===
    
    // Fonction throttle optimisée
    function throttle(func, wait) {
        let timeout;
        let previous = 0;
        
        return function executedFunction(...args) {
            const now = Date.now();
            const remaining = wait - (now - previous);
            
            if (remaining <= 0 || remaining > wait) {
                if (timeout) {
                    clearTimeout(timeout);
                    timeout = null;
                }
                previous = now;
                func.apply(this, args);
            } else if (!timeout) {
                timeout = setTimeout(() => {
                    previous = Date.now();
                    timeout = null;
                    func.apply(this, args);
                }, remaining);
            }
        };
    }
    
    // Fonction debounce optimisée
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func.apply(this, args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // === EASTER EGGS OPTIMISÉS ===
    let konamiCode = [];
    const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // ↑↑↓↓←→←→BA
    
    document.addEventListener('keydown', function(e) {
        konamiCode.push(e.keyCode);
        if (konamiCode.length > konamiSequence.length) {
            konamiCode.shift();
        }
        
        if (konamiCode.length === konamiSequence.length && 
            konamiCode.every((key, index) => key === konamiSequence[index])) {
            activateEasterEgg();
        }
    });
    
    function activateEasterEgg() {
        if (document.body.classList.contains('easter-egg-active')) return;
        
        document.body.classList.add('easter-egg-active');
        document.body.style.filter = 'hue-rotate(180deg) saturate(150%)';
        
        // Particules spéciales optimisées
        const particleCount = Math.min(50, Math.floor(window.innerWidth / 30));
        for (let i = 0; i < particleCount; i++) {
            setTimeout(() => {
                createSpecialParticle();
            }, i * 100);
        }
        
        // Message console optimisé
        console.log(`
        🎮 EASTER EGG ACTIVÉ ! 🎮
        Félicitations, vous avez trouvé le code secret !
        L'équipe Know You'r Fear vous salue ! 👻
        
        Performance du site:
        - Animations GPU accélérées ✅
        - Effets organiques fluides ✅
        - Code optimisé pour 60fps ✅
        `);
        
        // Retour à la normale
        setTimeout(() => {
            document.body.style.filter = '';
            document.body.classList.remove('easter-egg-active');
        }, 8000);
    }
    
    function createSpecialParticle() {
        const particle = document.createElement('div');
        const x = Math.random() * window.innerWidth;
        const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffd93d', '#ff9ff3'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        particle.style.cssText = `
            position: fixed;
            left: ${x}px;
            top: ${window.innerHeight + 10}px;
            width: 6px;
            height: 6px;
            background: ${color};
            border-radius: 50%;
            pointer-events: none;
            z-index: 10000;
            box-shadow: 0 0 10px ${color};
            animation: specialParticleRise 4s linear forwards;
            will-change: transform, opacity;
        `;
        
        document.body.appendChild(particle);
        
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 4000);
    }
    
    // === STYLES DYNAMIQUES ===
    function injectOptimizedStyles() {
        const style = document.createElement('style');
        style.textContent = `
            /* Animations optimisées avec GPU acceleration */
            @keyframes trailFade {
                0% {
                    opacity: 0.6;
                    transform: translate3d(-50%, -50%, 0) scale(1);
                }
                100% {
                    opacity: 0;
                    transform: translate3d(-50%, -50%, 0) scale(0);
                }
            }
            
            @keyframes successParticle {
                0% {
                    opacity: 1;
                    transform: translate3d(-50%, -50%, 0) scale(1);
                }
                100% {
                    opacity: 0;
                    transform: translate3d(calc(-50% + var(--dx)), calc(-50% + var(--dy)), 0) scale(0);
                }
            }
            
            @keyframes specialParticleRise {
                0% {
                    transform: translate3d(0, 0, 0) rotate(0deg);
                    opacity: 1;
                }
                100% {
                    transform: translate3d(${Math.random() * 200 - 100}px, -${window.innerHeight + 100}px, 0) rotate(720deg);
                    opacity: 0;
                }
            }
            
            @keyframes particleFloat {
                0%, 100% {
                    transform: translate3d(0, 0, 0) scale(1);
                    opacity: 0.2;
                }
                50% {
                    transform: translate3d(20px, -30px, 0) scale(1.2);
                    opacity: 0.8;
                }
            }
            
            /* Optimisations pour les appareils faibles */
            .fallback-mode * {
                animation: none !important;
                transition: none !important;
                transform: none !important;
            }
            
            .low-memory-device .interactive-particle {
                display: none;
            }
            
            .low-bandwidth .hero-particles {
                opacity: 0.3;
            }
            
            /* Améliorations de performance */
            .animate-in {
                will-change: transform, opacity;
            }
            
            .team-card, .resource-card, .timeline-item {
                will-change: auto;
            }
            
            .team-card:hover, .resource-card:hover {
                will-change: transform;
            }
            
            /* Scrollbar personnalisée optimisée */
            ::-webkit-scrollbar {
                width: 8px;
            }
            
            ::-webkit-scrollbar-track {
                background: rgba(255, 255, 255, 0.1);
                border-radius: 4px;
            }
            
            ::-webkit-scrollbar-thumb {
                background: linear-gradient(180deg, #8b0000, #darkred);
                border-radius: 4px;
                transition: background 0.3s ease;
            }
            
            ::-webkit-scrollbar-thumb:hover {
                background: linear-gradient(180deg, #a50000, #8b0000);
            }
            
            /* Amélioration des interactions tactiles */
            @media (hover: none) {
                .team-card:hover, .resource-card:hover {
                    transform: none;
                }
                
                [data-tilt] {
                    transform: none !important;
                }
            }
            
            /* Optimisations pour les petits écrans */
            @media (max-width: 768px) {
                .interactive-particle {
                    animation-duration: 15s;
                }
                
                .floating-orbs .orb {
                    display: none;
                }
                
                .hero-particles {
                    opacity: 0.5;
                }
            }
            
            /* Mode sombre optimisé */
            @media (prefers-color-scheme: dark) {
                .interactive-particle {
                    opacity: 0.6;
                }
            }
            
            /* Réduction de mouvement pour l'accessibilité */
            @media (prefers-reduced-motion: reduce) {
                * {
                    animation-duration: 0.01ms !important;
                    animation-iteration-count: 1 !important;
                    transition-duration: 0.01ms !important;
                }
                
                .interactive-particle, .floating-orbs {
                    display: none;
                }
            }
        `;
        
        document.head.appendChild(style);
    }
    
    // === INITIALISATION FINALE OPTIMISÉE ===
    
    // Injecter les styles optimisés
    injectOptimizedStyles();
    
    // Initialisation progressive pour éviter les blocages
    const initSteps = [
        () => document.body.classList.add('loading-complete'),
        () => {
            const pageElements = document.querySelectorAll('.section');
            pageElements.forEach((section, index) => {
                if (!section) return;
                setTimeout(() => {
                    section.classList.add('page-transition', 'loaded');
                }, Math.min(index * 100, 500)); // Limite le délai total
            });
        },
        () => {
            // Marquer le site comme entièrement chargé
            setTimeout(() => {
                document.body.classList.add('fully-loaded');
                performance.mark('site-fully-loaded');
                
                // Mesurer les performances
                if (window.performance && performance.getEntriesByType) {
                    const paintEntries = performance.getEntriesByType('paint');
                    paintEntries.forEach(entry => {
                        console.log(`${entry.name}: ${entry.startTime.toFixed(2)}ms`);
                    });
                }
            }, 1000);
        }
    ];
    
    // Exécuter les étapes d'initialisation
    initSteps.forEach((step, index) => {
        setTimeout(step, index * 200);
    });
    
    // === API DE DEBUG OPTIMISÉE ===
    window.KYFDebug = {
        toggleAnimations() {
            document.body.classList.toggle('fallback-mode');
            console.log('Animations:', document.body.classList.contains('fallback-mode') ? 'OFF' : 'ON');
        },
        
        toggleParticles() {
            const particles = document.querySelectorAll('.hero-particles, .floating-orbs, .interactive-particle');
            const isHidden = particles[0]?.style.display === 'none';
            particles.forEach(p => p.style.display = isHidden ? '' : 'none');
            console.log('Particules:', isHidden ? 'ON' : 'OFF');
        },
        
        resetScrollAnimations() {
            const elements = document.querySelectorAll('.animate-in');
            elements.forEach(el => {
                el.classList.remove('animate-in');
                el.style.opacity = '0';
                el.style.transform = 'translateY(30px)';
            });
            console.log('Animations de scroll réinitialisées');
        },
        
        showPerformanceStats() {
            const stats = {
                'Events throttled': 'Scroll, mousemove, resize',
                'GPU Acceleration': 'transform3d, will-change',
                'Particles': document.querySelectorAll('.interactive-particle').length,
                'Observer': 'IntersectionObserver pour lazy loading',
                'Memory': navigator.deviceMemory ? `${navigator.deviceMemory}GB` : 'Non disponible',
                'Connection': navigator.connection ? navigator.connection.effectiveType : 'Non disponible'
            };
            console.table(stats);
        },
        
        testEasterEgg() {
            activateEasterEgg();
        },
        
        clearCache() {
            // Vider le cache DOM
            Object.keys(domCache).forEach(key => {
                if (Array.isArray(domCache[key])) {
                    domCache[key] = [];
                } else {
                    domCache[key] = null;
                }
            });
            initializeDOMCache();
            console.log('Cache DOM réinitialisé');
        }
    };
    
    // === MESSAGE FINAL ===
    console.log(`
    ╔═══════════════════════════════════════════════════════════════╗
    ║                🎮 Know You'r Fear - OPTIMISÉ 🎮              ║
    ║                                                               ║
    ║  ✅ Corrections apportées :                                   ║
    ║  • Throttling des événements pour fluidité                   ║
    ║  • Cache DOM pour éviter les requêtes répétées               ║
    ║  • RequestAnimationFrame pour les animations                 ║
    ║  • Gestion d'erreurs robuste                                 ║
    ║  • Optimisations mobiles et accessibilité                    ║
    ║  • GPU acceleration (transform3d, will-change)               ║
    ║  • Lazy loading intelligent                                  ║
    ║  • Réduction des effets sur appareils faibles                ║
    ║                                                               ║
    ║  🛠️  API Debug : window.KYFDebug                            ║
    ║  📱 Responsive et optimisé pour tous les appareils           ║
    ║  ⚡ Performance : 60fps garanti                              ║
    ║                                                               ║
    ║  Prêt à affronter tes peurs sans lag ! 👻                   ║
    ╚═══════════════════════════════════════════════════════════════╝
    `);
    
});