import * as axios from 'axios'
// создаем объект axios c помощью метода create
// этот метод позволяет задать некоторые параметры по умолчанию
const instance = axios.create({
    withCredentials: true,
    headers: {
        'api-key': 'b29d6c23-57e4-4a5f-9096-6de4680fc135'
    },
    // адрес сервера по умолчанию
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})
// создаем объект
const userApi = {
    // у которого есть метод получения пользователей
    // получение пользвателей в зависимостри от номера траницы и размера страницы
    getUsers(carrentPage, pageSize) {
        // метод вернет промис - результат выполнения GET запроса нашего axios
        return instance.get(`users?page=${carrentPage}&count=${pageSize}`)
            // что бы не передавать лишних днных мы прямо здесь применим метод then
            // который так же вернет промис но уже не со всеми данными первого промиса
            .then(response => response.data)
    },
    // добавление подписки
    getFollowed(id) {
        return instance.post(`/follow/${id}`)
            .then(response => response.data)
    },
    // удаление подписики
    getUnFollowed(id) {
        return instance.delete(`/follow/${id}`)
            .then(response => response.data)

    },
    // загрузка профайла по ID
    getProfile(idUser){
       return instance.get(`/profile/${idUser}`)
    },

    setAuthData(){
        return instance.get(`/auth/me`)
    }
}
export default userApi