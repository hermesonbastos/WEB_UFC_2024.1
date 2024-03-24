import ColorTheme from "./MyColorContext";
import FunctionContextD from "./FunctionContextD";
import { useContext } from "react";

const FunctionContextC = () => {

    const { bkgC } = useContext(ColorTheme);

  return (
    <ColorTheme.Consumer>
      {(value) => {
        return (
          <div>
            <h1 style={{ backgroundColor: bkgC }}>Contexto C</h1>
          </div>
        );
      }}
    </ColorTheme.Consumer>
  );
};

export default FunctionContextC;
