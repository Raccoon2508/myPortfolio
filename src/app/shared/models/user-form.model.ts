import { Country } from '../enum/country';

export interface IUserForm {
    userCountry: Country | '';
    userName: string;
    userBirthday: Date;
}