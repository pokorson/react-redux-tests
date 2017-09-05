import React from 'react';
import './TodoForm.css';

class TodoForm extends React.PureComponent {
  state = {
    title: '',
  };

  updateTitle = e => {
    this.setState({
      title: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({
      title: this.state.title,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className='todo-form'>
        <div>
          <label>title:</label>
          <input type='text' name='title' value={this.state.title} onChange={this.updateTitle} />
        </div>
        <button onClick={this.handleSubmit}>submit</button>
      </form>
    );
  }
}

export default TodoForm;
