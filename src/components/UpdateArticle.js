import React from 'react';
import { Component } from 'react';

class UpdateArticle extends Component{
  constructor(props){
    super(props);
    this.state = {
      id: this.props.data.id,
      title: this.props.data.title,
      desc: this.props.data.desc
    }
    //binding이 된 것으로 바꿔준다.
    this.inputFormHandler = this.inputFormHandler.bind(this);
  }
  inputFormHandler(e){
    this.setState({[e.target.name]: e.target.value});
  }
  render(){
    console.log(this.props.data);
    return(
      <article>
        <h2>Update</h2>
        <form action="/create_process" method="post"
          onSubmit={function(e){
            // 원래는 action이 가리키는 페이지로 이동한다.
            // 리액트를 통해 페이지가 전환되지 않고, 하나의 페이지 내에서 모든 작업을 진행하는 앱을 제작하고자 함.
            this.props.onSubmit(this.state.id, this.state.title, this.state.desc);
            e.preventDefault();
          }.bind(this)}
        >
          {/* placeholder: input tag안에 어떠한 값을 입력해야 하는지 알려줌 */}
          {/* props를 직접 value에다가 넣고, onChange를 사용하지 않을 경우 read only가 된다. => props의 data는 read only이므로 */}
          {/* 가변적인 데이터를 만들기 위해 props의 값을 state화 시켜준다. => state로 진행해도 이것이 바뀌어야 되는 근거는 없다.*/}
          {/* input의 값이 바꼈을 때, state 값을 바꾸는 작업이 필요하다. */}
          {/* hidden은 id와 같이 사용자에게 보일 필요가 없을 때 사용한다. */}
          <input type="hidden" name="id" value={this.state.id}></input>
          <p><input type="text" name="title" value={this.state.title} onChange={this.inputFormHandler}></input></p>
          {/* html에서의 textarea의 default 값은 text content로 두어야 한다. 하지만 React에서는 이런 것을 허용하지 않는다. */}
          <p><textarea name="desc" value={this.state.desc} onChange={this.inputFormHandler}></textarea></p>
          <p><input type="submit"></input></p>
        </form>
      </article>
    );
  }
}

export default UpdateArticle;