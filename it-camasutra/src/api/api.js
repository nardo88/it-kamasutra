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

    // аутентификация пользователя
    // вернее проверка авторизован ли пользователь
    setAuthData(){
        return instance.get(`/auth/me`)
    },

    // получение статуса пользователя
    getStatus(idUser){
        return instance.get(`/profile/status/${idUser}`)
    },
    // обновление статуса
    updateStatus(status){
        // put запрос именно в этой ситуации нам возвращает только 
        // результат операции т.е. либо ок либо не ок, сам статус 
        // он нам не пересылает
        return instance.put(`/profile/status`, {status: status})
    },

    
    // метод принимает данные с формы
    login(email, password, rememberMe = false){
        // с помощью axios создается POST запрос
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    
    // метод для того что бы выйти
    logout(){
        // сервер настроен такми образом что мы просто посылаем delete зпрос
        return instance.delete(`auth/login`)
    },

    // отправка на сервер изображения аватарки
    // файл приходит в качестве аргумента
    savePhoto(photoFile){
        // если надоотправить на сервер файл то необходимо создать объект 
        // класса FormData и уже потом с помощью метода append
        // добавить в него наш файл
        const formData = new FormData();
        formData.append("image", photoFile )
        // для отправки изображения метод put должен принять три аргумента
        // 1 - путь, 2 - FormData, 3 - заголовок 'Content-Type': 'multipart/form-data'
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
}
export default userApi