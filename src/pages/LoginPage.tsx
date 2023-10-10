import { BsPerson } from 'react-icons/bs'
import AuthLayout from '../components/AuthLayout/AuthLayout'

const LoginPage = () => {
  return (
    <AuthLayout type={'login'}>
    <form action="" className="auth-form">
        <label htmlFor="firstName">first name</label>
        <div className="input-container">
          <input
            className="input"
            autoComplete="off"
            type="text"
            id="firstName"
            placeholder="Write your first name"
          />
          <div className="input-icon">
            <BsPerson />
          </div>
        </div>
        <div className="input-error">
          Email is required
        </div>
      </form>
    </AuthLayout>
  )
}

export default LoginPage