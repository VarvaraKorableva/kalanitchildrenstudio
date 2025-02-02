import './Event.css'

function Event({card, index}) {

    return(
        <li className='event__container'>
            
            <h3 className='event__title'>{card.title}</h3>

            <div className={index % 2 === 0 ? 'event__info-wrapper-even' : 'event__info-wrapper-odd'}>
                <div className='event__img-container'>
                    <img src={card.photos[0].link} className="event__img"></img>
                </div>
                <p className='event__text event__text_box'>{card.description}</p>
            </div>

            <p className='event__text'>{card.text}</p>
            <div className='event__delimiter'></div>
            
        </li>
    )
}

export default Event