import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { func } from 'prop-types';

class AddTaskButton extends Component{
    render () {
        return (
            <Button
                fullWidth
                variant="text"
                startIcon={<AddIcon/>}
                onClick={() => this.props.openAddTaskModal()}
            >
                Add Task
            </Button>
        );
    }
}

AddTaskButton.propTypes = {
    openAddTaskModal: func,
};

export default AddTaskButton;