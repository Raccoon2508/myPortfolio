import { NavigationPath } from '@/shared/constants/app.config';
import { INavigationCard } from '@/shared/interface/cards-interfaces';

export const MAIN_PAGE_NAV_CARDS: INavigationCard[] = [
    {
        header: 'Forms',
        description: 'Lorem',
        imageUrl: 'assets/images/cards-images/forms-icon.png',
        navigationUrl: NavigationPath.FORMS_PAGE
    },
     {
        header: 'Styles',
        description: 'Lorem',
        imageUrl: 'assets/images/cards-images/forms-icon.png',
        navigationUrl: NavigationPath.STYLES_LABORATORY
    },
    {
        header: 'Contacts',
        description: 'Lorem',
        imageUrl: 'assets/images/cards-images/forms-icon.png',
        navigationUrl: NavigationPath.CONTACTS
    },
    {
        header: 'Maps',
        description: 'Lorem',
        imageUrl: 'assets/images/cards-images/forms-icon.png',
        navigationUrl: NavigationPath.MAPS
    }
];