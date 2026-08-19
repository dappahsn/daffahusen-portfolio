import React from 'react';

export const GithubIcon = (props) =>
  React.createElement(
    'svg',
    { viewBox: '0 0 24 24', fill: 'currentColor', width: 24, height: 24, ...props },
    React.createElement('path', {
      d: 'M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z'
    })
  );

export const LinkedinIcon = (props) =>
  React.createElement(
    'svg',
    { viewBox: '0 0 24 24', fill: 'currentColor', width: 24, height: 24, ...props },
    React.createElement('path', {
      d: 'M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.69 1.69 0 1 0 0-3.38 1.69 1.69 0 0 0 0 3.38m1.39 9.74v-8.37H5.07v8.37h2.78z'
    })
  );

export const InstagramIcon = (props) =>
  React.createElement(
    'svg',
    { viewBox: '0 0 24 24', fill: 'currentColor', width: 24, height: 24, ...props },
    React.createElement('path', {
      d: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z'
    })
  );

export const socialIcons = {
  GitHub: GithubIcon,
  LinkedIn: LinkedinIcon,
  Instagram: InstagramIcon
};

export const personal = {
  name: 'Muhammad Daffa Husen',
  shortName: 'Daffa',

  roles: [
    'Computer Engineering Graduate',
    'Front-End Developer',
    'UI/UX Designer',
    'Machine Learning Enthusiast'
  ],

  description:
    'Computer Engineering graduate passionate about building thoughtful digital experiences through web development, UI/UX design, machine learning, and emerging technologies.',

  email: 'daffahusen10@gmail.com',
  location: 'Banda Aceh, Indonesia',

  heroImage: '/images/profile-hero.jpg',
  cv: '/cv/CV_Muhammad_Daffa_Husen.pdf',

  about: {
    intro:
      'I create digital experiences.',

    description:
      'I am Muhammad Daffa Husen, a Computer Engineering graduate from Universitas Syiah Kuala with interests in front-end development, UI/UX design, machine learning, artificial intelligence, IoT, and embedded systems. I enjoy transforming ideas into functional and visually engaging digital products while continuously exploring new technologies and better ways to solve real-world problems.',

    location: 'Banda Aceh, Indonesia',

    role:
      'Computer Engineering Graduate · Front-End Developer · UI/UX Designer · Machine Learning Enthusiast'
  }
};

export const socials = [
  {
    name: 'GitHub',
    url: 'https://github.com/dappahsn',
    icon: 'GitHub'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/muhammaddaffahusen/',
    icon: 'LinkedIn'
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/dappahsn',
    icon: 'Instagram'
  }
];

// ─── SKILLS ──────────────────────────────────────────────────────────────────
export const skills = [
  {
    id: 'development',
    title: 'Development',
    eyebrow: '01 / BUILD',
    items: [
      {
        name: 'React.js',
        description: 'JavaScript library for building modern and interactive user interfaces with a component-based architecture.'
      },
      {
        name: 'JavaScript',
        description: 'Programming language used to build dynamic and interactive web experiences across front-end and back-end.'
      },
      {
        name: 'HTML',
        description: 'Standard markup language that structures the content and layout of web pages.'
      },
      {
        name: 'CSS',
        description: 'Stylesheet language used to control the visual presentation and layout of web documents.'
      },
      {
        name: 'Bootstrap',
        description: 'Open-source CSS framework providing pre-built responsive components and a flexible grid system.'
      },
      {
        name: 'Vite',
        description: 'Next-generation front-end build tool offering fast development server and optimized production builds.'
      },
      {
        name: 'Responsive Web Design',
        description: 'Approach to web design that ensures interfaces look and function well across all screen sizes and devices.'
      }
    ]
  },

  {
    id: 'design',
    title: 'Design',
    eyebrow: '02 / CRAFT',
    items: [
      {
        name: 'Figma',
        description: 'Collaborative design tool for UI/UX design, wireframing, prototyping, and design handoff.'
      },
      {
        name: 'UI/UX Design',
        description: 'Practice of designing user interfaces and experiences focused on usability, accessibility, and visual quality.'
      },
      {
        name: 'Wireframing',
        description: 'Low-fidelity visual guide representing the skeletal framework of a digital interface or product.'
      },
      {
        name: 'Prototyping',
        description: 'Creating interactive mockups to simulate and test user flows before final development.'
      },
      {
        name: 'Design Systems',
        description: 'Collection of reusable components and guidelines that ensure visual consistency across products.'
      },
      {
        name: 'Responsive Design',
        description: 'Design methodology ensuring consistent user experience across different screen sizes and devices.'
      }
    ]
  },

  {
    id: 'machine-learning',
    title: 'Machine Learning',
    eyebrow: '03 / INTELLIGENCE',
    items: [
      {
        name: 'Python',
        description: 'High-level programming language widely used in data science, machine learning, and automation.'
      },
      {
        name: 'Machine Learning',
        description: 'Field of AI that enables systems to learn and improve from data without being explicitly programmed.'
      },
      {
        name: 'Natural Language Processing',
        description: 'Branch of AI focused on enabling machines to understand and process human language.'
      },
      {
        name: 'Sentiment Analysis',
        description: 'NLP technique used to classify text data as positive, negative, or neutral sentiment.'
      },
      {
        name: 'Transformers',
        description: 'Deep learning architecture that powers state-of-the-art NLP models using self-attention mechanisms.'
      },
      {
        name: 'IndoBERT',
        description: 'Indonesian pre-trained BERT model optimized for natural language processing tasks in Bahasa Indonesia.'
      },
      {
        name: 'IndoBERTweet',
        description: 'Indonesian BERT variant fine-tuned on Twitter/social media data for informal language NLP tasks.'
      },
      {
        name: 'Scikit-learn',
        description: 'Python machine learning library providing tools for classification, regression, and clustering algorithms.'
      }
    ]
  },

  {
    id: 'tools',
    title: 'Tools & Technologies',
    eyebrow: '04 / SYSTEMS',
    items: [
      {
        name: 'Git',
        description: 'Distributed version control system for tracking changes in source code during software development.'
      },
      {
        name: 'GitHub',
        description: 'Cloud-based platform for hosting Git repositories and enabling collaborative software development.'
      },
      {
        name: 'Arduino',
        description: 'Open-source electronics platform for building digital devices with programmable microcontrollers.'
      },
      {
        name: 'ESP32',
        description: 'Low-cost, low-power microcontroller with integrated Wi-Fi and Bluetooth for IoT applications.'
      },
      {
        name: 'Chart.js',
        description: 'JavaScript library for creating interactive and animated data visualizations in the browser.'
      },
      {
        name: 'Google Colab',
        description: 'Cloud-based Jupyter notebook environment for running Python code with free GPU/TPU access.'
      },
      {
        name: 'VS Code',
        description: 'Lightweight yet powerful source code editor by Microsoft with rich extension ecosystem support.'
      }
    ]
  }
];

// ─── EXPERIENCE ───────────────────────────────────────────────────────────────
export const experiences = [
  {
    id: 'exp-aslab-embedded',
    role: 'Teaching Assistant - Embedded Systems Course',
    company: 'Universitas Syiah Kuala',
    location: 'Banda Aceh, Indonesia',
    period: 'Aug 2025 - Dec 2025',
    type: 'Part-time',
    logo: '/images/logos/usk.svg',
    description:
      'Assisted students in understanding embedded systems through microcontroller-based projects, lab sessions, and hands-on work with development boards, sensors, and actuators. Evaluated lab assignments and collaborated with the course instructor to prepare practical materials while strengthening technical and mentoring skills.',
    responsibilities: [],
    technologies: ['Microcontroller', 'Sensors', 'Actuators', 'C/C++'],
    images: []
  },
  {
    id: 'exp-aslab-rpl',
    role: 'Teaching Assistant - Software Engineering Course',
    company: 'Universitas Syiah Kuala',
    location: 'Banda Aceh, Indonesia',
    period: 'Jan 2025 - Jun 2025',
    type: 'Part-time',
    logo: '/images/logos/usk.svg',
    description:
      'Assisted students in understanding software engineering concepts through project guidance, practical exercises, Q&A sessions, and assignment evaluation. Collaborated with the course instructor to prepare learning materials while strengthening mentoring, communication, and technical skills.',
    responsibilities: [],
    technologies: ['Software Engineering', 'UML', 'Agile', 'Git'],
    images: []
  },
  {
    id: 'exp-pln-intern',
    role: 'Intern - Communication Division',
    company: 'PT PLN (Persero) UID Aceh',
    location: 'Banda Aceh, Indonesia',
    period: 'Dec 2024 — Jan 2025',
    type: 'Internship',
    logo: '/images/logos/pln.png',
    description:
      'Assisted in producing the PodcaStroom podcast, contributing to content and technical setup while reaching around 200 monthly views and 100 new subscribers. Developed the Desa Berdaya PLN UID Aceh website and documented PLN events by capturing and editing 500+ photos and videos for digital archives and publication.',
    responsibilities: [
      'Assisted in producing the PodcaStroom podcast with technical and content preparation.',
      'Developed the responsive Desa Berdaya PLN UID Aceh website.',
      'Documented PLN events by capturing and editing 500+ photos and videos for archives and media publication.'
    ],
    technologies: ['Web Development', 'Photography', 'Videography', 'Media Production'],
    images: [
      { src: '/About/Experience/PLN/1.JPG', caption: 'Producing PodcaStroom' },
      { src: '/About/Experience/PLN/2.jpg', caption: 'Producing Website Desa Berdaya' },
      { src: '/About/Experience/PLN/3.jpg', caption: 'Documenting PLN Events' }
    ]
  },
  {
    id: 'exp-LO-PON',
    role: 'Liaison Officer',
    company: 'Pekan Olahraga Nasional (PON) XXI Aceh-Sumatera Utara',
    location: 'Banda Aceh, Indonesia',
    period: 'Sep 2024 — Oct 2024',
    type: 'Seasonal',
    logo: '/images/logos/pon.png',
    description:
      'Acted as a primary point of contact, facilitating communication between athletes, officials, and the organizing committee while coordinating logistics, schedules, and participant needs. Contributed to the success of PON XXI by ensuring effective communication and providing high-quality support to all stakeholders.',
    responsibilities: [
      'Primary point of contact for athletes, team officials, and the organizing committee.',
      'Coordinated transport logistics, venue schedules, and accommodation assistance.',
      'Ensured top-tier communication flow and rapid response to event challenges.'
    ],
    technologies: ['Event Management', 'Public Relations', 'Logistics Planning'],
    images: [
      { src: '/About/Experience/PON/1.jpg', caption: 'Opening Ceremony' },
      { src: '/About/Experience/PON/2.jpg', caption: 'Certification' },
    ]
  },
  {
    id: 'exp-BINER',
    role: 'Chairperson - Bina Islami Aneuk Komputer (BINER 7.0)',
    company: 'Himpunan Mahasiswa Teknik Informatika Universitas Syiah Kuala',
    location: 'Banda Aceh, Indonesia',
    period: 'Oct 2023',
    type: 'Seasonal',
    logo: '/images/logos/HIMATEKKOM.png',
    description:
      'Successfully led BINER 7.0 under the theme “How to Reach Society 5.0 with Islamic Values,” overseeing planning, budgeting, team coordination, and event execution. Promoted the integration of Society 5.0 concepts with Islamic values throughout the event.',
    responsibilities: [
      'Led the entire organizing committee of BINER 7.0.',
      'Managed event scheduling, budgeting, resource allocation, and guest speaker coordination.',
      'Delivered a successful event bridging technology with community values.'
    ],
    technologies: ['Leadership', 'Event Management', 'Budgeting', 'Public Speaking'],
    images: [
      { src: '/About/Experience/BINER/1.jpg', caption: 'Welcoming Ceremony' },
      { src: '/About/Experience/BINER/2.jpg', caption: 'During event' },
      { src: '/About/Experience/BINER/3.jpg', caption: 'Commitee member' },
    ]
  },
  {
    id: 'exp-COSITE',
    role: 'Commitee Member - IC-COSITE 2023',
    company: 'Universitas Syiah Kuala / IEEE Indonesia Section',
    location: 'Banda Aceh, Indonesia',
    period: 'Aug 2023',
    type: 'Seasonal',
    logo: '/images/logos/ieee.svg',
    description:
      'The IEEE International Conference on Computer Science, Information Technology, and Electrical Engineering (IC-COSITE 2023) is an annual conference organized by the IEEE (Institute of Electrical and Electronics Engineers) Indonesia Section. In this conference, I was responsible for assisting in the smooth running of the conference, including event organization, speaker coordination, and participant assistance. In addition, I was also responsible for documenting the event by capturing and editing photos and videos.',
    responsibilities: [
      'Assisted international speakers and conference attendees.',
      'Handled audiovisual setups and conference documentation.',
      'Contributed to the publication and media archive of IEEE IC-COSITE 2023.'
    ],
    technologies: ['IEEE Conference', 'Event Coordination', 'Documentation'],
    images: [
      { src: '/About/Experience/COSITE/1.jpg', caption: 'Opening ceremony' },
      { src: '/About/Experience/COSITE/2.jpg', caption: 'During event' },
      { src: '/About/Experience/COSITE/3.jpg', caption: 'Commitee member' },
    ]
  },
];

// ─── EDUCATION ────────────────────────────────────────────────────────────────
export const education = [
  {
    id: 'edu-usk',
    degree: 'Bachelor of Computer Engineering',
    institution: 'Universitas Syiah Kuala',
    location: 'Banda Aceh, Indonesia',
    period: '2022 — 2026',
    logo: '/images/logos/usk.svg',
    description:
      'Graduated in Computer Engineering with strong interests in software development, artificial intelligence, UI/UX design, machine learning, IoT, and embedded systems.',
    details: [
      'Studied software engineering, artificial intelligence, machine learning, computer networks, IoT, and embedded systems.',
      'Developed various academic projects involving web development, microcontrollers, sensors, and intelligent systems.',
      'Gained experience in research, system development, data analysis, and user-centered interface design.',
      'Completed a final project focused on sentiment analysis using Machine Learning and Transformer-based models.'
    ],
    images: [
      { src: '/About/Education/USK/1.jpg', caption: 'Universitas Syiah Kuala Campus' },
      { src: '/About/Education/USK/2.jpeg', caption: 'Final Thesis Defense' },
      { src: '/About/Education/USK/3.jpeg', caption: 'During my final year' }
    ]
  },
  {
    id: 'edu-sma',
    degree: 'Science (Mathematics and Natural Sciences)',
    institution: 'SMA Negeri 3 Banda Aceh',
    location: 'Banda Aceh, Indonesia',
    period: '2019 — 2022',
    logo: '/images/logos/sman3.png',
    description:
      'Completed senior high school education while developing an interest in technology, science, and digital creativity.',
    details: [
      'Successfully curated and created captivating content for the KPS (Knowledge Posters in Smantig) project, resulting in 20% increase in user engagement and 600 new followers over a month.',
      'Successfully spearheaded the conceptualization and execution of visually appealing designs for school events, resulting in a 30% increase in event attendance.',
      'Successfully developed and implemented innovative content formats, such as video tutorials and infographics.',
      'Successfully produced captivating graphics and layouts for school publications, resulting in 10% increase in readership.'
    ],
    images: [
      { src: '/About/Education/SMA/2.jpg', caption: 'SMA Negeri 3 Banda Aceh' },
      { src: '/About/Education/SMA/3.jpeg', caption: 'Graduation ceremony' }
    ]
  },
];

// ─── ORGANIZATIONS ────────────────────────────────────────────────────────────
export const organizations = [
  {
    id: 'org-himatekkom-ketum-psdm',
    role: 'Head of the Human Resources Development Division',
    organization: 'Himpunan Mahasiswa Teknik Komputer USK (HIMATEKKOM)',
    location: 'Universitas Syiah Kuala',
    period: 'Mar 2025 — Dec 2025',
    logo: '/images/logos/HIMATEKKOM.png',
    description:
      'Led human resource development initiatives by strengthening relationships among members, alumni, and external partners, while managing internal programs that increased member participation by 40%. Also coordinated large-scale activities such as Computer Outbonding to enhance teamwork, leadership, and organizational engagement.',
    responsibilities: [],
    images: []
  },
  {
    id: 'org-bem-humas',
    role: 'Member of the Student Relations Division',
    organization: 'Badan Eksekutif Mahasiswa Fakultas Teknik (BEM-FT)',
    location: 'Universitas Syiah Kuala',
    period: 'Mar 2024 — Dec 2024',
    logo: '/images/logos/BEM-FT.png',
    description:
      'Developed strong communication, leadership, teamwork, problem-solving, negotiation, and event management skills while building relationships with 10 student organizations within the faculty and coordinating collaborative events.',
    responsibilities: [],
    images: []
  },
  {
    id: 'org-himatekkom-waketum-humas',
    role: 'Vice Chair of the Student Relations',
    organization: 'Himpunan Mahasiswa Teknik Komputer USK (HIMATEKKOM)',
    location: 'Universitas Syiah Kuala',
    period: 'Mar 2024 — Dec 2024',
    logo: '/images/logos/HIMATEKKOM.png',
    description:
      'Built strong relationships with other student associations, alumni, and technology companies while coordinating large-scale programs such as Computer Outbonding. Successfully managed events that increased student participation in association activities by 40%.',
    responsibilities: [],
    images: []
  },
  {
    id: 'org-himatekkom-kesma',
    role: 'Member of Student Welfare Division.',
    organization: 'Himpunan Mahasiswa Teknik Komputer USK (HIMATEKKOM)',
    location: 'Universitas Syiah Kuala',
    period: 'Mar 2023 — Feb 2024',
    logo: '/images/logos/HIMATEKKOM.png',
    description:
      'Supported student welfare by promoting environmental responsibility through a campus cleanliness duty system and assisting students facing financial difficulties by providing information on scholarships, emergency aid, and installment payment options.',
    responsibilities: [],
    images: []
  },
  {
    id: 'org-OSIS',
    role: 'Head of Technology Information and Communication Division',
    organization: 'MPK-OSIS SMA Negeri 3 Banda Aceh',
    location: 'SMA Negeri 3 Banda Aceh',
    period: 'Sep 2020 — Sep 2021',
    logo: '/images/logos/sman3.png',
    description:
      'Successfully created engaging visual content for KPS and various school activities, including social media posts, event designs, video tutorials, infographics, and school publications.',
    responsibilities: [],
    images: [
      { src: '/About/Organization/OSIS/1.jpeg', caption: 'Inauguration Ceremony' },
      { src: '/About/Organization/OSIS/2.jpeg', caption: 'Knowledge Posters in Smantig' },
      { src: '/About/Organization/OSIS/3.jpeg', caption: 'MPK-OSIS Smantig’s Instagram' },
    ]
  }
];

// ─── CERTIFICATIONS ───────────────────────────────────────────────────────────
export const certifications = [
  {
    id: 'cert-1',
    name: 'UI/UX Design Masterclass',
    issuer: 'Interaction Design Foundation',
    date: '2024',
    credentialId: 'IDF-882910',
    credentialUrl: '',
    description: 'Advanced user research, wireframing, interactive prototyping, and design systems.',
    images: [
      { src: '/About/Experience/PON/2.jpg', caption: 'Certificate preview' }
    ]
  },
  {
    id: 'cert-2',
    name: 'Machine Learning & NLP Specialization',
    issuer: 'DeepLearning.AI & Coursera',
    date: '2024',
    credentialId: 'DLAI-39182',
    credentialUrl: '',
    description: 'Transformer models, IndoBERT, IndoBERTweet fine-tuning, and sentiment analysis pipelines.',
    images: []
  },
  {
    id: 'cert-3',
    name: 'Frontend Web Development (React & Vite)',
    issuer: 'Dicoding Indonesia',
    date: '2023',
    credentialId: 'DICODING-FE-772',
    credentialUrl: '',
    description: 'Component architecture, responsive layouts, Tailwind CSS, and state management.',
    images: []
  }
];

// ─── PROJECT CATEGORIES ───────────────────────────────────────────────────────
export const projectCategories = [
  'All',
  'Web',
  'Machine Learning',
  'IoT',
  'Other'
];

// ─── PROJECTS ─────────────────────────────────────────────────────────────────
export const projects = [
  {
    id: 1,
    slug: 'roblox-sentiment-analysis',
    title: 'Sentiment Analysis of Roblox Reviews',
    category: 'Machine Learning',
    year: '2026',

    description:
      'A sentiment analysis research project on more than 40,000 Indonesian Roblox reviews using SVM, IndoBERT, and IndoBERTweet to classify positive, neutral, and negative sentiment.',

    overview:
      'This research project performs sentiment analysis on Indonesian Roblox game reviews collected from the Google Play Store. Over 40,000 reviews were classified into positive, neutral, and negative sentiment categories using three different machine learning approaches.',

    problem:
      'Indonesian-language game reviews are underrepresented in NLP research, and there is limited evaluation of how pre-trained transformer models perform on informal Indonesian text compared to classical ML approaches.',

    solution:
      'Three models were implemented and compared: SVM (classical ML baseline), IndoBERT (formal Indonesian BERT), and IndoBERTweet (informal/social media Indonesian BERT). Performance was evaluated using precision, recall, F1-score, and confusion matrix.',

    features: [
      'Multi-class sentiment classification (positive, neutral, negative)',
      'Comparison of SVM, IndoBERT, and IndoBERTweet models',
      'Confusion matrix and performance metric evaluation',
      'Indonesian-language NLP preprocessing pipeline'
    ],

    role: 'Machine Learning Researcher',

    image: '/projects/roblox-sentiment.webp',
    images: [],

    technologies: [
      'Python',
      'NLP',
      'SVM',
      'IndoBERT',
      'IndoBERTweet',
      'Transformers',
      'Scikit-learn',
      'Google Colab'
    ],

    links: {
      github: 'https://github.com/dappahsn',
      demo: ''
    },

    featured: true
  },

  {
    id: 2,
    slug: 'desa-berdaya-pln',
    title: 'Desa Berdaya PLN',
    category: 'Web',
    year: '2025',

    description:
      'A responsive web-based information platform developed for the Desa Berdaya program of PT PLN UID Aceh to showcase local UMKM information through an accessible digital interface.',

    overview:
      'A web platform built during an internship at PT PLN (Persero) UID Aceh as part of the Desa Berdaya program. The platform showcases information about local UMKM (small and medium enterprises) empowered by PLN initiatives across Aceh.',

    problem:
      'Local UMKM information was scattered and inaccessible to the public. A centralized, visually accessible platform was needed to showcase PLN\'s community empowerment activities.',

    solution:
      'Developed a fully responsive multi-page website using vanilla HTML, CSS, and JavaScript with Bootstrap for layout, Chart.js for data visualization, and Google Maps integration for location display. Deployed via GitHub Pages.',

    features: [
      'Responsive multi-page layout',
      'Interactive data charts with Chart.js',
      'Google Maps integration for UMKM locations',
      'UMKM profile and information pages',
      'Accessible and mobile-friendly design'
    ],

    role: 'Front-End Web Developer',

    image: '/projects/desa-berdaya.webp',
    images: [
      '/About/Experience/PLN/2.jpg'
    ],

    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'Bootstrap',
      'Chart.js',
      'Google Maps',
      'GitHub Pages'
    ],

    links: {
      github: 'https://github.com/dappahsn',
      demo: ''
    },

    featured: true
  },

  {
    id: 3,
    slug: 'iepoma',
    title: 'IePoma',
    category: 'IoT',
    year: '2024',

    description:
      'An Arduino-based smart monitoring prototype utilizing pH and water-level sensors with servo control to support automated environmental monitoring.',

    overview:
      'IePoma is an IoT prototype system designed for automated aquatic or irrigation environment monitoring. It uses pH and water-level sensors to detect environmental parameters and controls a servo motor for automated responses.',

    problem:
      'Manual monitoring of water quality and levels in aquatic environments is time-consuming and prone to human error, especially for continuous monitoring scenarios.',

    solution:
      'Designed and built an Arduino-based embedded system integrating pH sensors, water-level sensors, and servo motor actuation for automated environmental monitoring and response.',

    features: [
      'Real-time pH level monitoring',
      'Water level detection and alerting',
      'Automated servo motor control',
      'Arduino-based embedded system'
    ],

    role: 'Embedded Systems Developer',

    image: '/projects/iepoma.webp',
    images: [],

    technologies: [
      'Arduino',
      'Embedded Systems',
      'pH Sensor',
      'Water Level Sensor',
      'Servo Motor',
      'IoT'
    ],

    links: {
      github: 'https://github.com/dappahsn',
      demo: ''
    },

    featured: false
  },

  {
    id: 4,
    slug: 'trafficsense',
    title: 'TrafficSense',
    category: 'IoT',
    year: '2024',

    description:
      'An ESP32-based intelligent traffic prototype utilizing sound sensor input to detect environmental signals and support responsive traffic-system concepts.',

    overview:
      'TrafficSense is an ESP32-based embedded prototype that uses sound sensor input to simulate intelligent traffic monitoring. It explores the concept of responsive traffic management driven by environmental audio signals.',

    problem:
      'Traditional traffic systems are static and do not respond dynamically to environmental conditions or acoustic signals from emergency vehicles and road events.',

    solution:
      'Built a prototype using ESP32 with sound sensors to detect audio signals and trigger corresponding traffic-light or alerting responses, demonstrating the feasibility of sound-driven traffic intelligence.',

    features: [
      'Sound-based environmental signal detection',
      'ESP32 microcontroller with Wi-Fi capability',
      'Responsive traffic signal prototype',
      'Real-time sensor data processing'
    ],

    role: 'Embedded Systems Developer',

    image: '/projects/trafficsense.webp',
    images: [],

    technologies: [
      'ESP32',
      'IoT',
      'Sound Sensor',
      'Embedded Systems'
    ],

    links: {
      github: 'https://github.com/dappahsn',
      demo: ''
    },

    featured: false
  },

  {
    id: 5,
    slug: 'bridgeguard',
    title: 'BridgeGuard',
    category: 'IoT',
    year: '2024',

    description:
      'A structural monitoring prototype designed to detect bridge vibration using sensors and embedded-system technology for early infrastructure condition monitoring.',

    overview:
      'BridgeGuard is an IoT-based structural health monitoring prototype that uses vibration sensors to detect anomalies in bridge structures. It aims to support early detection of potential infrastructure issues.',

    problem:
      'Bridge infrastructure monitoring currently relies on infrequent manual inspections, which may miss developing structural issues before they become critical.',

    solution:
      'Developed an embedded sensor system that continuously monitors bridge vibration levels and provides data for anomaly detection, demonstrating a low-cost IoT approach to structural health monitoring.',

    features: [
      'Continuous vibration monitoring',
      'Anomaly detection from sensor data',
      'Early warning infrastructure system',
      'IoT-based embedded hardware design'
    ],

    role: 'Embedded Systems Developer',

    image: '/projects/bridgeguard.webp',
    images: [],

    technologies: [
      'IoT',
      'Vibration Sensor',
      'Embedded Systems',
      'Structural Monitoring'
    ],

    links: {
      github: 'https://github.com/dappahsn',
      demo: ''
    },

    featured: false
  },

  {
    id: 6,
    slug: '3d-reconstruction-meshroom',
    title: '3D Reconstruction with Meshroom',
    category: 'Other',
    year: '2024',

    description:
      'A photogrammetry and 3D reconstruction project using Meshroom to transform multiple photographs into detailed digital 3D models for visualization.',

    overview:
      'This project explores photogrammetry techniques using Meshroom (AliceVision) to reconstruct 3D models from multi-angle photographs. The resulting models are exported in GLB format for digital visualization and inspection.',

    problem:
      'Creating accurate 3D digital models of physical objects traditionally requires expensive specialized equipment and software, creating a barrier for academic and low-budget projects.',

    solution:
      'Used open-source Meshroom software and standard digital photography to capture and reconstruct detailed 3D models through structure-from-motion and multi-view stereo algorithms.',

    features: [
      'Photogrammetric 3D model reconstruction',
      'Multi-angle photography pipeline',
      'GLB/3D model export',
      'Open-source toolchain with Meshroom'
    ],

    role: 'Researcher & 3D Modeler',

    image: '/projects/meshroom.webp',
    images: [],

    technologies: [
      'Meshroom',
      'AliceVision',
      'Photogrammetry',
      '3D Reconstruction',
      'GLB'
    ],

    links: {
      github: 'https://github.com/dappahsn',
      demo: ''
    },

    featured: false
  }
];

// ─── LEGACY COMPAT (kept for existing journey section references) ──────────────
export const experience = [
  ...experiences,
  ...education.map(e => ({ ...e, role: e.degree, company: e.institution })),
  ...organizations.map(o => ({ ...o, company: o.organization }))
];
