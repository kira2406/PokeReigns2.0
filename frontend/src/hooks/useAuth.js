import { useSelector } from 'react-redux'
import { selectAuthToken, selectHasCompletedStartup, selectUser } from '../redux/selectors/authSelector'

const useAuth = () => {
    const user = useSelector(selectUser)
    const token = useSelector(selectAuthToken)
    const hasCompletedStartup = useSelector(selectHasCompletedStartup)
  return {user, token, hasCompletedStartup}
}

export default useAuth