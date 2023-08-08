let state = {
    _state: {
        header: {
            links: [
                {name: 'Главная страница', url: '/main'},
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
            ]
        }
    },

    getState() {
        return this._state;
    },
}

export default state;