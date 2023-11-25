// Write your JS code here
// Write your JS code here
import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'
import './index.css'

const Logout = props => {
  const onClickLogout = () => {
    const {history} = props

    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <button className="logout-button" type="button" onClick={onClickLogout}>
      Logout
    </button>
  )
}

export default withRouter(Logout)
