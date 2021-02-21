module.exports = (req, res, next) => {
  console.log("file: ", req);
  if (req.file) {
    req.body.cover = `${req.protocol}://${req.get("host")}/${req.file.destination}${req.file.filename}`
    next()
  }
}
