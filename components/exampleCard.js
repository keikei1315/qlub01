
export default function ExampleCard(props) {
    return(
    <div className="exampleCard">
        <div className="excard_header">{props.header}</div>
        <div className="excard_body">
            <div className="excard_body_checks">
                {props.checklist}
            </div>
            <div className="excard_body_text">
                {props.texts}
            </div>
        </div>
        <div className='excard-badge'>
            <div className='pc'>
            <img src={props.image} alt="1"/> 
            </div>
            <div className='sp'>
            <img src={props.spimage} alt="1"/> 
            </div>
        </div>
    </div>
    )
}