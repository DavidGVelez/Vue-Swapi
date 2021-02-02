const BASE_URL = 'https://swapi.dev/api/'

export const getCollection = async (collection) => {

    let response = await fetch(BASE_URL+collection)

    if (!response.ok){
        throw Error(response.statusText)
    }
    const data = await response.json();

    return data
    
}

const api = {
    getCollection,
}

export default api

// export const getItem = async (collection, id) => {
//     let response = await fetch(BASE_URL+"/"+collection+"/"+id)

//     if (!response.ok){
//         throw Error(response.statusText)
//     }
//     const data = await response.json();

//     return data
// }