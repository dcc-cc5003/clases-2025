import { Request, Response } from "express";
import Note from "../models/Note";

// Render notes page
export const getNotesPage = (_: Request, res: Response) => {
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <link rel="stylesheet" type="text/css" href="/main.css" />
        <script type="text/javascript" src="/spa.js"></script>
      </head>
      <body>
        <div class='container'>
          <h1>Notes -- single page app</h1>
          <div id='notes'></div>
          <form id='notes_form'>
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
  const { content, date } = req.body;

  // Validate that content and date are present
  if (!content || !date) {
    res.status(400).json({ error: "Content and date are required" });
    return;
  }

  const note = new Note({ content, date });
  await note.save();

  res.status(201).json({ message: "Nota creada" });
};
