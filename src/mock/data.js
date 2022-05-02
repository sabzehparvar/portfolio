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
  name: `
  Mojtaba Sabzehparvar`,
  subtitle: "I'm a junior react developer",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'I am a passionate junior front-end developer with experience building frontend applications using React, JavaScript, jQuery, HTML, and CSS. I enjoy the creative and logical aspects that come with creating websites and I love learning new things every day.',
  paragraphTwo: ' ',
  paragraphThree: ' ',
  resume: '', // if no resume, the button will not show up https://www.resumemaker.online/es.php
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'users-with-React.jpg',
    title: 'React users panel',
    info: 'This project was created using React, Bootstrap and skeleton loading. In order to be able to see the loading, the data loads with 2 seconds of delay .',
    info2: 'The data was acquired from reqres.in api',
    url: 'https://react-users-sabzehparvar.vercel.app',
    repo: 'https://github.com/sabzehparvar/users-with-React', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'React-birthday-reminder.jpg',
    title: 'React birthday reminder',
    info: 'This project was created using React and Bootstrap.',
    info2: 'The data was acquired from reqres.in api',
    url: 'https://react-birthday-sabzeparvar.vercel.app',
    repo: 'https://github.com/sabzehparvar/react-birthday-reminder', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'verjen.jpg',
    title: 'Verjen',
    info: 'I have collaborated in the development of this Wordpress website .',
    info2: 'It has been created using Astra theme.',
    url: 'https://verjen.ir',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'avoa.jpg',
    title: 'Avoa',
    info: 'I created this website using Wordpress cms and Elementor page builder plugin.',
    info2: 'The theme of this site is Astra.',
    url: 'https://avoa.ir',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'gamer-club.jpg',
    title: 'Gamer Club',
    info: 'I created this website using Wordpress cms and Elementor page builder plugin.',
    info2: 'Astra wordpress theme has been used for creating this website.',
    url: 'https://gamer-club.ir',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'puzzle.jpg',
    title: 'Puzzle Gamer',
    info: 'I created this puzzle using JavaScript and jQuery.',
    info2: 'It has two levels of easy and hard.',
    url: 'https://github.com/sabzehparvar/puzzle-jQuery',
    repo: '', // if no repo, the button will not show up
  },
  
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'My Email',
  email: 'sabzehparvar.mojtaba@gmail.com',
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
