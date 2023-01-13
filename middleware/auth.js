const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token  = req.headers.token;

  if (!token) {
    return res.status(402).send("Token Missing");
  }

  try {
    // const decode = jwt.verify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOTJlZTU2NmY5ZjExZDQyNTJhNTI2YiIsImVtYWlsIjoiMTIzQGdtYWlsLmNvbSIsImlhdCI6MTY3MTI3NDI1NSwiZXhwIjoxNjcxMjgxNDU1fQ.0dcc2bIUrUX8WsXSUAD0apLYCuFlrQKu3NbYMSOYL88', process.env.SECRET);
    const decode = jwt.verify(token, process.env.SECRET);
    req.user = decode;
    return next()
  } catch (error) {
    res.status(403).send("token is invalid");
  }

};

module.exports = auth
