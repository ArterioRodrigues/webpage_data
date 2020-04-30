import { Page, Certificate, Linkable } from '../models';

export const certificates: Page<Certificate<Linkable>> = {
  name: 'certifications',
  desc: 'Certificates that I have earned over time',
  content: [
    {
      name: 'Full-Stack Web Development with React Specialization',
      url:
        'https://www.coursera.org/account/accomplishments/specialization/certificate/XGPU5C68VAEE',
      totalCourses: 4,
      earned: [
        {
          name: 'Front-End Web UI Frameworks and Tools: Bootstrap 4',
          url:
            'https://www.coursera.org/account/accomplishments/certificate/TQ2HAVM6JJ73',
        },
        {
          name: 'Front-End Web Development with React',
          url:
            'https://www.coursera.org/account/accomplishments/certificate/QJPWRV28SCV3',
        },
        {
          name: 'Multiplatform Mobile App Development with React Native',
          url:
            'https://www.coursera.org/account/accomplishments/certificate/GNX5WEXJWSGY',
        },
        {
          name: 'Server-Side Development with NodeJS, Express and MongoDB',
          url:
            'https://www.coursera.org/account/accomplishments/certificate/XGMAYMHEXDZW',
        },
      ],
    },
    {
      name: 'freeCodeCamp | The Full Stack Development Certificate',
      url: 'https://guide.freecodecamp.org/certifications/',
      totalCourses: 6,
      earned: [
        {
          name: 'Responsive Web Design Certification',
          url:
            'https://www.freecodecamp.org/certification/caglarturali/responsive-web-design',
        },
        {
          name: 'JavaScript Algorithms and Data Structures Certification',
          url:
            'https://www.freecodecamp.org/certification/caglarturali/javascript-algorithms-and-data-structures',
        },
      ],
    },
    {
      name: 'Game Design and Development Specialization',
      url: 'https://www.coursera.org/specializations/game-development',
      totalCourses: 5,
      earned: [
        {
          name: 'Introduction to Game Development',
          url:
            'https://www.coursera.org/account/accomplishments/certificate/GKDBNAGKPD6M',
        },
      ],
    },
    {
      name: 'Virtual Reality Specialization',
      url: 'https://www.coursera.org/specializations/virtual-reality',
      totalCourses: 5,
      earned: [
        {
          name: 'Introduction to Virtual Reality',
          url:
            'https://www.coursera.org/account/accomplishments/certificate/UC3L666SD5TG',
        },
        {
          name: '3D Models for Virtual Reality',
          url:
            'https://www.coursera.org/account/accomplishments/certificate/4YHK3LYWMJPV',
        },
      ],
    },
    {
      name: 'Music Production Specialization',
      url: 'https://www.coursera.org/specializations/music-production',
      totalCourses: 4,
      earned: [
        {
          name: 'The Art of Music Production',
          url:
            'https://www.coursera.org/account/accomplishments/certificate/DNVYLQQL3WVF',
        },
        {
          name: 'The Technology of Music Production',
          url:
            'https://www.coursera.org/account/accomplishments/certificate/VZDUNEC24XER',
        },
        {
          name: 'Pro Tools Basics',
          url:
            'https://www.coursera.org/account/accomplishments/certificate/YW4QY26UHC5F',
        },
      ],
    },
  ],
};
