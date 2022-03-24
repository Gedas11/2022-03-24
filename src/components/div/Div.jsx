import './style.scss';

const Div = (props) =>{
    const random = ()=>{
        // console.log(Math.floor(Math.random()*255))
       return Math.floor(Math.random()*255)
    }
    const bgChange = (event)=>{
        let rndColor = 'rgb(' +random()+','+random()+','+random()+')';
        // console.log(rndColor)
        // console.log(event)
        event.target.style.backgroundColor = rndColor
        //#00dd88
    }
    return (
        <div className="col-3" onClick={bgChange}>
            <h1>{props.number}</h1>
        </div>
    )
}

export default Div;