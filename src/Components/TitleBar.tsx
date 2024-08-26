import '../App.css'

type TitleBarPropsType = {
    title: string
}

const TitleBar = ({title}: TitleBarPropsType) => {
    return (
        
        <div className="underline-offset-2 m-4 font-bold">
            <h1>{title}</h1>
        </div>
    )
}

export default TitleBar;