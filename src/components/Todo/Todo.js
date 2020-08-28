import React, { Component } from "react";
import "./Todo.css";
import { v4 as uuidv4 } from "uuid";
import List from "./List";

class Todo extends Component {
  constructor() {
    super();
    // initial state
    this.state = {
      task: "",
      items: [],
    };
  }

  componentWillMount() {
    // setting default task
    this.setState({
      items: [
        {
          id: uuidv4(),
          task: "Pay the rent",
          completed: false,
        },
        {
          id: uuidv4(),
          task: "Go to the gym",
          completed: false,
        },
        {
          id: uuidv4(),
          task: "Do my homework",
          completed: false,
        },
      ],
    });
  }

  handleOnChange = (e) => {
    const {
      target: { value },
    } = e;
    // Update task value
    this.setState({
      task: value,
    });
  };

  handleOnSubmit = (e) => {
    // Menetapkan Prevent Default
    e.preventDefault();

    // Saat di submit nilai task direset dan ditambahkan ke items
    if (this.state.task.trim() !== "") {
      this.setState({
        task: "",
        items: [
          ...this.state.items,
          {
            id: uuidv4(),
            task: this.state.task,
            completed: false,
          },
        ],
      });
    }
  };

  markAsCompleted = (id) => {
    // Mencari index task berdasarkan id
    const taskIndex = this.state.items.findIndex((task) => task.id === id);

    // Mengcopy Items Baru
    let newItems = [...this.state.items];

    // Menandai selesai
    newItems[taskIndex] = {
      ...newItems[taskIndex],
      completed: !newItems[taskIndex].completed,
    };
    console.log(newItems);
    // Memperbaharui state
    this.setState({
      items: newItems,
    });
  };

  removeTask = (id) => {
    // Filter task berdasarkan id (idnya di remove !==)
    const filterTask = this.state.items.filter((task) => task.id !== id);

    // Memperbaharui state
    this.setState({
      items: filterTask,
    });
  };

  render() {
    return (
      <div className="Todo">
        <h1>New Task:</h1>
        <form onSubmit={this.handleOnSubmit}>
          <input value={this.state.task} onChange={this.handleOnChange} />
        </form>
        <List
          items={this.state.items}
          markAsCompleted={this.markAsCompleted}
          removeTask={this.removeTask}
        />
      </div>
    );
  }
}

export default Todo;
