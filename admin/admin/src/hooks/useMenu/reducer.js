/* eslint-disable consistent-return */
import { Cog } from '@strapi/icons';
import produce from 'immer';

const initialState = {
  generalSectionLinks: [
    {
      icon: Cog,
      intlLabel: {
        id: 'global.settings',
        defaultMessage: 'Settings',
      },
      to: '/settings',
      // Permissions of this link are retrieved in the init phase
      // using the settings menu
      permissions: [],
      notificationsCount: 0,
    },
  ],
  pluginsSectionLinks: [],
  isLoading: true,
};

const reducer = (state = initialState, action) =>
  produce(state, (draftState) => {
    switch (action.type) {
      case 'SET_SECTION_LINKS': {
        const { authorizedGeneralSectionLinks, authorizedPluginSectionLinks } = action.data;
        draftState.generalSectionLinks = authorizedGeneralSectionLinks;
        draftState.pluginsSectionLinks = authorizedPluginSectionLinks;
        break;
      }
      case 'UNSET_IS_LOADING': {
        draftState.isLoading = false;
        break;
      }
      default:
        return draftState;
    }
  });

export default reducer;
export { initialState };
