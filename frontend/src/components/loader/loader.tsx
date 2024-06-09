import React from "react";

interface IProps {
  variants?: "primary" | "secondary";
}

const Loader: React.FunctionComponent<IProps> = ({
  variants = "primary"
}) => {
  return (
    <>
      {variants === "primary" ? (
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        <span className="loader"></span>
      )}
    </>
  );
};

export default Loader;
