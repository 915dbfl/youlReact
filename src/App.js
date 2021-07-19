import React from 'react';
import { Component } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Article from './components/Article';
import './App.css';



//자바 스크립트가 아닌 jsx 코드이다. create react app이 자바 스크립트로 convert
class App extends Component {
  //state를 초기화하는 작업, render보다 먼저 실행돼 component를 초기화할 수 있게 된다.
  constructor(props){
    super(props);
    this.state = {
      selected_content_id: 2,
      mode: 'welcome',
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
    var _title, _desc = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
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
        <Article title={_title} desc={_desc}></Article>
      </div>
    );
  }
}

export default App;
