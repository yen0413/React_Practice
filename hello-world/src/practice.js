import React, { Component } from 'react'; // 引入React定義好的React Component

//class宣告
class App_2 extends Component{  //繼承Component類別
    constructor(props) { // 加入建構子以及props參數
        super(props);  //透過super()就能取得所繼承的類別中的變數結構。
        this.name="舊的名字"; // 如果該函式被呼叫時，物件不存在該名稱的member data，就會直接幫你在物件建立該member data，因此可以直接這樣宣告
        this.changeName=this.changeName.bind(this); //綁定至自己
    }


    changeName(newName){ // 定義changeName
        this.name=newName;
        console.log("hey")
      }
    render(){   //畫面渲染
        return(
          //<button onClick={this.props.handleClick}>{this.props.btnName}</button>
          <button onClick={this.changeName}>{this.name} </button>  /* 修改onClick和name */
      
        );
    }
}

//React component的特性是，會用render()函式去收集要渲染到畫面上的東西(放在return值)，再去改變DOM。
// render()是在渲染前最後一個階段(有個例外，但那個例外很少用)。
// render()只是渲染前最後一個階段，元件還沒有真的渲染到DOM上。所以不要在render()中操作有關return元素的DOM。
export default App_2;