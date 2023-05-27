export interface ModalControls {
    closeModal: () => void
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
    setError: React.Dispatch<React.SetStateAction<boolean>>
}
