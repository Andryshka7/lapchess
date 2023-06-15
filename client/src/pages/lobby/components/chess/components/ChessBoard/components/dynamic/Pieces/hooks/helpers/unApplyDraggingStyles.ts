const unApplyDraggingStyle = (element: HTMLElement) => {
    element.style.transition = '200ms'
    element.style.zIndex = '1'
    element.style.left = ''
    element.style.top = ''
}

export default unApplyDraggingStyle
