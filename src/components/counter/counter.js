// import "./counter.css"
// function Counter(){
//     var countValue = 0;
//     const increaseCount=()=>{
//         countValue=countValue + 1;
//         console.log(countValue);
//     }
//     return(
//         <div>
//             <h2 class="mb-3">Count Value : {countValue}</h2>
//             <button onClick={increaseCount}class="btn btn-outline-success mx-3">IncCount</button>
//             <button class="btn btn-outline-danger mx-3">DecCount</button>
//         </div>

//     );

// }
//export default Counter;
import "./counter.css"
import {useState} from 'react'
function Counter(){
    let [state, setState] = useState(0);
    const increaseCount=()=>{
        setState(state + 1);
    };
    const decreaseCount=()=>{
        setState(state - 1);
    };
    const clearCount=()=>{
        setState(0);
    };
    
    return (
        <div class="mystyle">
            <h2 class="mb-3">Count Value : {state}</h2>
            <button onClick={increaseCount}class="btn btn-outline-success mx-3">IncCount</button>
            <button onClick={decreaseCount}class="btn btn-outline-danger mx-3">DecCount</button>
            <button onClick={clearCount}class="btn btn-outline-secondary mx-3">Clear</button>
        </div>

    );

}
export default Counter;