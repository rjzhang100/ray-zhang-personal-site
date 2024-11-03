import { EARLS, KG, KINJO, SEMTECH } from './misc';

export const WorkDescriptionSummary = {
  [KG]: "First three months were spent in a small team building out a fullstack internal web app with React/Typescript and GraphQL, built as a sub-graph of a larger internal monorepo, allowing us to leverage its existing sign-in auth process and user data. I implemented a Slack bot integration which notifies users on Slack when they are outbid. Now, I'm creating new components and implementing new features for the corporate sites of the leading property management company in Canada. I've worked closely along the fullstack, from the Next.js React frontend, to our CI/CD pipeline built over Terraform. I've learned so much and have had a lot of fun.",
  [SEMTECH]:
    'Semtech (formerly Sierra Wireless) was my first software engineering role. I began on the testing environment (ATE), where I added new Selenium tests to our automated pipeline, and improved the existing tests to achieve 100% pass rate. I also helped the onboarding of new teams onto ATE. I was then moved to the Web team, where I participated in sprints and completed feature/bug tickets.',
  [EARLS]:
    "Learning to make proper drinks, working with the team and just getting to meet a whole bunch of new faces everyday was so much fun. Going for a shift behind the bar was a perfect change of pace for me from all the code and lecture material I'd be looking at throughout the day.",
  [KINJO]:
    "My first 'real' job. Served a bunch of sushi and ramen, made a lot of friends and learned a lot about myself.",
};

export const WorkDescriptionDetails = {
  [KG]: [
    'Re-engineered a charity web application from scratch to host auctions for fundraising, serving 500+ users using React, Typescript and GraphQL, achieving a 75% improvement in website performance',
    'Devised Next.js frontend solutions for a leading Canadian property management company by implementing new features, improving SEO and user experience',
    'Monitored and assessed errors in a Contentful CMS ensuring critical uptime. Evaluated error risks, investigated high-priority issues, and advised the client on solutions to maintain system reliability',
  ],
  [SEMTECH]: [
    'Developed a JavaScript tool using the Fortify framework to evaluate hardware performance in bulk signing operations over millions of iterations. Presented findings, influencing hardware use in new company initiatives',
    'Designed and deployed new robust JUnit Selenium tests and Apache Ant scripts to expand automated testing framework of 200+ tests, improving test case pass rate increase from 75% to 100%',
    'Proactively addressed both feature implementation and bug fix tickets for both the React.js frontend and the Java Spring backend to expand functionality and increase customer satisfaction',
  ],
  [EARLS]: [
    'Communicated with managers and worked closely with bartending team to serve hundreds of patrons',
    'Provided proper, direct customer service for up to 28 patrons while producing beverages for the entire restaurant',
    'Fostered a relaxed, comfortable environment while upholding proper liquor service practices',
  ],
  [KINJO]: [
    'Served up to 15 tables at a time, providing personalized customer service',
    'Prepped food, packed takeout orders and organized seating for tables',
    'Lots of POS entry and writing cash out reports at the end of every night',
    'Just vibed, honestly',
  ],
};

export const WorkDescriptionSkills = {
  [KG]: [
    'React.js',
    'Typescript',
    'Next.js',
    'GraphQL',
    'MariaDB',
    'Prisma',
    'Contentful',
  ],
  [SEMTECH]: ['React.js', 'Selenium', 'Apache Ant', 'Spring', 'Java'],
  [EARLS]: [
    'Crackin Jokes',
    'Slangin Dranks',
    'Bringing Good Vibes',
    'Serving Yummy Food',
  ],
  [KINJO]: [
    'My',
    'favourite',
    'Kinjo',
    'meal',
    'was',
    'a',
    'black',
    'ramen',
    'with',
    'salmon',
    'kama',
    '.',
    'Fire',
    '.',
  ],
};

export const WorkDescriptionJobTitles = {
  [KG]: 'Software Developer Intern',
  [SEMTECH]: 'Software Developer Intern, Web Application',
  [EARLS]: 'Bartender | Server',
  [KINJO]: 'Server | Host',
};
