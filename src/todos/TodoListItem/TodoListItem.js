import React from 'react';

class TodoListItem extends React.PureComponent {
  handleRemove = () => {
    this.props.onRemove(this.props.id);
  };

  handleComplete = () => {
    this.props.onComplete(this.props.id);
  };

  render() {
    return (
      <div>
        <span>{this.props.title}</span>
        <input type='checkbox' value={this.props.checked} onChange={this.handleComplete} />
        <button onClick={this.handleRemove}>remove</button>
      </div>
    );
  }
}

export default TodoListItem;
