import { Country } from '@/shared/enum/country';

export interface IUserForm {
    userCountry: Country | '';
    userName: string;
    userBirthday: Date;
}