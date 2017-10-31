import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, addTodo } from '../actions';


class Todo extends Component {
    constructor () {
        super(); 
        this.state = {
            todoitem: '',
            toDoList: []
        }
        this.handleListItem = this.handleListItem.bind(this);
        this.handleToDoList = this.handleToDoList.bind(this);
    }
    handleListItem(event) {
        this.setState({todoitem: event.target.value})
    }

    handleToDoList() {
        let listItem = this.state.todoitem;
        const list = this.state.toDoList;
        list.push(listItem);
        this.setState({list, todoitem: ''});
    }
    render () {
        return (
            <p>
                To Do List
                <input type = 'text' value = {this.state.todoitem} onChange = {this.handleListItem} />
                <button onClick = {() => this.handleToDoList}> Submit Todo </button>
                <ul> 
                    {this.state.toDoList.map((list, i) => {
                        return <li key = {i + 1}> {list} </li>
                    })}
                </ul>
            </p>
        );
    }
} 

const mapStateToProps = (state) => {
  return {
    todoitem: state,
    array: state
  };
};
export default connect(mapStateToProps, { increment, addTodo })(Todo);