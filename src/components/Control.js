//필수적으로 추가해야 하는 코드
import React from 'react';
//React 라이브러리에서 component라는 클래스를 로딩함
import { Component } from 'react';

class Control extends Component{
  //class에 소속되는 함수는 앞에 'function'을 생략함
  render(){
    return (
      <ul>
          <li><a href= "/create" onClick={function(e){
            e.preventDefault();
            this.props.onChangeMode('create');
          }.bind(this)}>create</a></li>
          <li><a href= "/update" onClick={function(e){
            e.preventDefault();
            this.props.onChangeMode('update');
          }.bind(this)}>update</a></li>
          <li><input type="button" value="delete" onClick={function(e){
            e.preventDefault();
            this.props.onChangeMode('delete');
          }.bind(this)}></input></li>
        </ul>
    );
  }
}
export default Control;