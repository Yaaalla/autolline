/**
 * i18n.js - Language Switcher and Translation Logic for Autoline
 */

const translations = {
    ar: {
        // Nav
        nav_home: "الرئيسية",
        nav_about: "من نحن",
        nav_fleet: "سيارات للايجار",
        nav_blog: "المدونة",
        nav_contact: "تواصل معنا",
        nav_cta: "أجر سيارتك",
        // Hero
        hero_badge: "اوتو لاين لتاجير السيارات",
        hero_title_1: "اوتو لاين",
        hero_title_2: "أجر سيارتك",
        hero_cta: "تعرف على خدمتنا",
        // Services
        services_title: "توفر اوتو لاين مجموعة واسعة من السيارات",
        service_economy_title: "السيارات الاقتصادية",
        service_economy_desc: "مثالية للتنقل اليومي وتوفير الوقود.",
        service_family_title: "السيارات العائلية",
        service_family_desc: "توفر مساحة واسعة وراحة للعائلة.",
        service_suv_title: "سيارات الدفع الرباعي",
        service_suv_desc: "مناسبة للمغامرات والطرق الوعرة.",
        service_luxury_title: "السيارات الفاخرة",
        service_luxury_desc: "لمن يبحثون عن تجربة قيادة فاخرة وأنيقة.",
        service_sports_title: "السيارات الرياضية",
        service_sports_desc: "لعشاق السرعة والأداء العالي.",
        service_events_title: "تأجير سيارات للمناسبات الخاصة",
        service_events_desc: "أجير السيارات لحفلات الزفاف أو الاحتفالات الخاصة.",
        // About
        book_whatsapp: "الحجز عبر واتساب",
        book_note: "سيتم تسجيل طلبك في نظامنا والتواصل معك فوراً",
        // Booking Flow Page
        booking_details: "تفاصيل الحجز",
        personal_info: "المعلومات الشخصية",
        payment: "الدفع",
        driver_license: "رقم رخصة القيادة",
        upload_license: "تحميل صورة الرخصة",
        upload_tip: "اسحب الملف هنا أو اضغط للتحميل",
        card_number: "رقم البطاقة",
        expiry_date: "تاريخ الانتهاء",
        cvc: "الكود (CVC)",
        total_price: "الإجمالي",
        confirm_booking: "تأكيد الحجز والدفع",
        // Gallery/Fleet Page
        search_fleet: "بحث في الأسطول...",
        fleet_subtitle: "اكتشف مجموعتنا من السيارات الفاخرة",
        sort_by: "الترتيب حسب:",
        sort_recommended: "المقترح",
        sort_price_low: "السعر: من الأقل للأعلى",
        sort_price_high: "السعر: من الأعلى للأقل",
        sort_newest: "الأحدث أولاً",
        showing_count: "عرض $count سيارة فاخرة",
        about_badge: "من نحن",
        about_title: "ماذا تعرف عن اوتو لاين",
        about_p1: "مرحبًا بكم في اوتو لاين شركة اوتو لاين هي واحدة من الشركات الرائدة في مجال تأجير السيارات، حيث نهدف إلى تقديم تجربة استثنائية لعملائنا من الأفراد والشركات.",
        about_p2: "تُعتبر اوتو لاين شركة رائدة في مجال تأجير السيارات، تقدم خدماتها لتلبية احتياجات العملاء المتنوعة من خلال أسطول واسع من السيارات الحديثة والمجهزة بأحدث التقنيات.",
        about_p3: "بفضل أسعارنا التنافسية وخدماتنا الإضافية المميزة، نسعى لتوفير أفضل قيمة لعملائنا وجعل كل رحلة تجربة مميزة ومريحة.",
        about_experience_num: "+12",
        about_experience_text: "سنة من الخبرة",
        // Features
        features_title: "مميزات اوتو لاين",
        feature_comfort_title: "راحة استثنائية",
        feature_comfort_desc: "في اوتو لاين، نضع راحة عملائنا في مقدمة أولوياتنا. نوفر سيارات حديثة ومجهزة بأحدث التقنيات لضمن تجربة قيادة مريحة وآمنة.",
        feature_time_title: "وقت أقل",
        feature_time_desc: "في اوتو لاين نسعى لتوفير تجربة سريعة وسهلة لعملائنا. مع نظام الحجز الإلكتروني البسيط، يمكنك العثور على السيارة المناسبة لك في وقت قياسي.",
        feature_cost_title: "تكلفة تنافسية",
        feature_cost_desc: "تقدم اوتو لاين أسعاراً تنافسية تناسب جميع الميزانيات مع الحفاظ على جودة الخدمة. نوفر عروض وخصومات خاصة على فترات الإيجار الطويلة.",
        // Rental CTA
        rental_cta_title: "استأجر سيارة",
        rental_cta_desc: "مع اوتو لاين، يمكنك استئجار السيارة المثالية بسهولة وسرعة. نقدم أسطولاً متنوعاً من السيارات الحديثة والمجهزة بأحدث التقنيات لتلبية احتياجاتك.",
        rental_cta_contact: "تواصل معنا",
        // Fleet
        fleet_title: "سيارات للايجار",
        fleet_subtitle: "اختار اللي يناسبك من سيارتنا افضل سيارات للايجار",
        fleet_view_all: "مشاهدة الكل",
        // Blog
        blog_title: "مقالات النخبة",
        blog_read_more: "اقرأ المزيد",
        // Footer
        footer_desc: "اوتو لاين، 2 مسجد الرحمن الرحيم، هاكستيب، النزهة، محافظة القاهرة 4473212",
        footer_explore: "استكشف",
        footer_support: "الدعم",
        footer_contact: "اتصل بنا",
        footer_terms: "شروط الاستخدام",
        footer_privacy: "سياسة الخصوصية",
        footer_rights: "© 2026 اوتو لاين. جميع الحقوق محفوظة.",
        // Fleet Page
        fleet_filters_title: "الفلاتر",
        fleet_filter_brand: "الماركة",
        fleet_filter_category: "الفئة",
        fleet_filter_transmission: "ناقل الحركة",
        fleet_filter_fuel: "نوع الوقود",
        fleet_filter_apply: "تطبيق الفلاتر",
        fleet_filter_reset: "إعادة ضبط",
        fleet_no_cars: "لا توجد سيارات تطابق الفلاتر المختارة.",
        filter_brand: "الماركة",
        filter_price: "نطاق السعر",
        filter_automatic: "أوتوماتيك",
        filter_manual: "يدوي",
        filter_available: "متاح",
        fleet_book: "احجز الآن",
        fleet_all: "الكل",
        fleet_cat_sedan: "سيدان فاخرة",
        fleet_cat_supercar: "رياضية خارقة",
        fleet_cat_suv: "دفع رباعي",
        fleet_trans_auto: "أوتوماتيك",
        fleet_trans_manual: "يدوي",
        fleet_fuel_petrol: "بنزين",
        fleet_fuel_electric: "كهرباء",
        fleet_fuel_hybrid: "هجين",
        // About Page
        about_hero_subtitle: "اوتو لاين",
        about_hero_title: "مرحبًا بكم في اوتو لاين",
        about_hero_desc: "مرحبًا بكم في اوتو لاين شركة اوتو لاين هي واحدة من الشركات الرائدة في مجال تأجير السيارات، حيث نهدف إلى تقديم تجربة استثنائية لعملائنا من الأفراد والشركات. نحن نؤمن بتقديم حلول مبتكرة تلبي احتياجات عملائنا وتفوق توقعاتهم.",
        about_services_title: "خدماتنا",
        about_services_subtitle: "مجموعة متنوعة من السيارات توفر اوتو لاين مجموعة واسعة تشمل:",
        about_service_eco_title: "السيارات الاقتصادية",
        about_service_eco_desc: "مثالية للتنقل اليومي وتوفير الوقود.",
        about_service_family_title: "السيارات العائلية",
        about_service_family_desc: "توفر مساحة واسعة وراحة للعائلة.",
        about_service_suv_title: "سيارات الدفع الرباعي",
        about_service_suv_desc: "مناسبة للمغامرات والطرق الوعرة.",
        about_service_luxury_title: "السيارات الفاخرة",
        about_service_luxury_desc: "لمن يبحثون عن تجربة قيادة فاخرة وأنيقة.",
        about_service_sports_title: "السيارات الرياضية",
        about_service_sports_desc: "لعشاق السرعة والأداء العالي.",
        about_vision_title: "رؤيتنا",
        about_vision_desc: "أن نكون الخيار الأول في تقديم حلول المواصلات المتميزة والمتنوعة في الشرق الأوسط وأفريقيا، مع التركيز على تقديم أفضل التجارب للعملاء من خلال الحفاظ على أعلى معايير الجودة والتميز.",
        about_mission_title: "رسالتنا",
        about_mission_desc: "نتبع أعلى معايير الأعمال الأخلاقية من خلال حوكمة فعالة وشفافة مع الالتزام دائمًا بالوفاء بوعودنا للمساهمين والعملاء. نحن نهدف إلى تقديم خدمات تأجير سيارات تتميز بالجودة والاحترافية، مع الحفاظ على رضا العملاء كشعار أساسي لنا.",
        about_values_title: "قيمنا",
        about_value_customer_title: "العميل أولاً وبشكل دائم",
        about_value_customer_desc: "نضع احتياجات عملائنا في مقدمة أولوياتنا، ونحرص على فهم متطلباتهم وتقديم حلول تتناسب معهم بشكل مثالي.",
        about_value_quality_title: "الجودة والاحترافية",
        about_value_quality_desc: "نلتزم بتقديم أعلى مستويات الجودة في كل ما نقدمه من خدمات، لضمان رضاكم التام.",
        about_why_title: "لماذا تختار اوتو لاين؟",
        about_why_variety_title: "تنوع السيارات",
        about_why_variety_desc: "نحرص على تقديم مجموعة متنوعة لتناسب جميع الاحتياجات.",
        about_why_flex_title: "المرونة في الخيارات",
        about_why_flex_desc: "سواء كنت بحاجة للتأجير ليوم واحد أو لفترة طويلة.",
        about_why_quality_title: "الجودة والموثوقية",
        about_why_quality_desc: "سياراتنا تخضع لصيانة دورية لضمان الأمان والراحة.",
        about_why_support_title: "دعم العملاء المستمر",
        about_why_support_desc: "فريق الدعم لدينا متاح على مدار الساعة لتقديم المساعدة.",
        // Blog Page
        blog_elite_stories: "قصص من عالم الفخامة والقيادة",
        blog_no_posts: "لا توجد مقالات منشورة حالياً.",
        // Contact Page
        contact_badge: "تواصل معنا",
        contact_title: "دعنا نساعدك في اختيار سيارتك المثالية",
        contact_form_title: "أرسل لنا رسالة",
        contact_name_placeholder: "الاسم الكامل",
        contact_email_placeholder: "البريد الإلكتروني",
        contact_phone_placeholder: "رقم الهاتف",
        contact_message_placeholder: "رسالتك...",
        contact_submit: "إرسال الرسالة",
        contact_info_title: "معلومات الاتصال",
        contact_address_title: "العنوان",
        contact_email_title: "البريد الإلكتروني",
        contact_phone_title: "اتصل بنا",
        contact_working_hours: "ساعات العمل: 24/7",
        // Mobile Nav
        mob_nav_home: "الرئيسية",
        mob_nav_fleet: "الأسطول",
        mob_nav_blog: "المدونة",
        mob_nav_contact: "تواصل",
        mob_nav_more: "المزيد",
        // Car details helper
        details_seats: "مقاعد",
        details_auto: "أوتو",
        details_manual: "يدوي",
        details_btn: "التفاصيل",
        details_per_day: "/ يوم"
    },
    en: {
        // Nav
        nav_home: "Home",
        nav_about: "About Us",
        nav_fleet: "Rent Cars",
        nav_blog: "Blog",
        nav_contact: "Contact Us",
        nav_cta: "Rent Your Car",
        // Hero
        hero_badge: "Auto Line Car Rental",
        hero_title_1: "Auto Line",
        hero_title_2: "Rent Your Car",
        hero_cta: "Learn About Our Services",
        // Services
        services_title: "Auto Line Provides a Wide Range of Cars",
        service_economy_title: "Economy Cars",
        service_economy_desc: "Perfect for daily commuting and fuel efficiency.",
        service_family_title: "Family Cars",
        service_family_desc: "Spacious and comfortable for the family.",
        service_suv_title: "SUVs",
        service_suv_desc: "Suitable for adventures and off-road trips.",
        service_luxury_title: "Luxury Cars",
        service_luxury_desc: "For those seeking a luxurious and elegant driving experience.",
        service_sports_title: "Sports Cars",
        service_sports_desc: "For speed and high-performance enthusiasts.",
        service_events_title: "Car Rental for Special Events",
        service_events_desc: "Rent cars for weddings or special celebrations.",
        // About
        about_badge: "About Us",
        about_title: "What You Know About Auto Line",
        about_p1: "Welcome to Auto Line. We are one of the leading car rental companies, aiming to provide an exceptional experience for our individual and corporate clients.",
        about_p2: "Auto Line is a leader in car rental, offering services tailored to diverse customer needs with a wide fleet of modern cars equipped with the latest technology.",
        about_p3: "With our competitive prices and premium additional services, we strive to provide the best value for our clients and make every trip a distinct experience.",
        about_experience_num: "12+",
        about_experience_text: "Years of Experience",
        // Features
        features_title: "Auto Line Features",
        feature_comfort_title: "Exceptional Comfort",
        feature_comfort_desc: "At Auto Line, we prioritize our clients' comfort. We provide modern cars with the latest technology for a comfortable and safe experience.",
        feature_time_title: "Less Time",
        feature_time_desc: "At Auto Line, we ensure a fast and easy experience. With our simple online booking system, find the right car in record time.",
        feature_cost_title: "Competitive Cost",
        feature_cost_desc: "Auto Line offers competitive prices for all budgets while maintaining high service quality. We provide special offers on long-term rentals.",
        // Rental CTA
        rental_cta_title: "Rent a Car",
        rental_cta_desc: "With Auto Line, you can rent the perfect car easily and quickly. We offer a diverse fleet of modern cars to meet your needs.",
        rental_cta_contact: "Contact Us",
        // Fleet
        fleet_title: "Cars for Rent",
        fleet_subtitle: "Choose from our best cars for rent",
        fleet_view_all: "View All",
        // Blog
        blog_title: "Elite Articles",
        blog_read_more: "Read More",
        // Footer
        footer_desc: "Auto Line, 2 Masjid Al Rahman Al Rahim, Hackstep, Al Nozha, Cairo Governorate 4473212",
        footer_explore: "Explore",
        footer_support: "Support",
        footer_contact: "Contact Us",
        footer_terms: "Terms of Use",
        footer_privacy: "Privacy Policy",
        footer_rights: "© 2026 Auto Line. All Rights Reserved.",
        // Fleet Page
        fleet_filters_title: "Filters",
        fleet_filter_brand: "Brand",
        fleet_filter_category: "Category",
        fleet_filter_transmission: "Transmission",
        fleet_filter_fuel: "Fuel Type",
        fleet_filter_apply: "Apply Filters",
        fleet_filter_reset: "Reset Filters",
        fleet_no_cars: "No cars found matching the selected filters.",
        fleet_all: "All",
        fleet_cat_sedan: "Luxury Sedan",
        fleet_cat_supercar: "Supercar",
        fleet_cat_suv: "SUV",
        fleet_trans_auto: "Automatic",
        fleet_trans_manual: "Manual",
        fleet_fuel_petrol: "Petrol",
        fleet_fuel_electric: "Electric",
        fleet_fuel_hybrid: "Hybrid",
        // About Page
        about_hero_subtitle: "Auto Line",
        about_hero_title: "Welcome to Auto Line",
        about_hero_desc: "Welcome to Auto Line. Auto Line is one of the leading car rental companies, where we aim to provide an exceptional experience for our individual and corporate clients. We believe in providing innovative solutions that meet our clients' needs and exceed their expectations.",
        about_services_title: "Our Services",
        about_services_subtitle: "A diverse variety of cars, Auto Line provides a wide range including:",
        about_service_eco_title: "Economy Cars",
        about_service_eco_desc: "Perfect for daily commuting and fuel efficiency.",
        about_service_family_title: "Family Cars",
        about_service_family_desc: "Provides ample space and comfort for the family.",
        about_service_suv_title: "SUVs",
        about_service_suv_desc: "Suitable for adventures and off-road paths.",
        about_service_luxury_title: "Luxury Cars",
        about_service_luxury_desc: "For those seeking a luxurious and elegant driving experience.",
        about_service_sports_title: "Sports Cars",
        about_service_sports_desc: "For fans of speed and high performance.",
        about_vision_title: "Our Vision",
        about_vision_desc: "To be the first choice in providing distinguished and diverse transportation solutions in the Middle and Africa, focusing on providing the best experiences for customers by maintaining the highest standards of quality and excellence.",
        about_mission_title: "Our Mission",
        about_mission_desc: "We follow the highest ethical business standards through effective and transparent governance, always committed to fulfilling our promises to shareholders and customers. We aim to provide car rental services characterized by quality and professionalism, while maintaining customer satisfaction as our primary slogan.",
        about_values_title: "Our Values",
        about_value_customer_title: "Customer First, Always",
        about_value_customer_desc: "We put our customers' needs at the forefront of our priorities, ensuring we understand their requirements and provide solutions that fit them perfectly.",
        about_value_quality_title: "Quality and Professionalism",
        about_value_quality_desc: "We are committed to providing the highest levels of quality in everything we offer, to ensure your complete satisfaction.",
        about_why_title: "Why Choose Auto Line?",
        about_why_variety_title: "Car Variety",
        about_why_variety_desc: "We ensure to provide a diverse range to suit all needs.",
        about_why_flex_title: "Flexibility in Options",
        about_why_flex_desc: "Whether you need to rent for one day or for a longer period.",
        about_why_quality_title: "Quality and Reliability",
        about_why_quality_desc: "Our cars undergo regular maintenance to ensure safety and comfort.",
        about_why_support_title: "Continuous Customer Support",
        about_why_support_desc: "Our support team is available around the clock to provide assistance.",
        // Blog Page
        blog_elite_stories: "Stories from the world of luxury and driving",
        blog_no_posts: "No articles published currently.",
        // Contact Page
        book_whatsapp: "Book via WhatsApp",
        book_note: "Your request will be recorded in our system and we will contact you immediately.",
        // Booking Flow Page
        booking_details: "Booking Details",
        personal_info: "Personal Info",
        payment: "Payment",
        driver_license: "Driver's License Number",
        upload_license: "Upload Driver's License",
        upload_tip: "Drag & drop or click to upload",
        card_number: "Card Number",
        expiry_date: "Expiry Date",
        cvc: "CVC",
        total_price: "Total",
        confirm_booking: "Confirm Booking & Pay",
        // Gallery/Fleet Page
        search_fleet: "Search fleet...",
        fleet_subtitle: "Discover our collection of premium vehicles",
        sort_by: "Sort:",
        sort_recommended: "Recommended",
        sort_price_low: "Price: Low to High",
        sort_price_high: "Price: High to Low",
        sort_newest: "Newest First",
        showing_count: "Showing $count luxury vehicles",
        filter_brand: "Brand",
        filter_price: "Price Range",
        filter_automatic: "Automatic",
        filter_manual: "Manual",
        filter_available: "Available",
        fleet_book: "Book Now",
        contact_badge: "Contact Us",
        contact_title: "Let us help you choose your perfect car",
        contact_form_title: "Send us a message",
        contact_name_placeholder: "Full Name",
        contact_email_placeholder: "Email Address",
        contact_phone_placeholder: "Phone Number",
        contact_message_placeholder: "Your Message...",
        contact_submit: "Send Message",
        contact_info_title: "Contact Information",
        contact_address_title: "Address",
        contact_email_title: "Email",
        contact_phone_title: "Call Us",
        contact_working_hours: "Working Hours: 24/7",
        // Mobile Nav
        mob_nav_home: "Home",
        mob_nav_fleet: "Fleet",
        mob_nav_blog: "Blog",
        mob_nav_contact: "Contact",
        mob_nav_more: "More",
        // Car details helper
        details_seats: "Seats",
        details_auto: "Auto",
        details_manual: "Manual",
        details_btn: "Details",
        details_per_day: "/ Day"
    }
};

class I18nManager {
    constructor() {
        this.currentLang = localStorage.getItem('autoline_lang') || 'ar';
        // Wait for DOM to be ready before applying language
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.applyLanguage());
        } else {
            this.applyLanguage();
        }
    }

    toggleLanguage() {
        this.currentLang = this.currentLang === 'ar' ? 'en' : 'ar';
        localStorage.setItem('autoline_lang', this.currentLang);
        this.applyLanguage();
        // Dispatch event for other scripts (like mobile_app.js) to respond
        window.dispatchEvent(new CustomEvent('languageChanged', { detail: this.currentLang }));
    }

    applyLanguage() {
        const lang = this.currentLang;
        const html = document.documentElement;
        
        // Update document attributes
        html.setAttribute('lang', lang);
        html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
        
        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = translations[lang][key];
                } else {
                    el.innerText = translations[lang][key];
                }
            }
        });

        // Update language toggle button visuals
        const toggleBtns = document.querySelectorAll('.lang-toggle-btn');
        toggleBtns.forEach(btn => {
            btn.innerText = lang === 'ar' ? 'EN' : 'AR';
        });

        // Extra polish: handle alignment classes if needed
        this.adjustAlignment(lang);
    }

    adjustAlignment(lang) {
        // Find elements that might need explicit text alignment changes
        // Often Tailwind utilities like 'text-right' need to become 'text-left'
        const elementsToFlip = document.querySelectorAll('.text-right, .text-left');
        elementsToFlip.forEach(el => {
            if (lang === 'en') {
                if (el.classList.contains('text-right') && !el.classList.contains('md:text-right')) {
                    el.classList.remove('text-right');
                    el.classList.add('text-left');
                    el.setAttribute('data-flipped', 'true');
                }
            } else {
                if (el.getAttribute('data-flipped') === 'true') {
                    el.classList.remove('text-left');
                    el.classList.add('text-right');
                    el.removeAttribute('data-flipped');
                }
            }
        });
    }

    t(key) {
        return translations[this.currentLang][key] || key;
    }
}

// Initialize and export to window for access
window.i18n = new I18nManager();
