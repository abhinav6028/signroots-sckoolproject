import { useState, useEffect } from "react";
import { storage, store, timestamp } from "../firebaseConfig";

const useStorage = (file, imageTitle) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // references
    const storageRef = storage.ref(file.name);
    const collectionRef = store.collection("images");

    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        // console.log(url);
        const createdAt = timestamp();
        await collectionRef.add({ url, createdAt, imageTitle });
        setUrl(url);
      }
    );
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
