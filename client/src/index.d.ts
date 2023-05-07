export {}

declare global {
    interface Array<T> {
        includesDeeply(element: any): boolean
    }
}
