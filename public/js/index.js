var socket = io();

socket.on('connect',function(){
    console.log('Connected to server!');
});

socket.on('disconnect',function(){
    console.log('Disconnected from server!');
});

// socket.on('newEmail',function(email){
//     console.log('new email!',email);
// });

socket.on('newMessage',function(message){
    console.log(message);
    var li = $('<li></li>');
    li.text(`${message.from}: ${message.text}`);

    $('#messages').append(li);
});

$('#message-form').on('submit',function(event){
    event.preventDefault();
    socket.emit('createMessage',{
        from: 'User',
        text:$('[name=message]').val()
    },function(data){
        console.log(data);
    });
    $('[name=message]').val('');
});