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
  title: "Hai Semua! Saya Aqshal Zakki",
  description:
    "Saya memiliki passion pada bidang Full Stack web development, memiliki pengalaman 3 tahun berjalan aplikasi web dengan pengembangan HTML, CSS, PHP, JavaScript, Vue.js, Nuxt.js, Svelte, REST API, Laravel, Codeigniter, Git",
  resumeLink:
  // TODO
    'https://drive.google.com/file/d/1_mLra9BKYY3Djge_FQU2uvqbVClmLXaJ/view?usp=sharing',
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
  title: 'Siapa saya?',
  subTitle: 'SEORANG FULLSTACK DEVELOPER YANG HAUS AKAN ILMU SEPUTAR TEKNOLOGI ZAMAN NOW',
  data: [
    {
      title: 'Full Stack Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Membuat responsive Single-Page-Apps (SPA) & SSR menggunakan Nuxt.js'
        ),
        emoji('⚡ Membuat responsive static websites menggunakan Vue.js / Svelte'),
        emoji('⚡ Membuat RESTful APIs menggunakan Framework Laravel & Codeigniter '),
        emoji('⚡ Berpengalaman melakukan Test Driven Development (TDD)'),
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
          fontAwesomeClassName: 'logos:yarn',
        },
      ],
    },
    {
      title: 'Server Deployment',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ End-to-end Test untuk Memastikan aplikasi berjalan dengan lancar sebelum proses deployment'
        ),
        emoji(
          '⚡ CI/CD pipelines untuk automasi testing & deployment menggunakan Github Actions'
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
    subHeader: 'Jurusan Rekayasa Perangkat Lunak',
    duration: '2017 - 2020',
    desc: 'Berpartisipasi melakukan research pengembangan aplikasi',
    grade: 'Grade A',
    descBullets: [
      'Merancang & Membangun sebuah aplikasi web e-commerce untuk tugas akhir',
      'Membuat aplikasi web pendaftaran siswa/siswi smk negeri 2 kota bandung',
    ],
  },
];

export const experience: ExperienceType[] = [
  {
    role: 'Fullstack Developer',
    company: 'Era Daya Potensia',
    companyLogo: '/img/icons/common/edp.png',
    date: '2020 Juli – Sekarang',
    desc: 'Saya bekerja sebagai Fullstack Developer untuk merancang, membuat aplikasi berbasis web menggunakan Vue, Nuxt, Laravel, ApexChart.js dan beberapa library lainnya.',
    descBullets: [
    	"Membuat planning serta rancangan untuk aplikasi yang akan dibuat",
    	"Meng-eksekusi rancangan aplikasi sesuai dengan request client",
    	"Melakukan End-to-end Test dan Test Driven Development",
    ],
  },
];

export const projects: ProjectType[] = [
  {
    name: 'Klinik Arsaya landing page',
    desc: 'Landing page klinik anak arsaya, seputar informasi layanan: jadwal praktek dokter, tumbuh kembang anak, dll',
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
    desc: 'Landing page untuk orangtua yang ingin anaknya berobat dan booking secara online',
    // github: 'https://github.com/1hanzla100/developer-portfolio',
    link: 'https://my.klinikarsaya.com/',
    icons: [
      { title: 'Bootstrap', icon: 'logos:bootstrap' },
      { title: 'Codeigniter', icon: 'logos:codeigniter-icon' },
    ],
  },
  {
    name: 'Dashboard Klinik Arsaya',
    desc: 'Dashboard admin klinik arsaya yang digunakan oleh user internal',
    // github: 'https://github.com/1hanzla100/developer-portfolio',
    link: 'https://dash.klinikarsaya.com/',
    icons: [
      { title: 'Bootstrap', icon: 'logos:bootstrap' },
      { title: 'Codeigniter', icon: 'logos:codeigniter-icon' },
    ],
  },
  {
    name: 'Mediakarir landing page',
    desc: 'Landing page untuk talent & corporate yang membutuhkan jasa psikotest online maupun sedang mencari talent',
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
    desc: 'Aplikasi untuk talent yang sedang mencari kerja maupun membuat cv online secara gratis',
    link: 'https://my.mediakarir.com/',
    icons: [
      { title: 'NuxtJS', icon: 'logos:nuxt-icon' },
      { title: 'Vuetify', icon: 'logos:vuetifyjs' },
      { title: 'Laravel', icon: 'logos:laravel' },
    ],
  },
  {
    name: 'Dashboard Mediakarir',
    desc: 'Dashboard admin yang digunakan oleh admin, hrd, finance, dan user internal lainnya',
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
    'Seseorang yang mempunyai passion pada bidang programming',
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
