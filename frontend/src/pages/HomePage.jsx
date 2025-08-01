import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import RateLimitedUI from "../components/RateLimitedUI";
import { toast } from "react-hot-toast";
import { NoteCard } from "../components/NoteCard";
import NoteNotFound from "../components/NoteNotFound";
import api from "../utils/axios";

const HomePage = () => {
  const [isRatedLimited, setIsRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await api.get("/notes");
        setNotes(res.data["data"]);
        setIsRateLimited(false);
      } catch (error) {
        console.log("Error while fetch notes ", error);
        if (error.response.status === 429) {
          setIsRateLimited(true);
        } else {
          toast.error("failed to load toast");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      {isRatedLimited && <RateLimitedUI />}

      <div className="max-w-7xl mx-auto p-4 mt-6">
        {loading && (
          <div className="text-center text-primary py-10">Loading.....</div>
        )}

        {notes.length === 0 && !isRatedLimited && <NoteNotFound />}

        {notes.length > 0 && !isRatedLimited && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes.map((note) => (
              <NoteCard key={note._id} note={note} setNotes={setNotes} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
