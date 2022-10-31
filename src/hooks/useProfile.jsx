import { useContext, useEffect } from 'react'
import { AppContext } from '../Providers/AppContext'
import AuthService from '../services/AuthService'

function useProfile() {
  const { token, setUserLogin } = useContext(AppContext)

  useEffect(() => {
    fetchApiGetProfile()
  }, [token])

  const fetchApiGetProfile = async () => {
    if (token !== '') {
      const result = await AuthService.getProfile()
      if (result.success) {
        setUserLogin(result.data)
      }
    }
  }
}

export default useProfile
