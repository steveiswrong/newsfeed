"use strict"

function sleep(millis) {
    return new Promise((resolve) => setTimeout(resolve, millis))
}

export function growRight( element, upTo = 100, atTheRateOf = 10 ) {
    return async (callback) => {
        const startPx = element.offsetLeft
        for( let i = startPx; i < upTo; i++ ) {
            await sleep(atTheRateOf).then( () => {element.style.left = i + 'px'})
        }
        callback()
    }
}

export function shrinkLeft( element, downTo = 0, atTheRateOf = 10 ) {
    return async (callback) => {
        const startPx = element.offsetLeft
        for( let i = startPx; i > downTo; i-- ) {
            await sleep(atTheRateOf).then(() => {element.style.left = i + 'px'})
        }
        callback()
    }
}