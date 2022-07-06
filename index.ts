import express from "express";

const app = express();

// app.get("/",(req,res) => {
//     res.send("Hello");
// })

app.listen(3000);

const targetObjects: Map<any, any> = new Map;

function controller(target: any) {
    console.log("controller annotated")
    const object = new target();
    targetObjects.set(Object.getPrototypeOf(object), object)
}

function endpoint(path: string) {
    console.log("endpoint called")
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const method = descriptor.value;
        app.get(path, (req, res) => {
                console.log(targetObjects.get(target))
                method.apply(targetObjects.get(target), [req, res])
            }
        )
    };
}


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