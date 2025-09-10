import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  Link,
  Route,
  BrowserRouter as Router,
  Routes,
  useNavigate,
  useParams,
} from "react-router-dom";

const Home = () => (
  <div>
    <h2>TKTL notes app</h2>
    <ul>
      <li>
        <Link to="/notes/1">Nota 1</Link>
      </li>
      <li>
        <Link to="/notes/2">Nota 2</Link>
      </li>
    </ul>
  </div>
);

const Notes = () => {
  const navigate = useNavigate();

  const [id, setId] = useState<number>(0);
  return (
    <div>
      <h2>Notes</h2>
      <input
        type="text"
        value={id}
        onChange={(e) => setId(Number(e.target.value))}
      />
      <button onClick={() => navigate(`/notes/${id}`)}>Ir a nota</button>
    </div>
  );
};

const Users = () => (
  <div>
    <h2>Users</h2>
  </div>
);

const Note = () => {
  const { id } = useParams();
  return <h2>Mostrando nota con id = {id}</h2>;
};

const App = () => {
  const padding = { padding: 5 };

  return (
    <Router>
      <div>
        <Link style={padding} to="/">
          home
        </Link>
        <Link style={padding} to="/notes">
          notes
        </Link>
        <Link style={padding} to="/users">
          users
        </Link>
      </div>

      <Routes>
        <Route path="/notes" element={<Notes />} />
        <Route path="/users" element={<Users />} />
        <Route path="/notes/:id" element={<Note />} />
        <Route path="/" element={<Home />} />
      </Routes>

      <div>
        <i>Note app, Department of Computer Science 2025</i>
      </div>
    </Router>
  );
};
export default App;
