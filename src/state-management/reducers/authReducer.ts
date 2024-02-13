export interface AuthState {
  token: string | null
  isLoggedIn: boolean
  isAdmin: boolean
}

interface Login {
  type: "LOGIN"
  token: string
  expirationTime: string
}

interface Logout {
  type: "LOGOUT"
}

export type AuthStateAction = Login | Logout

export const authReducer = (state: AuthState, action: AuthStateAction) => {
  switch (action.type) {
    case "LOGIN":
      state = { ...state, token: action.token }
      localStorage.setItem("token", action.token)
      localStorage.setItem("expirationTime", action.expirationTime)
    case "LOGOUT":
      state = { ...state, token: null }
      localStorage.removeItem("token")
      localStorage.removeItem("expirationTime")
  }
}

