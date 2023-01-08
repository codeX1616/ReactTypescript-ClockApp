import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const deg: number = 6;
const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");

let day = new Date();
let hh = day.getHours();
let mm = day.getMinutes();
let ss = day.getSeconds();



// function tick() {
  const element = (
    <>
      {/* <h1>Welcome!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2> */}
      <div className='clock'>
        <div className='hour'>
          <div className='hr' id='hr'/>
        </div>
        <div className='min'>
          <div className='mn' id='mn'/>
        </div>
        <div className='sec'>
          <div className='sc' id='sc'/>
        </div>  
      </div>
    </>
  );
  root.render(element);
// }

// setInterval(tick, 1000);
