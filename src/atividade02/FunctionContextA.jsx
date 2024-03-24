import FunctionContextB from "./FunctionContextB";
import FunctionContextC from "./FunctionContextC";
import FunctionContextD from "./FunctionContextD";

import ColorTheme from "./MyColorContext";

const FunctionContextA = () => {
  const cores = { bkgA: "green", bkgB: "white", bkgC: "yellow", bkgD: "blue" };

  return (
    <ColorTheme.Provider value={cores}>
      <div>
        <h1 style={{ backgroundColor: cores.bkgA }}>Contexto A</h1>
      </div>
      <FunctionContextB />
      <FunctionContextC />
      <FunctionContextD />
    </ColorTheme.Provider>
  );
};

export default FunctionContextA;
