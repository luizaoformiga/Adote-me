import socketio from 'socket.io';
import hhtp from 'http';
import app from '../../app/app';

const server = hhtp.createServer(app);
const io = socketio(server);

let onlineUsers = 0;

io.on('connection', socket => {
    let addedUser = false
        
    socket.on('newMessage', data => {
        socket.broadcast.emit('newMessage', {
            username: socket.username,
            message: data
        })
        
        console.log('New message', data);
    })
    
    socket.on('addUser', username => {
        if (addedUser) return
        
        socket.username = username
        ++onlineUsers
        addedUser = true
        
        socket.emit('login', { onlineUsers });
        
        socket.broadcast.emit('userJoined', {
            username: socket.username,
            onlineUsers
        })
        
        console.log(`User ${username} added`);
    })
    
    socket.on('typing', () => {
        socket.broadcast.emit('typing', {
            username: socket.username
        })
    })
    
    socket.on('stopTyping', () => {
        socket.broadcast.emit('stopTyping', {
            username: socket.username
        })
    })
    
    socket.on('disconnect', () => {
        if (addedUser) {
            --onlineUsers
            
            socket.broadcast.emit('userLeft', {
                username: socket.username,
                onlineUsers
            })
        }
    })      
})    

export default io;