const arrayIncludes = (array: any[], element: any) =>
    !!array.filter((i) => String(i) === String(element)).length

export default arrayIncludes
