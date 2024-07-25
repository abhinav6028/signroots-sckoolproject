import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore("images");

  return (
    <div className="img-grid">
      {console.log(docs)}
      {docs ? (
        docs.map((doc) =>
          doc ? (
            <motion.div
              className="img-wrap"
              key={doc.id}
              layout
              whileHover={{ opacity: 1 }}
              s
              onClick={() => setSelectedImg(doc)}
            >
              <motion.div className="img-container">
                <motion.img
                  src={doc.url}
                  alt="uploaded pic"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                />
              </motion.div>
              <motion.p
                className="img-title"
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                {doc.imageTitle}
              </motion.p>
            </motion.div>
          ) : (
            <h1>Loading</h1>
          )
        )
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
};

export default ImageGrid;
