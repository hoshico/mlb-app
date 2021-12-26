import { Button, Input } from "@chakra-ui/react"
import { ChangeEvent, useEffect, useState } from "react"
import axios from "axios"


export const Home = () => {
    const [playerName, setPlayerName] = useState("");
    const onChangePlayerName = (e :ChangeEvent<HTMLInputElement>) => {
        setPlayerName(e.target.value);
    }
    useEffect(() => {
        axios.get(`http://lookup-service-prod.mlb.com/json/named.search_player_all.bam?sport_code='mlb'&active_sw='Y'&name_part='betts%25'`)
             .then((res) => {
                 console.log(res.data);
             })
    })
    return (
        <div>
            <Input placeholder="選手名を入力" value={playerName} onChange={onChangePlayerName}/>
            <Button >検索</Button>
        </div>
    )
}
