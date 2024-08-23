import { Request, Response, Router } from "express";
import mysql from 'mysql';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'toor',
  database: 'world',
  insecureAuth : true
})
const router = Router()

router.get("/users", (req: Request, res: Response) => {
    
    //res.send("Express + TypeScript Server test");

    connection.connect()

    connection.query('SELECT * from country', (err, rows, fields) => {
      if (err) throw err

      console.log('The list of countries is: ', rows)

      res.json({user: "test", countries: rows})
    })


    connection.end()

  });

export default router