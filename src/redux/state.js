let state = {
    _state: {
        header: {
            links: [
                {id: 1, url: 'https://google.com', name: 'Google'},
                {id: 2, url: 'https://ya.ru/', name: 'Yandex'},
                {id: 3, url: 'https://ya.ru/', name: 'Yandex'},
                {id: 4, url: 'https://ya.ru/', name: 'Yandex'},
                {id: 5, url: 'https://youtube.com/', name: 'Youtube'},
            ]
        }
    },

    getState() {
        return this._state;
    },
}

export default state;