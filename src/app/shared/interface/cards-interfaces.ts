import { NavigationPath } from '@/shared/constants/app.config';

export interface INavigationCard {
    header: string;
    description: string;
    imageUrl: string;
    navigationUrl: NavigationPath;
}