import Axios from 'axios'

const BASE_URL =  `https://g-recipe-app.herokuapp.com`

export const api = Axios.create({
    baseURL: BASE_URL,
})