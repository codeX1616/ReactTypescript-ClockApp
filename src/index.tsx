import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

function tick() {

  const deg: number = 6;
  const hr: HTMLDivElement | null = document.querySelector("#hr");
  const mn: HTMLDivElement | null = document.querySelector("#mn");
  const sc: HTMLDivElement | null = document.querySelector("#sc");

  let day = new Date();
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * deg;
  let ss = day.getSeconds() * deg;

  if(hr) {
    hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
  }

  if(mn) {
    mn.style.transform = `rotateZ(${mm}deg)`;
  }

  if(sc) {
    sc.style.transform = `rotateZ(${ss}deg)`;
  }

  const element = (
    <>
      <h1 className='title'>CLOCK APP</h1>
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
      <div className='time'>{new Date().toLocaleTimeString()}</div>
    </>
  );
  root.render(element);
}

setInterval(tick, 1000);
