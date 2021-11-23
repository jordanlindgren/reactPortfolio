import { useState } from "react";

const myEmail = "jordanlindgren@live.com";

export default function Contact() {
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  function sendEmail() {
    window.open(`mailto:${myEmail}?subject=${subject}&body=${body}`);
  }

  return (
    <>
      <h1>Contact</h1>
      {!subject && <span>Please enter a subject.</span>}
      <form className="contactForm">
        <label>
          Enter Subject:
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </label>
        <label>
          Enter body:
          <textarea value={body} onChange={(e) => setBody(e.target.value)} />
        </label>
        <button onClick={sendEmail}>Submit</button>
      </form>
    </>
  );
}
