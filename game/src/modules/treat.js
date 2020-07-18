export default function Treat(){
    var coordinates = {}

    function changeTreatPosition() {
        this.coordinates = {
            x: Math.floor(Math.random() * 20 + 1),
            y: Math.floor(Math.random() * 20 + 1)
        }
    }

    return{
        coordinates,
        changeTreatPosition
    }
}