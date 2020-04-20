import Cookies from 'js-cookie'

const TokenKey = 'token';

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(data) {
  let expires = new Date(new Date() * 1 + data.expires_in * 1000);
  return Cookies.set(TokenKey, data.token, { expires: expires })
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}