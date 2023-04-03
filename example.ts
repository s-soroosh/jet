import {controller, endpoint} from "./jetto";
import {controller, endpoint} from "./jetto";
import {controller, endpoint} from "./jetto";
import {controller, endpoint} from "./jetto";
import {controller, endpoint} from "./jetto";
import {controller, endpoint} from "./jetto";
import {controller, endpoint} from "./jetto";
import {controller, endpoint} from "./jetto";
import {controller, endpoint} from "./jetto";

interface HelloInput {
    name: string;
    lastName: string;
}

@controller
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
