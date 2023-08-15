let state = {
    _state: {
        header: {
            links: [
                {name: 'Главная страница', url: '/'},
                {name: 'Компания', url: '/company'},
                {name: 'Соискатель', url: '/applicant'},
                {name: 'Вакансия', url: '/vacancy'},
                {name: 'Контакты', url: '/contacts'},
            ],
            authentication: [
                {name: 'Авторизация', url: '/authorization'},
                {name: 'Регистрация', url: '/registration'},
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
                companyId: 1,
                url: '/1',
            },
            {
                id: 2,
                specialization: 'программирование || it || программист',
                name: 'Программист C# Senior',
                salary: 270000,
                requiredExperience: '3-6 лет',
                companyId: 1,
                url: '/2',
            },
            {
                id: 3,
                specialization: 'it || data scientist || data science',
                name: 'Data scientist junior',
                salary: 80000,
                requiredExperience: 'без опыта',
                companyId: 1,
                url: '/3',
            },
            {
                id: 4,
                specialization: 'экономика || экономист || финансы',
                name: 'Экономист Сбер',
                salary: 60000,
                requiredExperience: '1-3 года',
                companyId: 3,
                url: '/4',
            },
            {
                id: 5,
                specialization: 'строительство || недвижимость',
                name: 'Архитектор уникальных зданий и сооружений',
                salary: 250000,
                requiredExperience: '3-6 лет',
                companyId: 7,
                url: '/5',
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
        this._state.main.search.inputText = '';
        this._callSubscriber(this._state);
    },

    searchInputChange(newText) {
        this._state.main.search.inputText = newText;
        this._callSubscriber(this._state);
    },
}

export default state;