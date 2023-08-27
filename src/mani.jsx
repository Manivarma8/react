import  {useState} from 'react';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
function App (){
    const[time,Time] = useState([{
        year : "",
        month : "",
        day : ""}   
    ]
    );
const [click,fclick] = useState(null);
 
 const Event = (event)=>{
    const {name, value} = event.target;
    Time((prevVal)=>({...prevVal,[name] : value}))
 }
    const object = ()=>{
        
        const Main = new Date();
        const Now = new Date(time.year, time.month-1, time.day);
        console.log(Main);
        const Vijay =  Main - Now;
        const Mill = 1000 * 60 * 60 * 24;
        const Days = Math.floor(Vijay /Mill );
        const Years = Math.floor(Days/365);
        const Months =Math.floor(Days/30);
        
        return {days :Days, months : Months, years : Years};
           }   
   
    const Git = ()=>{
        const { days, months, years} = object();
        Time({days, months, years});
        fclick({days, months, years})

    }
    
    return(
<div className = "patience">
    <div className="container">
        <div id = "try" className='row col'>
<span id = "day">
 <p>Day</p>
<input value = {time.day} name = "day" onChange = {Event} type="number" placeholder = "DD"/>
</span>

<span id = "month">
<p>Month</p>
<input value = {time.month} name = "month" onChange = {Event} placeholder = "MM"type="number" />
</span>

<span id = "year">
<p>Year</p>
<input value = {time.year} name = "year" type="number"
 onChange = {Event} placeholder = "YY"/>
</span>
<button onClick={Git} id = "btn">
<ArrowDownwardIcon style = {{color : "white"}}/>
</button>
</div>
{!click ? (<span>
<>   
 <h1><span id  = "One" >--</span>days</h1> 
<h1><span id = "Two">   --</span> months</h1>
<h1><span id = "Three"> -- </span> years</h1></> 
</span>) :(
<span>
<>   
 <h1><span id  = "One" > {time.days} </span>days</h1> 
<h1><span id = "Two">   {time.months}</span> months</h1>
<h1><span id = "Three"> {time.years}</span> years</h1></> 
</span>) }
</div>
</div>)
}
export default App;
