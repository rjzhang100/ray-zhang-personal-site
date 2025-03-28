import { Project } from './types';

export const projects: Project[] = [
  {
    title: 'Hockey Guesser',
    description: [
      'A WIP app for you and your friends to guess the outcome of NHL hockey games, for fun!',
      'React frontend with Material UI components, express backend with tRPC API, MongoDB for storage',
      'Leverages NHL API for live game data',
      'User authentication so you can login and play with your friends',
      `App is live on app.hockeyrjz.ca, but check the repo's issues tab to see what I'm working on. If you do use it at all, let me know your ideas about improvements or feedback in the repo discussions`,
    ],
    gitLink: 'https://github.com/rjzhang100/hockey-guess',
  },
  {
    title: 'LSTM Music Composition Bot',
    description: [
      "Designed and trained a multi-layered LSTM neural network in Tensorflow on Keras' Functional API to compose short MIDI clips",
      'Engineered an automated data pipeline to prepare 22,297 multi-featured training examples sourced from the MAESTRO dataset for input',
      'Compared and contrasted two different network models to improve efficiency by 35% and performance by 65%',
    ],
    gitLink: 'https://github.com/rjzhang100/LSTM-Composition',
  },
  {
    title: 'Personal Site',
    description: [
      'This site! Check out the codebase and see how it was built',
      'React/Typescript, Lottie for animations, built with a focus on modularity and to be easily extendable and modifiable',
      'Just an opportunity to practice and demonstrate my frontend skills',
    ],
    gitLink: 'https://github.com/rjzhang100/ray-zhang-personal-site',
  },
  {
    title: 'Cryptocurrency Bank Account',
    description: [
      'Developed a cryptocurrency bank account in Java with a fully interactive GUI built in JSwing, with an emphasis on proper and scalable OOP principles, leveraging Singleton and Observer design patterns',
      'Engineered and deployed comprehensive unit tests in JUnit to achieve 100% code coverage',
    ],
    gitLink: 'https://github.com/rjzhang100/Cryptocurrency_Bank_Account',
  },
  {
    title: 'Trendwave NFTs',
    description: [
      'Developed in a team of 3 for a Near Hackathon',
      'Created a dApp that minted NFTs on the Near blockchain',
      'Tokens were designed by leveraging Stable Diffusion, prompting it with trending search topics from Google Trends API',
    ],
    gitLink: 'https://github.com/rjzhang100/TrendWave-NFTs',
  },
];
