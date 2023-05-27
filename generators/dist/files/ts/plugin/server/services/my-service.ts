import { Strapi } from '@strapi/strapi';

export default ({ strapi }: { strapi: Strapi }) => ({
  getWelcomeMessage() {
    return 'Welcome to Admin Dashboard 🚀';
  },
});
