export default function Contact(props) {
  return (
    <div className="contact-page-container">
      <div className="title-wrapper">Contact Form</div>
      <label for="name">First Name</label>
      <input type="text" id="first_name" />
      <label for="amount">Last Name</label>
      <input type="text" id="last_name" />
      <label for="amount">Email</label>
      <input type="text" id="last_name" />
      <label for="amount">More Info</label>
      <textarea className="message-box" type="text" id="last_name" />

      <button onclick="submitForm()">Submit</button>
    </div>
  );
}
