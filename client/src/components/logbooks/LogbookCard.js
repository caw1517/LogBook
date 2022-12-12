export default function LogbookCard() {
    return(
        <div className={"logbookCard"}>
            <div className="logbookCardHeader">
                <h2>Nashville - Denver</h2>
                <p>December 4, 2022.</p>
            </div>

            <div className="logbookCardBody">
                <div className="logbookCardRow">
                    <p>Departure: KBNA</p>
                    <p>Arrival: KDEN</p>
                </div>
                <div className="logbookCardRow">
                    <p>Flight Time: 4H 12M</p>
                    <p>Distance: 1,500 NM</p>
                </div>
                <div className="logbookCardRow">
                    <p>Aircraft: N5921C</p>
                    <p>Landings: 4</p>
                </div>
                <button>View</button>
            </div>
        </div>
    )
}