import './Footer.css'

function Footer() {
    return(
        <section className='footer__section'>
           
            <div className='footer__wrapper'>
                <div className='contacts__adress-container'>
                <p className='contacts__adress'>Адрес:</p>
                <p className='contacts__adress'>Кирьят-Моцкин, ул. Хашмонаим, 12</p>
                </div>
                <div className='contacts__map'></div>
            </div>
        </section>
    )
}

export default Footer