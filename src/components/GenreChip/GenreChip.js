import React, { useEffect, useState } from "react";

const GenreChip = ({ genreText }) => {
  const [chipWidth, setChipWidth] = useState("");

  useEffect(() => {
    if (genreText.length < 7) {
      setChipWidth("60px");
    } else if (genreText.length === 7) {
      setChipWidth("70px");
    } else if (genreText.length === 8) {
      setChipWidth("80px");
    } else if (genreText.length === 9) {
      setChipWidth("90px");
    }
  }, [chipWidth]);

  return (
    <div
      className="genre-chip"
      style={{
        width: chipWidth,
        height: "25px",
        borderRadius: "20px",
        backgroundColor: "#007CEF",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginRight: "10px",
        padding: "0px 4px",
      }}
    >
      <h4>{genreText}</h4>
    </div>
  );
};

export default GenreChip;
