import jwt from 'jsonwebtoken';


export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRECT, (err, user) => {
    console.error(err);

    if (err) return res.sendStatus(403);

    req.user = user;

    next();
  });
};
