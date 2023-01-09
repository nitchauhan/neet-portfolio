const getExperience = () => {
    const joiningDate = new Date(2021, 6, 21).getFullYear();
    const today = new Date().getFullYear();

    return today - joiningDate;
};

const MyData = {
    name: 'Nitin Chauhan',
    description: 'Software Developer',
    email: 'nitinchauhan9698@gmail.com',
    call: '+91 9662344294',


    socialLinks: [
        {
            title: 'LinkedIn',
            url: 'https://www.linkedin.com/in/nitin-chauhan07'
        },
        {
            title: 'GitHub',
            url: 'https://github.com/nitchauhan'
        },
        {
            title: 'Instagram',
            url: 'https://instagram.com'
        },
        {
            title: 'Resume',
            url: 'resume.pdf'
        }
    ],

    aboutMe: {
        totalExperience: getExperience(),
        // blogLink: 'harsh2124.wordpress.com',
        details:
            'Experienced Software Developer, adept in bringing forth expertise in design, installation, testing, and maintenance of software systems. Equipped with a diverse and promising skill-set. Proficient in various platforms, languages, and embedded systems. Experienced with the latest cutting-edge development tools and procedures. Able to effectively self-manage during independent projects, as well as collaborate as part of a productive team. Bringing forth expertise in the design, installation, testing, and maintenance of web systems. Able to effectively self-manage during independent projects, as well as collaborate in a team setting. Knowledgeable in the user interface, testing, and debugging processes.'
    },

    techStack: [
        'HTML',
        'CSS',
        'BOOTSTRAP',
        'Core UI',
        'Redux',
        'React Query',
        'React JS',
        'Next JS',
        'Express JS',
        'Mongo DB',
        'MySQL',
        'Python',
        'Django',
        'Flask',
    ],

    workHistory: [
        {
            position: 'MERN-stack Web Developer',
            company: 'Excellent WebWorld Pvt. Ltd.',
            companyURL: 'https://www.excellentwebworld.com/',
            place: 'Ahmedabad, Gujarat',
            duration: 'April 2022 - Present',
            details: [
                'Working with a complete remote team and managing the server and admin panel effectively.'
            ]
        },
        {
            position: 'MERN-stack Web Developer',
            company: ' XongoLab Technologies LLP',
            companyURL: 'https://www.xongolab.com/',
            place: 'Ahmedabad, Gujarat',
            duration: 'June 2021 - April 2022',
            details: [
                'Worked to meet client deadlines.',
                'Effectively multi-tasked and worked well with internal and external teams.',
                'Helped to achieve a consistent look and visual theme across the website by promoting uniform fonts, formatting, images, and layout.',
                'Effectively multitasked and worked well with internal and external teams.',
            ]
        },
    ]
};

export default MyData;
