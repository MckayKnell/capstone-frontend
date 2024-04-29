import { useState } from "react";

export default function Contact(props) {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [MoreInfo, setMoreInfo] = useState("");

  function resetInputs(e) {
    e.preventDefault();
    setFirstName("");
    setLastName("");
    setEmail("");
    setMoreInfo("");
  }

  return (
    <form className="contact-page-container" action="" onSubmit={resetInputs}>
      <div className="title-wrapper">Contact Form</div>
      <label for="name">First Name</label>
      <input
        value={FirstName}
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
        type="text"
        id="first_name"
      />
      <label for="amount">Last Name</label>
      <input
        value={LastName}
        onChange={(e) => {
          setLastName(e.target.value);
        }}
        type="text"
        id="last_name"
      />
      <label for="amount">Email</label>
      <input
        value={Email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        type="text"
        id="email"
      />
      <label for="amount">More Info</label>
      <textarea
        value={MoreInfo}
        onChange={(e) => {
          setMoreInfo(e.target.value);
        }}
        className="message-box"
        type="text"
        id="message"
      />

      <button>Submit</button>
    </form>
  );
}
