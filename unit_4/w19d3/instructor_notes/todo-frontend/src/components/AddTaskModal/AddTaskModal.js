import { Modal } from '@material-ui/core';
import React, { Component } from 'react';
import { bool, func } from 'prop-types';
import styles from './styles.module.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

class AddTaskModal extends Component {
    constructor (props) {
        super(props);
        this.state = {
            title: '',
            description: '',
        };
    }
    
    handleChange (key, value) {
        this.setState({ [key]: value });
    }

    handleTitleInputEvent = event => {
        this.handleChange('title', event.target.value);
    }

    handleDescriptionInputEvent = event => {
        this.handleChange('description', event.target.value);
    }

    render () {
        return (
            <Modal
                className={styles.modal}
                open={this.props.isAddTaskModalOpen}
                onClose={this.props.closeAddTaskModal}
            >
                <div className={styles.addTaskModalContainer}>
                    <div className={styles.title}>
                        Add Task
                    </div>

                    <TextField
                        margin="normal"
                        fullWidth
                        label="Title"
                        onChange={this.handleTitleInputEvent}
                    />

                    <TextField
                        margin="normal"
                        fullWidth
                        multiline
                        label="Description"
                        onChange={this.handleDescriptionInputEvent}
                    />

                    <Box mt={2}>
                        <Button
                            fullWidth
                            onClick={() => this.props.createTask(this.state)}
                        >
                            Submit
                        </Button>
                    </Box>
                </div>
            </Modal>
        );
    }
}

AddTaskModal.propTypes = {
    closeAddTaskModal: func,
    isAddTaskModalOpen: bool,
    createTask: func,
};

export default AddTaskModal;