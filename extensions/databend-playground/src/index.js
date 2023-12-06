import locales from './locales';
import routes from './routes';

const menu = { 
  parent: 'global',
  name: 'databend-playground',
  title: 'Databend Playground',
  icon: 'cluster',
  order: 0,
  desc: 'Databend Playground provides a one-stop solution for deployment, operation, and query visualization of Databend.',
  skipAuth: true,
};

const extensionConfig = {
  routes,
  menus: [menu],
  locales,
};

globals.context.registerExtension(extensionConfig);

export {};
