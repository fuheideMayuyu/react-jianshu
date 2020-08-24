import React, {Component} from 'react';
// Fragment 占位符 类似于vue的 template
class TodoItem extends Component {
  
  render () {
    return (
      <div>
        <ul>
            {
              this.props.list.map((item, index) => {
              return (
                <li key={index} onClick={this.handleClick}>
                  {item}
                </li>
              )
              })
            }
          </ul>
      </div>
    )
  };
  handleClick(){
    
  }
}

export default TodoItem;