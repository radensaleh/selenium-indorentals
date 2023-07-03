import navigator from "navigator";

const OSFunction = async () => {
  let os = navigator.userAgent;
  let finalOs = "";
  if (os.search("Windows") !== -1) {
    finalOs = "Windows";
  } else if (os.search("Mac") !== -1) {
    finalOs = "MacOS";
  } else if (os.search("X11") !== -1 && !(os.search("Linux") !== -1)) {
    finalOs = "UNIX";
  } else if (os.search("Linux") !== -1 && os.search("X11") !== -1) {
    finalOs = "Linux";
  }

  return finalOs;
};

export default OSFunction;
