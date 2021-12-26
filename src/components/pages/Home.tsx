import axios from "axios"
import { useEffect } from "react"


export const Home = () => {
    
    useEffect(() => {
        axios.get(`http://lookup-service-prod.mlb.com/json/named.search_player_all.bam?sport_code='mlb'&active_sw='Y'&name_part='betts%25'`)
             .then((res) => {
                 console.log(res.data);
             })
    })
    return (
        <div>
            
        </div>
    )
}
