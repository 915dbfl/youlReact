import React from 'react';
import { Component } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import ReadArticle from './components/ReadArticle';
import Control from './components/Control';
import './App.css';
import CreateArticle from './components/CreateArticle';
//해당 component.js를 import시키는 것은 loading을 하는 것이다.



//자바 스크립트가 아닌 jsx 코드이다. create react app이 자바 스크립트로 convert
class App extends Component {
  //state를 초기화하는 작업, render보다 먼저 실행돼 component를 초기화할 수 있게 된다.
  constructor(props){
    super(props);
    // 객체 값으로 둔 이유: ui에 전혀 영향을 미치는 변수가 아니므로! 불필요한 랜더링을 없애기위해!
    this.max_content_id = 3;
    this.state = {
      selected_content_id: 2,
      mode: 'create',
      welcome: {title: 'Welcome', desc: 'Hello, React!!!'},
      //Header의 값을 state화 시키는 것
      //Header의 property 값으로 객체를 줌.
      Header:{title: 'WEB', sub: 'world wide web!'},
      //contents 속 담겨있는 배열을 NAV에 주입할 것이다.
      //data가 바뀐다고 해서 Nav.js 파일을 열고 수정하지 않아도 된다.
      contents:[
        {id: 1, title:'HTML', desc:'HTML is for information.'},
        {id: 2, title:'CSS', desc:'CSS is for design.'},
        {id: 3, title:'JavaScript', desc:'JavaScript is for interactive.'}
      ]
    }
  }
  //자바스크립트 코드로써 실행되도록 하기 위해서는 {} 사용!
  render(){
    console.log('App render');
    var _title, _desc, _article = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadArticle title={_title} desc={_desc}></ReadArticle>
    }else if(this.state.mode === 'read'){
      var i = 0;
      while(i < this.state.contents.length){
        var data= this.state.contents[i]
        if(data.id === this.state.selected_content_id){
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i = i + 1;
      }
      _article = <ReadArticle title={_title} desc={_desc}></ReadArticle>
    }else if(this.state.mode === 'create'){
      _article = <CreateArticle onSubmit={function(_title, _desc){
        this.max_content_id = this.max_content_id + 1;
        // concat을 사용할 경우, 원본을 바꾸지 않고, 새로운 값을 추가한 새로운 배열을 return한다.
        //state에서는 original 데이터를 바꾸는 push를 사용하지 않는 것이 좋다.
        //기존 contents에 값을 추가하는 방식 -> 나중에 성능 개선이 까다로운 방식이다.
        //Array.from(a);을 진행할 경우, a의 복제 배열이 리턴된다. 하지만 서로 같은 것은 아니다.
        //객체의 경우, Object.assign({name: 'doyoul'}, a); 기존 객체에 a가 추가되는 형식!
        //immutable.js -> 원본 불변, 복제 관련해서 찾아보자!
        // this.state.contents.push({
        //   id: this.max_content_id, title: _title, desc: _desc
        // });
        //기존 contents가 새로운 contents로 수정이 되는 방식
        var _contents= this.state.contents.concat(
          {id: this.max_content_id, title: _title, desc: _desc}
        );
        this.setState({
          contents: _contents
        });
      }.bind(this)}></CreateArticle>
    }
    return (
      <div className="App">
        <Header title= {this.state.Header.title} sub= {this.state.Header.sub}
          onChangePage= {function(){
            this.setState({
              mode: 'welcome'
            });
          }.bind(this)}
        ></Header>
        <Nav 
          data= {this.state.contents}
          onChangePage ={function(id){
            this.setState({
              mode: 'read',
              selected_content_id: Number(id)
            });
          }.bind(this)}
        ></Nav>
        <Control onChangeMode={function(_mode){
          this.setState({
            mode: _mode
          })
        }.bind(this)}></Control>
        {_article}
      </div>
    );
  }
}

export default App;
