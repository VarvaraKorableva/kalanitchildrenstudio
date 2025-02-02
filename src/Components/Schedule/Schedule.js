import './Schedule.css'
import React, { useState, useRef } from 'react'
import Heading from '../ui-kit/Heading/Heading'

function Schedule() {
    const data = [
        {
            id: 1,
            name: "Вокал",
            class: "",
            groups: "2 группы",
            days: "понедельник, среда",
            time: "16.00-18.00",
            age: "6-12 лет",
            color: "purple"
        },
        {
            id: 2,
            name: "Шахматы",
            class: "",
            groups: "",
            days: "вторник, четверг",
            time: "17.00-18.00",
            age: "6-12 лет",
            color: "purple"
        },
        {
            id: 3,
            name: "Русский язык",
            class: "",
            groups: "3 группы",
            days: "понедельник, среда",
            time: "16.15-19.00",
            age: "6-12 лет",
            color: "purple"
        },
        {
            id: 4,
            name: "Английский язык",
            groups: "3 группы",
            days: "воскресенье, четверг",
            time: "16.15-19.00",
            age: "6-12 лет, 12-16 лет",
            color: "green"
        },
        {
            id: 5,
            name: "Творчество",
            class: "",
            groups: "",
            days: "воскресенье, вторник",
            time: "17.15-18.00",
            age: "6-12 лет",
            color: "purple"
        },
        {
            id: 6,
            name: "Рисование",
            class: "",
            groups: "",
            days: "воскресенье, вторник",
            time: "18.15-19.00",
            age: "6-12 лет",
            color: "purple"
        },
        {
            id: 7,
            name: "Вышивание",
            class: "",
            groups: "",
            days: "понедельник, среда",
            time: "15.15-16.00",
            age: "6-12 лет",
            color: "purple"
        },
        {
            id: 8,
            name: "Карате",
            class: "",
            groups: "",
            days: "воскресенье, вторник",
            time: "16.00-17.00",
            age: "6-12 лет",
            color: "purple"
        },
        {
            id: 9,
            name: "Помощь с домашним заданием",
            class: "1-3 класс",
            groups: "",
            days: "понедельник, вторник, среда, четверг",
            time: "14.00-15.30",
            age: "6-9 лет",
            color: "purple"
        },
        {
            id: 10,
            name: "Танцы",
            class: "",
            groups: "",
            days: "понедельник, среда",
            time: "18.30-19.30",
            age: "6-12 лет",
            color: "purple"
        },
        {
            id: 11,
            name: "Фортепьяно",
            class: "",
            groups: "5 групп",
            days: "воскресенье, вторник",
            time: "15.00-19.00",
            age: "6-12 лет",
            color: "purple"
        },
        {
            id: 12,
            name: "Помощь с домашним заданием",
            class: "4-6 класс",
            groups: "",
            days: "понедельник, вторник, среда, четверг",
            time: "15.30-17.00",
            age: "10-13 лет",
            color: "orange"
        },
        {
            id: 13,
            name: "Гитара",
            class: "",
            groups: "",
            days: "среда",
            time: "17.00-17.45",
            age: "с 8 лет",
            color: "blue"
        },
        {
            id: 14,
            name: "Актерское мастерство",
            groups: "",
            days: "четверг",
            time: "16.00-17.00",
            age: "9-14 лет",
            color: "orange"
        },
        {
            id: 15,
            name: "Математика",
            class: "",
            groups: "",
            days: "вторник, четверг",
            time: "15.30-17.00",
            age: "12-16 лет",
            color: "green"
        },
    ]
    const sectionRef = useRef(null);
    const [scheduleData, setScheduleData] = useState(data)

    function handleAgeSort(age) {
        if (age === "все") {
            setScheduleData(data);
        } else {
            setScheduleData(data.filter((i) => i.age.includes(age)));
        }

        if (sectionRef.current) {
            sectionRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    }

    return (
        <section className="schedule__section" ref={sectionRef} id='schedule'>
            <Heading>Расписание</Heading>
        
            <div className="schedule__sort-container">
            <p className="schedule__sort-title">Фильтровать по возрасту:</p>
            <div className="schedule__sort-btn-container">
            <button 
                className="schedule__age-btn_purple schedule__age-btn"
                onClick={() => handleAgeSort('6-12 лет')}
            >
                6-12 лет
            </button>
            <button 
                className="schedule__age-btn_blue schedule__age-btn"
                onClick={() => handleAgeSort('с 8 лет')}
            >
                с 8 лет
            </button>
            <button 
                className="schedule__age-btn_orange schedule__age-btn"
                onClick={() => handleAgeSort('9-14 лет')}
            >
                9-14 лет
            </button>
            <button 
                className="schedule__age-btn_green schedule__age-btn"
                onClick={() => handleAgeSort('12-16 лет')}
            >
                12-16 лет
            </button>
            <button 
                className="schedule__age-btn_yellow schedule__age-btn"
                onClick={() => handleAgeSort('все')}
            >
                Показать все
            </button>
            </div>
        </div>

            <ul className="schedule__wrapper">
                {
                    scheduleData.map((i, index) => (
                        <li key={i.id} className={`schedule__card schedule__card_${i.color}`}>
                            
                            <p className="schedule__card-class-name">{i.name}</p>
                            <p className="schedule__card-class">{i.class}</p>
                            {/*<p className="schedule__card-class-groups">{i.groups}</p>*/}
                            <p className="schedule__card-class-days"><span className="schedule__opacity">Дни недели:</span> {i.days}</p>
                            <p className="schedule__card-class-times"><span className="schedule__opacity">Время:</span> {i.time}</p>
                            <p className="schedule__card-class-age"><span className="schedule__opacity">Возраст: </span>{i.age}</p>
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}

export default Schedule