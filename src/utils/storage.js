const PINDA_ISLOGIN = 'PINDA_ISLOGIN'

export const setIsLogin = (isLogin) => {
  localStorage.setItem(PINDA_ISLOGIN, isLogin)
}

export const getIsLogin = () => {
  return localStorage.getItem(PINDA_ISLOGIN)
}

export const removeIsLogin = () => {
  localStorage.removeItem(PINDA_ISLOGIN)
}