/* Mobile App Initialization and Logic */

document.addEventListener('DOMContentLoaded', () => {
    // Only run on mobile
    if (window.innerWidth >= 768) return;

    injectMobileNav();
    injectTransitionOverlay();
    handleActiveState();
    setupSmoothTransitions();
    applyMobileClasses();
    setupSwipeableGrids();
});

function setupSwipeableGrids() {
    if (window.innerWidth >= 768) return;

    // Apply swipeable behavior to featured sections on home
    const featuredGrids = document.querySelectorAll('#cars-grid, #blog-grid');
    featuredGrids.forEach(grid => {
        if (!grid.classList.contains('mobile-swipe-grid')) {
            grid.classList.add('mobile-swipe-grid');
        }
    });

    // For dynamically loaded content
    const observer = new MutationObserver(() => {
        document.querySelectorAll('#cars-grid, #blog-grid').forEach(grid => {
            if (!grid.classList.contains('mobile-swipe-grid')) {
                grid.classList.add('mobile-swipe-grid');
            }
        });
    });

    observer.observe(document.body, { childList: true, subtree: true });
}

function applyMobileClasses() {
    // Dynamically add mobile-specific classes to cards in grids
    const observer = new MutationObserver(() => {
        if (window.innerWidth < 768) {
            document.querySelectorAll('#cars-grid > div, #latest-fleet > div, #blog-grid > div').forEach(card => {
                if (!card.classList.contains('mobile-card')) {
                    card.classList.add('mobile-card');
                }
            });
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });
    
    // Initial apply
    if (window.innerWidth < 768) {
        document.querySelectorAll('#cars-grid > div, #latest-fleet > div, #blog-grid > div').forEach(card => {
            card.classList.add('mobile-card');
        });
    }
}

function injectMobileNav() {
    // Remove existing if any (for language change)
    const existingNav = document.querySelector('.mobile-nav');
    if (existingNav) existingNav.remove();

    const nav = document.createElement('nav');
    nav.className = 'mobile-nav';
    nav.innerHTML = `
        <a href="index.html" class="mobile-nav-item" data-page="index">
            <span class="material-symbols-outlined">home</span>
            <span>${window.i18n.t('mob_nav_home')}</span>
        </a>
        <a href="fleet.html" class="mobile-nav-item" data-page="fleet">
            <span class="material-symbols-outlined">directions_car</span>
            <span>${window.i18n.t('mob_nav_fleet')}</span>
        </a>
        <a href="blog.html" class="mobile-nav-item" data-page="blog">
            <span class="material-symbols-outlined">article</span>
            <span>${window.i18n.t('mob_nav_blog')}</span>
        </a>
        <a href="contact.html" class="mobile-nav-item" data-page="contact">
            <span class="material-symbols-outlined">call</span>
            <span>${window.i18n.t('mob_nav_contact')}</span>
        </a>
        <a href="admin-login.html" class="mobile-nav-item" data-page="admin">
            <span class="material-symbols-outlined">grid_view</span>
            <span>${window.i18n.t('mob_nav_more')}</span>
        </a>
    `;
    document.body.appendChild(nav);
    handleActiveState(); // Re-apply active state
}

// Listen for language changes to update mobile nav
window.addEventListener('languageChanged', () => {
    if (window.innerWidth < 768) {
        injectMobileNav();
    }
});

function injectTransitionOverlay() {
    if (document.querySelector('.page-transition-overlay')) return;
    const overlay = document.createElement('div');
    overlay.className = 'page-transition-overlay';
    document.body.appendChild(overlay);
}

function handleActiveState() {
    const path = window.location.pathname;
    const page = path.split('/').pop().split('.')[0] || 'index';
    
    document.querySelectorAll('.mobile-nav-item').forEach(item => {
        if (item.getAttribute('data-page') === page) {
            item.classList.add('active');
        } else if (page === '' && item.getAttribute('data-page') === 'index') {
            item.classList.add('active');
        } else if (page === 'car-details' && item.getAttribute('data-page') === 'fleet') {
             item.classList.add('active');
        } else if (page === 'blog-details' && item.getAttribute('data-page') === 'blog') {
             item.classList.add('active');
        }
    });
}

function setupSmoothTransitions() {
    const overlay = document.querySelector('.page-transition-overlay');
    
    document.querySelectorAll('a').forEach(link => {
        // Only internal links, not hashes or targets
        if (link.hostname === window.location.hostname && 
            !link.hash && 
            link.target !== '_blank' &&
            !link.href.includes('mailto:') &&
            !link.href.includes('tel:')) {
            
            link.addEventListener('click', (e) => {
                const href = link.href;
                // Don't transition if it's the same page
                if (href === window.location.href) return;

                e.preventDefault();
                overlay.classList.add('loading');
                
                setTimeout(() => {
                    window.location.href = href;
                }, 300);
            });
        }
    });

    // Fade out overlay on load
    window.addEventListener('pageshow', () => {
        overlay.classList.remove('loading');
    });

    setupFilterDrawer();
}

function setupFilterDrawer() {
    if (!window.location.pathname.includes('fleet.html')) return;

    const filterSidebar = document.querySelector('aside');
    if (!filterSidebar) return;

    // Create Toggle Button
    const filterBtn = document.createElement('button');
    filterBtn.id = 'mobile-filter-toggle';
    filterBtn.className = 'md:hidden fixed bottom-24 right-6 size-14 bg-primary text-background-dark rounded-full shadow-2xl flex items-center justify-center z-[1500] border-4 border-background-dark';
    filterBtn.innerHTML = '<span class="material-symbols-outlined">filter_list</span>';
    document.body.appendChild(filterBtn);

    // Create Overlay
    const overlay = document.createElement('div');
    overlay.className = 'mobile-filter-overlay';
    document.body.appendChild(overlay);

    // Transform Sidebar to Drawer on Mobile
    filterSidebar.classList.add('mobile-filter-drawer');
    const handle = document.createElement('div');
    handle.className = 'drawer-handle';
    filterSidebar.prepend(handle);

    filterBtn.addEventListener('click', () => {
        filterSidebar.classList.add('open');
        overlay.classList.add('open');
    });

    overlay.addEventListener('click', () => {
        filterSidebar.classList.remove('open');
        overlay.classList.remove('open');
    });

    // Close drawer when filters are applied
    document.getElementById('apply-filters')?.addEventListener('click', () => {
        filterSidebar.classList.remove('open');
        overlay.classList.remove('open');
    });
}

