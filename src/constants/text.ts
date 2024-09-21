import { EARLS, KG, KINJO, SEMTECH } from './misc';

export enum Text {
  NAME = 'Ray Zhang',
  ABOUT_ME = 'About Me',
  RESUME_TOOLTIP_TEXT = "Here's my resume!",
  ABOUT_ME_BODY = "Hey, welcome and thanks for checking out my website! I'm Ray, and I'm in my final year of computer science at UBC. I'm currently also at Konrad Group as a software developer intern! Outside of work and school, I'm a huge car nerd, spending most of my free time either learning about or working on cars. I'm also a huge music fan, and pretty much always am listening to something throughout my day. Feel free to explore this site to learn more about me, and some of the cool stuff I've been up to! I'm always open to connect and meet new people, so shoot me a message!",
}

export const NavbarLinks = {
  WORK_EXPERIENCE: 'Work Experience',
  PROJECTS: 'Projects',
  HOBBIES: 'Hobbies',
  CARS: 'Cars',
};

export const THINGS_I_AM = [
  'Software Engineer',
  'Car Enthusiast',
  'DIY Mechanic',
  'Competitive Pianist',
  'Music Lover',
  'Table Tennis Amateur',
  'Badminton Rookie',
];

export const WorkDescriptionSummary = {
  [KG]: "I've learned so much since starting at Konrad, and I continue to learn more and more. I'm so grateful for the incredible team and all the challenges and problems I've had to solve. From building out a full stack web application from scratch in a small team of 4 (which is ready for internal company use!) to providing software solutions for the leading Canadian commerical property management company, I've been able to develop my skills in ways I couldn't have imagined. I truly enjoy heading into work everyday, to face new technical challenges and to hang out with the team!",
  [SEMTECH]:
    'Semtech (formerly Sierra Wireless) was my first software engineering role. I started out building out the Automated Testing Environment (ATE), where I added lots of new Selenium tests and reworked the existing tests to achieve 100% test pass rate. I also aided in the onboarding of a new team onto ATE, giving presentations and walking new developers through the architecture and workflow of ATE. Afterwards, I moved onto the Web team, where I participated in regular sprints and worked through both feature implementation and bug fix tickets. Semtech taught me to work in Agile environments, and greatly improved my ability to communicate and work effectively within a software team.',
  [EARLS]:
    "I started in May 2022 as a host at Earls, before eventually joining the bar team as a bartender. Learning to make drinks, working with the team and just getting to meet a whole bunch of new faces everyday was so much fun. Going for a shift behind the bar was a perfect change of pace for me from all the code and lecture material I'd be looking at throughout the day. There was also something thrilling and exciting about getting slammed with tickets on a busy Friday night, when the whole bar team is scrambling to get the drinks out on time. Super fun experience and honored to have been part of the gang.",
  [KINJO]:
    "We all start somewhere right? Covid had turned the world on its head and I was super cooped up at home, looking for something to do. I joined Kinjo with a friend, and it ended up being a massive growth opportunity for me. Seeing my coworkers throughout the week and working with the team kept me sane through all the isolation and wildness of Covid, and it really helped me in opening up and becoming more social. I really don't think I'd be who I am today without the year and a bit I spent working here. Even though serving was super stressful and angry delivery drivers aren't fun to deal with, I have nothing but good memories thinking back on my time at Kinjo.",
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
    'Presented and organized content to aid the on-boarding of 2 new teams to the Automated Testing Environment',
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
  [SEMTECH]: ['React.js', 'Selenium', 'Ant Apache', 'Spring', 'Java'],
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
