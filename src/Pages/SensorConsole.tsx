import '../App.css'
import axios from 'axios'
import { API_HOST } from '../../api.config';
import { useEffect, useState } from 'react'

import TitleBar from '../Components/TitleBar'
import VideoStream from '../Components/VideoStreamCell'
import GridItemEmpty from '../Components/GridCellEmpty'
import BottomNavBar from '../Components/BottomNavBar'
import SensorDataCell from '../Components/SensorDataCell'
import Dpad from '../Components/DpadCell'
import LiDARScanner from '../Components/LiDARScanner'


const getMinutesPassed = (startTime : number, endTime : number) => {

}

const SensorConsole = () => {    
    const [data, setData] = useState<any>([])
    const [startTimeEpoch, setStartTimeEpoch] = useState<number>((new Date()).getTime());
    const [currentTimeEpoch, setCurrentTimeEpoch] = useState<number>((new Date()).getTime());


    useEffect(() => {
        setInterval(()=> {
            // console.log(`fetching data from ${API_HOST}`)
            axios.get(`${API_HOST}/sensor-data`)
            .then((response) => {
                // console.log(response.data)
                setData(response.data)
            })    

            setCurrentTimeEpoch((new Date()).getTime())
        }, 1000);
    }, [])

    return (
            <div className='w-full h-full items-center'>
                {/* top section */}
                <div className='flex items-center border-2 rounded-lg justify-between'>
                    <TitleBar title="Status: Online" />
                    <TitleBar title="Sensor Console" />
                    <TitleBar title={`Uptime: ${Math.floor((currentTimeEpoch-startTimeEpoch)/1000/60)} mins`} />
                </div>
                {/* Grid Section */}
                <div className="flex items-center justify-center mt-2">
                    <div className="grid grid-cols-2 grid-rows-2 gap-x-6 gap-y-4 w-full h-full p-4">
                        <VideoStream />
                        { (data) ? <SensorDataCell data={data} /> : <GridItemEmpty title='Sensor Data' value='Loading...'/>}
                        <Dpad />
                        <LiDARScanner />
                    </div>
                </div>

                {/* Bottom Navigation Menu */}
                <div className="flex items-center justify-center mt-5">
                    <BottomNavBar />
                </div>
            </div>
    )
}

export default SensorConsole;