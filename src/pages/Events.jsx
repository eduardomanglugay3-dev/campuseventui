import { useEffect, useContext } from "react";
import { EventContext } from "../context/EventContext";
import { db } from "../firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { Link } from "react-router-dom";

export default function Events() {
  const { state, dispatch } = useContext(EventContext);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "events"), (snapshot) => {
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      dispatch({ type: "SET_EVENTS", payload: data });
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="grid">
      {state.events.map(event => (
        <div key={event.id} className="card">
          <h3>{event.title}</h3>
          <Link to={`/events/${event.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
}