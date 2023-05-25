const startDragging = (
    event: React.MouseEvent<HTMLImageElement, MouseEvent>,
    startingPos: { x: number; y: number },
    handleMove: (a: number, b: number) => void
) => {
    const element = event.target as HTMLElement

    const startingX = event.clientX
    const startingY = event.clientY

    element.style.zIndex = '2'
    element.style.transition = 'none'

    const following = (event: MouseEvent) => {
        const x = event.clientX - startingX
        const y = event.clientY - startingY

        element.style.left = `${element.clientWidth * startingPos.x + x}px`
        element.style.top = `${element.clientWidth * startingPos.y + y}px`
    }

    const unFollow = (event: MouseEvent) => {
        element.style.transition = '200ms'

        const x = Math.round(startingPos.x + (event.clientX - startingX) / element.clientWidth)
        const y = Math.round(startingPos.y + (event.clientY - startingY) / element.clientWidth)

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
