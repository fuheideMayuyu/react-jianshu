import React, {Component, Fragment} from 'react';
import TodoItem from './TodoItem';
// Fragment 占位符 类似于vue的 template
class TodoList extends Component {
  constructor(props){
    super(props)
    this.state = {
      inputValue: 'lulu',
      list: ['111', '222'],
    }
  }
  render () {
    return (
      <Fragment>
        <div>
          <input value={this.state.inputValue} onChange={this.handleInputChange.bind(this)}/>
          <button onClick={this.handleBtnClick.bind(this)}>提交</button>
        </div>
        {/* <ul>
          {
            this.state.list.map((item, index) => {
             return (
              <li key={index} onClick={this.handleItemDelete.bind(this, index)}>
                {item}
              </li>
            )
            })
          }
        </ul> */}
        <TodoItem  list={this.state.list}></TodoItem>
      </Fragment>
    )
  };

  handleInputChange(e){
    this.setState({
      inputValue: e.target.value
    })
  }
  handleBtnClick(){
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }
  handleItemDelete(index){
    const list = [...this.state.list]
    list.splice(index, 1)
    this.setState({
      list: list,
    })
  }
}

export default TodoList;
