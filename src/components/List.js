import React, { Component } from 'react';
import ToDo from './ToDo.js';
import AddToDo from './AddToDo.js';
import './List.css';

class List extends Component {
    constructor() {
        super()
        this.state = {
            toDos: []
        };

        this.pushToDo = this.pushToDo.bind(this);
        this.completeToDo = this.completeToDo.bind(this);
        this.deleteToDo = this.deleteToDo.bind(this);
    }
    pushToDo(toDo) {
        let toDoList = this.state.toDos;
        toDoList.push({
            title: toDo.title,
            description: toDo.description,
            isComplete: false
        });
        this.setState({
            toDos: toDoList
        });
    }
    completeToDo(completedIndex) {
        let toDoList = this.state.toDos;
        toDoList[completedIndex].isComplete = true;
        this.setState({
            toDos: toDoList
        });
    }
    deleteToDo(deletedIndex) {
        let toDoList = this.state.toDos;
        toDoList.splice(deletedIndex, 1);
        this.setState({
            toDos: toDoList
        });
    }
    render() {
        let toDos = this.state.toDos;
        let thereAreToDos = this.state.toDos.length > 0;
        return (
            <div>
                {thereAreToDos &&
                    <table className='toDoList'>
                        <tbody>
                        {toDos.map((toDo, i) => (
                            <ToDo key={i} id={i} title={toDo.title} description={toDo.description} isComplete={toDo.isComplete} completeToDo={this.completeToDo} deleteToDo={this.deleteToDo} />
                        ))}
                        </tbody>
                    </table>
                }

                {!thereAreToDos &&
                    <h1>Add a ToDo</h1>
                }
                <AddToDo pushToDo={this.pushToDo} />
            </div>
        )
    }
}

export default List;