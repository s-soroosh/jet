import {controller, endpoint} from "./jetto";
syntax error

interface HelloInput {
    name: string;
    lastName: string;
}

@controlle. r
class HomeController {
    score: number = 0

    @endpoint({path: "/", method: "post"})
    home(input: HelloInput, res: any) {
        res.send(`Hello ${input.name} ${this.score++}`)
    }
}


@controller
class ByeController {
    score: number = 0

    @endpoint({path: "/bye", method: "get"})
    home(req: any, res: any) {
        res.send(`Bye ${this.score++}`)
    }
}
