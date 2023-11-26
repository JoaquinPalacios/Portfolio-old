const ArrayPortfolio: { id: string, title: string, description: string, URLsite: string, URLGitHub: string | null, pageImage: string, alt: string, tools: string[] }[] = [
    {
        id: '1',
        title: 'Ciudadanias 360 Website',
        description: 'Web Design and Development of Ciudadanias 360 website, as well as the implementation of SEO tactics.',
        URLsite: 'https://ciudadanias360.com.ar/',
        URLGitHub: 'null',
        pageImage: '/images/ciudadanias-web.png',
        alt: 'Ciudadanias Website',
        tools: ['Typescript', 'Next.js', 'Sass', 'Nodemailer']
    },
    {
        id: '2',
        title: 'Cation Website',
        description: 'Web Development of Cation Website. as well as the implementation of SEO tactics.',
        URLsite: 'https://www.cationquimica.com.ar/',
        URLGitHub: null,
        pageImage: '/images/cation-web.png',
        alt: 'Cation Website',
        tools: ['Typescript', 'Next.js', 'Sass', 'Nodemailer', 'Firebase']
    },
    {
        id: '3',
        title: 'Aimara Website',
        description: 'Web Design and Development of Aimara Wines website. The Aimara Website is a personal React.js project.',
        URLsite: 'https://aimara.netlify.app/',
        URLGitHub: null,
        pageImage: '/images/Aimara.png',
        alt: 'Aimara Website',
        tools: ['JavaScript', 'React.js', 'Bootstrap', 'Firebase']
    },
] 
export default ArrayPortfolio;