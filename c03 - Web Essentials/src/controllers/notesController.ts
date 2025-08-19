import { Request, Response } from "express";
import Note from "../models/Note";

// Render notes page
export const getNotesPage = (_: Request, res: Response) => {
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <link rel="stylesheet" type="text/css" href="/main.css" />
        <script type="text/javascript" src="/main.js"></script>
      </head>
      <body>
        <div class='container'>
          <h1>Notes</h1>
          <div style="display: flex;">
            <div style="flex: 1 0 100px; margin: 2px; background:#ccc; height: 80px;text-align:center;line-height: 80px">Centrame!</div>
            <div style="flex: 1 0 200px; margin: 2px; background:#ccc; height: 80px;text-align:center">Centrame!</div>
          </div>
          <div id='notes'></div>
          <form action='/notes/new' method='POST'>
            <input type="text" name="note"><br>
            <input type="submit" value="Save">
          </form>
        </div>
      </body>
    </html>
  `;
  res.send(html);
};

// Get notes as JSON (for AJAX requests)
export const getNotesData = async (_: Request, res: Response) => {
  const notes = await Note.find({});
  res.json(notes);
};

// Save a new note
export const saveNewNote = async (req: Request, res: Response) => {
  if (req.body.note) {
    const note = new Note({ content: req.body.note });
    await note.save();
  }
  res.redirect("/notes");
};

export const resetNotes = async (_: Request, res: Response) => {
  await Note.deleteMany({});
  res.redirect("/notes");
};
