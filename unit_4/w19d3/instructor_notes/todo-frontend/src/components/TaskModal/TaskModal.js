import { Modal } from '@material-ui/core';
import React from 'react';
import { bool, func, string } from 'prop-types';
import styles from './styles.module.css';

function TaskModal (props) {
    return (
        <Modal
            className={styles.modal}
            open={props.isModalOpen}
            onClose={props.closeModal}
        >
            <div className={styles.taskModalContainer}>
                <span className={styles.title}>{ props.title }</span>
                <div className={styles.description}>{ props.description }</div>
                <input type="checkbox"/>Done
            </div>
        </Modal>
    );
}

TaskModal.propTypes = {
    closeModal: func,
    isModalOpen: bool,
    title: string,
    description: string,
};

export default TaskModal;