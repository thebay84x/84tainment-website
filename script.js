/* =========================================================
   84 Tainment GmbH
   Page switching + i18n
   ========================================================= */

(function () {
  'use strict';

  // ---------- i18n dictionary ----------
  const I18N = {
    de: {
      'nav.brands':         'Brands',
      'nav.automation':     'Automation',
      'nav.videoMarketing': 'Video Marketing',
      'nav.contact':        'Kontakt',
      'nav.login':          'Login',

      'hero.eyebrow':    '84 Tainment GmbH',
      'hero.title1':     'Wir machen Marken zu',
      'hero.title2':     'Media Machines.',
      'hero.sub':        'Automatisiert. Skaliert. Monetarisiert. Auf YouTube, TikTok und Instagram in über 100 Ländern.',
      'hero.cta':        'Jetzt automatisieren',
      'hero.brandsCue':  'Unsere Marken',

      'auto.hero.eyebrow':     '84 Tainment GmbH · Business Automation',
      'auto.hero.title1':      'Wähle deine Automation —',
      'auto.hero.title2':      'Dein Business läuft von selbst.',
      'auto.hero.sub':         'Professionelle Automatisierungslösungen für Creator, Unternehmer und Agenturen — weniger Aufwand, mehr Output.',

      'auto.video.title':      'Video Marketing Automation',
      'auto.video.desc':       'Vollautomatische Video-Produktion und Distribution auf allen Kanälen.',
      'auto.video.f1':         'Automatische Schnitt-Workflows',
      'auto.video.f2':         'Multi-Channel Distribution',
      'auto.video.f3':         'Thumbnail-Generierung via KI',

      'auto.youtube.title':    'YouTube Marketing Automation',
      'auto.youtube.desc':     'Von der Keyword-Recherche bis zum Upload — komplett automatisiert.',
      'auto.youtube.f1':       'SEO-Optimierung automatisch',
      'auto.youtube.f2':       'Automatische Uploads & Scheduling',
      'auto.youtube.f3':       'Analytics-Reporting',

      'auto.instagram.title':  'Instagram Automation',
      'auto.instagram.desc':   'Automatisches Posting, Story-Scheduling und Engagement-Workflows.',
      'auto.instagram.f1':     'Post & Reels Auto-Scheduling',
      'auto.instagram.f2':     'Hashtag-Optimierung via KI',
      'auto.instagram.f3':     'DM-Automation',

      'auto.tiktok.title':     'TikTok Automation',
      'auto.tiktok.desc':      'Trends erkennen, Content erstellen, posten — alles ohne manuellen Aufwand.',
      'auto.tiktok.f1':        'Trend-Monitoring in Echtzeit',
      'auto.tiktok.f2':        'Auto-Captions & Hashtags',
      'auto.tiktok.f3':        'Peak-Time Posting',

      'auto.content.title':    'Content Automation',
      'auto.content.desc':     'KI-gestützte Content-Produktion für Blog, Newsletter und Social Media.',
      'auto.content.f1':       'KI-Texte in deiner Stimme',
      'auto.content.f2':       'Repurposing-Workflows',
      'auto.content.f3':       'Automatische Veröffentlichung',

      'auto.accounting.title': 'Buchhaltung Automation',
      'auto.accounting.desc':  'Rechnungen, Belege und Reports automatisch verarbeiten und kategorisieren.',
      'auto.accounting.f1':    'Automatische Belegerfassung',
      'auto.accounting.f2':    'DATEV-Export vorbereitet',
      'auto.accounting.f3':    'Monatsreports automatisch',

      'auto.price.period':     'pro Jahr (zzgl. USt)',
      'auto.cta.buy':          'Kaufen',
      'auto.priceNote':        '€699 pro Jahr (zzgl. USt) pro Modul — inkl. Updates, Support & persönlicher Betreuung.',

      'auto.bundle.title':     'Alle 6 Module. Ein Bundle. Volle Power.',
      'auto.bundle.savings':   'Spare über 52% — statt',
      'auto.bundle.cta':       'Complete Bundle — €1.999 pro Jahr (zzgl. USt)',

      'locations.label': 'Wir sind in deiner Nähe',

      'city.munich':     'München',
      'city.vienna':     'Wien',
      'city.london':     'London',
      'city.ibiza':      'Ibiza',
      'city.amsterdam':  'Amsterdam',

      'brands.label':    'Unsere Marken',

      'brand.tse.slogan':  'Ein privater Members Club',
      'brand.pl.slogan':   'Deine Longevity-Software',
      'brand.srws.slogan': 'Das globale Sim-Racing-Turnier',
      'brand.kws.slogan':  'Weltmeisterschaft im Kartsport',
      'brand.rl.slogan':   'Elektronische Festivals & Partys',
      'brand.t84.slogan':  'Video Marketing & Produktions-Automation',

      'brand.tse.cta':   'Suite kaufen',
      'brand.pl.cta':    'Life Check starten',
      'brand.srws.cta':  'Karriere beginnen',
      'brand.kws.cta':   'An WM teilnehmen',
      'brand.rl.cta':    'Nächster Rave',
      'brand.t84.cta':   'Jetzt automatisieren',


      'num.brands':      'eigenständige Medienmarken',
      'num.countries':   'Länder mit Zuschauern',
      'num.markets':     'Länder mit zahlenden Kunden',
      'num.since.value': 'seit 2015',
      'num.since.label': 'Video-First von Anfang an',

      'num.brands.value':    '6',
      'num.viewers.value':   '20 Mio.',
      'num.markets.value':   '56',
      'num.automated.value': '100%',
      'num.automated':       'vollautomatisiert',

      'model.title1':    'Ein Modell.',
      'model.title2':    'Sechs Märkte.',
      'model.tagline':   'Weltweit. Vollautomatisiert.',
      'model.body':      'Was für einen Markt funktioniert, skalieren wir auf den nächsten — vollautomatisiert. Dasselbe Produktionssystem. Dieselbe Content-Infrastruktur. Neue Nische, neues Publikum — aber bewährte Mechanik dahinter, die ohne manuellen Eingriff läuft.',

      'stats.label':     'GLOBALE REICHWEITE',
      'stats.viewers':   'Zuschauer weltweit',
      'stats.countries': 'Länder erreicht',
      'stats.customers': 'Länder mit Kunden',

      'step.1.title':    'Markt identifizieren',
      'step.1.text':     'Nischen mit Wachstumspotenzial — wo Video noch nicht dominiert und Aufmerksamkeit unterbewertet ist.',
      'step.2.title':    'Marke aufbauen',
      'step.2.text':     'Eigenständige Positionierung, eigene Stimme — keine Substitute, sondern unverwechselbare Identitäten.',
      'step.3.title':    'Internationalisieren',
      'step.3.text':     'Was im DACH-Raum funktioniert, übersetzen wir in englische, spanische und niederländische Märkte.',
      'step.4.title':    'Monetarisieren',
      'step.4.text':     'Kurse, Produkte, Memberships — auf Basis echter Reichweite und einer Community, die uns bereits kennt.',
      'step.5.title':    'Automatisieren',
      'step.5.text':     'Die Automatisierungs-Infrastruktur, die unsere eigenen Marken trägt, machen wir Kunden, Unternehmen, Agenturen und Kreativen weltweit zugänglich.',

      'legal.title':               'Impressum',
      'legal.company.label':       '84 Tainment GmbH Headquarter',
      'legal.company.role':        'Geschäftsführer: <a href="/sebastian-voppmann/">Sebastian Voppmann</a>',
      'legal.company.address':     'Viktualienmarkt 8<br />80331 München<br />Deutschland',
      'legal.contact.label':       'Kontakt',
      'legal.contact.email':       'E-Mail: <a href="mailto:info@84tainment.com">info@84tainment.com</a>',
      'legal.register.label':      'Handelsregister',
      'legal.register.court':      'Amtsgericht München',
      'legal.tax.label':           'Steuer',
      'legal.responsible.label':   'Verantwortlich nach § 18 Abs. 2 MStV',
      'legal.responsible.name':    'Ralf Hoffmann',
      'legal.responsible.address': 'Anschrift wie oben',
      'legal.locations.label':     'Standorte',
      'legal.locations.list':      'München · Wien · London · Ibiza · Amsterdam',

      'sebastian.back':            '← Zurück zum Impressum',
      'sebastian.title':           'Sebastian Voppmann',
      'sebastian.role':            'Gründer & CEO · 84 Tainment GmbH',
      'sebastian.bio':             '<p>Sebastian Voppmann ist Gründer und CEO der 84 Tainment GmbH. Seit der Gründung der Gruppe 2020 baut er digitale Geschäftsmodelle auf, die auf skalierbaren Content-Systemen und weitgehend automatisierten Prozessen basieren.</p><p>Vor seiner unternehmerischen Laufbahn arbeitete Sebastian Voppmann in der deutschen Filmbranche als Produktionsleiter bei internationalen Spielfilm- und TV-Produktionen. Das dort entwickelte operative Denken — in Produktions-Workflows und skalierbaren Strukturen — prägt seine Unternehmensführung bis heute.</p><p>Nach einem berufsbegleitenden Studium des International Management (Bachelor of Arts) war er bei AutoScout24, Siemens, TNS Infratest, Bet3000 und Infineon Technologies tätig, bevor er sich vollständig dem Aufbau der 84 Tainment Group widmete.</p><p>Unter seiner Leitung betreibt die Gruppe eine KI-gestützte Content-Factory und entwickelt digitale Produkte, Unternehmen und content-getriebene Marken.</p><p>Sebastian Voppmanns strategische Überzeugung: Nachhaltiges digitales Wachstum entsteht nicht durch bezahlte Reichweite allein, sondern durch konsequent eigene Kanäle, eigene Produkte und automatisierte Systeme, die unabhängig von einzelnen Plattformen funktionieren.</p>',

      'contact.title':             'Kontakt',
      'contact.customer.label':    'Kundenservice',
      'contact.customer.text':     'Möchtest Du über irgendetwas mit uns reden? Unser Kundenservice Team ist für Dich da! Schicke uns eine E-Mail und wir melden uns bei Dir, so schnell es uns möglich ist.',
      'contact.customer.email':    'E-Mail: <a href="mailto:info@84tainment.com">info@84tainment.com</a>',
      'contact.guest.label':       'Gastartikel & Linkplatzierungen',
      'contact.guest.text':        'Anfragen zu kostenpflichtigen Gastbeiträgen und Linkplatzierungen.',
      'contact.guest.email':       'E-Mail: <a href="mailto:gastartikel@84tainment.com">gastartikel@84tainment.com</a>',
      'contact.coop.label':        'Kooperationen',
      'contact.coop.text':         'Interesse an einer Kooperation mit Premium Life?',
      'contact.coop.email':        'E-Mail: <a href="mailto:kooperationen@84tainment.com">kooperationen@84tainment.com</a>',
      'contact.press.label':       'Presse',
      'contact.press.text':        'Interesse, über Premium Life zu schreiben, zu bloggen oder im TV zu berichten?',
      'contact.press.email':       'E-Mail: <a href="mailto:presse@84tainment.com">presse@84tainment.com</a>',

      'footer.copy':     '© 84 Tainment GmbH',
      'footer.legal':    'Impressum',
      'footer.contact':  'Kontakt',

      'login.title':     'Login',
      'login.sub':       'Mitarbeiterzugang zum internen Bereich.',
      'login.email':     'E-Mail',
      'login.password':  'Passwort',
      'login.submit':    'Anmelden',
    },

    en: {
      'nav.brands':         'Brands',
      'nav.automation':     'Automation',
      'nav.videoMarketing': 'Video Marketing',
      'nav.contact':        'Contact',
      'nav.login':          'Login',

      'hero.eyebrow':    '84 Tainment GmbH',
      'hero.title1':     'We Turn Brands Into',
      'hero.title2':     'Media Machines.',
      'hero.sub':        'Automated. Scaled. Monetized. On YouTube, TikTok and Instagram across 100+ countries.',
      'hero.cta':        'Start automation',
      'hero.brandsCue':  'Our Brands',

      'auto.hero.eyebrow':     '84 Tainment GmbH · Business Automation',
      'auto.hero.title1':      'Choose your automation —',
      'auto.hero.title2':      'Your business runs itself.',
      'auto.hero.sub':         'Professional automation solutions for creators, entrepreneurs and agencies — less effort, more output.',

      'auto.video.title':      'Video Marketing Automation',
      'auto.video.desc':       'Fully automated video production and distribution across all channels.',
      'auto.video.f1':         'Automated editing workflows',
      'auto.video.f2':         'Multi-channel distribution',
      'auto.video.f3':         'AI-generated thumbnails',

      'auto.youtube.title':    'YouTube Marketing Automation',
      'auto.youtube.desc':     'From keyword research to upload — completely automated.',
      'auto.youtube.f1':       'Automatic SEO optimisation',
      'auto.youtube.f2':       'Auto upload & scheduling',
      'auto.youtube.f3':       'Analytics reporting',

      'auto.instagram.title':  'Instagram Automation',
      'auto.instagram.desc':   'Automatic posting, story scheduling and engagement workflows.',
      'auto.instagram.f1':     'Post & Reels auto-scheduling',
      'auto.instagram.f2':     'AI hashtag optimisation',
      'auto.instagram.f3':     'DM automation',

      'auto.tiktok.title':     'TikTok Automation',
      'auto.tiktok.desc':      'Spot trends, create content, post — all without manual effort.',
      'auto.tiktok.f1':        'Real-time trend monitoring',
      'auto.tiktok.f2':        'Auto captions & hashtags',
      'auto.tiktok.f3':        'Peak-time posting',

      'auto.content.title':    'Content Automation',
      'auto.content.desc':     'AI-powered content production for blog, newsletter and social media.',
      'auto.content.f1':       'AI text in your voice',
      'auto.content.f2':       'Repurposing workflows',
      'auto.content.f3':       'Automatic publishing',

      'auto.accounting.title': 'Accounting Automation',
      'auto.accounting.desc':  'Automatically process and categorise invoices, receipts and reports.',
      'auto.accounting.f1':    'Automatic receipt capture',
      'auto.accounting.f2':    'DATEV-ready export',
      'auto.accounting.f3':    'Automated monthly reports',

      'auto.price.period':     'per year (excl. VAT)',
      'auto.cta.buy':          'Buy',
      'auto.priceNote':        '€699 per year (excl. VAT) per module — incl. updates, support and personal care.',

      'auto.bundle.title':     'All 6 modules. One bundle. Full power.',
      'auto.bundle.savings':   'Save over 52% — instead of',
      'auto.bundle.cta':       'Complete Bundle — €1,999 per year (excl. VAT)',

      'locations.label': 'Offices near you',

      'city.munich':     'Munich',
      'city.vienna':     'Vienna',
      'city.london':     'London',
      'city.ibiza':      'Ibiza',
      'city.amsterdam':  'Amsterdam',

      'brands.label':    'Our Brands',

      'brand.tse.slogan':  'A Private Members Club',
      'brand.pl.slogan':   'Your Longevity Software',
      'brand.srws.slogan': 'The Global Sim Racing Tournament',
      'brand.kws.slogan':  'World Championship in Karting',
      'brand.rl.slogan':   'Electronic Festivals & Parties',
      'brand.t84.slogan':  'Video Marketing & Production Automation',

      'brand.tse.cta':   'Get the Suite',
      'brand.pl.cta':    'Start Life Check',
      'brand.srws.cta':  'Start Your Career',
      'brand.kws.cta':   'Race the World',
      'brand.rl.cta':    'Next Rave',
      'brand.t84.cta':   'Automate Now',


      'num.brands':      'independent media brands',
      'num.countries':   'countries with viewers',
      'num.markets':     'countries with paying customers',
      'num.since.value': 'since 2015',
      'num.since.label': 'video-first from day one',

      'num.brands.value':    '6',
      'num.viewers.value':   '20M',
      'num.markets.value':   '56',
      'num.automated.value': '100%',
      'num.automated':       'fully automated',

      'model.title1':    'One model.',
      'model.title2':    'Six markets.',
      'model.tagline':   'Worldwide. Fully automated.',
      'model.body':      'What works for one market, we scale to the next — fully automated. Same production system. Same content infrastructure. New niche, new audience — but proven mechanics underneath that run without manual intervention.',

      'stats.label':     'GLOBAL REACH',
      'stats.viewers':   'viewers worldwide',
      'stats.countries': 'countries reached',
      'stats.customers': 'countries with customers',

      'step.1.title':    'Identify the market',
      'step.1.text':     'Niches with growth potential — where video has not yet taken over and attention is undervalued.',
      'step.2.title':    'Build the brand',
      'step.2.text':     'A standalone positioning, a voice of its own — no substitutes, but unmistakable identities.',
      'step.3.title':    'Go international',
      'step.3.text':     'What works in the DACH region, we translate into English, Spanish and Dutch markets.',
      'step.4.title':    'Monetise',
      'step.4.text':     'Courses, products, memberships — built on real reach and a community that already knows us.',
      'step.5.title':    'Automate',
      'step.5.text':     'The same automation infrastructure that powers our own brands is now available to customers, companies, agencies and creatives worldwide.',

      'legal.title':               'Legal Notice',
      'legal.company.label':       '84 Tainment GmbH Headquarter',
      'legal.company.role':        'Managing Director: <a href="/sebastian-voppmann/">Sebastian Voppmann</a>',
      'legal.company.address':     'Viktualienmarkt 8<br />80331 Munich<br />Germany',
      'legal.contact.label':       'Contact',
      'legal.contact.email':       'Email: <a href="mailto:info@84tainment.com">info@84tainment.com</a>',
      'legal.register.label':      'Commercial Register',
      'legal.register.court':      'Munich District Court',
      'legal.tax.label':           'Tax',
      'legal.responsible.label':   'Responsible per § 18 (2) MStV',
      'legal.responsible.name':    'Valerie Ross',
      'legal.responsible.address': 'Address as above',
      'legal.locations.label':     'Locations',
      'legal.locations.list':      'Munich · Vienna · London · Ibiza · Amsterdam',

      'sebastian.back':            '← Back to Legal Notice',
      'sebastian.title':           'Sebastian Voppmann',
      'sebastian.role':            'Founder & CEO · 84 Tainment GmbH',
      'sebastian.bio':             '<p>Sebastian Voppmann is the founder and CEO of 84 Tainment GmbH. Since founding the group in 2020, he has built digital business models based on scalable content systems and largely automated processes.</p><p>Before his entrepreneurial career, Sebastian Voppmann worked in the German film industry as a production manager on international feature film and TV productions. The operational mindset developed there, thinking in production workflows and scalable structures, remains a defining element of how he runs his businesses today.</p><p>After completing a degree in International Management (Bachelor of Arts) alongside full-time work, he held positions at AutoScout24, Siemens, TNS Infratest, Bet3000 and Infineon Technologies before committing full-time to building the 84 Tainment Group.</p><p>Under his leadership, the group operates an AI-powered content factory and develops digital products, companies and content-driven brands.</p><p>Sebastian Voppmann’s strategic conviction: sustainable digital growth is not built on paid reach alone, but on consistently owning your channels, your products, and automated systems that operate independently of any single platform.</p>',

      'contact.title':             'Contact',
      'contact.customer.label':    'Customer Service',
      'contact.customer.text':     'Want to talk to us about anything? Our customer service team is here for you. Send us an email and we will get back to you as soon as possible.',
      'contact.customer.email':    'Email: <a href="mailto:info@84tainment.com">info@84tainment.com</a>',
      'contact.guest.label':       'Guest Posts & Link Placements',
      'contact.guest.text':        'Enquiries about paid guest articles and link placements.',
      'contact.guest.email':       'Email: <a href="mailto:guestposts@84tainment.com">guestposts@84tainment.com</a>',
      'contact.coop.label':        'Cooperations',
      'contact.coop.text':         'Interested in a cooperation with Premium Life?',
      'contact.coop.email':        'Email: <a href="mailto:cooperations@84tainment.com">cooperations@84tainment.com</a>',
      'contact.press.label':       'Press',
      'contact.press.text':        'Interested in writing, blogging or reporting about Premium Life?',
      'contact.press.email':       'Email: <a href="mailto:press@84tainment.com">press@84tainment.com</a>',

      'footer.copy':     '© 84 Tainment GmbH',
      'footer.legal':    'Legal Notice',
      'footer.contact':  'Contact',

      'login.title':     'Login',
      'login.sub':       'Employee access to the internal area.',
      'login.email':     'Email',
      'login.password':  'Password',
      'login.submit':    'Sign in',
    },

    es: {
      'nav.brands':         'Marcas',
      'nav.automation':     'Automatización',
      'nav.videoMarketing': 'Video Marketing',
      'nav.contact':        'Contacto',
      'nav.login':          'Login',

      'hero.eyebrow':    '84 Tainment GmbH',
      'hero.title1':     'Convertimos marcas en',
      'hero.title2':     'Media Machines.',
      'hero.sub':        'Automatizado. Escalado. Monetizado. En YouTube, TikTok e Instagram en más de 100 países.',
      'hero.cta':        'Iniciar automatización',
      'hero.brandsCue':  'Nuestras Marcas',

      'auto.hero.eyebrow':     '84 Tainment GmbH · Business Automation',
      'auto.hero.title1':      'Elige tu automatización —',
      'auto.hero.title2':      'Tu negocio funciona solo.',
      'auto.hero.sub':         'Soluciones de automatización profesionales para creadores, emprendedores y agencias — menos esfuerzo, más resultado.',

      'auto.video.title':      'Automatización de Video Marketing',
      'auto.video.desc':       'Producción y distribución de vídeo totalmente automatizadas en todos los canales.',
      'auto.video.f1':         'Flujos de edición automáticos',
      'auto.video.f2':         'Distribución multicanal',
      'auto.video.f3':         'Miniaturas generadas por IA',

      'auto.youtube.title':    'Automatización de YouTube Marketing',
      'auto.youtube.desc':     'Desde la investigación de palabras clave hasta la subida — totalmente automatizado.',
      'auto.youtube.f1':       'Optimización SEO automática',
      'auto.youtube.f2':       'Subidas y programación automáticas',
      'auto.youtube.f3':       'Informes analíticos',

      'auto.instagram.title':  'Automatización de Instagram',
      'auto.instagram.desc':   'Publicación automática, programación de stories y flujos de engagement.',
      'auto.instagram.f1':     'Programación auto de Posts y Reels',
      'auto.instagram.f2':     'Optimización de hashtags con IA',
      'auto.instagram.f3':     'Automatización de DMs',

      'auto.tiktok.title':     'Automatización de TikTok',
      'auto.tiktok.desc':      'Detecta tendencias, crea contenido, publica — todo sin esfuerzo manual.',
      'auto.tiktok.f1':        'Monitoreo de tendencias en tiempo real',
      'auto.tiktok.f2':        'Subtítulos y hashtags automáticos',
      'auto.tiktok.f3':        'Publicación en horarios óptimos',

      'auto.content.title':    'Automatización de Contenido',
      'auto.content.desc':     'Producción de contenido con IA para blog, newsletter y redes sociales.',
      'auto.content.f1':       'Textos con IA en tu voz',
      'auto.content.f2':       'Flujos de reutilización',
      'auto.content.f3':       'Publicación automática',

      'auto.accounting.title': 'Automatización Contable',
      'auto.accounting.desc':  'Procesa y categoriza facturas, recibos e informes automáticamente.',
      'auto.accounting.f1':    'Captura automática de recibos',
      'auto.accounting.f2':    'Exportación lista para DATEV',
      'auto.accounting.f3':    'Informes mensuales automáticos',

      'auto.price.period':     'por año (más IVA)',
      'auto.cta.buy':          'Comprar',
      'auto.priceNote':        '€699 por año (más IVA) por módulo — incl. actualizaciones, soporte y atención personal.',

      'auto.bundle.title':     'Los 6 módulos. Un bundle. Todo el poder.',
      'auto.bundle.savings':   'Ahorra más del 52% — en vez de',
      'auto.bundle.cta':       'Bundle Completo — €1.999 por año (más IVA)',

      'locations.label': 'Cerca de ti',

      'city.munich':     'Múnich',
      'city.vienna':     'Viena',
      'city.london':     'Londres',
      'city.ibiza':      'Ibiza',
      'city.amsterdam':  'Ámsterdam',

      'brands.label':    'Nuestras Marcas',

      'brand.tse.slogan':  'Un club privado de miembros',
      'brand.pl.slogan':   'Tu software de longevidad',
      'brand.srws.slogan': 'El torneo global de Sim Racing',
      'brand.kws.slogan':  'Campeonato mundial de karting',
      'brand.rl.slogan':   'Festivales y fiestas electrónicas',
      'brand.t84.slogan':  'Marketing en vídeo & automatización de producción',

      'brand.tse.cta':   'Comprar Suite',
      'brand.pl.cta':    'Iniciar Life Check',
      'brand.srws.cta':  'Empieza tu carrera',
      'brand.kws.cta':   'Compite en el mundial',
      'brand.rl.cta':    'Próximo rave',
      'brand.t84.cta':   'Automatizar ahora',


      'num.brands':      'marcas de medios independientes',
      'num.countries':   'países con espectadores',
      'num.markets':     'países con clientes que pagan',
      'num.since.value': 'desde 2015',
      'num.since.label': 'video-first desde el primer día',

      'num.brands.value':    '6',
      'num.viewers.value':   '20 M',
      'num.markets.value':   '56',
      'num.automated.value': '100%',
      'num.automated':       'totalmente automatizado',

      'model.title1':    'Un modelo.',
      'model.title2':    'Seis mercados.',
      'model.tagline':   'En todo el mundo. Totalmente automatizado.',
      'model.body':      'Lo que funciona en un mercado lo escalamos al siguiente — totalmente automatizado. El mismo sistema de producción. La misma infraestructura de contenido. Nuevo nicho, nuevo público — pero la misma mecánica probada por detrás, funcionando sin intervención manual.',

      'stats.label':     'ALCANCE GLOBAL',
      'stats.viewers':   'espectadores en todo el mundo',
      'stats.countries': 'países alcanzados',
      'stats.customers': 'países con clientes',

      'step.1.title':    'Identificar el mercado',
      'step.1.text':     'Nichos con potencial de crecimiento — donde el vídeo todavía no domina y la atención está infravalorada.',
      'step.2.title':    'Construir la marca',
      'step.2.text':     'Un posicionamiento propio, una voz propia — no sustitutos, sino identidades inconfundibles.',
      'step.3.title':    'Internacionalizar',
      'step.3.text':     'Lo que funciona en la región DACH lo trasladamos a los mercados inglés, español y neerlandés.',
      'step.4.title':    'Monetizar',
      'step.4.text':     'Cursos, productos, membresías — sobre la base de un alcance real y una comunidad que ya nos conoce.',
      'step.5.title':    'Automatizar',
      'step.5.text':     'La infraestructura de automatización que impulsa nuestras propias marcas la ponemos a disposición de clientes, empresas, agencias y creativos en todo el mundo.',

      'legal.title':               'Aviso Legal',
      'legal.company.label':       '84 Tainment GmbH Headquarter',
      'legal.company.role':        'Director General: <a href="/sebastian-voppmann/">Sebastian Voppmann</a>',
      'legal.company.address':     'Viktualienmarkt 8<br />80331 Múnich<br />Alemania',
      'legal.contact.label':       'Contacto',
      'legal.contact.email':       'Correo: <a href="mailto:info@84tainment.com">info@84tainment.com</a>',
      'legal.register.label':      'Registro Mercantil',
      'legal.register.court':      'Tribunal de Múnich',
      'legal.tax.label':           'Fiscal',
      'legal.responsible.label':   'Responsable según § 18 (2) MStV',
      'legal.responsible.name':    'Valeria Rodriguez',
      'legal.responsible.address': 'Dirección como arriba',
      'legal.locations.label':     'Sedes',
      'legal.locations.list':      'Múnich · Viena · Londres · Ibiza · Ámsterdam',

      'sebastian.back':            '← Volver al Aviso Legal',
      'sebastian.title':           'Sebastian Voppmann',
      'sebastian.role':            'Fundador & CEO · 84 Tainment GmbH',
      'sebastian.bio':             '<p>Sebastian Voppmann es el fundador y CEO de 84 Tainment GmbH. Desde la fundación del grupo en 2020, ha construido modelos de negocio digitales basados en sistemas de contenido escalables y procesos en gran medida automatizados.</p><p>Antes de su carrera empresarial, Sebastian Voppmann trabajó en la industria cinematográfica alemana como jefe de producción en producciones internacionales de cine y televisión. La mentalidad operativa desarrollada allí — pensar en flujos de producción y estructuras escalables — sigue siendo un elemento determinante en la forma en que dirige sus empresas hoy.</p><p>Tras completar una licenciatura en International Management (Bachelor of Arts) compatibilizada con un trabajo a tiempo completo, ocupó puestos en AutoScout24, Siemens, TNS Infratest, Bet3000 e Infineon Technologies antes de dedicarse a tiempo completo a la construcción del 84 Tainment Group.</p><p>Bajo su liderazgo, el grupo opera una content factory impulsada por IA y desarrolla productos digitales, empresas y marcas centradas en el contenido.</p><p>La convicción estratégica de Sebastian Voppmann: el crecimiento digital sostenible no se construye solo con alcance pagado, sino con la posesión consistente de tus canales, tus productos y sistemas automatizados que funcionan independientemente de cualquier plataforma.</p>',

      'contact.title':             'Contacto',
      'contact.customer.label':    'Atención al Cliente',
      'contact.customer.text':     '¿Quieres hablar con nosotros sobre cualquier cosa? Nuestro equipo de atención al cliente está aquí para ayudarte. Envíanos un correo y te responderemos lo antes posible.',
      'contact.customer.email':    'Correo: <a href="mailto:info@84tainment.com">info@84tainment.com</a>',
      'contact.guest.label':       'Artículos invitados y enlaces patrocinados',
      'contact.guest.text':        'Consultas sobre artículos invitados de pago y colocación de enlaces.',
      'contact.guest.email':       'Correo: <a href="mailto:articulos@84tainment.com">articulos@84tainment.com</a>',
      'contact.coop.label':        'Colaboraciones',
      'contact.coop.text':         '¿Te interesa colaborar con Premium Life?',
      'contact.coop.email':        'Correo: <a href="mailto:colaboraciones@84tainment.com">colaboraciones@84tainment.com</a>',
      'contact.press.label':       'Prensa',
      'contact.press.text':        '¿Te interesa escribir, bloguear o informar sobre Premium Life?',
      'contact.press.email':       'Correo: <a href="mailto:prensa@84tainment.com">prensa@84tainment.com</a>',

      'footer.copy':     '© 84 Tainment GmbH',
      'footer.legal':    'Aviso Legal',
      'footer.contact':  'Contacto',

      'login.title':     'Login',
      'login.sub':       'Acceso para empleados al área interna.',
      'login.email':     'Correo',
      'login.password':  'Contraseña',
      'login.submit':    'Iniciar sesión',
    },

    nl: {
      'nav.brands':         'Brands',
      'nav.automation':     'Automation',
      'nav.videoMarketing': 'Video Marketing',
      'nav.contact':        'Contact',
      'nav.login':          'Login',

      'hero.eyebrow':    '84 Tainment GmbH',
      'hero.title1':     'Wij maken van merken',
      'hero.title2':     'Media Machines.',
      'hero.sub':        'Geautomatiseerd. Geschaald. Gemonetiseerd. Op YouTube, TikTok en Instagram in meer dan 100 landen.',
      'hero.cta':        'Start automatisering',
      'hero.brandsCue':  'Onze Merken',

      'auto.hero.eyebrow':     '84 Tainment GmbH · Business Automation',
      'auto.hero.title1':      'Kies je automatisering —',
      'auto.hero.title2':      'Je bedrijf draait vanzelf.',
      'auto.hero.sub':         'Professionele automatiseringsoplossingen voor creators, ondernemers en bureaus — minder werk, meer output.',

      'auto.video.title':      'Video Marketing Automatisering',
      'auto.video.desc':       'Volledig geautomatiseerde videoproductie en distributie op alle kanalen.',
      'auto.video.f1':         'Automatische montage-workflows',
      'auto.video.f2':         'Multi-channel distributie',
      'auto.video.f3':         'AI-gegenereerde thumbnails',

      'auto.youtube.title':    'YouTube Marketing Automatisering',
      'auto.youtube.desc':     'Van zoekwoordonderzoek tot upload — volledig geautomatiseerd.',
      'auto.youtube.f1':       'Automatische SEO-optimalisatie',
      'auto.youtube.f2':       'Automatische uploads & planning',
      'auto.youtube.f3':       'Analytics-rapportage',

      'auto.instagram.title':  'Instagram Automatisering',
      'auto.instagram.desc':   'Automatisch posten, story-planning en engagement-workflows.',
      'auto.instagram.f1':     'Posts & Reels auto-planning',
      'auto.instagram.f2':     'Hashtag-optimalisatie met AI',
      'auto.instagram.f3':     'DM-automatisering',

      'auto.tiktok.title':     'TikTok Automatisering',
      'auto.tiktok.desc':      'Trends spotten, content maken, posten — alles zonder handmatig werk.',
      'auto.tiktok.f1':        'Trend-monitoring in real time',
      'auto.tiktok.f2':        'Auto-captions & hashtags',
      'auto.tiktok.f3':        'Posten op piektijden',

      'auto.content.title':    'Content Automatisering',
      'auto.content.desc':     'AI-gestuurde contentproductie voor blog, newsletter en social media.',
      'auto.content.f1':       'AI-teksten in jouw stem',
      'auto.content.f2':       'Repurposing-workflows',
      'auto.content.f3':       'Automatische publicatie',

      'auto.accounting.title': 'Boekhouding Automatisering',
      'auto.accounting.desc':  'Facturen, bonnen en rapporten automatisch verwerken en categoriseren.',
      'auto.accounting.f1':    'Automatische bonregistratie',
      'auto.accounting.f2':    'DATEV-export voorbereid',
      'auto.accounting.f3':    'Automatische maandrapporten',

      'auto.price.period':     'per jaar (excl. BTW)',
      'auto.cta.buy':          'Kopen',
      'auto.priceNote':        '€699 per jaar (excl. BTW) per module — incl. updates, support & persoonlijke begeleiding.',

      'auto.bundle.title':     'Alle 6 modules. Eén bundel. Volle kracht.',
      'auto.bundle.savings':   'Bespaar meer dan 52% — i.p.v.',
      'auto.bundle.cta':       'Complete Bundel — €1.999 per jaar (excl. BTW)',

      'locations.label': 'Bij jou in de buurt',

      'city.munich':     'München',
      'city.vienna':     'Wenen',
      'city.london':     'Londen',
      'city.ibiza':      'Ibiza',
      'city.amsterdam':  'Amsterdam',

      'brands.label':    'Onze Merken',

      'brand.tse.slogan':  'Een private members club',
      'brand.pl.slogan':   'Jouw longevity-software',
      'brand.srws.slogan': 'Het wereldwijde Sim Racing toernooi',
      'brand.kws.slogan':  'Wereldkampioenschap karten',
      'brand.rl.slogan':   'Elektronische festivals & feesten',
      'brand.t84.slogan':  'Videomarketing & productie-automatisering',

      'brand.tse.cta':   'Suite kopen',
      'brand.pl.cta':    'Life Check starten',
      'brand.srws.cta':  'Start je carrière',
      'brand.kws.cta':   'Doe mee aan het WK',
      'brand.rl.cta':    'Volgende rave',
      'brand.t84.cta':   'Nu automatiseren',


      'num.brands':      'zelfstandige mediamerken',
      'num.countries':   'landen met kijkers',
      'num.markets':     'landen met betalende klanten',
      'num.since.value': 'sinds 2015',
      'num.since.label': 'video-first vanaf het eerste uur',

      'num.brands.value':    '6',
      'num.viewers.value':   '20 mln',
      'num.markets.value':   '56',
      'num.automated.value': '100%',
      'num.automated':       'volledig geautomatiseerd',

      'model.title1':    'Eén model.',
      'model.title2':    'Zes markten.',
      'model.tagline':   'Wereldwijd. Volledig geautomatiseerd.',
      'model.body':      'Wat werkt in één markt, schalen we naar de volgende — volledig geautomatiseerd. Hetzelfde productiesysteem. Dezelfde content-infrastructuur. Nieuwe niche, nieuw publiek — maar dezelfde beproefde mechaniek eronder, die zonder handmatig ingrijpen draait.',

      'stats.label':     'WERELDWIJD BEREIK',
      'stats.viewers':   'kijkers wereldwijd',
      'stats.countries': 'landen bereikt',
      'stats.customers': 'landen met klanten',

      'step.1.title':    'Markt identificeren',
      'step.1.text':     'Niches met groeipotentieel — waar video nog niet domineert en aandacht ondergewaardeerd is.',
      'step.2.title':    'Merk opbouwen',
      'step.2.text':     'Een eigen positionering, een eigen stem — geen kopieën, maar onmiskenbare identiteiten.',
      'step.3.title':    'Internationaliseren',
      'step.3.text':     'Wat in de DACH-regio werkt, vertalen we naar Engelse, Spaanse en Nederlandstalige markten.',
      'step.4.title':    'Monetariseren',
      'step.4.text':     'Cursussen, producten, memberships — op basis van echt bereik en een community die ons al kent.',
      'step.5.title':    'Automatiseren',
      'step.5.text':     'De automatiseringsinfrastructuur waarop onze eigen merken draaien, stellen we beschikbaar voor klanten, bedrijven, bureaus en creatieven wereldwijd.',

      'legal.title':               'Colofon',
      'legal.company.label':       '84 Tainment GmbH Headquarter',
      'legal.company.role':        'Bedrijfsleider: <a href="/sebastian-voppmann/">Sebastian Voppmann</a>',
      'legal.company.address':     'Viktualienmarkt 8<br />80331 München<br />Duitsland',
      'legal.contact.label':       'Contact',
      'legal.contact.email':       'E-mail: <a href="mailto:info@84tainment.com">info@84tainment.com</a>',
      'legal.register.label':      'Handelsregister',
      'legal.register.court':      'Amtsgericht München',
      'legal.tax.label':           'Belasting',
      'legal.responsible.label':   'Verantwoordelijk volgens § 18 lid 2 MStV',
      'legal.responsible.name':    'Sophie de Vries',
      'legal.responsible.address': 'Adres zoals boven',
      'legal.locations.label':     'Vestigingen',
      'legal.locations.list':      'München · Wenen · Londen · Ibiza · Amsterdam',

      'sebastian.back':            '← Terug naar Colofon',
      'sebastian.title':           'Sebastian Voppmann',
      'sebastian.role':            'Oprichter & CEO · 84 Tainment GmbH',
      'sebastian.bio':             '<p>Sebastian Voppmann is oprichter en CEO van 84 Tainment GmbH. Sinds de oprichting van de groep in 2020 bouwt hij digitale businessmodellen op basis van schaalbare contentsystemen en grotendeels geautomatiseerde processen.</p><p>Vóór zijn ondernemerscarrière werkte Sebastian Voppmann in de Duitse filmindustrie als productieleider bij internationale speelfilm- en tv-producties. De daar ontwikkelde operationele denkwijze — denken in productie-workflows en schaalbare structuren — blijft tot vandaag bepalend voor hoe hij zijn bedrijven leidt.</p><p>Na het afronden van een opleiding International Management (Bachelor of Arts) naast een fulltime baan, bekleedde hij functies bij AutoScout24, Siemens, TNS Infratest, Bet3000 en Infineon Technologies, voordat hij zich volledig wijdde aan de opbouw van de 84 Tainment Group.</p><p>Onder zijn leiding exploiteert de groep een AI-gestuurde content factory en ontwikkelt digitale producten, bedrijven en content-gedreven merken.</p><p>Sebastian Voppmanns strategische overtuiging: duurzame digitale groei wordt niet gebouwd op betaald bereik alleen, maar op het consequent in eigen hand houden van je kanalen, je producten en geautomatiseerde systemen die onafhankelijk van een specifiek platform functioneren.</p>',

      'contact.title':             'Contact',
      'contact.customer.label':    'Klantenservice',
      'contact.customer.text':     'Wil je ergens over met ons praten? Ons klantenserviceteam staat voor je klaar! Stuur ons een e-mail en we komen zo snel mogelijk bij je terug.',
      'contact.customer.email':    'E-mail: <a href="mailto:info@84tainment.com">info@84tainment.com</a>',
      'contact.guest.label':       'Gastartikelen & Linkplaatsingen',
      'contact.guest.text':        'Aanvragen voor betaalde gastartikelen en linkplaatsingen.',
      'contact.guest.email':       'E-mail: <a href="mailto:gastartikelen@84tainment.com">gastartikelen@84tainment.com</a>',
      'contact.coop.label':        'Samenwerkingen',
      'contact.coop.text':         'Interesse in een samenwerking met Premium Life?',
      'contact.coop.email':        'E-mail: <a href="mailto:samenwerkingen@84tainment.com">samenwerkingen@84tainment.com</a>',
      'contact.press.label':       'Pers',
      'contact.press.text':        'Interesse om over Premium Life te schrijven, te bloggen of in de media te berichten?',
      'contact.press.email':       'E-mail: <a href="mailto:pers@84tainment.com">pers@84tainment.com</a>',

      'footer.copy':     '© 84 Tainment GmbH',
      'footer.legal':    'Colofon',
      'footer.contact':  'Contact',

      'login.title':     'Login',
      'login.sub':       'Werknemerstoegang tot het interne gedeelte.',
      'login.email':     'E-mail',
      'login.password':  'Wachtwoord',
      'login.submit':    'Aanmelden',
    },
  };

  // ---------- State ----------
  const HTML_KEYS = new Set([
    'legal.company.address',
    'legal.company.role',
    'legal.contact.email',
    'contact.customer.email',
    'contact.guest.email',
    'contact.coop.email',
    'contact.press.email',
    'sebastian.bio',
  ]);

  const PAGE_TITLES = {
    de: '84 Tainment GmbH',
    en: '84 Tainment GmbH',
    es: '84 Tainment GmbH',
    nl: '84 Tainment GmbH',
  };

  let currentLang = 'de';

  // ---------- Page switching ----------
  function showPage(name) {
    const page = document.getElementById('page-' + name);
    if (!page) {
      // Page lives on a different document — navigate there directly
      window.location.href = (name === 'impressum') ? '/impressum/' : '/#' + name;
      return;
    }
    document.querySelectorAll('.page').forEach((p) => p.classList.remove('is-active'));
    page.classList.add('is-active');
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
  }

  // ---------- i18n ----------
  function setLang(lang) {
    if (!I18N[lang]) return;
    currentLang = lang;

    const dict = I18N[lang];
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (!(key in dict)) return;
      if (HTML_KEYS.has(key)) {
        el.innerHTML = dict[key];
      } else {
        el.textContent = dict[key];
      }
    });

    document.documentElement.lang = lang;
    if (PAGE_TITLES[lang] && !document.body.hasAttribute('data-keep-title')) {
      document.title = PAGE_TITLES[lang];
    }

    document.querySelectorAll('.lang-switch [data-lang]').forEach((a) => {
      a.classList.toggle('is-active', a.getAttribute('data-lang') === lang);
    });

    try { localStorage.setItem('pl_lang', lang); } catch (e) {}
  }

  // ---------- Slide-in Menu ----------
  function openMenu() {
    const menu = document.getElementById('site-menu');
    if (!menu) return;
    menu.hidden = false;
    menu.setAttribute('aria-hidden', 'false');
    document.body.classList.add('menu-open');
    const toggle = document.querySelector('.menu-toggle');
    if (toggle) toggle.setAttribute('aria-expanded', 'true');
  }

  function closeMenu() {
    const menu = document.getElementById('site-menu');
    if (!menu || menu.hidden) return;
    menu.hidden = true;
    menu.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('menu-open');
    const toggle = document.querySelector('.menu-toggle');
    if (toggle) toggle.setAttribute('aria-expanded', 'false');
  }

  // ---------- Wire up ----------
  document.addEventListener('click', (e) => {
    // Placeholder links inside the menu (no data-action) — close menu, prevent # nav
    const menuLink = e.target.closest('.site-menu__panel a[href="#"]');
    if (menuLink && !menuLink.hasAttribute('data-action')) {
      e.preventDefault();
      closeMenu();
      return;
    }

    const target = e.target.closest('[data-action], [data-lang]');
    if (!target) return;

    const action = target.getAttribute('data-action');

    if (action === 'menu-open') {
      e.preventDefault();
      openMenu();
      return;
    }
    if (action === 'menu-close') {
      e.preventDefault();
      closeMenu();
      return;
    }

    if (action === 'home' || action === 'impressum' || action === 'login') {
      e.preventDefault();
      closeMenu();
      showPage(action);
      if (action === 'login') {
        const firstInput = document.querySelector('#page-login input');
        if (firstInput) setTimeout(() => firstInput.focus(), 60);
      }
      return;
    }


    const lang = target.getAttribute('data-lang');
    if (lang) {
      e.preventDefault();
      setLang(lang);

      if (target.classList.contains('location')) {
        document.querySelectorAll('.location').forEach((el) => el.classList.remove('is-active'));
        target.classList.add('is-active');
      }
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });

  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
    });
  }

  // ---------- Animated counters (Numbers strip) ----------
  function animateCounter(el) {
    if (el.dataset.counted === 'true') return;
    el.dataset.counted = 'true';

    const text = (el.textContent || '').trim();
    const match = text.match(/^(\d+)(.*)$/);
    if (!match) return;

    const target = parseInt(match[1], 10);
    if (isNaN(target)) return;
    const suffix = match[2];

    const duration = 1600;
    const start = performance.now();

    function tick(now) {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      const current = Math.round(target * eased);
      el.textContent = current + suffix;
      if (t < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  function setupCounters() {
    const numbersSection = document.querySelector('.numbers');
    if (!numbersSection) return;

    if (!('IntersectionObserver' in window)) {
      numbersSection.querySelectorAll('.number-cell').forEach((c) => c.classList.add('is-in'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const cells = entry.target.querySelectorAll('.number-cell');
        cells.forEach((cell, i) => {
          cell.classList.add('is-in');
          const value = cell.querySelector('.number-cell__value');
          if (value) setTimeout(() => animateCounter(value), i * 120);
        });
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.3 });

    observer.observe(numbersSection);
  }

  // ---------- Init ----------
  let initialLang = 'de';
  try {
    const stored = localStorage.getItem('pl_lang');
    if (stored && I18N[stored]) initialLang = stored;
  } catch (e) {}
  setLang(initialLang);

  // Hash routing — redirect legacy #impressum to its own page; open others by hash
  const initialHash = (window.location.hash || '').replace('#', '');
  if (initialHash === 'impressum') {
    window.location.replace('/impressum/');
  } else if (initialHash && document.getElementById('page-' + initialHash)) {
    showPage(initialHash);
  }

  setupCounters();
})();
