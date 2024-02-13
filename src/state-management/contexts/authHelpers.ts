export const calculateRemainingTime = (expirationTime: string) => {
  return +expirationTime * 1000 - Date.now() //returns the remaining time in melliseconds
}

export const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem("token")
  const storedExpirationDate = localStorage.getItem("expirationTime")

  let remainingTime

  if (storedExpirationDate) {
    remainingTime = calculateRemainingTime(storedExpirationDate)
    if (remainingTime <= 60000) {
      localStorage.removeItem("token")
      localStorage.removeItem("expirationTime")
      return null
    }
  }

  return { token: storedToken, duration: remainingTime }
}
