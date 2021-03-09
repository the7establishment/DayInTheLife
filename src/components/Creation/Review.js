import React from "react"
import money from "../../resource/icons/money.png"
import plane from "../../resource/icons/plane.png"
import balance from "../../resource/icons/balance.png"
import walk from "../../resource/icons/walk.png"
import home from "../../resource/icons/home.png"
import error from "../../resource/icons/error.png"


const usd = new Intl.NumberFormat('en-US',
                    { style: 'currency', currency: 'USD',
                        minimumFractionDigits: 0 });

export default function Review(props) {
    var overview = props.data.overview;
    var description = props.data.description;
    return(
        <div>
            <div className="viewbox">
                <h2>{ overview.jobTitle }</h2>
                <p>{ overview.company }</p>
                <hr/>
                <div className='review-stats overview-result'>
                    <img className='icon' src={money} alt="Dollar"></img>
                    <span> { usd.format(overview.salary) || "--"} </span>

                    <img className='icon' src={walk} alt="Walk"></img>
                    <span>{ overview.physical }</span>

                    <img className='icon' src={plane} alt="Plane"></img>
                    <span>{ overview.travel } </span>

                    <img className='icon' src={home} alt="Home"></img>
                    <span>{ overview.workenv }</span>

                    <img className='icon' src={balance} alt="Balance"></img>
                    <div style={{display:'inline-flex'}}>
                    <span>{ overview.worklife }</span>
                    </div>
                </div>    
            </div>
            <div className="viewbox review-description">
                <h2>A Day in the Life of [ Username ] ...</h2>
                <p className="review-desc-text">{ description.text }</p>
            </div>
            { 
            props.serviceErrMsg && 
            <div className='viewbox errorbox'>
                <img className='icon-small error-icon' src={error} alt='ERROR'/>
                <p className="errMsg-create">{props.serviceErrMsg}</p>
            </div>
            }
            <button className="btn-reg btn-red" onClick={props.submit}>
                Submit
            </button> 
        </div>
    )
}