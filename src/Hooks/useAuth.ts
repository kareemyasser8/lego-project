import { useContext } from 'react'
import AuthContext from '../state-management/contexts/authContext'

const useAuth = () => {
    return useContext(AuthContext)
}

export default useAuth