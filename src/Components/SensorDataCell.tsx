const SensorDataCell = ({data} : {data: any}) => {
    return (
        <div className="border-2 border-dotted border-gray-400 flex items-center justify-center h-60 rounded-xl" >
            {/* further contains a grid of 3 rows and 2 columns */}
            <div className="grid grid-cols-2 grid-rows-2 gap-x-6 gap-y-2 w-full h-full p-4 items-center self-center">
                {data.map(
                    (element : any, index : number)    => {
                    
                    let _tmpAdjustment  = element.value;
                    if(typeof(_tmpAdjustment) === 'number') {
                        _tmpAdjustment = _tmpAdjustment.toFixed(2)
                    }
                    return (<div key={index}> 
                        {element.type} : {_tmpAdjustment} {element['unit-str']}
                    </div>)
                })}
            </div>
        </div>
    )
}


export default SensorDataCell;