import { IconBriefcase, IconDashboard, IconFileCode, IconKey, IconSettings } from '@tabler/icons';
const icons = {
    IconDashboard,
    IconSettings,
    IconBriefcase,
    IconFileCode,
    IconKey,
};

const dashboard = {
    id: 'dashboard',
    type: 'group',
    children: [
        {
            id: 'dashboard',
            title: 'sidebar.dashboard',
            type: 'item',
            url: '/project/dashboard',
            icon: icons.IconDashboard,
            breadcrumbs: false,
        },
        {
            id: 'edit',
            title: 'sidebar.editProject',
            type: 'item',
            url: '/project/edit',
            icon: icons.IconSettings,
            breadcrumbs: false,
        },
        {
            id: 'templates',
            title: 'sidebar.templates',
            type: 'item',
            url: '/project/templates',
            icon: icons.IconFileCode,
            breadcrumbs: false,
        },
        {
            id: 'authentification',
            title: 'sidebar.authentification',
            type: 'item',
            url: '/project/authentification',
            icon: icons.IconKey,
            breadcrumbs: false,
        },
        {
            id: 'projects',
            title: 'sidebar.projets',
            type: 'item',
            url: '/',
            target: true,
            icon: icons.IconBriefcase,
        },
    ],
};

export default dashboard;
