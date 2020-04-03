import Cookies from 'js-cookie'

const TokenKey = 'token';

const UserTokenKey = 'userToken';

const MerInfo = 'merInfo';

const Level ='level';

const BannerToken = 'bannerToken';    // 获得轮播图token

export function getBannerToken() {
  return sessionStorage.getItem(BannerToken)
}

export function setBannerToken(token) {
  return sessionStorage.setItem(BannerToken, token)
}

export function removeBannerToken() {
  return sessionStorage.removeItem(BannerToken)
}

export function getToken() {
  return sessionStorage.getItem(TokenKey)
}

export function setToken(token) {
  return sessionStorage.setItem(TokenKey, token)
}

export function removeToken() {
  return sessionStorage.removeItem(TokenKey)
}

export function getUserToken() {
  return Cookies.get(UserTokenKey)
}

export function setUserToken(data) {
  let expires = new Date(new Date() * 1 + data.expires_in * 1000);
  return Cookies.set(UserTokenKey, data.userToken, { expires: expires })
}

export function removeUserToken() {
  return Cookies.remove(UserTokenKey)
}

export function getMerInfo() {
  let merInfo = sessionStorage.getItem(MerInfo);
  return JSON.parse(merInfo)
}

export function setMerInfo(data) {
  data = JSON.stringify(data)
  return sessionStorage.setItem(MerInfo, data);
}

export function removeMerInfo() {
  return Cookies.removeItem(MerInfo)
}

export function getLevel() {
  return Cookies.get(Level)
}

export function setLevel(data) {
  let expires = new Date(new Date() * 1 + data.expires_in * 1000);
  return Cookies.set(Level, data.level, { expires: expires })
}

export function removeLevel() {
  return Cookies.remove(Level)
}