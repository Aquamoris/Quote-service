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
        }
    },

    getState() {
        return this._state;
    },

    dispatch(action) {
        
    }
}

export default state;