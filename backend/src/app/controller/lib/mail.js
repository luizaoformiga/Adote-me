import nodemailer from 'nodemailer';
import mailConfig from '../../../config/config-mail';

const mail = nodemailer.createTransport(mailConfig);

export default mail;