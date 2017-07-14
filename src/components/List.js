import React, { Component } from 'react';
import ToDo from './ToDo.js';
import AddToDo from './AddToDo.js';

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
        console.log(`ping`)
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
    completeToDo(completedTitle) {
        let toDoList = this.state.toDos;
        console.log(`state =${this.state.toDos} and toDoList =${toDoList}`);
        // toDolist.forEach(toDo=>{
        //     if(toDo.title===completedTitle)
        //         toDo.isComplete = true;
        // });
        // this.setState({
        //     toDos: toDoList
        // });
    }
    deleteToDo(deletedTitle) {
        let toDoList = [];
        this.state.toDos.forEach(toDo => {
            if (toDo.title !== deletedTitle)
                toDoList.push(toDo);
        });
    }
    render() {
        let toDos = this.state.toDos;
        let thereAreToDos = this.state.toDos.length > 0;
        return (
            <div>
                {thereAreToDos &&
                    <table>
                        {toDos.map(toDo => (
                            <ToDo title={toDo.title} description={toDo.description} isComplete={toDo.isComplete} completeToDo={this.completeToDo} deleteToDo={this.deleteToDo} />
                        ))}
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