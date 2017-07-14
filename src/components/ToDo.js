import React, { Component } from 'react';

class ToDo extends Component {
    render() {
        const isComplete = this.props.isComplete;
        return (
            <tr class='toDoItem'>
                <td class={this.props.complete ? 'toDoCard' : 'doneCard'}>
                    <h2 class='cardTitle'>
                        {this.props.title}
                    </h2>
                    <p class='description'>
                        {this.props.description}
                    </p>
                </td>
                <td class='buttons'>
                    <ul style='list-style:none'>
                        {!isComplete &&
                            <li>
                                <button type='button' onClick={this.props.completeToDo(this.props.title)}>Complete</button>
                            </li>
                        }
                        <li>
                            <button type='button' onClick={this.props.deleteToDo(this.props.title)}>Delete</button>
                        </li>
                    </ul>
                </td>
            </tr>
        )
    }
}

export default ToDo;