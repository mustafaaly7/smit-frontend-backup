
const devUrl = "http://localhost:4000/"

export const BASE_URL = devUrl


export const appRoutes = {
login : BASE_URL + "auth/login",
register : BASE_URL + "auth/register",
myinfo : BASE_URL + "auth/myinfo",
forgetpassword : BASE_URL + "auth/forgetpassword"
}