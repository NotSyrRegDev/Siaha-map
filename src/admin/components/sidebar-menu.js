import ProjectIcon from '../assets/icons/project-management.png';
import WorkersIcon from '../assets/icons/coworkers.png';
import MarkersIcon from '../assets/icons/pin.png';
import UsersIcon from '../assets/icons/users.png';
import NotificationIcon from '../assets/icons/notification-bell.png';

const sidebar_menu = [
    {
        id: 1,
        icon: ProjectIcon,
        path: '/dashboard',
        title: 'معلومات عنا',
    },
    {
        id: 2,
        icon: WorkersIcon,
        path: '/dashboard/workers',
        title: 'العاملون لدينا',
    },
    {
        id: 3,
        icon: MarkersIcon,
        path: '/dashboard/markers',
        title: 'العلامات',
    },
    {
        id: 4,
        icon: NotificationIcon,
        path: '/dashboard/notifications',
        title: 'الاشعارات',
    },
    {
        id: 5,
        icon: UsersIcon,
        path: '/dashboard/users',
        title: 'المستخدمين',
    },
   
]

export default sidebar_menu;