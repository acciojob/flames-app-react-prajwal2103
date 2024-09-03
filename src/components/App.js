import React, {Component, useState} from "react";
import '../styles/App.css';
import { useState } from "react"

class App extends Component {

    render() {
        const[name1,setName1]=useState('')
        const[name2,setName2]=useState('')
        const[ans,setAns]=useState('')
        function checkDetails(){
            if(name1===''||name2===''){
              setAns('Please Enter valid input')
            }
            // name1=name1.toLowerCase();
            // name2=name2.toLowerCase();
            // console.log(f1,f2name1
         
            let arr1=name1.split('');
            let arr2=name2.split('');
            // const Flames='Flames'
           for(let i = 0 ; i < arr1.length ; i++){
            for(let j = 0 ; j < arr2.length ; j++){
                if(arr1[i]===arr2[j]){
                  arr1.splice(i,1);
                  arr2.splice(j,1);
                  i--;
                  j--;
                  break;
                }
            }
           }
           const newStr=arr1.join('')+arr2.join('');
        //   newStr.length%6;
        let mod= newStr.length%6
        switch(mod) {
            case 1:
                setAns ('Friends');
                break;
            case 2:
                setAns( 'Love');
                break;
            case 3:
                 setAns('Affection');
                 break;
            case 4:
                setAns('Marriage');
                break;
            case 5:
                setAns('Enemies');
                break;
            case 0:
                setAns('Siblings');
           
        }
            
        }
        function clearStatus(){
            setName1('');
            setName2('');
            setAns('');
        }
      return (
    
       <div>
       <div>
        <input placeholder='Enter Your Name' value={name1} data-testid="input1" onChange={(e)=>{
               setName1(e.target.value)
        }} />
        <input placeholder='Enter Your Name' data-testid="input2" value={name2} onChange={(e)=>{
               setName2(e.target.value)
        }} />
        <button onClick={checkDetails} data-testid="calculate_relationship">Check Desicion</button>
        <button data-testid="clear" onClick={clearStatus}>clear</button>
        <h3 data-testid="answer">{ans}</h3>
       </div>
       </div>
        
      )
       
        
    }
}


export default App;










// return(
//     <div id="main">
      
  

//    <div>
//     <input data-testid="input1" placeholder='enter your name' value={input1} onChange={(event)=>{
//         setInput1(event.target.value)
//     }}/>
//     <input data-testid="input2" placeholder='enter your name' value={input2} onChange={(event)=>{
//         setInput2(event.target.value)
//     }}/>
//     <button data-testid="calculate_relationship" onClick={checkDetails}>Calculate Relationship Future</button>
//     <button data-testid="clear" onClick={clearStatus}>Clear</button>
//     <h3>{Answer}</h3>
//    </div>










//     </div>