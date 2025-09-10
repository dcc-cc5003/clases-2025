import { Button, IconButton, ListItem, ListItemText } from "@mui/material";
import type { NoteData } from "../types/notes";
import LabelImportantOutlineIcon from "@mui/icons-material/LabelImportantOutline";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";

interface Prop {
  note: NoteData;
  toggleImportance: () => void;
}
const Note = ({ note, toggleImportance }: Prop) => (
  <ListItem
    disablePadding
    secondaryAction={
      <IconButton edge="end" aria-label="delete" onClick={toggleImportance}>
        {note.important ? (
          <LabelImportantIcon color="error" />
        ) : (
          <LabelImportantOutlineIcon />
        )}
      </IconButton>
    }
  >
    <ListItemText primary={note.content} />
  </ListItem>
);

export default Note;

/*<li>
    {note.content}
    <Button onClick={toggleImportance}>
      {note.important ? "make not important" : "make important"}
    </Button>
  </li>*/
