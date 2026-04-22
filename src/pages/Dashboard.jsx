import { useState } from "react";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";

export default function Dashboard() {
  const [title, setTitle] = useState("");

  const addEvent = async () => {
    if (!title) return;

    await addDoc(collection(db, "events"), {
      title,
      createdAt: Date.now()
    });

    setTitle("");
  };

  return (
    <div>
      <h2>Dashboard 🔐</h2>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Event title"
      />

      <button onClick={addEvent}>Add Event</button>
    </div>
  );
}