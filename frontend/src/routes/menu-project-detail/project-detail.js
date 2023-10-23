import { IconDashboard, IconSettings, IconBriefcase, IconFileCode, IconKey } from '@tabler/icons';
const icons = {
  IconDashboard,
  IconSettings, IconBriefcase,
  IconFileCode, IconKey
};

const dashboard = {
  id: 'dashboard',
  type: 'group',
  children: [
    {
      id: 'dashboard',
      title: 'Dashboard',
      type: 'item',
      url: '/project/dashboard',
      icon: icons.IconDashboard,
      breadcrumbs: false
    },
    {
      id: 'edit',
      title: 'Edit Project',
      type: 'item',
      url: '/project/edit',
      icon: icons.IconSettings,
      breadcrumbs: false
    },
    {
      id: 'templates',
      title: 'Templates',
      type: 'item',
      url: '/project/templates',
      icon: icons.IconFileCode,
      breadcrumbs: false
    },
    {
      id: 'authentification',
      title: 'Authentification',
      type: 'item',
      url: '/project/authentification',
      icon: icons.IconKey,
      breadcrumbs: false
    },
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

export default dashboard;
