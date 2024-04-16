import React, { useState } from "react";
import ReactSection from "../ReactSection/ReactSection";
import ReactModalParent from "../ReactModalParent/ReactModalParent";

const ReactCommonParent = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
    console.log("Modal state changed to:", isModalOpen);
  };

  return (
    <div>
      <ReactSection onOpenModal={toggleModal} />
      {isModalOpen && <ReactModalParent onClose={toggleModal} />}
    </div>
  );
};

export default ReactCommonParent;
