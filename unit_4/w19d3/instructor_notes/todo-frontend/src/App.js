import React, { Component } from 'react';
import './App.css';
import TaskBoard from './components/TaskBoard';
import TaskModal from "./components/TaskModal";
import AddTaskModal from "./components/AddTaskModal";
import tasksService from "./services/tasksService";

export default class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            tasks: [],
            isViewTaskModalOpen: false,
            isAddTaskModalOpen: false,
            taskViewed: {
                title: '',
                description: '',
            },
        };
    }

    openAddTaskModal = () => {
        this.setState({ isAddTaskModalOpen: true });
    }

    closeAddTaskModal = () => {
        this.setState({ isAddTaskModalOpen: false });
    }

    openViewTaskModal = (taskIndex) => {
        this.setState({
            taskViewed: this.state.tasks[taskIndex],
            isViewTaskModalOpen: true,
        });
    }
    
    closeViewTaskModal = () => {
        this.setState({ isViewTaskModalOpen: false });
    }

    async fetchTasks () {
        const tasks = await tasksService.getAll();
        this.setState({ tasks });
    }

    createTask = async (data) => {
        await tasksService.create(data);
        this.closeAddTaskModal();
        await this.fetchTasks();
    }

    deleteTask = async (id) => {
        await tasksService.delete(id);
        await this.fetchTasks();
    }

    updateCompletionStatus = async (id, isCompleted) => {
        await tasksService.updateCompletionStatus(id, isCompleted);
        this.closeViewTaskModal();
        await this.fetchTasks();
    }

    async componentDidMount () {
        await this.fetchTasks();
    }
    
    render () {
        return (
            <div className="App">
                <div className="flex-container">
                    <TaskBoard
                        openViewTaskModal={this.openViewTaskModal}
                        openAddTaskModal={this.openAddTaskModal}
                        deleteTask={this.deleteTask}
                        tasks={this.state.tasks}
                        title="To do"
                    />

                    <TaskModal
                        closeViewTaskModal={this.closeViewTaskModal}
                        taskId={this.state.taskViewed._id}
                        isViewTaskModalOpen={this.state.isViewTaskModalOpen}
                        title={this.state.taskViewed.title}
                        description={this.state.taskViewed.description}
                        updateCompletionStatus={this.updateCompletionStatus}
                        isCompleted={this.state.taskViewed.isCompleted}
                    />

                    <AddTaskModal
                        isAddTaskModalOpen={this.state.isAddTaskModalOpen}
                        closeAddTaskModal={this.closeAddTaskModal}
                        createTask={this.createTask}
                    />
                </div>
            </div>
        );
    }
}
