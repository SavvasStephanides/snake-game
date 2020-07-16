import Snake from "./snake"
import Treat from "./treat"

export default function Board(){
    
    let dimensions = {
        size: 20,
    }

    let snake = new Snake()
    let treat = new Treat()

    return{
        dimensions,
        snake,
        treat
    }


}