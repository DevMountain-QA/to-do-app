import React, { Component } from 'react';
import './ToDo.css';

class ToDo extends Component {
    constructor(props){
        super(props);

        this.completeClick = this.props.completeToDo.bind(this, this.props.id);
        this.deleteClick = this.props.deleteToDo.bind(this, this.props.id);
    }
    render() {
        const buttonList = {
            listStyle : 'none'
        }
        const isComplete = this.props.isComplete;
        return (
            <tr className='toDoItem'>
                <td className={this.props.isComplete ? 'doneCard' : 'toDoCard'}>
                    <h2 className='cardTitle'>
                        {this.props.title}
                    </h2>
                    <p className='description'>
                        {this.props.description}
                    </p>
                </td>
                <td className='buttons'>
                    <ul style={buttonList}>
                        {!isComplete &&
                            <li>
                                <button type='button' onClick={this.completeClick}>Complete</button>
                            </li>
                        }
                        <li>
                            <button type='button' onClick={this.deleteClick}>Delete</button>
                        </li>
                    </ul>
                </td>
            </tr>
        )
    }
}

export default ToDo;