import { Modal } from '@material-ui/core';
import React, { Component } from 'react';
import { bool, func, string } from 'prop-types';
import styles from './styles.module.css';

class TaskModal extends Component {
    handleCompletion = e => {
        this.props.updateCompletionStatus(this.props.taskId, e.target.checked);
    }

    render () {
        return (
            <Modal
                className={styles.modal}
                open={this.props.isViewTaskModalOpen}
                onClose={this.props.closeViewTaskModal}
            >
                <div className={styles.taskModalContainer}>
                    <span className={styles.title}>{ this.props.title }</span>
                    <div className={styles.description}>{ this.props.description }</div>
                    <div className={styles.flexEnd}>
                        <input
                            type="checkbox"
                            onChange={this.handleCompletion}
                            checked={this.props.isCompleted}
                        />Done
                    </div>
                </div>
            </Modal>
        );
    }
}

TaskModal.propTypes = {
    closeViewTaskModal: func,
    isViewTaskModalOpen: bool,
    title: string,
    description: string,
    updateCompletionStatus: func,
};

export default TaskModal;