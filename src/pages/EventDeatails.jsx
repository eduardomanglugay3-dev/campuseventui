import { useParams } from "react-router-dom";
import { useContext } from "react";
import { EventContext } from "../context/EventContext";

export default function EventDetails() {
  const { id } = useParams();
  const { state } = useContext(EventContext);

  const event = state.events.find(e => e.id === id);

  if (!event) return <p>Event not found</p>;

  return (
    <div>
      <h2>{event.title}</h2>
      <p>ID: {event.id}</p>
    </div>
  );
}