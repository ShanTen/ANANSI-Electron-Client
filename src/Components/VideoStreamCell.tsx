import "../App.css"

const VideoStream = () => {
    return (
        <div className="border-2 border-gray-400 flex items-center justify-center h-100 rounded-xl" >
            <iframe className="rounded-xl border-2 border-spacing-10 border-black" height="220" width="80%" src="https://www.youtube.com/embed/abbR-Ttd-cA?si=d4xGxkj96eoBtH8-&amp;controls=0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
    )
}

export default VideoStream;