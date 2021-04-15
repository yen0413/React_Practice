import React, { useState } from 'react';

const Progress=()=>{
    const [percent, changePercent] = useState("30%");

    return(
      <div>
        <div className="progress-back" style={{backgroundColor:"rgba(0,0,0,0.2)",width:"200px",height:"7px",borderRadius:"10px"}}>
          <div className="progress-bar" style={{backgroundColor:"#fe5196",width:percent,height:"100%",borderRadius:"10px"}}></div>
        </div>
        <button onClick={()=>changePercent("80%")}>轉換百分比 </button>
      </div>
    );
}

export default Progress;
//*****const [percent, changePercent] = useState("20%");
//宣告了一個變數和一個函式，第一個percent是變數，變成了等同於在class component中的this.state.percent；
//而第二個changePercent變成了等同於(值)=>{this.setState({percent:值})}的函式(這裡的函式在語法上沒有限定命名原則，但一般會以set做為開頭)


//useState(和其他的React hook)不能在function component中的迴圈、if-else、nest function(在function scope中宣告的function)被定義使用。