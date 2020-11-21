import express, { Application, Request, Response, NextFunction } from 'express'; 

const app:Application = express(); 

const PORT = process.env.PORT || 4000; 

const add = (a:number, b:number):number => a+b

app.get('/', (req:Request, res:Response, next:NextFunction) => {
    console.log(add(4,4), 'yasmin');
    
    res.send('HELLO YASMIN')
})

app.listen(PORT, () => console.log(`App running on port ${PORT}`))