import jwt from 'jsonwebtoken';

const config = {
  createToken(id) {
    return jwt.sign({ id }, 'secret', { expiresIn: 'id'});  
  }, 
  verifyToken(token) {
    return jwt.verify(token, 'secret');
  }  
}

export default config;
