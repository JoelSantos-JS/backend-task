const validateBody = (req, res, next) => {
  const { body } = req;

  if (body.title === undefined) {
    return res.status(400).json({ message: "The field 'title' is required " });
  }
  if (body.title === "") {
    return res.status(400).json({ message: "The field 'title' is not empty" });
  }
  next();
};
const validateStatus = (req, res, next) => {
  const { body } = req;

  if (body.title === undefined) {
    return res.status(400).json({ message: "The field 'title' is required " });
  }
  if (body.title === "") {
    return res.status(400).json({ message: "The field 'title' is not empty" });
  }
  if (body.status === undefined) {
    return res.status(400).json({ message: "The field 'status' is required " });
  }
  if (body.status === "") {
    return res.status(400).json({ message: "The field 'status' is not empty" });
  }
  next();
};

module.exports = {
  validateBody,
  validateStatus,
};
