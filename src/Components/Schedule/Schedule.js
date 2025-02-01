import './Schedule.css'

function Schedule() {
    const scheduleData = [
        {
            id: 1,
            name: "Вокал 2 группы",
            days: "понедельник, среда",
            time: "16.00-18.00",
            age: "6-12 лет",
            color: "purple"
        },
        {
            id: 2,
            name: "Шахматы",
            days: "вторник, четверг",
            time: "17.00-18.00",
            age: "6-12 лет",
            color: "blue"
        },
        {
            id: 3,
            name: "Русский язык 3 группы",
            days: "понедельник, среда",
            time: "16.15-19.00",
            age: "6-12 лет",
            color: "green"
        },
        {
            id: 4,
            name: "Английский язык 3 группы",
            days: "воскресенье, четверг",
            time: "16.15-19.00",
            age: "6-12 лет, 12-16 лет",
            color: "pink"
        },
        {
            id: 5,
            name: "Творчество",
            days: "воскресенье, вторник",
            time: "17.15-18.00",
            age: "6-12 лет",
            color: "orange"
        },
        {
            id: 6,
            name: "Рисование",
            days: "воскресенье, вторник",
            time: "18.15-19.00",
            age: "6-12 лет",
            color: "purple"
        },
        {
            id: 7,
            name: "Помощь с домашним заданием 1-3 класс",
            days: "понедельник, вторник, среда, четверг",
            time: "14.00-15.30",
            age: "",
            color: "blue"
        },
        {
            id: 70,
            name: "Помощь с домашним заданием 4-6 класс",
            days: "понедельник, вторник, среда, четверг",
            time: "15.30-17.00",
            age: "",
            color: "green"
        },
        {
            id: 8,
            name: "Гитара",
            days: "среда",
            time: "17.00-17.45",
            age: "с 8 лет",
            color: "pink"
        },
        {
            id: 9,
            name: "Актерское мастерство",
            days: "четверг",
            time: "16.00-17.00",
            age: "9-14 лет",
            color: "orange"
        },
        {
            id: 10,
            name: "Вышивание",
            days: "понедельник, среда",
            time: "15.15-16.00",
            age: "6-12 лет",
            color: "purple"
        },
        {
            id: 11,
            name: "Карате",
            days: "воскресенье, вторник",
            time: "16.00-17.00",
            age: "6-12 лет",
            color: "blue"
        },
        {
            id: 12,
            name: "Танцы",
            days: "понедельник, среда",
            time: "18.30-19.30",
            age: "6-12 лет",
            color: "green"
        },
        {
            id: 13,
            name: "Фортепьяно 5 групп",
            days: "воскресенье, вторник",
            time: "15.00-19.00",
            age: "6-12 лет",
            color: "pink"
        },
        {
            id: 14,
            name: "Математика",
            days: "вторник, четверг",
            time: "15.30-17.00",
            age: "12-16 лет",
            color: "orange"
        },
    ]

    return (
        <section className="schedule__section">
            <ul className="schedule__wrapper">
                {
                    scheduleData.map((i) => (
                        <li key={i.id} className={`schedule__card schedule__card_${i.color}`}>
                            
                            <p className="schedule__card-class-name">{i.name}</p>
                            
                            <p className="schedule__card-class-days">{i.days}</p>
                            <p className="schedule__card-class-times">{i.time}</p>
                            <p className="schedule__card-class-age">{i.age}</p>
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}

export default Schedule