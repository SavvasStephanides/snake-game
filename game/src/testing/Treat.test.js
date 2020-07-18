import Treat from "../modules/treat"
import Snake from "../modules/snake";
var sinon  = require("sinon");

test("Treat sets coordinates", () => {
    var treat = new Treat()
    treat.coordinates = {
        x: 5,
        y: 7
    }
    expect(treat.coordinates.x).toBe(5)
    expect(treat.coordinates.y).toBe(7)
})

test("changeTreatPosition() sets the position of the treat to a random position", () => {
    var treat = new Treat()
    treat.coordinates = {
        x: 5,
        y: 7
    }

    var fake = sinon.fake.returns(0.222);
    sinon.replace(Math, 'random', fake);

    treat.changeTreatPosition()
    expect(treat.coordinates.x).toBe(5)
    expect(treat.coordinates.y).toBe(5)
})