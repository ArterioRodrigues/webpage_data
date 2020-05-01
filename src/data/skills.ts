import { Page, Skill } from '../models';

export const skills: Page<Skill> = {
  name: 'skills',
  content: [
    {
      title: 'Technical skills',
      items: [
        'Web Development (End-to-End)',
        'Responsive Design',
        'Mobile Development (Hybrid/Native)',
        'Game Development (Unity 3D)',
        'VR Development (Unity 3D)',
        '3D Modelling / Animation',
      ],
    },
    {
      title: 'Programming languages / tech stacks',
      items: [
        'JavaScript/TypeScript',
        'React/React Native',
        'Node.js',
        'Express.js',
        'HTML & CSS',
        'MongoDB',
        'MySQL',
        'Docker',
        'Golang (newcomer)',
        'C#/.NET (3+ years)',
        'Java (~1 year)',
      ],
    },
    {
      title: 'Preferences',
      items: ['elementary OS 🐧', 'Zshell 💻', 'VSCode ¯\\_(ツ)_/¯'],
    },
    {
      title: 'Special interests',
      items: [
        'Electronic music production',
        'Entrepreneurship',
        'Technical documentaries',
      ],
    },
  ],
};
