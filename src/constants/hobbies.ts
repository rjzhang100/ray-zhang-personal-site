import { Hobby } from './types';
import carLottie from '../assets/lotties/car-lottie.json';
import pingPongLottie from '../assets/lotties/ping-pong.json';
import musicLottie from '../assets/lotties/music-lottie.json';
import gamingLottie from '../assets/lotties/gaming-lottie.json';
import piano from '../assets/piano.png';
import tabletennis from '../assets/tabletennis.jpg';
import games from '../assets/gamer.png';
import cassia from '../assets/cassia.mp4';

export const hobbies: Hobby[] = [
  {
    title: 'Music',
    description: `I love discovering new artists and new music. Growing up, I did a lot of piano. I competed regularly, and completed my ARCT in the summer of 2018. Checkout videos of my playing ***here!***[https://www.youtube.com/@Fengtaro]Although I've stopped competing in piano, I still love listening to music. I'm pretty much always listening to something - rap, 70s Japanese funk, whatever. John Mayer's my favourite though`,
    icon: musicLottie,
    image: piano,
    imageCaption: 'Me playing Rach 2',
  },
  {
    title: 'Racket Sports',
    description: `Trying to get better at table tennis and love playing badminton. I'll play table tennis anytime there's a table, and I'm always down for a badminton game. I'll probably gassed after one game though`,
    icon: pingPongLottie,
    image: tabletennis,
    imageCaption: 'Amazing Jellycat from FAO Schwarz in NYC',
  },
  {
    title: 'Video Games',
    description:
      "Video games defined my childhood. Some of my favourites growing up were Oblivion, Age of Empires III and Runescape.  I'm nowadays usually playing indie roguelikes like The Binding of Isaac, or Slay the Spire.",
    icon: gamingLottie,
    image: games,
    imageCaption: 'The roots ran deep',
  },
  {
    title: 'Cars',
    description:
      "I bought my first car in November of 2022, a base trim 2001 Honda Civic with a 5 speed and probably the worst D-series engine, the D17A1; I absolutely loved that thing. I lowered it on BC coils, threw a cheap Injen SRI on it and sunk a lot of dough into making the front end not be complete slop. I learned so much from working on that thing, and by the end of it I had a little go-kart that handled like it was on rails.\n\nAfter that, I bought a 1998 Lexus GS400, and finally got to experience some torque. It handles like a boat, even with Megan front and rear strut bars, but it's a ton of fun to hear the 1UZ sing with the ISR exhaust. Will probably lower it on Tein's when the weather gets better.\n\nI'm also looking into buying an old small truck as a project, like a 90s Toyota Pickup or early 2000s Ford Ranger. Something I can wail on, bring offroad and not feel too bad about.\n\nI absolutely love working on and learning about cars. If I wasn't in computer science, I'd probably be a mechanic.",
    icon: carLottie,
    image: cassia,
    imageCaption: 'Cassia: My 1998 Lexus GS400',
    isVideo: true,
  },
];
