import React from 'react'

// CSS
import styles from "../component/modal.module.css"

interface Props {
    children: React.ReactNode
}

const Modal: React.FC<Props> = ({ children }) => {
    const closeModal = (e: React.MouseEvent): void => {
        const modal = document.querySelector("#modal")
        if (modal) {
            modal!.classList.add("hide")
        }
    }

  return (
    <div id="modal" className='hide'>
        <div className={styles.fade} onClick={closeModal} />
        <div className={styles.modal}>
            <h2>texto modal</h2>
            {children}
        </div>
    </div>
  )
}

export default Modal