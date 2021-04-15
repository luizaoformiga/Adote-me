import jwt from 'jsonwebtoken';

const generator = {
  createToken(id) {
    const create = jwt.sign({ id }, 'secret', { expiresIn: 'id'}); 
    return create;  
  }, 
  verifyToken(token) {
    const verify = jwt.verify(token, 'secret');
    return verify;
  }  
}

export default generator;
