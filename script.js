let currentLang = 'ta';
let isDarkMode = false;

const translations = {
    ta: {
        docTitle: "RK Grinds - பாரம்பரிய மாவு அரைப்பகம்",
        brandText: "RK Grinds",
        navHome: "முகப்பு",
        navServices: "எங்கள் சேவை",
        navCalc: "கட்டணம் அறிய",
        navContact: "தொடர்புக்கு",
        heroTitle: "உங்கள் பொருட்கள்! எங்கள் உழைப்பு!",
        heroDesc: "நீங்கள் அரிசி, உளுந்து மற்றும் வெந்தயம் ஆகியவற்றைக் கொண்டு வாருங்கள். எங்களிடம் உள்ள இரண்டு பிரத்யேக கிரைண்டர்கள் மூலம், உங்கள் கண்முன்னே சுத்தமாகவும், சரியான பதத்திலும் இட்லி, தோசை, வடைக்கு மாவு அரைத்துத் தருகிறோம்.",
        heroBtn: "கட்டணத்தை கணக்கிட",
        processTitle: "நாங்கள் செயல்படும் விதம்",
        step1Title: "1. பொருட்களைக் கொடுங்கள்",
        step1Desc: "உங்களுக்குத் தேவையான அரிசி, உளுந்து ஆகியவற்றை ஊறவைத்துக் கொண்டு வாருங்கள்.",
        step2Title: "2. நாங்கள் அரைக்கிறோம்",
        step2Desc: "எங்களின் இரண்டு தரமான கல் கிரைண்டர்களில் சுத்தமான முறையில் அரைக்கப்படும்.",
        step3Title: "3. மாவை எடுத்துச் செல்லுங்கள்",
        step3Desc: "வீட்டுப் பக்குவத்தில் அருமையான மாவை நீங்கள் பெற்றுச் செல்லலாம்.",
        calcTitle: "அரைப்பதற்கான தோராயமான கட்டணம்",
        calcDesc: "நீங்கள் கொண்டு வரும் பொருட்களின் அளவை (கிலோ) உள்ளிடவும்",
        calcLabel: "<strong>Total fair:</strong>",
        calcPlaceholder: "உதாரணம்: 5",
        calcNote: "* இது ஒரு தோராயமான கட்டணம் மட்டுமே. (1 கிலோவிற்கு ₹30 என கணக்கிடப்பட்டுள்ளது)",
        calcResultMsg: "தோராயமான கட்டணம்: ",
        footerTitle: "RK Grinds - மாவு அரைப்பகம்",
        footerDesc: "சிறந்த சேவைக்கு எங்களை அணுகவும்.",
        footerPhone: "<strong>தொடர்புக்கு:</strong> +91 9245275426, +91 8012647629",
        footerLoc: "<strong>இடம்:</strong> 11/34, மணி மண்டப சாலை, மன்னார் பிள்ளை தெரு, காந்தி மார்க்கெட், திருச்சிராப்பள்ளி - 620008, தமிழ்நாடு, இந்தியா",
        rightsText: "All Rights Reserved.",
        themeDark: "🌙 இரவு",
        themeLight: "☀️ பகல்"
    },
    en: {
        docTitle: "RK Grinds - Traditional Wet Grinding",
        brandText: "RK Grinds",
        navHome: "Home",
        navServices: "Our Service",
        navCalc: "Price Check",
        navContact: "Contact",
        heroTitle: "Your Ingredients! Our Effort!",
        heroDesc: "Bring your rice, urad dal, and fenugreek. With our two dedicated heavy-duty grinders, we grind perfect batter for Idly, Dosa, and Vada right in front of you.",
        heroBtn: "Calculate Price",
        processTitle: "How It Works",
        step1Title: "1. Bring Ingredients",
        step1Desc: "Bring your soaked rice and urad dal to our shop.",
        step2Title: "2. We Grind",
        step2Desc: "We grind them cleanly using our high-quality stone grinders.",
        step3Title: "3. Take Your Batter",
        step3Desc: "Take home perfectly ground batter with a traditional homemade touch.",
        calcTitle: "Estimated Grinding Charge",
        calcDesc: "Enter the total weight of your ingredients (in kg)",
        calcLabel: "<strong>Total fair:</strong>",
        calcPlaceholder: "Example: 5",
        calcNote: "* This is an estimated cost. (Calculated at ₹30 per kg)",
        calcResultMsg: "Estimated Cost: ",
        footerTitle: "RK Grinds - Wet Grinding Service",
        footerDesc: "Contact us for the best service.",
        footerPhone: "<strong>Phone:</strong> +91 9245275426, +91 8012647629",
        footerLoc: "<strong>Location:</strong> 11/34, Mani Mandapa Salai, Mannarpillai Street, Gandhi Market, Tiruchirappalli-620008, Tamil Nadu, India",
        rightsText: "All Rights Reserved.",
        themeDark: "🌙 Dark",
        themeLight: "☀️ Light"
    }
};

function switchLanguage(lang) {
    currentLang = lang;
    
    // Update all text elements based on selected language
    document.getElementById('docTitle').innerText = translations[lang].docTitle;
    document.getElementById('brandText').innerText = translations[lang].brandText;
    document.getElementById('navHome').innerText = translations[lang].navHome;
    document.getElementById('navServices').innerText = translations[lang].navServices;
    document.getElementById('navCalc').innerText = translations[lang].navCalc;
    document.getElementById('navContact').innerText = translations[lang].navContact;
    
    document.getElementById('heroTitle').innerText = translations[lang].heroTitle;
    document.getElementById('heroDesc').innerText = translations[lang].heroDesc;
    document.getElementById('heroBtn').innerText = translations[lang].heroBtn;
    
    document.getElementById('processTitle').innerText = translations[lang].processTitle;
    document.getElementById('step1Title').innerText = translations[lang].step1Title;
    document.getElementById('step1Desc').innerText = translations[lang].step1Desc;
    document.getElementById('step2Title').innerText = translations[lang].step2Title;
    document.getElementById('step2Desc').innerText = translations[lang].step2Desc;
    document.getElementById('step3Title').innerText = translations[lang].step3Title;
    document.getElementById('step3Desc').innerText = translations[lang].step3Desc;
    
    document.getElementById('calcTitle').innerText = translations[lang].calcTitle;
    document.getElementById('calcDesc').innerText = translations[lang].calcDesc;
    document.getElementById('calcLabel').innerHTML = translations[lang].calcLabel;
    document.getElementById('kgInput').placeholder = translations[lang].calcPlaceholder;
    document.getElementById('calcNote').innerText = translations[lang].calcNote;
    
    document.getElementById('footerTitle').innerText = translations[lang].footerTitle;
    document.getElementById('footerDesc').innerText = translations[lang].footerDesc;
    document.getElementById('footerPhone').innerHTML = translations[lang].footerPhone;
    document.getElementById('footerLoc').innerHTML = translations[lang].footerLoc;
    
    updateThemeButtonText();
    calculatePrice();
}

function calculatePrice() {
    const kg = document.getElementById('kgInput').value;
    const pricePerKg = 30; // Updated price per kg to 30rs
    const resultDiv = document.getElementById('result');
    
    if (kg && kg > 0) {
        const total = kg * pricePerKg;
        resultDiv.innerHTML = translations[currentLang].calcResultMsg + "<strong>₹" + total + "</strong>";
    } else {
        resultDiv.innerHTML = "";
    }
}

function toggleTheme() {
    isDarkMode = !isDarkMode;
    if (isDarkMode) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.removeAttribute('data-theme');
    }
    updateThemeButtonText();
}

function updateThemeButtonText() {
    const btn = document.getElementById('themeToggle');
    if (isDarkMode) {
        btn.innerText = translations[currentLang].themeLight;
    } else {
        btn.innerText = translations[currentLang].themeDark;
    }
}
