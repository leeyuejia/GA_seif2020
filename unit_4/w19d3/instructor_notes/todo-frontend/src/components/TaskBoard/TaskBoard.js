import React, { Component } from 'react';
import { string, array, func } from 'prop-types';
import TaskItem from '../TaskItem';
import styles from './styles.module.css';
import AddTaskButton from "../AddTaskButton";

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
                                taskId={task._id}
                                index={index}
                                title={task.title}
                                description={task.description}
                                isCompleted={task.isCompleted}
                                openViewTaskModal={this.props.openViewTaskModal}
                                deleteTask={this.props.deleteTask}
                            />
                        );
                    })
                }

                <AddTaskButton
                    openAddTaskModal={this.props.openAddTaskModal}
                />
            </div>
        );
    }
}

TaskBoard.propTypes = {
    title: string,
    tasks: array,
    openViewTaskModal: func,
    openAddTaskModal: func,
    deleteTask: func,
};

export default TaskBoard;