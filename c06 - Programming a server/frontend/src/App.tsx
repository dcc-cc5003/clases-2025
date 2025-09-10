import { useEffect, useState } from "react";
import Note from "./components/Note";
import type { NoteData } from "./types/notes";
import noteService from "./services/notes";
import TextField from "@mui/material/TextField";

import {
  Button,
  createTheme,
  CssBaseline,
  List,
  Paper,
  ThemeProvider,
} from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#000",
    },
  },
});

function App() {
  const [notes, setNotes] = useState<NoteData[]>([]);
  const [newNote, setNewNote] = useState<string>("");
  const [showAll, setShowAll] = useState<boolean>(true);

  useEffect(() => {
    console.log("entrando en use effect");
    noteService.getAll().then((data) => {
      console.log("la llamada termino");
      setNotes(data);
    });
  }, []);

  const addNote = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const noteObject: Omit<NoteData, "id"> = {
      content: newNote,
      important: Math.random() < 0.5,
    };
    noteService.create(noteObject).then((data) => {
      setNotes(notes.concat(data));
      setNewNote("");
    });
  };

  const handleNoteChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setNewNote(event.target.value);
  };

  const filteredNotes = showAll
    ? notes
    : notes.filter((note) => note.important);

  const toggleImportanceOf = (id: string) => {
    console.log("importance of " + id + " needs to be toggled");

    const note: NoteData | undefined = notes.find((n) => n.id === id);

    if (note) {
      const changedNote = { ...note, important: !note.important };

      noteService
        .update(id, changedNote)
        .then((data) => {
          setNotes(notes.map((n) => (n.id === id ? data : n)));
        })
        .catch((_) => {
          alert(`the note '${note.content}' was already deleted from server`);
          setNotes(notes.filter((n) => n.id !== id));
        });
    }
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div style={{ margin: 20 }}>
        <h1>Notes</h1>
        <div>
          <Button variant="contained" onClick={() => setShowAll(!showAll)}>
            show {showAll ? "important" : "all"}
          </Button>
        </div>
        <Paper style={{ padding: 8 }}>
          <List>
            {filteredNotes.map((note) => (
              <Note
                key={note.id}
                note={note}
                toggleImportance={() => toggleImportanceOf(note.id)}
              />
            ))}
          </List>
        </Paper>
        <form onSubmit={addNote}>
          <TextField
            id="outlined-basic"
            label="Type your note here..."
            variant="outlined"
            value={newNote}
            onChange={handleNoteChange}
          />

          <Button variant="outlined" type="submit">
            Add Note
          </Button>
        </form>
      </div>
    </ThemeProvider>
  );
}

export default App;
