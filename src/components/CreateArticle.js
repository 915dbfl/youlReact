import React from 'react';
import { Component } from 'react';

class CreateArticle extends Component{
  render(){
    return(
      <article>
        <h2>Create</h2>
        {/* <form action="/create_process" method="post" */}
        {/* action을 통해 입력한 데이터가 전송될 곳을 지정 */}
        {/* url에 데이터 표시x -> post의 역할 */}
        {/* onSumbmit 이벤트 호출, submit 클릭 시 실행! -> html form 기능이 고유하게 가지고 있는 기능*/}
        <form action="/create_process" method="post"
          onSubmit={function(e){
            // 원래는 action이 가리키는 페이지로 이동한다.
            // 리액트를 통해 페이지가 전환되지 않고, 하나의 페이지 내에서 모든 작업을 진행하는 앱을 제작하고자 함.
            this.props.onSubmit(e.target.title.value, e.target.desc.value)
            e.preventDefault();
          }.bind(this)}
        >
          {/* placeholder: input tag안에 어떠한 값을 입력해야 하는지 알려줌 */}
          <p><input type="text" name="title" placeholder="title"></input></p>
          <p><textarea name="desc" placeholder="description"></textarea></p>
          <p><input type="submit"></input></p>
        </form>
      </article>
    );
  }
}

export default CreateArticle;