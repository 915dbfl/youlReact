//필수적으로 추가해야 하는 코드
import React from 'react';
//React 라이브러리에서 component라는 클래스를 로딩함
import { Component } from 'react';

class Header extends Component{
  //class에 소속되는 함수는 앞에 'function'을 생략함
  render(){
    return (
      <header>
        <h1><a href= "/" onClick= {function(e){
          e.preventDefault();
         this.props.onChangePage(); 
        }.bind(this)}>{this.props.title}</a></h1>
        {this.props.sub}
      </header>
    );
  }
}

//다른 파일에서 Header class를 가져다 사용할 수 있게 한다.
export default Header;