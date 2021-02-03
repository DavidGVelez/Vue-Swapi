const BASE_URL = 'https://swapi.dev/api/'

export const getCollection = async (collection) => {

    let response = await fetch(BASE_URL+collection)

    if (!response.ok){
        throw Error(response.statusText)
    }
    const data = await response.json();

    return data
    
}

export const getItem = async (segment) => {
    let response = await fetch(BASE_URL+segment)

    if (!response.ok){
        throw Error(response.statusText)
    }
    const data = await response.json();

    return data
}

const api = {
    getCollection,
    getItem
}

export default api

