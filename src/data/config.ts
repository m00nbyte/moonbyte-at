// src/data/config.ts

const techStack = [
    { title: 'HTML5', icon: 'icon-[devicon--html5]' },
    { title: 'CSS3', icon: 'icon-[devicon--css3]' },
    { title: 'JavaScript', icon: 'icon-[devicon--javascript]' },
    { title: 'TypeScript', icon: 'icon-[devicon--typescript]' },
    { title: 'React', icon: 'icon-[devicon--react]' },
    { title: 'NextJS', icon: 'icon-[devicon--nextjs] invert' },
    { title: 'VueJS', icon: 'icon-[devicon--vuejs]' },
    { title: 'Electron', icon: 'icon-[devicon--electron]' },
    { title: 'SocketIO', icon: 'icon-[devicon--socketio] invert' },
    { title: 'TailwindCSS', icon: 'icon-[devicon--tailwindcss]' },
    { title: 'RollupJS', icon: 'icon-[devicon--rollup]' },
    { title: 'Webpack', icon: 'icon-[devicon--webpack]' },
    { title: 'MongoDB', icon: 'icon-[devicon--mongodb]' },
    { title: 'Redis', icon: 'icon-[devicon--redis]' },
    { title: 'Zustand', icon: 'icon-[devicon--zustand]' },
    { title: 'Eslint', icon: 'icon-[devicon--eslint]' },
    { title: 'Sass', icon: 'icon-[devicon--sass]' },
    { title: 'PostCSS', icon: 'icon-[devicon--postcss]' },
    { title: 'Markdown', icon: 'icon-[devicon--markdown] invert' },
    { title: 'Yarn', icon: 'icon-[devicon--yarn]' },
    { title: 'Docker', icon: 'icon-[devicon--docker]' },
    { title: 'Nginx', icon: 'icon-[devicon--nginx]' },
    { title: 'Vercel', icon: 'icon-[devicon--vercel] invert' },
    { title: 'Cloudflare', icon: 'icon-[devicon--cloudflare]' },
    { title: 'Playwright', icon: 'icon-[devicon--playwright]' },
    { title: 'Puppeteer', icon: 'icon-[devicon--puppeteer]' }
];

const servicesList = [
    {
        icon: 'icon-[streamline--desktop-code]',
        title: 'Web Development',
        description:
            'With me you get design and programming from a single source, and I accompany you in all phases of your project.'
    },
    {
        icon: 'icon-[uil--rocket]',
        title: 'Business Websites',
        description: 'I create an attractive website for your company using modern technologies such as NodeJS and React.'
    },
    {
        icon: 'icon-[ri--shopping-cart-line]',
        title: 'Ecommerce',
        description:
            'With Wordpress and WooCommerce I can offer you high-quality online shops with tailored design solutions and ease of use.'
    },
    {
        icon: 'icon-[tdesign--data-checked]',
        title: 'Technical SEO',
        description:
            'Having a fast and secure website and using modern web standards is very important these days. I can optimize your source code and server settings.'
    },
    {
        icon: 'icon-[ic--baseline-security]',
        title: 'Security',
        description:
            'Every website should be protected from attacks. If you want to have your website professionally secured, I am exactly the right person for you.'
    },
    {
        icon: 'icon-[material-symbols--contact-support-rounded]',
        title: 'Support',
        description:
            'Do you already have a website, but you sometimes have a question or two? I will be happy to help you with your request.'
    }
];

const projectsList = [
    {
        href: 'https://sitemetrics.dev/',
        imageSrc: '/img/projects/sitemetrics.webp',
        alt: 'Website Health Check',
        title: 'Website Health Check',
        subtitle: "Analyze and report your website's infrastructure"
    },
    {
        href: 'https://prettyurl.pages.dev/',
        imageSrc: '/img/projects/prettyurl.webp',
        alt: 'Pretty URL',
        title: 'Pretty URL',
        subtitle: 'Parse and analyze any URLs'
    },
    {
        href: 'https://extracthtml.pages.dev/',
        imageSrc: '/img/projects/extracthtml.webp',
        alt: 'Extract HTML',
        title: 'Extract HTML',
        subtitle: 'Inspect and extract HTML using CSS'
    },
    {
        href: 'https://validjson.pages.dev/',
        imageSrc: '/img/projects/validjson.webp',
        alt: 'Format And Validate JSON',
        title: 'Validate JSON',
        subtitle: 'Format And Validate JSON'
    },
    {
        href: 'https://moonedit.pages.dev/',
        imageSrc: '/img/projects/moonedit.webp',
        alt: 'Live Code Editor',
        title: 'Live Code Editor',
        subtitle: 'Edit HTML, CSS, JavaScript live'
    }
];

const logoList = [
    {
        title: 'Breeder',
        url: 'https://breeder.at/',
        src: '/img/clients/breeder.webp',
        classes: 'h-14'
    },
    {
        title: 'Storeroom',
        url: 'https://storeroom.at/',
        src: '/img/clients/storeroom.webp',
        classes: 'h-16'
    },
    {
        title: 'Kibox',
        url: 'https://kibox.at/',
        src: '/img/clients/kibox.webp',
        classes: 'h-10'
    },
    {
        title: 'WIFI',
        url: 'https://wifiwien.at/',
        src: '/img/clients/wifi.webp',
        classes: 'h-12'
    },
    {
        title: 'PolypFarm',
        url: 'https://polyp.farm/',
        src: '/img/clients/polyp_farm.webp',
        classes: 'h-10'
    },
    {
        title: 'Farmer Panorama',
        url: 'https://farmerpanorama.com/',
        src: '/img/clients/farmer_panorama.webp',
        classes: 'h-14'
    },
    {
        title: 'Elke Altenberger',
        url: 'https://altenbergerinteriordesign.at/',
        src: '/img/clients/elke_altenberger.webp',
        classes: 'h-14'
    },
    {
        title: 'AMZ',
        url: 'https://amz.at/',
        src: '/img/clients/amz.webp',
        classes: 'h-12 px-2'
    },
    {
        title: 'Nicolodi Consulting',
        url: 'https://nicolodi-consulting.com/',
        src: '/img/clients/nicolodi_consulting.webp',
        classes: 'h-10'
    },
    {
        title: 'Body Concept',
        url: 'https://bodyconceptvienna.at/',
        src: '/img/clients/body_concept.webp',
        classes: 'h-14 invert saturate-200'
    },
    {
        title: 'Turys',
        url: 'https://turys.at/',
        src: '/img/clients/turys.webp',
        classes: 'h-14'
    },
    {
        title: 'Tapkey',
        url: 'https://tapkey.com/',
        src: '/img/clients/tapkey.webp',
        classes: 'h-8'
    },
    {
        title: 'Einzigartig Architektur',
        url: 'https://ea-arch.at/',
        src: '/img/clients/einzigartig_architektur.webp',
        classes: 'h-8 invert'
    },
    {
        title: 'Bluesky Immunotherapies',
        url: 'https://blueskyvaccines.com/',
        src: '/img/clients/bluesky_immunotherapies.webp',
        classes: 'h-8 invert'
    },
    {
        title: 'DateDrops',
        url: 'https://datedrops.com/',
        src: '/img/clients/datedrops.webp',
        classes: 'h-12 invert'
    },
    {
        title: 'Mag. Birgit Eichberger',
        url: 'https://birgiteichberger.at/',
        src: '/img/clients/birgit_eichberger.webp',
        classes: 'h-12 invert'
    }
];

const formText = {
    formId: 'ghzuv923',
    required: 'Field is required',
    minLength: 'Enter more characters',
    maxLength: 'Max. ? characters',
    messageLimit: 'Message limit reached',
    invalidChars: 'Invalid characters',
    invalidEmail: 'Invalid email address',
    checkbox: 'You must check the box',
    response: {
        '0': {
            title: 'Oh snap!',
            message: 'There was an error. Please try again later.',
            color: 'bg-rose-600'
        },
        '1': {
            title: 'Thank you!',
            message: 'Your message was delivered.',
            color: 'bg-emerald-600'
        }
    }
};

export { formText, logoList, projectsList, servicesList, techStack };
