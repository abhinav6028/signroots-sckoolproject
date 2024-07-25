import { useState } from "react";
import ProgressBar from "./ProgressBar";

const UploadForm = () => {
  let initialValues = {
    image: "",
    imageTitle: "",
  };

  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [values, setValues] = useState(initialValues);
  const [title, setTitle] = useState("");

  let { image, imageTitle } = values;

  const types = ["image/png", "image/jpeg"];

  const handleChange = (e) => {};

  const handleSubmit = (e) => {
    e.preventDefault();
    let selected = image;

    if (
      selected &&
      types.includes(selected.type) &&
      title.length !== 0 &&
      title.length < 100
    ) {
      console.log(title.length);
      setFile(selected);
      setValues({ image: "", imageTitle: title });
      // console.log(selected);
      //setValues({ ...values, image: "" });
      setTitle("");
      setError("");
    } else if (title.length === 0) {
      console.log(imageTitle.length);
      setError("Please enter a title for the image ");
    } else if (title.length > 100) {
      setError("Please enter a title for the image less than 100 words.");
    } else {
      setFile(null);
      console.log(imageTitle.length);
      setError("Please select an image file (png or jpg)");
    }

    //console.log(image, imageTitle);
  };

  return (
    <form>
      {image && (
        <img
          style={{ maxWidth: "200px" }}
          src={URL.createObjectURL(image)}
          alt="sample_img"
        />
      )}
      <label>
        <input
          type="file"
          onChange={(e) => setValues({ ...values, image: e.target.files[0] })}
        />
        <span>+</span>
      </label>
      <div className="imageTitleInput">
        <label htmlFor="image_title">Image Title</label>
        <input
          type="text"
          name="image_title"
          className="form-control"
          value={title}
          placeholder="Enter the image title"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <button className="submitImg" onClick={handleSubmit}>
        Submit
      </button>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
        {file && imageTitle && (
          <ProgressBar file={file} setFile={setFile} imageTitle={imageTitle} />
        )}
      </div>
    </form>
  );
};

export default UploadForm;
