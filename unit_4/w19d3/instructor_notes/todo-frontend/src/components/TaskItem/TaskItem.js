import React, { Component } from 'react';
import { string } from 'prop-types';
import styles from './styles.module.css';

class TaskItem extends Component {
    handleClick = () => {
        this.props.openModal(this.props.index);
    }

    render () {
        return (
            <div
                className={styles.taskItemContainer}
                onClick={this.handleClick}
                draggable={true}
            >
                <div>{this.props.title}</div>
            </div>
        );
    }
}

TaskItem.propTypes = {
    title: string,
};

export default TaskItem;