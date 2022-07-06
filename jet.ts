import express from "express";

const app = express();

app.listen(3000);

app.use(express.json());


const targetObjects: Map<any, any> = new Map;

export function controller(target: any) {
    console.log("controller annotated")
    const object = new target();
    targetObjects.set(Object.getPrototypeOf(object), object)
}

interface EndpointParameters {
    path: string,
    method: "get" | "post" | "patch" | "delete" | "put"
}
export function endpoint({path,method}: EndpointParameters) {
    console.log("endpoint called")
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const m = descriptor.value;
        app[method](path, (req:any, res:any) => {
                m.apply(targetObjects.get(target), [req.body, res])
            }
        )
    };
}