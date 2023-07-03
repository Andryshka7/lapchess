const getAlertStyle = (time: number) => {
    const red = Math.round(((20 - time) / 20) * 160)
    const green = Math.round((time / 20) * 160)
    const blue = 0

    return { backgroundColor: `rgb(${red}, ${green}, ${blue})` }
}

export default getAlertStyle
