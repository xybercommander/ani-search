import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const useCorrectDate = (epochDate) => {
  const [fixedDate, setFixedDate] = useState("");

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  useEffect(() => {
    const extractedDate = epochDate.substr(0, 10);
    const day = Number(`${extractedDate[8]}${extractedDate[9]}`);
    const month = Number(`${extractedDate[5]}${extractedDate[6]}`);
    const year = Number(
      `${extractedDate[0]}${extractedDate[1]}${extractedDate[2]}${extractedDate[3]}`
    );
    var prefix = "";

    if (extractedDate[8] === "0" || extractedDate[8] !== "1") {
      if (extractedDate[9] === "1") {
        prefix = "st";
      } else if (extractedDate[9] === "2") {
        prefix = "nd";
      } else if (extractedDate[9] === "3") {
        prefix = "rd";
      } else {
        prefix = "th";
      }
    } else {
      prefix = "th";
    }

    setFixedDate(`${day}${prefix} ${months[month - 1]}, ${year}`);
  }, [epochDate]);

  return fixedDate;
};

useCorrectDate.propTypes = {
  epochDate: PropTypes.string.isRequired,
};

export default useCorrectDate;
