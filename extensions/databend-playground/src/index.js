import routes from './routes';
import locales from './locales';

const menu = {
  parent: 'topbar',
  name: 'databend-playground',
  title: 'Databend Playground',
  icon: 'cluster',
  order: 0,
  desc: 'A Modern Real-Time Data Processing &amp; Analytics DBMS with Cloud-Native Architecture',
  skipAuth: true,
};

const extensionConfig = {
  routes,
  menus: [menu],
  locales,
};

globals.context.registerExtension(extensionConfig);
