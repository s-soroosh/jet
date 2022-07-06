import express from "express";

const app = express();

// app.get("/",(req,res) => {
//     res.send("Hello");
// })

app.listen(3000);

const targetObjects: any[] = [];

function controller(target:any){
    console.log("controller annotated")
    const object = new target();
    targetObjects.push(object)
}

function endpoint(path: string) {
    console.log("endpoint called")
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const method = descriptor.value;
        app.get(path, (req, res) => {
            console.log(Object.getPrototypeOf(targetObjects[0])  == target)
            method.apply(targetObjects[0],[req,res])}
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


class ByeController {
    // @endpoint("/bye")
    home(req: any, res: any) {
        res.send("Bye")
    }
}