import jwt from 'jsonwebtoken';
import config from '../config';

const verifyToken = async (request, response, next) => {
  const token = request.headers.authorization && request.headers.authorization.split(" ")[0] === 'Bearer'
    ? request.headers.authorization.split(" ")[1]
    : (request.body.token || request.query.token || request.headers['x-access-token'])

    if (!token) return next();

    try {
      const decodedToken = jwt.verify(token, config.publicKey, config.authOptions);
      request.decoded = decodedToken;
      next();

    } catch (error) {
      return response.status(401).json({ error: 'Token not informed or invalid!'});
    }
  }

  const protectRoute = (request, response, next) => {
    if(request.decoded) return next();
    
  return response.status(401).json({ error: 'Not authorized!' });
}

export { verifyToken, protectRoute }