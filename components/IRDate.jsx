import React from "react";

function IRDate({
  date,
  y = "numeric",
  m = "long",
  d = "2-digit",
  withTime = false,
}) {
  let options = { year: y, month: m, day: d };
  if (withTime) {
    options["hour"] = "numeric";
    options["minute"] = "numeric";
  }
  return <span>{new Date(date).toLocaleDateString("fa", options)}</span>;
}

export default IRDate;
