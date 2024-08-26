const GridItemEmpty = ({ title, value }: { title: string, value: string }) => {
    return (
        <div className="border-2 border-dotted border-gray-400 flex items-center justify-center h-60 rounded-xl" >
            <span>{title}: {value}</span>
        </div>
    )
}

export default GridItemEmpty;