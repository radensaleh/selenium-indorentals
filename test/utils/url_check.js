const UrlCheck = () => {
  if (process.env.MODE_LOCAL === "true") {
    return process.env.URL_LOCAL;
  } else {
    return process.env.URL_STAGING;
  }
};

export default UrlCheck;
