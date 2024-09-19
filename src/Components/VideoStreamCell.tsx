import "../App.css"
import {CAMERA_URL} from "../../api.config"

const VideoStream = () => {
    return (

        <div className="overflow-hidden flex items-center justify-center">
        <img 
          src={CAMERA_URL}
          alt="Video Stream Disconnected, refresh to try to reconnect..." 
          className="rotate-180 w-[400px] h-auto object-cover rounded-xl border-2 border-black" />
      </div>

    )
}

export default VideoStream;