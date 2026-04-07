var SITE = {
    developer: 'Amnesic Bit',
    owner: 'Leonardo Lamas',
    email: 'amnesic.bit@gmail.com',
    copyright: '2025',
    subtitle: { pt: 'Nossos jogos', en: 'Our games' },
    privacyLink: { pt: 'Política de Privacidade', en: 'Privacy Policy' },
    storeBadgeAlt: { pt: 'Disponível no Google Play', en: 'Get it on Google Play' },
    responseDays: { pt: '15 dias úteis', en: '15 business days' }
};

var SITE_APPS = {
    'fartypiglet': {
        version: '1.0',
        appName: { pt: 'Porquinho Peidão', en: 'Farty Piglet' },
        appFullName: { pt: 'Farty Piglet - Jogo Flappy', en: 'Farty Piglet - Flappy Game' },
        lastUpdated: { pt: '17 de fevereiro de 2024', en: 'February 17, 2024' },
        description: {
            pt: 'Bem-vindo ao mundo do Porquinho Peidão! Um divertido jogo estilo flappy com gráficos adoráveis e desenhados à mão. Toque na tela para fazer nosso pequeno porquinho voar através dos blocos de feno. Evite colidir com os blocos e ajude o porquinho peidorreiro a se manter vivo!',
            en: 'Welcome to the world of Farty Piglet! A fun flappy-style game with adorable hand-drawn graphics. Tap the screen to make our little piglet fly through the hay blocks. Avoid hitting the blocks and help the farty piglet stay alive!'
        },
        storeUrl: 'https://play.google.com/store/apps/details?id=com.amnesicbit.fartypiglet',
        icon: 'assets/icons/porquinho_peidao.webp',
        privacyPath: '/privacy/fartypiglet/'
    }
};

function renderLangToggle() {
    return '<div class="lang-toggle" id="langToggle" onclick="toggleLang()">' +
        '<span id="labelPt" class="active flag">&#127463;&#127479;</span>' +
        '<div class="switch"></div>' +
        '<span id="labelEn" class="flag">&#127482;&#127480;</span>' +
        '</div>';
}

function renderPrivacyHeader(appKey) {
    var app = SITE_APPS[appKey];
    var labels = {
        pt: { policyTitle: 'Política de Privacidade', lastUpdated: 'Última atualização', developer: 'Desenvolvedor', contactEmail: 'Email de contato', application: 'Aplicativo' },
        en: { policyTitle: 'Privacy Policy', lastUpdated: 'Last updated', developer: 'Developer', contactEmail: 'Contact email', application: 'Application' }
    };

    var html = '';
    ['pt', 'en'].forEach(function(lang) {
        var l = labels[lang];
        var cls = lang === 'en' ? 'content-en' : 'content-pt';
        html += '<div class="' + cls + '">' +
            '<header><div class="wrap">' +
            '<a href="/" class="back-link">&larr; ' + SITE.developer + '</a>' +
            '<h1>' + l.policyTitle + ' - ' + app.appName[lang] + ' <span class="badge">v' + app.version + '</span></h1>' +
            '<p class="meta"><strong>' + l.lastUpdated + ':</strong> ' + app.lastUpdated[lang] + '</p>' +
            '<p class="meta">' +
            '<strong>' + l.developer + ':</strong> ' + SITE.developer + '<br/>' +
            '<strong>' + l.contactEmail + ':</strong> <a href="mailto:' + SITE.email + '">' + SITE.email + '</a><br/>' +
            '<strong>' + l.application + ':</strong> ' + app.appFullName[lang] +
            '</p></div></header></div>';
    });
    return html;
}

function renderPrivacyFooter(appKey) {
    var app = SITE_APPS[appKey];
    var labels = {
        pt: { version: 'Versão', effectiveDate: 'Data de vigência', rights: 'Todos os direitos reservados' },
        en: { version: 'Version', effectiveDate: 'Effective date', rights: 'All rights reserved' }
    };

    var html = '';
    ['pt', 'en'].forEach(function(lang) {
        var l = labels[lang];
        var cls = lang === 'en' ? 'content-en' : 'content-pt';
        html += '<div class="' + cls + '">' +
            '<p>' + l.version + ' ' + app.version + ' &middot; ' + l.effectiveDate + ': ' + app.lastUpdated[lang] + '</p>' +
            '<p>&copy; ' + SITE.copyright + ' ' + SITE.developer + '. ' + l.rights + '.</p>' +
            '</div>';
    });
    return html;
}

function initPrivacyPage(appKey) {
    document.getElementById('privacy-toggle').innerHTML = renderLangToggle();
    document.getElementById('privacy-header').innerHTML = renderPrivacyHeader(appKey);
    document.getElementById('privacy-footer').innerHTML = renderPrivacyFooter(appKey);
    applyLang();
}

function renderHomeCards() {
    var storeBadge = 'https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg';
    var html = '';
    Object.keys(SITE_APPS).forEach(function(key) {
        var app = SITE_APPS[key];
        html += '<div class="app-card">' +
            '<a href="' + app.storeUrl + '" style="text-decoration: none; color: inherit;">' +
            '<img src="' + app.icon + '" alt="' + app.appName.en + '" class="icon">' +
            '<h2 data-pt="' + app.appName.pt + '" data-en="' + app.appName.en + '">' + app.appName.pt + '</h2>' +
            '<p class="description" data-pt="' + app.description.pt + '" data-en="' + app.description.en + '">' + app.description.pt + '</p>' +
            '<div class="store-badge">' +
            '<img src="' + storeBadge + '" data-pt-alt="' + SITE.storeBadgeAlt.pt + '" data-en-alt="' + SITE.storeBadgeAlt.en + '" alt="' + SITE.storeBadgeAlt.pt + '">' +
            '</div></a>' +
            '<a href="' + app.privacyPath + '" class="privacy-link" data-pt="' + SITE.privacyLink.pt + '" data-en="' + SITE.privacyLink.en + '">' + SITE.privacyLink.pt + '</a>' +
            '</div>';
    });
    return html;
}

function initHomePage() {
    document.getElementById('home-toggle').innerHTML = renderLangToggle();
    document.getElementById('home-subtitle').textContent = SITE.subtitle.pt;
    document.getElementById('home-subtitle').setAttribute('data-pt', SITE.subtitle.pt);
    document.getElementById('home-subtitle').setAttribute('data-en', SITE.subtitle.en);
    document.getElementById('home-cards').innerHTML = renderHomeCards();
    document.getElementById('home-footer').innerHTML = '&copy; ' + SITE.copyright + ' ' + SITE.developer;
    applyLang();
}

function detectLang() {
    var navLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
    return navLang.startsWith('pt') ? 'pt' : 'en';
}

var lang = detectLang();

function applyLang() {
    document.getElementById('langToggle').classList.toggle('en', lang === 'en');
    document.getElementById('labelPt').classList.toggle('active', lang === 'pt');
    document.getElementById('labelEn').classList.toggle('active', lang === 'en');
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en-US';

    document.querySelectorAll('[data-pt]').forEach(function(el) {
        el.textContent = el.getAttribute('data-' + lang);
    });
    document.querySelectorAll('[data-pt-alt]').forEach(function(el) {
        el.alt = el.getAttribute('data-' + lang + '-alt');
    });
    document.querySelectorAll('.content-pt').forEach(function(el) {
        el.style.display = lang === 'pt' ? '' : 'none';
    });
    document.querySelectorAll('.content-en').forEach(function(el) {
        el.style.display = lang === 'en' ? 'block' : 'none';
    });
}

function toggleLang() {
    lang = lang === 'pt' ? 'en' : 'pt';
    applyLang();
}
