import React, { Component } from 'react';

class AddToDo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            description: '',
            canSubmit: false
        }
        this.pushToDo = props.pushToDo;
        this.baseState = this.state;
        this.updateTitle = this.updateTitle.bind(this);
        this.updateDescription = this.updateDescription.bind(this);
        this.addNewToDo = this.addNewToDo.bind(this);
        this.resetValues = this.resetValues.bind(this);
    }
    updateTitle(event) {
        this.setState({
            title: event.target.value,
            canSubmit: event.target.value !== ''
        })
    }
    updateDescription(event) {
        this.setState({
            description: event.target.value
        })
    }
    addNewToDo() {
        this.pushToDo(this.state);
        this.resetValues();
    }
    resetValues() {
        this.setState(this.baseState);
    }
    render() {
        return (
            <form>
                <div>
                    <label>New ToDo: </label>
                    <input type="text" name="title" onChange={this.updateTitle} value={this.state.title} />
                </div>
                <div>
                    <label>Description: </label>
                    <input type="text" name="description" onChange={this.updateDescription} value={this.state.description} />
                </div>
                <div>
                    {!this.state.canSubmit ?
                        <button type="submit" disabled>Add</button>
                        :
                        <button type="submit" onClick={this.addNewToDo}>Add</button>
                    }
                    <button type="reset" onClick={this.resetValues}>Reset</button>
                </div>
            </form>
        )
    }
}

export default AddToDo;