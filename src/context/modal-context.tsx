import { createContext, useContext, useState } from "react";

const ModalContext = createContext({
    showModal: false,
    showModalHandler: () => {},
    closeModalHandler: () => {}
})

type Props = {
    children: React.ReactNode
}

export const ModalProvider = (props: Props) => {
    const [showModal, setShowModal] = useState<boolean>(false)

    const showModalHandler = () => {
        setShowModal(true)
        console.log('show modal')
    }

    const closeModalHandler = () => {
        setShowModal(false)
    }

    return(
        <ModalContext.Provider 
            value={{showModal, showModalHandler, closeModalHandler}}
        >
            {props.children}
        </ModalContext.Provider>
    )
}

const useModalContext = () => useContext(ModalContext)

export default useModalContext