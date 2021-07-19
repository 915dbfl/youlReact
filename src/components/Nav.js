import React from 'react';
import { Component } from 'react';

class Nav extends Component{
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