import { ReactNode } from 'react'
import { createPortal } from 'react-dom'

interface PortalProps {
    children: ReactNode
}

const Portal = ({ children }: PortalProps) => {
    const portal = document.getElementById('portal') as HTMLElement
    return createPortal(children, portal)
}

export default Portal
