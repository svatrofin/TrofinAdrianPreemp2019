

function errorHandler (err, req, res, next) {
    if (res.headersSent) {
      return next(err)
    }
    res.status(404)
    res.render('File Not Found', { error: err })
  }

  module.export = errorHandler;