import React, { useRef, useEffect } from "react";
const { tableau } = window;

const TableauComponent = ({ url }) => {
  const ref = useRef(null);

  useEffect(() => {
    let viz = new tableau.Viz(ref.current, url);

    return () => {
      // Clean up the Tableau visualization when the component is unmounted.
      viz.dispose();
    };
  }, [url]);

  return <div style={{ width: "100%", height: "100%" }} ref={ref}></div>;
};

export default TableauComponent;
