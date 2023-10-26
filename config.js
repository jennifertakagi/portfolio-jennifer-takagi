module.exports = {
  siteTitle: 'Hi! I\'m Jenni!',
  keyWords: ['jennifer-takagi', 'developer'],
  authorName: 'Jennifer Takagi',
  githubUsername: 'jennifertakagi',
  authorAvatar: '/images/avatar.jpeg',
  authorDescription: `I'm a Software Engineer with 6 years of experience, based in Spain and passionate about make people's life better using code!<br />
  On my journey I discovered that I love work cross teams and come up with ideas and solutions to improve our day-to-day work and deliveries.<br />
  I currently work with <strong>React JS, NodeJS, Express JS, Cypress and Jest.</strong><br />
  <strong>Also a functional programming enthusiast and a dog mother.</strong> :)`,
  skills: [
    {
      name: 'JavaScript',
      level: 95
    },
    {
      name: 'React JS',
      level: 90
    },
    {
      name: 'Vue JS',
      level: 60
    },
    {
      name: 'React Native',
      level: 40
    },
    {
      name: 'Node JS',
      level: 70
    },
    {
      name: 'TypeScript',
      level: 90
    },
    {
      name: 'Python',
      level: 60
    },
    {
      name: 'Automation Tests',
      level: 80
    },
  ],
  jobs: [
    {
      company: "Personio",
      begin: {
        month: 'dec',
        year: '2021'
      },
      duration: null,
      occupation: "Software Engineer",
      description: 'I work as a Software Developer  in the Employee Performance & Development team, facilitating the definition of employee development initiatives, supporting them in continuing professional training and empower organizations to set meaningful goals for their employees while streamlining the calibration process, fostering growth and excellence. Main Technologies: React JS, TypesScript, Next js, automation tests (Cypres, Jest, and Playwright) and Kotlin.'
    }, 
    {
      company: "Mercado Libre",
      begin: {
        month: 'oct',
        year: '2020'
      },
      duration: '1 yr e 2 mos',
      occupation: "Software Developer",
      description: 'I worked as a Software Developer in the shipping IT team, developing apps to help that the packages arrive as soon as possible to the buyers. Main Technologies: React JS, TypesScript, Node JS, automation tests (Cypres, Jest, and Enzyme) and Golang.'
    },  {
      company: "Linx",
      begin: {
        month: 'may',
        year: '2019'
      },
      duration: '1 yr e 6 mos',
      occupation: "FullStack developer",
      description: "I worked as a FullStack Developer in the integration team, in Linx Impulse, so I integrate our products on the client's site. Main Technologies: Javascript, jQuery, Vue JS, Node JS, Mongo DB, Cypress, Jest, Mocha, Python, PHP, Circle CI, Lerna, HTML5, and CSS3."
  
    }, {
      company: "OnSignTV",
      begin: {
        month: 'sep',
        year: '2018'
      },
      duration: '9 mos',
      occupation: "Frontend intern",
      description: "I worked as a FrontEnd Intern developing dynamic content (apps) for screens that use a digital signal. Main Technologies: Javascript, APIs, Jinja 2, Github, HTML5, and CSS3."
    },
    {
      company: "McFadyen Digital",
      begin: {
        month: 'feb',
        year: '2018'
      },
      duration: '8 mos',
      occupation: "UI Intern",
      description: "I worked as a UI Intern, so I assistance in the implementations of our clients in Oracle e-commerce. Main Technologies: Javascript, Knockout JS, JSON, OCC, HTML5, and CSS3."
    },
    {
      company: "Dialetto",
      begin: {
        month: 'nov',
        year: '2017'
      },
      duration: '4 yrs e 3 mos',
      occupation: "Frontend intern/Freelance",
      description: "I worked as a frontend intern and as a freelance web developer, developing and maintaining of the website; formatting and sending newsletters using e-mail marketing platforms; supporting the staff in technical questions of the portal, e-mail, social networks, and content editions."
    },
  ],
  portfolio: [
    {
      image: "/images/whats-in-your-bar.gif",
      description: "What's in you bar? (React JS)",
      url: "https://whats-in-your-bar.herokuapp.com/",
      github: "https://github.com/jennifertakagi/whats-in-your-bar",
    },
    {
      image: "/images/lucky-beer-app.gif",
      description: "Lucky Beer App (Angular)",
      url: "https://lucky-beer-app-angular.vercel.app/",
      github: "https://github.com/jennifertakagi/lucky-beer-app-angular",
    },
    {
      image: "/images/podcast-episodes.gif",
      description: "Podcast Episodes (Vue JS)",
      url: "https://podcast-episodes.vercel.app/",
      github: "https://github.com/jennifertakagi/podcast-episodes",
    },
    {
      image: "/images/hipsta-game.gif",
      description: "Hipsta Game (JavaScript)",
      url: "https://jennifertakagi.github.io/hipsta-game-js/",
      github: "https://github.com/jennifertakagi/hipsta-game-js",
    },
  ],
  social: {
    twitter: "https://twitter.com/jennitakagi",
    linkedin: "https://www.linkedin.com/in/jennifer-takagi/",
    github: "https://github.com/jennifertakagi",
    medium: "https://jennifer-takagi.medium.com/",
    email: "jennitakagi@gmail.com"
  },
  siteUrl: 'https://jennifertakagi.github.io/portfolio-jennifer-takagi',
  pathPrefix: '/portfolio-jennifer-takagi', // Note: it must *not* have a trailing slash.
  siteCover: '/images/cover.png',
  siteCoverLight: '/images/cover_light.png',
  googleAnalyticsId: 'UA-000000000-1',
  background_color: '#faf7f7',
  theme_color: '#FF5757',
  fontColor: "#000000cc",
  enableDarkmode: true, // If true, enables dark mode switch
  display: 'minimal-ui',
  icon: 'src/assets/icon.png',
  headerLinks: [
    {
      label: 'Home',
      url: '/',
    },
    {
      label: 'Portfolio',
      url: '/portfolio',
    }
  ]
}