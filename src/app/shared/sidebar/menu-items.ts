import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [

  {
    path: '/dashboard',
    title: 'Dashboard',
    icon: 'bi bi-speedometer2',
    class: '',
    extralink: false,
    submenu: []
  },



  {
    path: '/component/reports',
    title: 'Relatorios',
    icon: 'bi bi-card-text',
    class: '',
    extralink: false,
    submenu: []
  },


  {
    path: '/about',
    title: 'Sobre',
    icon: 'bi bi-people',
    class: '',
    extralink: false,
    submenu: []
  }
];
