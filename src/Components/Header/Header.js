import './Header.css'

function Header() {
    return (
        <section className="header__section">
            <div className="header__wrapper">
            <div className="header__logo-container">
                <div className="header__logo-pic-container">
                    <div className="header__logo-pic"></div>
                </div>
                <h3 className="header__logo-text">Каланит Клита</h3>
            </div>

            <div className='header__nav-container'>
                <a href="#about" className='header__link'>
                    <p className='header__link-title'>О нас</p>
                </a>
                <a href="#schedule" className='header__link'>
                    <p className="header__link-title">Расписание</p>
                </a>
                <a href="#events" className='header__link'>
                    <p className='header__link-title'>События</p>
                </a>
                <a href="#contacts" className='header__link'>
                    <p className='header__link-title'>Контакты</p>
                </a>
            </div>
            </div>

            <div className='header__grass-container'>
                <div className='header__grass'></div>
                <div className='header__grass'></div>
                <div className='header__grass'></div>
                <div className='header__grass'></div>
            </div>
        </section>
    )
}

export default Header