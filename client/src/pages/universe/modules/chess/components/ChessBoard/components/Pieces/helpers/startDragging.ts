const startDragging = (
    event: React.MouseEvent<HTMLImageElement, MouseEvent>,
    k: number,
    startingPos: { x: number; y: number },
    handleMove: (a: number, b: number) => void
) => {
    const element = event.target as HTMLElement

    const startingX = event.clientX
    const startingY = event.clientY

    element.style.zIndex = '2'
    element.style.transition = 'none'

    const following = (event: MouseEvent) => {
        const { x, y } = startingPos

        const difX = k * (event.clientX - startingX)
        const difY = k * (event.clientY - startingY)

        element.style.left = `${element.clientWidth * x + difX}px`
        element.style.top = `${element.clientWidth * y + difY}px`
    }

    const unFollow = (event: MouseEvent) => {
        element.style.transition = '200ms'

        const difX = k * (event.clientX - startingX)
        const difY = k * (event.clientY - startingY)

        const x = Math.round(startingPos.x + difX / element.clientWidth)
        const y = Math.round(startingPos.y + difY / element.clientWidth)

        element.style.zIndex = '1'
        element.style.left = ''
        element.style.top = ''

        handleMove(x, y)

        window.removeEventListener('mousemove', following)
        window.removeEventListener('mouseup', unFollow)
    }

    window.addEventListener('mousemove', following)
    window.addEventListener('mouseup', unFollow)
}

export default startDragging
