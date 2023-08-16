import { Link } from 'react-router-dom'
import SearchOrder from '../features/order/SearchOrder'
// APPLayout non children

const Header = () => {
  return (
    <div>
      <Link to="/"> Fast react pizza Co</Link>
      <SearchOrder />
    </div>
  )
}

export default Header
