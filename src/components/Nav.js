import React from 'react';
import { Component } from 'react';

class Nav extends Component{
  // 상위 component의 state값이 바뀌면 하위 component 랜더링이 진행된다.
  // 값이 변경되지 않았지만 랜더링 되는 상황이다!!
  shouldComponentUpdate(newProps, newState){
    if(this.props.data === newProps.data){
      return false;
    }
    return true;
  }

  render(){
    var lists = [];
    var data = this.props.data;
    var i = 0;
    while(i < data.length){
        lists.push(
          <li key= {data[i].id}>
            <a 
              href={"/content/" + data[i].id}
              data-id={data[i].id}
              // data-id는 data- 접두사로 시작하는 속성으로 dataset에서 확인할 수 있다. 
              onClick= {function(e){
                e.preventDefault();
                this.props.onChangePage(e.target.dataset.id);
              }.bind(this)}
            >{data[i].title}</a>
            {/* e는 이벤트 객체를 받는 것 */}
          </li>);
        i = i+1;
    }
    return(
      <nav>
        <ul>
          {lists}
        </ul>
      </nav>
    );
  }
}

export default Nav;