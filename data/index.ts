const ArrayPortfolio: { id: string, title: string, description: string, URLsite: string, URLGitHub: string | null, pageImage: string, alt: string, tools: string[] }[] = [
    {
        id: '1',
        title: 'TiziFlet Website',
        description: 'Web Design and Development of TiziFlet Removalist website, as well as the implementation of SEO tactics.',
        URLsite: 'https://www.tiziflet.com.ar/',
        URLGitHub: 'https://github.com/JoaquinPalacios/TiziFlet',
        pageImage: '/images/TiziFlet.png',
        alt: 'TiziFlet Website',
        tools: ['JavaScript', 'React.js', 'Next.js', 'Bootstrap', 'React Icons', 'EmailJS']
    },
    {
        id: '2',
        title: 'Aimara Website',
        description: 'Web Design and Development of Aimara Wines website. The Aimara Website is a personal React.js project.',
        URLsite: 'https://aimara.netlify.app/',
        URLGitHub: 'https://github.com/JoaquinPalacios/Aimara',
        pageImage: '/images/Aimara.png',
        alt: 'Aimara Website',
        tools: ['JavaScript', 'React.js', 'Bootstrap', 'Firebase']
    },
    {
        id: '3',
        title: 'Multistream Solutions Website',
        description: 'Web Development of Multistream Solutions Website. The site was completed while working with Revolution Creative Group.',
        URLsite: 'https://multistreamsolutions.com.au/',
        URLGitHub: null,
        pageImage: '/images/Multistream.png',
        alt: 'Multistream Solutions Website',
        tools: ['WordPress - Divi', 'JavaScript', 'PHP', 'Bootstrap', 'Slick']
    }
] 
export default ArrayPortfolio;