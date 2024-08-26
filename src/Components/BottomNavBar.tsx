const BottomNavBar = () => {
    return (<div className="flex items-center justify-center gap-x-4 m-2 bg-slate-500 bg-opacity-30 w-3/4 rounded-md py-3 px-3">
        <button onClick={() => { window.location.href = '/'; }} >
            Video Stream
        </button>
        <button onClick={() => { window.location.href = '/'; }} >
            Home
        </button>
        <button onClick={() => { window.location.href = '/'; }} >
            LiDAR Data
        </button>
        <button onClick={() => {
            alert("Switching to LoRA")
            window.location.href = '/';
        }} >
            Switch to LoRA
        </button>
    </div>
    )
}

export default BottomNavBar;