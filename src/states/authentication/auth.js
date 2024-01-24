import { atomWithStorage} from 'jotai/utils'

export const signUpAuth = atomWithStorage( 'signUpAuth',{
    personalDetails: false,
    emailVerified: false,
    password: false

})