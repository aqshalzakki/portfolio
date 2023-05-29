import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Aqshal Zakki',
  title: "Hi! Im Aqshal Zakki",
  description:
    `I am good in data structures, algorithms in Javascript and a problem solver, have good understanding of software architecture design. 
    I have also know about internet of things & game development. I am keen interested for the development roles or SDE roles.`,
  resumeLink:
    'https://drive.google.com/file/d/1NUshHR2hYPlSF3szFSZpf4RyjabzmdID/view?usp=sharing',
};

export const openSource = {
  githubUserName: 'aqshalzakki',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  phone: '6285795177202',
  email: 'm.aqshal.zakki@gmail.com',
  linkedin: 'https://www.linkedin.com/in/muhammad-aqshal-zakki/',
  github: 'https://github.com/aqshalzakki',
  instagram: 'https://www.instagram.com/aqshalzakki',
};

export const skillsSection: SkillsSectionType = {
  title: 'Who am i?',
  subTitle: 'A SOFTWARE ENGINEER WHO WANTS TO EXPLORE EVERY TECH STACK',
  data: [
    {
      title: 'Full Stack Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Design & develop highly scalable production level applications for web & mobile'
        ),
        emoji(
          '⚡ Create responsive Single-Page-Apps (SPA) & SSR using Vue.js Nuxt.js'
        ),
        emoji(
          '⚡ Building backend applications using Node.js, Express.js & NoSQL Firestore Database'
        ),
        emoji('⚡ Create RESTful APIs using Laravel & Codeigniter Framework'),
        emoji('⚡ Experience in Test Driven Development (TDD)'),
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          fontAwesomeClassName: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          fontAwesomeClassName: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          fontAwesomeClassName: 'logos:javascript',
        },
        {
          skillName: 'VueJS',
          fontAwesomeClassName: 'vscode-icons:file-type-vue',
        },
        {
          skillName: 'NuxtJS',
          fontAwesomeClassName: 'vscode-icons:file-type-nuxt',
        },
        {
          skillName: 'MySQL',
          fontAwesomeClassName: 'logos:mysql-icon',
        },
        {
          skillName: 'Laravel',
          fontAwesomeClassName: 'logos:laravel',
        },
        {
          skillName: 'Codeigniter',
          fontAwesomeClassName: 'logos:codeigniter-icon',
        },

        {
          skillName: 'Git',
          fontAwesomeClassName: 'logos:git-icon',
        },
        {
          skillName: 'Github',
          fontAwesomeClassName: 'logos:github-octocat',
        },
        {
          skillName: 'NPM',
          fontAwesomeClassName: 'logos:npm-icon',
        },
        {
          skillName: 'Yarn',
          fontAwesomeClassName: 'logos:firebase',
        },
      ],
    },
    {
      title: 'Server Deployment',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Deploying & maintaining applications on cloud platforms like Heroku, Netlify & Firebase'
        ),
        emoji(
          '⚡ CI/CD Pipeline for automated deployment using Github Actions & Jenkins'
        ),
      ],
      softwareSkills: [],
    },
    // {
    //   title: 'Blockchain',
    //   lottieAnimationFile: '/lottie/skills/ethereum.json', // Path of Lottie Animation JSON File
    //   skills: [
    //     emoji(
    //       '⚡ Experience in developing Smart Contract using Solidity & Ethereum'
    //     ),
    //     emoji(
    //       '⚡ Building Scripts for automated testing & deployment of Smart Contracts using Brownie & Infura'
    //     ),
    //     emoji(
    //       '⚡ Experience of using Openzeppelin Smart Contract Standards & Chainlink Oracles'
    //     ),
    //     emoji('⚡ Developing NFT Smart Contracts using ERC-721 Token Standard'),
    //     emoji(
    //       '⚡ Building Dapps with React.js & Solidity using Web3.js, Moralis & IPFS'
    //     ),
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: 'Ethereum',
    //       fontAwesomeClassName: 'logos:ethereum',
    //     },
    //     {
    //       skillName: 'Solidity',
    //       fontAwesomeClassName: 'logos:solidity',
    //     },
    //     {
    //       skillName: 'Web3js',
    //       fontAwesomeClassName: 'logos:web3js',
    //     },
    //     {
    //       skillName: 'Metamask',
    //       fontAwesomeClassName: 'logos:metamask-icon',
    //     },
    //     {
    //       skillName: 'Ganache',
    //       fontAwesomeClassName: 'logos:ganache-icon',
    //     },
    //   ],
    // },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Frontend/Design', //Insert stack or technology you have experience in
    progressPercentage: '70', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Backend',
    progressPercentage: '80',
  },
  {
    Stack: 'DevOps',
    progressPercentage: '64',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'SMKN 2 Kota Bandung',
    subHeader: 'Software Engineering',
    duration: '2017 - 2020',
    // translate desc: 'Berpartisipasi melakukan research pengembangan aplikasi',
    desc: 'Participated in research and development of an application',
    grade: 'Grade A',
    descBullets: [
      // 'translate Merancang & Membangun sebuah aplikasi web e-commerce untuk tugas akhir',
      'Design & Build an e-commerce web application for final project',
      // 'translate Membuat aplikasi web pendaftaran siswa/siswi smk negeri 2 kota bandung',
      'Build a web application for student registration of SMKN 2 Kota Bandung',
    ],
  },
];

export const experience: ExperienceType[] = [
  {
    role: 'Software Engineer',
    company: 'Era Daya Potensia',
    companyLogo: '/img/icons/common/edp.png',
    date: '2020 Juli – Sekarang',
    desc: 'Company that provide online psychological test services and talent recruitment',
    descBullets: [
    	"Responsible for fullstack programmer and software development life cycle, designing software architecture, building the product, testing software to ensure better deliver, deployment in the market",
    	"Leading and involved in several software projects: Recruitment Web App, Clinic Web App; Product/Feature improvement and expansion;",
    	"Supervising junior programmer, daily tasks include ETL, experimentation, developing/maintaining data pipelines and dashboards.",
      "Software Development strategy to achieve business objectives; Stakeholders management on projects involving SEO Engineer, Project Manager, UI/UX Designer, and business teams.",
      "Tools: SQL, PHP, JavaScript, Laravel, Vue.js, Node JS, Slack, Trello."
    ],
  },
];

export const projects: ProjectType[] = [
  {
    name: 'Klinik Arsaya landing page',
    // translate desc: 'Landing page klinik anak arsaya, seputar informasi layanan: jadwal praktek dokter, tumbuh kembang anak, dll',
    desc: 'Landing page for klinik anak arsaya, about information services: doctor practice schedule, child development, etc',
    // github: 'https://github.com/1hanzla100/developer-portfolio',
    link: 'https://klinikarsaya.com/',
    icons: [
      { title: 'Html', icon: 'vscode-icons:file-type-html' },
      { title: 'Css', icon: 'vscode-icons:file-type-css' },
      { title: 'JavaScript', icon: 'logos:javascript' },
    ],
  },
  {
    name: 'Booking Klinik Arsaya',

    // translate desc: 'Landing page untuk orangtua yang ingin anaknya berobat dan booking secara online',
    desc: 'Landing page for parents who want their children to be treated and book online',
    // github: 'https://github.com/1hanzla100/developer-portfolio',
    link: 'https://my.klinikarsaya.com/',
    icons: [
      { title: 'Bootstrap', icon: 'logos:bootstrap' },
      { title: 'Codeigniter', icon: 'logos:codeigniter-icon' },
    ],
  },
  {
    name: 'Dashboard Klinik Arsaya',
    // translate desc: 'Dashboard admin klinik arsaya yang digunakan oleh user internal',
    desc: 'Klinik Arsaya admin dashboard used by internal users',
    // github: 'https://github.com/1hanzla100/developer-portfolio',
    link: 'https://dash.klinikarsaya.com/',
    icons: [
      { title: 'Bootstrap', icon: 'logos:bootstrap' },
      { title: 'Codeigniter', icon: 'logos:codeigniter-icon' },
    ],
  },
  {
    name: 'Mediakarir landing page',
    // translate desc: 'Landing page untuk talent & corporate yang membutuhkan jasa psikotest online maupun sedang mencari talent',
    desc: 'Landing page for talent & corporate who need online psychological test services or are looking for talent',
    // github: 'https://github.com/1hanzla100/developer-portfolio',
    link: 'https://mediakarir.com/',
    icons: [
      { title: 'Html', icon: 'vscode-icons:file-type-html' },
      { title: 'Css', icon: 'vscode-icons:file-type-css' },
      { title: 'JavaScript', icon: 'logos:javascript' },
    ],
  },
  {
    name: 'Talent Mediakarir',
    // translate desc: 'Aplikasi untuk talent yang sedang mencari kerja maupun membuat cv online secara gratis',
    desc: 'Application for talent who are looking for work or making a free online cv',
    link: 'https://my.mediakarir.com/',
    icons: [
      { title: 'NuxtJS', icon: 'logos:nuxt-icon' },
      { title: 'Vuetify', icon: 'logos:vuetifyjs' },
      { title: 'Laravel', icon: 'logos:laravel' },
    ],
  },
  {
    name: 'Dashboard Mediakarir',
    // translate desc: 'Dashboard admin yang digunakan oleh admin, hrd, finance, dan user internal lainnya',
    desc: 'Admin dashboard used by admin, hrd, finance, and other internal users',
    link: 'https://dash.mediakarir.com/',
    icons: [
      { title: 'VueJS', icon: 'logos:vue' },
      { title: 'Vuetify', icon: 'logos:vuetifyjs' },
      { title: 'Laravel', icon: 'logos:laravel' },
    ],
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: 'John Smith',
    feedback:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
  },
  {
    name: 'John Smith',
    feedback:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
  },
];

// option to hide or show the ContactUs component
export const showContactUs: boolean = false;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Aqshal Zakki',
  description:
    'I am good in data structures, algorithms in Javascript and a problem solver, have good understanding of software architecture design',
  author: 'Aqshal Zakki',
  image: 'https://avatars.githubusercontent.com/u/46075252?s=400&u=0cb0770d90ac2e1bd0d9b138d841f89e08ca3374&v=4',
  url: 'https://aqshalzakki.vercel.app',
  keywords: [
    'Aqshal',
    'Aqshal Zakki',
    '@aqshalzakki',
    'Portofolio Aqshal',
    'Portofolio Aqshal Zakki',
    'Portofolio Muhammad Aqshal Zakki',
  ],
};
