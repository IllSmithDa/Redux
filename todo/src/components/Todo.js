import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, addTodo } from '../actions';
import RenderToDo from './RenderToDo'


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
            <RenderToDo 
                changeHandler = {this.handleListItem}

                addToList = {this.handleToDoList}
                itemTitle = {this.state.todoitem}
                itemlist = {this.state.toDoList}
            />
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