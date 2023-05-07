/// <reference types="vite/client" />

declare global {
    interface Array<T> {
        includesDeeply(elm: any): boolean
    }
}

Array.prototype.includesDeeply = function (element): boolean {
    for (let i = 0; i < this.length; i++) {
        if (JSON.stringify(this[i]) === JSON.stringify(element)) {
            return true
        }
    }
    return false
}
