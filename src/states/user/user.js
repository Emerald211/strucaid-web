import { atomWithStorage } from 'jotai/utils';

export const userAtom = atomWithStorage('user', [
	{
		firstName: 'Emmanuel',
		lastName: 'Aderibigbe',
		phoneNo: '07064158452',
		email: 'emmanueladeribigbe2004@gmail.com',
        password: 1234,
        id: crypto.randomUUID()
	},
]);
