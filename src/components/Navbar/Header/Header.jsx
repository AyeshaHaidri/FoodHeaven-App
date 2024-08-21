import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className="header-contents">
            <h2>Order your favourite food here</h2>
            <p>Choose from a diverse menu featuring a delectable array of dishes, each crafted with the finest ingredients and inspired by multi-cuisine culture.</p>
            <a href="#explore-menu"><button id='explore-menu'>View Menu</button></a>
        </div>
    </div>
  )
}

export default Header