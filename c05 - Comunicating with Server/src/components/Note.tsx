import type { NoteData } from "../types/notes";

interface Prop {
  note: NoteData;
  toggleImportance: () => void;
}
const Note = ({ note, toggleImportance }: Prop) => (
  <li>
    {note.content}
    <button onClick={toggleImportance}>
      {note.important ? "make not important" : "make important"}
    </button>
  </li>
);

export default Note;
