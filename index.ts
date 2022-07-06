import {controller, endpoint} from "./jet";


@controller
class HomeController {
    score: number = 0

    @endpoint({path: "/"})
    home(req: any, res: any) {
        res.send(`Hello ${this.score++}`)
    }
}

interface HelloInput {

}

@controller
class ByeController {
    score: number = 0

    @endpoint({path: "/bye"})
    home(req: any, res: any) {
        res.send(`Bye ${this.score++}`)
    }
}