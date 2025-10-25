export const utilService = {
    makeId,
    getRandomIntInclusive,
    loadFromStorage,
    saveToStorage,
    // debounce
}

function makeId(length = 6) : string {
    var txt = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }

    return txt
}

function getRandomIntInclusive(min: number, max: number): number {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min //The maximum is inclusive and the minimum is inclusive 
}

function saveToStorage<T>(key: string, value: T) {
    localStorage.setItem(key, JSON.stringify(value))
}

function loadFromStorage(key: string) {
    const data = localStorage.getItem(key)
    return (data) ? JSON.parse(data) : undefined
}

// function debounce(func, timeout = 300) {
//     let timer
//     return (...args) => {
//         clearTimeout(timer)
//         timer = setTimeout(() => {
//             func.apply(this, args)
//         }, timeout)
//     }
// }