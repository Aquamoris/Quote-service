import sber from '../img/sber-logo.jpeg'
import alpha from '../img/alpha-logo.png'
import cld from '../img/CLD-Construction-logo.jpeg'

let state = {
    _state: {
        header: {
            links: [
                {name: 'Главная страница', url: '/'},
                {name: 'Компания', url: '/company'},
                {name: 'Соискатель', url: '/applicant'},
                {name: 'Вакансии', url: '/vacancy'},
                {name: 'Контакты', url: '/contacts'},
            ],
            authentication: [
                {name: 'Создать резюме', url: '/registration'},
                {name: 'Войти', url: '/authorization'},
            ],
        },
        main: {
            search: {
                inputText: '',
                result: [],
            },
            professions: [
                {name: 'Программист'}
            ],
            companies: [
                {name: 'Азбука вкуса'},
                {name: 'OZON'},
                {name: 'Авто-хелп'},
            ],
            jobsMoscow: [
                {name: 'Высший и средний менеджмент'},
            ]
        },
        vacancies: [
            {
                id: 1,
                specialization: 'программирование|| it || программист',
                name: 'Программист Java',
                salary: 120000,
                requiredExperience: '1-3 года',
                address: 'Москва',
                company: {
                    id: 1,
                    name: 'Сбер',
                    logo: sber,
                },
            },
            {
                id: 2,
                specialization: 'программирование || it || программист',
                name: 'Программист C# Senior',
                salary: 270000,
                requiredExperience: '3-6 лет',
                address: 'Москва',
                company: {
                    id: 1,
                    name: 'Сбер',
                    logo: sber,
                },
            },
            {
                id: 3,
                specialization: 'it || data scientist || data science',
                name: 'Data scientist junior',
                salary: 80000,
                requiredExperience: 'без опыта',
                address: 'Москва',
                company: {
                    id: 1,
                    name: 'Сбер',
                    logo: sber,
                },
            },
            {
                id: 4,
                specialization: 'экономика || экономист || финансы',
                name: 'Экономист Альфа банк',
                salary: 60000,
                requiredExperience: '1-3 года',
                address: 'Москва',
                company: {
                    id: 3,
                    name: 'Альфа Банк',
                    logo: alpha,
                },
            },
            {
                id: 5,
                specialization: 'строительство || недвижимость',
                name: 'Архитектор уникальных зданий и сооружений',
                salary: 250000,
                requiredExperience: '3-6 лет',
                address: 'Москва',
                company: {
                    id: 7,
                    name: 'CLD Construction',
                    logo: cld,
                },
            },
        ]
    },

    getState() {
        return this._state;
    },

    _callSubscriber() {
        console.log('State changed');
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    searchingVacancy() {
        this._state.main.search.result = [];

        if (this._state.main.search.inputText !== '') {
            for (let vacancy of this._state.vacancies) {
                if (vacancy.specialization.toLowerCase().includes(this._state.main.search.inputText) || vacancy.name.toLowerCase().includes(this._state.main.search.inputText)) {
                    this._state.main.search.result.push(vacancy);
                }
            }
        }

        console.log(this._state.main.search.result);
        this._callSubscriber(this._state);
    },

    searchInputChange(newText) {
        this._state.main.search.inputText = newText;
        this._callSubscriber(this._state);
    },
}

export default state;