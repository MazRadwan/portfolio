import React from "react";
import ReactModal from "../ReactModal/ReactModal";

const ReactModalParent = ({ onClose }) => {
  // State is controlled by ReactCommonParent, ReactModalParent acts as a passive renderer.
  return <ReactModal onClose={onClose} />;
};

export default ReactModalParent;
