import { Request, Response } from "express";
import Note from "../models/Note";

export const getHomePage = async (_: Request, res: Response) => {
  const length = await Note.countDocuments();
  const html = `
    <!DOCTYPE html>
    <html>
      <head></head>
      <body>
        <div class='container'>
          <h1>Full stack example app</h1>
          <p>number of notes created: ${length}</p>
          <a href='/notes'>notes</a>
          <img src='kuva.png' width='200' />
        </div>
      </body>
    </html>
  `;
  res.send(html);
};


