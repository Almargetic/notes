import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Notes = () => {
  const navigate = useNavigate();
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const url = "/api/v1/notes/index";
    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((res) => setNotes(res))
      .catch(() => navigate("/"));
  }, []);

  const allNotes = notes.map((note, index) => (
    <div key={index} className="col-md-6 col-lg-4">
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <Link to={`/note/${note.id}`} className="btn custom-button">
            View Note
          </Link>
        </div>
      </div>
    </div>
  ));
  const noNote = (
    <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
      <h4>
        No notes yet. Why not <Link to="/new_note">create one</Link>
      </h4>
    </div>
  );

  return (
    <>
      <section className="jumbotron jumbotron-fluid text-center">
        <div className="container py-5">
          <h1 className="display-4">Notes for every occasion</h1>
          <p className="lead text-muted">
            We ve pulled together our most popular notes, our latest
            additions, and our editor s picks, so there s sure to be something
            tempting for you to try.
          </p>
        </div>
      </section>
      <div className="py-5">
        <main className="container">
          <div className="text-end mb-3">
            <Link to="/note" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Create New Note
            </Link>
          </div>
          <div className="row">
            {notes.length > 0 ? allNotes : noNote}
          </div>
          <Link to="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Home
          </Link>
        </main>
      </div>
    </>
  );
}

export default Notes
