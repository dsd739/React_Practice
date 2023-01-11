import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("");
  const convert_upper = (e) => {
    setText(text.toUpperCase());
    props.showAlert("success","converted to uppercase")
  };
  const oonchange = (e) => {
    setText(e.target.value);
  };
  const convert_lower = () => {
    setText(text.toLowerCase());
    props.showAlert("success","converted to lowercase")
  };
  const copy_to_clipboard = (e) => {
    var copyText = document.getElementById("exampleFormControlTextarea1");

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);

    // Alert the copied text
    props.showAlert("success","Texed copied!!!!")
  };
  const clear_all = () => {
    setText("");
    props.showAlert("success","All cleared")
  };

  return (
    <div className="container">
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">
          Example textarea
        </label>
        <textarea
          placeholder="Enter Text here"
          onChange={oonchange}
          value={text}
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
      <button onClick={convert_upper} className="btn btn-primary mx-2">
        Convert to uppercase
      </button>
      <button onClick={convert_lower} className="btn btn-primary mx-2">
        Convert to Lowercase
      </button>
      <button onClick={copy_to_clipboard} className="btn btn-primary mx-2">
        copy to clipboard
      </button>
      <button onClick={clear_all} className="btn btn-primary mx-2">
        Clear All
      </button>
    
      <h1>Overview of your text</h1>
      <p>{text.split(" ").length-1} words and {text.length} numbers of character</p>
    </div>
  );
}
