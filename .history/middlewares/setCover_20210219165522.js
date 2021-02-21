module.exports = (req, res, next) => {
  console.log("file: ", req.file);
  if (req.file) {
    req.body.cover = `${req.protocol}://${req.get("host")}/${req.file.destination}${req.file.filename}`
    next()
  }
}
