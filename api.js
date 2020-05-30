import { AsyncStorage } from 'react-native'
import { DECK_STORAGE_KEY } from './utils'

export function submitEntry({entry, key}){
    return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
        [key]: entry
    }))
}

export function getEntry(){
    return AsyncStorage.getItem(DECK_STORAGE_KEY).then((results) => {
        return Object.values(JSON.parse(results))
    })
}

export function updateEntry(key, card){
    return AsyncStorage.getItem(DECK_STORAGE_KEY).then((results) => {
        const data = JSON.parse(results)
        data[key].cards.push(card)
        AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(data) );
    })
}

export function removeEntry(key){
    return AsyncStorage.getItem(DECK_STORAGE_KEY).then((results) => {
        const data = JSON.parse(results)
        data[key] = undefined
    })
}