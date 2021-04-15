import React, { Component } from 'react';


class App extends Component{
    constructor(props) {
        super(props);
        this.state={ // 宣告state物件，內包含一個變數percent
        percent:"30%" 
        }
        this.changePercent=this.changePercent.bind(this); //綁定changePercent
    }

    changePercent(){
        this.setState({percent:"70%"})
    }

    render(){
        return(
          <div>
            <div className="progress-back" style={{backgroundColor:"rgba(0,0,0,0.2)",width:"200px",height:"7px",borderRadius:"10px"}}>
                <div className="progress-bar" style={{backgroundColor:"#fe5196",width:this.state.percent,height:"100%",borderRadius:"10px"}}></div>
            </div>
            <button onClick={this.changePercent}>Change Percent!</button>
          </div>
        );
    }
}

export default App;

// state這個變數是read-only的，我們並不能用this.state.變數=值直接修改state，而是必須要透過React預寫好的函式setState()來更改。
//setState中「存在但沒有被寫到的state」不會被移除，不存在的state會被建立。

//****「不存在的state會被建立」，這句話的意思是我們不一定要在constructor中建立state/所有state。
//當setState被呼叫時，如果它發現有member data不屬於目前的state，就會自動建立它；如果在constructor連state的宣告都沒寫，就會自動建立state。******

//如需移除state，把該state指定為undefined就可以，例如: this.setState({mounted: undefined});

//當寫成this.setState({變數名稱})時，setState會自動去找state中有沒有和該變數同名字的member data。如果有，就會把它設定為變數值。如果沒有，就會自動在state中建立同名字的member data。