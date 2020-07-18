import React, { Component } from 'react';
import { string, array, func } from 'prop-types';
import TaskItem from '../TaskItem';
import styles from './styles.module.css';

class TaskBoard extends Component {
    render () {
        return (
            <div className={styles.container}>
                <div className={styles.titleContainer}>
                    <span className={styles.title}>{ this.props.title }</span>
                </div>
                {
                    this.props.tasks.map((task, index) => {
                        return (
                            <TaskItem
                                key={task.title + index}
                                index={index}
                                title={task.title}
                                openModal={this.props.openModal}
                            />
                        );
                    })
                }
            </div>
        );
    }
}

TaskBoard.propTypes = {
    title: string,
    tasks: array,
    openModal: func,
};

export default TaskBoard;