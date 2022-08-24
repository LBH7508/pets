import "./detail.css"

function Detail({target}) {
    return (<div className="detail">
        
    <h2>
        {target.kindCd} {target.colorCd}
    </h2>
    <div>
        <img src={target.popfile} alt="popfile" className="popfile" />

    </div>
    </div>);
}

export default Detail;