import { routeNames, router } from '@/router'

export const useAuthStore = defineStore('authStore', () => {
  const accessToken = ref(localStorage.getItem('si-token'))
  const refreshToken = ref(localStorage.getItem('refresh-token'))
  const expireDate = ref(localStorage.getItem('token-expire'))

  function setToken (token: string) {
    accessToken.value = token
    localStorage.setItem('si-token', token)
  }

  function setExpireDate (date: number, expireTime: number) {
    expireDate.value = (date + (expireTime * 1000)).toString()
    localStorage.setItem('token-expire', expireDate.value)
  }

  function setRefreshToken (token: string) {
    refreshToken.value = token
    localStorage.setItem('refresh-token', token)
  }

  function login (payload: ILoginRequest) {
    return authService.login(payload)
      .then((res) => {
        console.log(res)
        setToken(res.access_token)
        setRefreshToken(res.refresh_token)
        setExpireDate(Date.now(), res.expires_in)
        console.log(refreshToken.value)
      })
  }

  function register (payload: ILoginRequest) {
    return authService.register(payload)
      .then((res) => {
        console.log(res)
      })
  }

  function refreshExpiredToken (payload: string) {
    console.log(accessToken.value)
    return authService.refreshToken(payload)
      .then((res) => {
        console.log(res)
        console.log(accessToken.value)
      })
  }

  function logout () {
    localStorage.removeItem('si-token')
    window.location.href = router.resolve(routeNames.login).href
  }

  return {
    accessToken,
    login,
    logout,
    register,
    refreshExpiredToken
  }
})
