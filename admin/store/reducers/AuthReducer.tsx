import jwt_decode from 'jwt-decode';
import { LOGOUT, SET_LOGIN_LOADER, SET_TOKEN } from "../types/AuthType"

const initState = {
    loading: false,
    loginErrors: [],
    message:'',
    token: '',
	user: {},
}
type InitState = {
    loading: boolean,
    loginErrors: string[],
    message: string,
    token: string,
    user: object
}
const verifyToken = (token:string) => {
	const decodeToken = jwt_decode(token);
    const { exp }:any = decodeToken;
	const expiresIn = new Date(exp * 1000);
	if (new Date() > expiresIn) {
		localStorage.removeItem('myToken');
		return null;
	} else {
		return decodeToken;
	}
};
const ISSERVER = typeof window === "undefined";
let token
if(!ISSERVER) {
 // Access localStorage
  token = localStorage.getItem('myToken');
}

if (token) {
	const decoded = verifyToken(token);
	if (decoded) {
		initState.token = token;
		const { user }:any = decoded;
		initState.user = user;
	}
}
const AuthReducer = (state:InitState = initState, action:any) =>{
    if(action.type === SET_LOGIN_LOADER){
        return { ...state, loading: true };
    }
    else if (action.type === SET_TOKEN) {
		const decoded = verifyToken(action.payload);
		const { user }:any = decoded;
		return {
			...state,
			token: action.payload,
			user: user,
			loginErrors: [],
		};
	} 
	else if (action.type === LOGOUT) {
		return { ...state, token: '', user: '' };
	}
    else{
        return state;
    }
}
export default AuthReducer;