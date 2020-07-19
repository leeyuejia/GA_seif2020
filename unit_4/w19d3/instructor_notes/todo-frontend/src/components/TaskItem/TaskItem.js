import React, { Component } from 'react';
import { string } from 'prop-types';
import styles from './styles.module.css';
import DescriptionIcon from "@material-ui/icons/DescriptionOutlined";
import Box from '@material-ui/core/Box';
import CloseIcon from "@material-ui/icons/Close";

class TaskItem extends Component {
    handleOpenView = () => {
        this.props.openViewTaskModal(this.props.index);
    }

    handleDeleteTask = e => {
        e.stopPropagation();
        this.props.deleteTask(this.props.taskId);
    }

    render () {
        return (
            <div
                className={`${styles.taskItemContainer} ${this.props.isCompleted && styles.isCompleted}`}
                onClick={this.handleOpenView}
                draggable={true}
            >
                <div className={styles.titleContainer}>
                    <Box width={3/4} >{this.props.title}</Box>

                    <Box width={1/4} display="flex" className={styles.closeIconContainer}>
                        <CloseIcon fontSize="small" className={styles.closeIcon} onClick={this.handleDeleteTask}/>
                    </Box>
                </div>

                <div className={styles.descriptionIconContainer}>
                    {
                        this.props.description && <DescriptionIcon color="action" />
                    }
                </div>
            </div>
        );
    }
}

TaskItem.propTypes = {
    title: string,
    titleId: string,
};

export default TaskItem;