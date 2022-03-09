import React,{useState} from 'react'

const Calculator = () => {
    const [state,setState]=useState("");

    const handler = e =>{
       setState(e.target.value);
    }
     
    const [result,setResult]=useState("0");


  
  return (
    <div>
        <center className="mt-5">
        <div className='card  bg-warning col-sm-4'>
            <div className='card-body '>
                <input id="big" type="text" value={state} name="state" onChange={handler}></input><br></br>
                <h1 className='card-title'>Result is:{result}</h1><br></br><hr className='bg-danger'></hr>
                <button type="button" onClick={()=>{setResult(eval(state))}} className='btn btn-success'>result</button><br></br>
     
              
                <button type="button" className='btn-success shadow-lg' onClick={()=>setState(state+'1')}>1</button>
                <button type="button" className='btn-success shadow-lg' onClick={()=>setState(state+'2')}>2</button>
                <button type="button"  className='btn-success shadow-lg'onClick={()=>setState(state+'3')}>3</button>
                <button type="button"  className='btn-success shadow-lg'onClick={()=>setState(state+'4')}>4</button>
                <button type="button" className='btn-success shadow-lg' onClick={()=>setState(state+'5')}>5</button><br></br>

                <button type="button"  className='btn-danger shadow-lg'onClick={()=>setState(state+'6')}>6</button>
                <button type="button" className='btn-danger shadow-lg' onClick={()=>setState(state+'7')}>7</button>
                <button type="button"  className='btn-danger shadow-lg' onClick={()=>setState(state+'8')}>8</button>
                <button type="button"  className='btn-danger shadow-lg' onClick={()=>setState(state+'9')}>9</button>
                <button type="button"   className='btn-danger shadow-lg'onClick={()=>setState(state+'0')}>0</button><br></br>

                <button type="button"   className='btn-primary shadow-lg'onClick={()=>setState(state+'+')}>+</button>
                <button type="button"   className='btn-primary shadow-lg' onClick={()=>setState(state+'-')}>-</button>
                <button type="button"    className='btn-primary shadow-lg'onClick={()=>setState(state+'*')}>*</button>
                <button type="button"    className='btn-primary shadow-lg'onClick={()=>setState(state+'/')}>/</button>
                <button type="button"   className='btn-primary shadow-lg' onClick={()=>setState("")}>clr</button>
            </div>
           
        </div>
        </center>
    </div>
  )
}

export default Calculator;