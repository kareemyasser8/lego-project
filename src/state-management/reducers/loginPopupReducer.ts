export interface LoginPopupAction {
  type: "SHOW_LOGIN_POPUP" | "HIDE_LOGIN_POPUP"
}

const loginReducer = (state: boolean, action: LoginPopupAction): boolean => {
  if (action.type == "SHOW_LOGIN_POPUP") {
    return (state = true)
  }
  if (action.type == "HIDE_LOGIN_POPUP") {
    return (state = false)
  }

  return state
}

export default loginReducer
