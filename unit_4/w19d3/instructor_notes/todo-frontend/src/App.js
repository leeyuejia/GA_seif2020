import React, { Component } from 'react';
import './App.css';
import TaskBoard from './components/TaskBoard';
import TaskModal from "./components/TaskModal";

export default class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            tasks: [],
            isModalOpen: false,
            taskViewed: {
                title: '',
                description: '',
            },
        };
    }
    
    openModal = (taskIndex) => {
        this.setState({
            taskViewed: this.state.tasks[taskIndex],
            isModalOpen: true,
        });
    }
    
    closeModal = () => {
        this.setState({ isModalOpen: false });
    }
    
    render () {
        return (
            <div className="App">
                <div className="flex-container">
                    <TaskBoard
                        openModal={this.openModal}
                        tasks={this.state.tasks}
                        title="To do"
                    />
                    <TaskModal
                        closeModal={this.closeModal}
                        isModalOpen={this.state.isModalOpen}
                        title={this.state.taskViewed.title}
                        description={this.state.taskViewed.description}
                    />
                </div>
            </div>
        );
    }
}
