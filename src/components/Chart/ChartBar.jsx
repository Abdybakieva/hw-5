import "./ChartBar.css"

const ChartBar =({ maximumPrice, currentPrice,label}) =>{

    const fillHeight = (100 * currentPrice)/ maximumPrice

    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={{height:`${fillHeight}%`}}></div>
            </div>

            <p className="chart-bar__label">{label}</p>
        </div>
    )
}

export default ChartBar