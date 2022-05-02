import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'sabzehparvar', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Mojtaba Sabzehparvar',
  subtitle: "I'm a junior react developer",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'I am a passionate junior front-end developer with experience building frontend applications using React, JavaScript, jQuery, HTML, and CSS. I enjoy the creative and logical aspects that come with creating websites and I love learning new things every day.',
  paragraphTwo: "",
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'React birthday reminder',
    info: 'This project was created using React and Bootstrap and the data was acquired from reqres.in api',
    info2: '',
    url: 'https://react-birthday-sabzeparvar.vercel.app',
    repo: 'https://github.com/sabzehparvar/react-birthday-reminder', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/mojtaba-sabzehparvar',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/sabzehparvar',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
