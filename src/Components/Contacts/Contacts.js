import Heading from '../ui-kit/Heading/Heading'
import Julia from '../../images/contacts/julia.jpeg'
import Snegana from '../../images/contacts/snegana.jpeg'
import './Contacts.css'

function Contacts() {
    return(
        <section className='contacts__section' id="contacts">
            <Heading>Контакты</Heading>
            
            <ul className='contacts__wrapper'>

                <li className='contacts__container'>                    
                    <img src={Snegana} alt='фото Снежаны' className='contacts__img'></img>
                    <div>
                        <p className='contacts__name'>Снежана</p>
                        <p className='contacts__phone'>053-9233567</p>
                    </div>
                </li>

                <li className='contacts__container'>
                    <img src={Julia} alt='фото Юли' className='contacts__img'></img>
                    <div>
                        <p className='contacts__name'>Юлия</p>
                        <p className='contacts__phone'>050-9890939</p>
                    </div>
                </li>
            </ul>

            <div className='contacts__flowers-pic'></div>
        </section>
    )
}

export default Contacts