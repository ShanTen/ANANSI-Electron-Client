import ArrowSVG from '../assets/top-arrow-icon.svg'
import API_HOST from '../../api.config';
import axios from 'axios';
import { useEffect } from 'react';


const sendCommand = (command: string) => {

    const requestBody = {
        "direction": command
    }

    axios.post(`${API_HOST}/command`, requestBody)
    .then((response) => {
        console.log(response.data)
    })
}

const tmpScaleOnKeyPress = (id: string) => {
    document.getElementById(id)?.classList.add('scale-125')
    setTimeout(() => {
        document.getElementById(id)?.classList.remove('scale-125')
    }, 200)
}

const handleKeyPress = (event : any) => {
    switch (event.key) {
      case 'w':
      case 'W':
        sendCommand("up")
        tmpScaleOnKeyPress('arrow-up')
        break;
      case 'a':
      case 'A':
          sendCommand('left');
          tmpScaleOnKeyPress('arrow-left')
        break;
      case 's':
      case 'S':
          sendCommand('down');
          tmpScaleOnKeyPress('arrow-down')
        break;
      case 'd':
      case 'D':
          sendCommand('right');
          tmpScaleOnKeyPress('arrow-right')
        break;
      default:
        break;
    }
  }

const Dpad = () => {

    window.addEventListener('keydown', handleKeyPress);

    return (
        <div className="flex flex-col items-center justify-center bg-slate-500 rounded-lg">
            <div className="flex items-start mb-5 font-bold text-4xl">
                D-Pad
            </div>
            <div className="flex items-center justify-center">
                <img id="arrow-up" src={ArrowSVG} alt="up" className="h-10 w-10 hover:scale-125" onClick={() => sendCommand("up")}/>
            </div>
            <div className="flex items-center justify-between gap-x-10">
                <img id="arrow-left" src={ArrowSVG} alt="left" className="h-10 w-10 transform -rotate-90 hover:scale-125" onClick={() => sendCommand("left")}/>
                <img id="arrow-right" src={ArrowSVG} alt="right" className="h-10 w-10 transform rotate-90 hover:scale-125" onClick={() => sendCommand("right")}/>
            </div>
            <div className="flex items-center justify-center">
                <img id="arrow-down" src={ArrowSVG} alt="down" className="h-10 w-10 transform rotate-180 hover:scale-125" onClick={() => sendCommand("down")}/>
            </div>
        </div>
    )
};


export default Dpad;