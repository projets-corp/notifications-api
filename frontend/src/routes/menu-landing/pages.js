import { IconBriefcase } from '@tabler/icons';

const icons = {
  IconBriefcase
};

const pages = {
  id: 'pages',
  type: 'group',
  children: [
    {
      id: 'projects',
      title: 'Mes Projets',
      type: 'item',
      url: '/',
      target: true,
      icon: icons.IconBriefcase,
    }
  ]
};

export default pages;
