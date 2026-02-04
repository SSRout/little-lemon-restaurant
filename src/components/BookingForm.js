import { useState } from "react";

export default function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    contact: "",
    date: "",
    time: "",
    guests: 2,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Booking confirmed!\nName: ${form.name}\nContact: ${form.contact}\nGuests: ${form.guests}\nDate: ${form.date}\nTime: ${form.time}`,
    );
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <label>Full Name:</label>
      <input
        type="text"
        placeholder="Enter your name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        required
      />

      <label>Contact Number:</label>
      <input
        type="tel"
        placeholder="Enter your phone number"
        value={form.contact}
        onChange={(e) => setForm({ ...form, contact: e.target.value })}
        required
      />

      <label>Date:</label>
      <input
        type="date"
        value={form.date}
        onChange={(e) => setForm({ ...form, date: e.target.value })}
        required
      />

      <label>Time:</label>
      <input
        type="time"
        value={form.time}
        onChange={(e) => setForm({ ...form, time: e.target.value })}
        required
      />

      <label>Guests:</label>
      <input
        type="number"
        min="1"
        max="20"
        value={form.guests}
        onChange={(e) => setForm({ ...form, guests: e.target.value })}
        required
      />

      <button type="submit" className="cta-btn">
        Confirm Booking
      </button>
    </form>
  );
}
