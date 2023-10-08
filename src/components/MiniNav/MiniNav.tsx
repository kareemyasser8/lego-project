import './MiniNav.css';

import { useContext } from 'react';
import { TbLego } from 'react-icons/tb';

import loginPopupContext from '../../state-management/contexts/loginPopupContext';

const MiniNav = () => {
  const { showLoginPopup, dispatch } = useContext(loginPopupContext)

  return (
    <>
      <div className=" mini-nav">
        <p></p>
        <p className="ms-5">FREE Shipping with orders over $35!*</p>
        <div
          onClick={() => {
            dispatch({ type: "SHOW_LOGIN_POPUP" })
          }}
          className="sign-in-section d-flex gap-2 me-5"
        >
          <TbLego className="sign-in-icon" />
          <p>Sign In </p>
        </div>
      </div>
    </>
  )
}

export default MiniNav
