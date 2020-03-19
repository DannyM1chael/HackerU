import phones from './mockPhones';

export const fetchPhonesApi = async() => {
    return new Promise((resolve, reject) =>{
        resolve(phones)
    })
}