module.exports = {
  siteTitle: 'Hey! I\'m Jenni!',
  siteDescription: `Hey, I am Jennifer Takagi, a 6 years experienced Software Engineer`,
  keyWords: ['jennifer-takagi', 'developer', 'software', 'engineer', 'senior-engineer', 'frontend'],
  authorName: 'Jennifer Takagi',
  twitterUsername: 'jennitakagi',
  githubUsername: 'jennifertakagi',
  authorAvatar: '/images/avatar.jpeg',
  authorDescription: `Hi, I'm Jenni 👋 , a Brazilian Senior Software Engineer in Madrid with a Bachelor’s degree in Information Technology Management
  and over 6 years of experience - also a proud dog mom and a craft beer aficionado 🐶🍺.<br /><br />
  Passionate about clean code and functional programming, I actively contribute to the developer community.
  Aspiring to use my coding skills to enhance lives, I'm on the path to becoming a Staff Engineer.<br /><br />
  Earlier, I honed my skills during 1.5 years of internships at OnSign TV, developing dynamic content; at McFadyen Digital, assisting in Oracle e-commerce implementations;
  and at Dialetto, contributing to web development and technical support.`,
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
      level: 50
    },
    {
      name: 'Node JS',
      level: 90
    },
    {
      name: 'TypeScript',
      level: 90
    },
    {
      name: 'Python',
      level: 70
    },
    {
      name: 'Kotlin',
      level: 40
    },
    {
      name: 'Database (SQL, Mongo DB)',
      level: 50
    },
    {
      name: 'Unit tests tools (RTL, Jest, Chai)',
      level: 90
    },
    {
      name: 'Tests tools (Cypress, Playwright, Sellenium)',
      level: 80
    },
    {
      name: 'Git',
      level: 100
    },
  ],
  jobs: [
    {
      company: "OpenBank",
      begin: {
        month: 'mar',
        year: '2024'
      },
      duration: null,
      occupation: "Senior Software Engineer",
      description: `<ul>
      <li>Contributed to the Zinia team, mainly on mortage product.</li>
      <li>Work in mortage application</li>
      </ul>`
    },
    {
      company: "Personio",
      begin: {
        month: 'dec',
        year: '2021'
      },
      duration: '2 yr e 4 mos',
      occupation: "Software Engineer",
      description: `<ul>
      <li>Contributed to the Employee Performance and Development team, collaborating with all four squads within my tribe in a support engineer role.</li>
      <li>Led the creation of a user-friendly continuous feedback tool.</li>
      <li>Established a common components library used across all the teams.</li>
      <li>Spearheaded an overhaul initiative with the Design System team, building new components for company-wide use.</li>
      </ul>`
    },
    {
      company: "Mercado Libre",
      begin: {
        month: 'oct',
        year: '2020'
      },
      duration: '1 yr e 2 mos',
      occupation: "Software Developer",
      description: `<ul>
      <li>Played a key role in the shipping IT team, collaborating with the UX team to optimize operational experiences.</li>
      <li>Led the creation of a new product to manage package flow.</li>
      <li>Build a BFF (Back for Frontend) to solve frictions on the UI.</li>
      <li>Responsible for decision-making on layouts, performance, and code quality for front- end deliveries.</li>
      </ul>`
      },  {
      company: "Linx",
      begin: {
        month: 'may',
        year: '2019'
      },
      duration: '1 yr e 6 mos',
      occupation: "FullStack Developer",
      description: `<ul>
      <li>Worked in the integration team at Linx Impulse, focusing on integrating products into client sites.</li>
      <li>Led an "automation tests as a microservice" project, overseeing two colleagues.</li>
      <li>Contributed to a components library used by the entire team.</li>
      </ul>`
    }
  ],
  portfolio: [
    {
      image: "/images/how-is-the-weather.gif",
      description: "How's the weather? (Angular)",
      url: "https://weather-app26.vercel.app/",
      github: "https://github.com/jennifertakagi/weather-app",
    },
    {
      image: "/images/shake-dev.gif",
      description: "Shake Dev (React JS)",
      url: "https://shakedev.vercel.app/",
      github: "https://github.com/jennifertakagi/shakedev",
    },
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
    linkedin: "https://www.linkedin.com/in/jennifer-takagi/",
    github: "https://github.com/jennifertakagi",
    medium: "https://jennifer-takagi.medium.com/",
    email: "jennitakagi@gmail.com"
  },
  siteUrl: 'https://jennifer-takagi.vercel.app/',
  pathPrefix: '/portfolio-jennifer-takagi', // Note: it must *not* have a trailing slash.
  siteCover: '/images/cover_light.png',
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