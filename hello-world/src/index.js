import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Textarea  from './App';
import reportWebVitals from './reportWebVitals';
import reactDom from 'react-dom';
import App from './practice';
import State from './state-practice';
import UseState from './useState-practice';
import FetchPractice from './fetch-practice'
import ComponentDidMount from './componentDidMount'
//React所使用的一種特殊Javascript語法: JSX
//1.html語法可以當作參數傳遞
//2.只能傳遞一個元素，意即「傳遞時是傳一個元素」，如果有一堆div、button......要傳的話，就要用一個container把他們包起來。
//EX:  
//   <div>
//     <button> 大家好 </button>
//     <h1> 我不好 </h1>
//   </div>

const styleArgument = {fontSize:'2um',color:'red'}  //style變為一物件、屬性名稱規則改用駝峰法(用大寫區隔)、屬性的值變成字串
const name = "Rex"
const math = ()=>{
  var output=[]
  for(let i=0;i<5;i++){
    output.push(<div key={"ID"+i}>Count = {i}</div>)
    
  }
  return output;
}
const getValue=(event)=>{
  console.log(event.target.value)
}

const getValueByPar=(value)=>{
  console.log(value)
}

//React component的規定:元素名稱第一個字母必須要是大寫、和函式(或class)名稱相同，JSX才會知道這是自製的component
function Progress(props){
  //const barWidth="30%";
  return(
      <div>
        <div className="progress-back" style={{backgroundColor:"rgba(0,0,0,0.2)",width:"200px",height:"7px",borderRadius:"10px"}}>
        <div className="progress-bar" style={{backgroundColor:"#fe5196",width:props.barWidth,height:"100%",borderRadius:"10px"}}></div>
      </div>
    </div>
  );
}

ReactDOM.render(
  <h1 style={{fontSize:'100px',color:'green'}}>Hello world!!!</h1>,  // html標籤中利用「{}」寫javascript 表示式，
  document.getElementById('root')                                   //外面那層括號代表裡面是javascript語法，裡面的括號表示物件型態。
);

reactDom.render(
  <h2 className="title">Hello,{name}</h2>,document.getElementById('root2') //「class」屬性變成「className」。
);

reactDom.render(
  <div style={styleArgument}>{math()}</div>
  ,document.getElementById('count') 
);

//JSX下，函式的綁定方法:
/*****要取得元素的value，就必須要透過原生DOM的event.target.value來取得 */
reactDom.render(
  <div>
    <button value={true} onClick={getValue}>按下以取得其數值(函式綁定)</button>    
  </div>
  ,document.getElementById('getValue')
);

//利用傳參數的方式取值
reactDom.render(
  <div>
    <button value={false} onClick={(event)=>{getValueByPar(event.target.value)}}>
          按下已取得數值(傳參數方式)
    </button>
  </div>
  ,document.getElementById('getValueByPar')
)

//利用import的方式叫用其他js裡面的function
reactDom.render(
  <div><Textarea/></div>,document.getElementById('inputText') 
)

//在component中可以直接帶入參數進入函式，函式中用prop.XX 來取得
reactDom.render(
  <div> 
    <p>第一個進度條:</p><Progress barWidth={"30%"}/>
    <p>第二個進度條:</p><Progress barWidth={"70%"}/>
  </div>
  ,document.getElementById('progress')
)

const printMessage=()=>{
  document.getElementById('Show-message').innerHTML="input"
}
//函式綁定
reactDom.render(
  <div>
      <Textarea key="text1" handleChange={printMessage}>加入按鈕名稱</Textarea>
      <div id="Show-message"></div>
  </div>
  ,document.getElementById('bindFunction')
)




// const changeName=(newName)=>{ 
//   btnName=newName;
//   console.log("hey")//加入此行
// }

//var btnName ="舊的名字";
reactDom.render(
  <div>
      <App/>
  </div>,
  document.getElementById('practiceClassComponent')
);


reactDom.render(
  <div>
    <State/>
  </div>
  ,document.getElementById('statePractice')
);

reactDom.render(
  <div>
    <UseState/>
  </div>,
  document.getElementById('useState-practice')
);
reactDom.render(
  <div>
    <FetchPractice/>
  </div>,
  document.getElementById('fecth-practice')
);
reactDom.render(
  <div>
    <ComponentDidMount/>
  </div>,document.getElementById('componentDidMount')
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
