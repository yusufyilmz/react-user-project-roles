import React from 'react';
import { Modal, ModalContent, ModalClose } from './style';

export default ({ message, closeModal, result }) => {
    return (
        <Modal >
            <ModalContent result={result}>
                <ModalClose onClick={closeModal}>&times;</ModalClose>
                <strong>{message}</strong>
            </ModalContent>
        </Modal>
    )
}




