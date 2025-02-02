import Heading from '../ui-kit/Heading/Heading'
import Event from './Event/Event'
import './Events.css'

function Events() {
    const data = [
        {
            id: 1,
            title: "Мастер-Класс по живописи",
            description: "В четверг в детском клубе «Каланит» прошел мастер-класс по живописи для начинающих, где дети вместе с родителями смогли раскрыть свой творческий потенциал. Мероприятие, организованное отделом абсорбции города Кирьят-Моцкин, подарило участникам теплую и дружескую атмосферу, наполненную вдохновением, радостью и яркими красками 🎨",
            text: "",
            thanks: "Спасибо большое преподавателю Антонина Пономарёва ❤️",
            photos: [
                {
                    id: 1,
                    link: 'https://scontent.ftlv19-3.fna.fbcdn.net/v/t39.30808-6/475808287_122151807962370093_7163071418671410570_n.jpg?stp=cp6_dst-jpg_p960x960_tt6&_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=59wN8O3W7bEQ7kNvgG1JKXb&_nc_zt=23&_nc_ht=scontent.ftlv19-3.fna&_nc_gid=A4ZoSROEdYEjM1gdEGjRdmo&oh=00_AYCX2ccAiIm_mZVYE2X1oaeMOA9LI0pfErxCdTWZr7MQLA&oe=67A4EB8E',
                },
                {
                    id: 2,
                    link: 'https://scontent.ftlv19-1.fna.fbcdn.net/v/t39.30808-6/475902071_122151808004370093_7322082180086205318_n.jpg?stp=cp6_dst-jpg_p720x720_tt6&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=40qeOOyVWyYQ7kNvgE_gRLU&_nc_zt=23&_nc_ht=scontent.ftlv19-1.fna&_nc_gid=A4ZoSROEdYEjM1gdEGjRdmo&oh=00_AYCT61LQWjKLHSH16dxS9CNbFCe5MfMMD14qI9bYvN_ECg&oe=67A4DA04',
                },
                {
                    id: 3,
                    link: 'https://scontent.ftlv19-1.fna.fbcdn.net/v/t39.30808-6/475802554_122151807974370093_4928280773896546573_n.jpg?stp=cp6_dst-jpg_p720x720_tt6&_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=EVkbDrYnXH8Q7kNvgEzf3r2&_nc_zt=23&_nc_ht=scontent.ftlv19-1.fna&_nc_gid=A4ZoSROEdYEjM1gdEGjRdmo&oh=00_AYCjuelvBltBz18rsigf7zoEET7CGYAFydXVh4MwdlrpnQ&oe=67A4F3A5',
                },
                {
                    id: 4,
                    link: 'https://scontent.ftlv19-1.fna.fbcdn.net/v/t39.30808-6/475764631_122151808040370093_3037698350314901481_n.jpg?stp=cp6_dst-jpg_p720x720_tt6&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=h8Wn9C5jlsEQ7kNvgHMvjn1&_nc_zt=23&_nc_ht=scontent.ftlv19-1.fna&_nc_gid=A4ZoSROEdYEjM1gdEGjRdmo&oh=00_AYACWVLage3p0bAvQK2WLUYinO2NCh7kD1_XjRrwWQm21g&oe=67A4F128',
                },
            ]
        },

        {
            id: 2,
            title: "Праздничный вечер, посвященный Хануке",
            description: "В детском клубе «Каланит» состоялся праздничный вечер, посвященный Хануке, организованный отделом абсорбции муниципалитета Кирьят-Моцкин. Зажечь первую ханукальную свечу и поздравить детей и их родителей пришли мэр города Цики Ависар, заместитель мэра города Геннадий Дозорцев, начальник отдела связи с общественностью Михаль Тувия и руководитель отдела абсорбции Ира Лившиц.",
            text: "Мероприятие прошло в теплой и радостной атмосфере. Дети и их родители наслаждались праздником, участвовали в увлекательных мероприятиях и получили массу положительных эмоций. В завершение вечера каждого ребенка ждал сладкий сюрприз — традиционная ханукальная суфганья. Праздник подарил всем участникам яркие впечатления и создал атмосферу света и радости, которая так важна в дни Хануки!",
            thanks: "",
            photos: [
                {
                    id: 1,
                    link: 'https://scontent.ftlv19-1.fna.fbcdn.net/v/t39.30808-6/474916886_122151227390370093_9030823411653929587_n.jpg?stp=dst-jpg_p960x960_tt6&_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=LliiXi4SvtoQ7kNvgEqmMZn&_nc_zt=23&_nc_ht=scontent.ftlv19-1.fna&_nc_gid=A5wscshJDT3w7P-n_DQwsZr&oh=00_AYBQ1C-m2yAXL4-DUIHlf_i2NmCykinZOlQtXvdRTtxpgQ&oe=67A4F6A6',
                },
                {
                    id: 2,
                    link: 'https://scontent.ftlv19-2.fna.fbcdn.net/v/t39.30808-6/475276101_122151227672370093_8144968424272415260_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=c9NelQuKYAYQ7kNvgG2is3A&_nc_zt=23&_nc_ht=scontent.ftlv19-2.fna&_nc_gid=A5wscshJDT3w7P-n_DQwsZr&oh=00_AYARdh311TTBC0098kQhAfacIKlhhgYQTRFEbeIL7h4FOw&oe=67A4FC23',
                },
                {
                    id: 3,
                    link: 'https://scontent.ftlv19-1.fna.fbcdn.net/v/t39.30808-6/475017578_122151227948370093_5832530666782131726_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=9FFonsKpYnYQ7kNvgHA0wDK&_nc_zt=23&_nc_ht=scontent.ftlv19-1.fna&_nc_gid=AeiBvK4DUrv502ZQ492INbp&oh=00_AYB3uWOCBDOCog-JTG2WtkB5f-vf_wavna9lmnuPyo2VSg&oe=67A5137F',
                },
                {
                    id: 4,
                    link: 'https://scontent.ftlv19-2.fna.fbcdn.net/v/t39.30808-6/475383391_122151227708370093_7308866942352211058_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=gmypzGtsQogQ7kNvgGx8JYF&_nc_zt=23&_nc_ht=scontent.ftlv19-2.fna&_nc_gid=AB4z-6Snxi_EOqzTMfmx0yW&oh=00_AYABSk5gzkrYPRFIExybjkDEgqZdN42i3nAXtrPDWtRPwQ&oe=67A4F4A6',
                },
            ]
        },

        {
            id: 3,
            title: "«Маген Давид Адом» у нас в гостях",
            description: "Наш детский клуб «Каланит» принимал в гостях представителей организации «Маген Давид Адом». Они пришли с приятным сюрпризом, чтобы поздравить наших детей с праздником Хануки. Гости подарили радостные моменты, угостили ребят традиционными ханукальными суфганийот и создали для них теплую атмосферу праздника.",
            text: "",
            thanks: "",
            photos: [
                {
                    id: 1,
                    link: 'https://scontent.ftlv19-3.fna.fbcdn.net/v/t39.30808-6/475266534_122151226232370093_6802162530839565559_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=QUasEyEtMzwQ7kNvgGreOvq&_nc_zt=23&_nc_ht=scontent.ftlv19-3.fna&_nc_gid=A5wscshJDT3w7P-n_DQwsZr&oh=00_AYBXvKR-whwo8atGOgfQ7ho-SviPbfBDsuSwv1s8PLM68w&oe=67A4FE7B',
                },
                {
                    id: 2,
                    link: 'https://scontent.ftlv19-2.fna.fbcdn.net/v/t39.30808-6/475307234_122151226394370093_4941071628173972494_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=zsk6gcPd_mkQ7kNvgGObcSC&_nc_zt=23&_nc_ht=scontent.ftlv19-2.fna&_nc_gid=AJc5Sh1t3iOB7rAtsU6zqPa&oh=00_AYBhsU1Uix9d8pzdGP0KYeKmfXBruKaUGcIarp1iywgvag&oe=67A4F5A6',
                },
                {
                    id: 3,
                    link: 'https://scontent.ftlv19-2.fna.fbcdn.net/v/t39.30808-6/475529761_122151226358370093_6700613861334795428_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=5piJ0MNKpfsQ7kNvgEpJemF&_nc_zt=23&_nc_ht=scontent.ftlv19-2.fna&_nc_gid=AcAJMnNHGOhHaeyR4kEDTL5&oh=00_AYANgUmyUP2sDZeXjR7EZ1VlhywfhC4CrOMpHCoTEptd8g&oe=67A4F86D',
                },
                {
                    id: 4,
                    link: 'https://scontent.ftlv19-2.fna.fbcdn.net/v/t39.30808-6/475278500_122151226640370093_5456413903568008110_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=M8X-vhEtRusQ7kNvgFgGgp7&_nc_zt=23&_nc_ht=scontent.ftlv19-2.fna&_nc_gid=AzzfiKfO9D2BvVJRDHbh2uG&oh=00_AYDFv79a9Ar_rQTzs20n1DLRAqZXk7F8IpTRuULFR5jtSQ&oe=67A4E8DD',
                },
            ]
        },
    ]

    return(
        <section className='events__section' id='events'>
            <Heading>Наши события</Heading>
            <ul className='events__container'>
                {data.map((i, index) => (
                    <Event key={i.id} card={i} index={index}/>
                ))}
            </ul>
        </section>
    )
}

export default Events