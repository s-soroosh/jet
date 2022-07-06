import {controller, endpoint} from "./jet";


@controller
class HomeController {
    score: number = 0

    @endpoint("/")
    home(req: any, res: any) {
        res.send(`Hello ${this.score++}`)
    }
}


@controller
class ByeController {
    score: number = 0

    @endpoint("/bye")
    home(req: any, res: any) {
        res.send(`Bye ${this.score++}`)
    }
}