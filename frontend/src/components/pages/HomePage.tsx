import { useEffect, useState } from "react";
import NavBar from "../presentationals/NavBar.tsx";
import NoteCard from "../presentationals/NoteCard.tsx";
import api from "../backend/axios.ts";

function HomePage() {
  const [notes, setNotes] = useState<
    Array<{ _id: string; content: string; createdAt: string; title: string }>
  >([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getNotes = async () => {
      const results = await api.get("/notes");
      setNotes(results.data);
      setIsLoading(false);
    };
    getNotes();
  }, []);
  return (
    <div className="min-h-screen">
      <NavBar />
      <div className="max-w-7xl mx-auto p-4 mt-6">
        {isLoading && (
          <div className="text-center text-primary py-10">Loading notes...</div>
        )}
        {0 < notes.length && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes.map((note) => (
              <NoteCard key={note._id} note={note} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default HomePage;
