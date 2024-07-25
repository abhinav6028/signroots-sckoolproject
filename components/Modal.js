import { motion } from "framer-motion";

const Modal = ({ setSelectedImg, selectedImg }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImg(null);
    }
  };

  return (
    <motion.div
      className="backdrop"
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {console.log(selectedImg)}
      <motion.img
        src={selectedImg.url}
        alt="enlarged pic"
        initial={{ y: "-100vh" }}
        animate={{ y: "0" }}
      />
      <motion.p>{selectedImg.imageTitle}</motion.p>
    </motion.div>
  );
};

export default Modal;
