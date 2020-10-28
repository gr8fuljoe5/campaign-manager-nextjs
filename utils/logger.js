const log = (msg, type) => {
  if (type === "log" || type === "error" || type === "warning") {
    return console[type](msg);
  } else {
    return console.log(msg);
  }
};
