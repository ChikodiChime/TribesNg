import Logo from '../../../assets/images/Logo.png'
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <>
        <nav className='flex justify-between w-full items-center h-[100px] px-20 text-sm font-bold'>
            <div className="">
                <img src={Logo} width={100} alt="Logo" />
            </div>
            <div className="flex gap-10 items-center">
                <Link to="/">Home</Link>
                <Link>Tribes</Link>
                <Link>Blog</Link>
                <Link>Contact Us</Link>
            </div>
        </nav>
    </>
  )
}

export default Header