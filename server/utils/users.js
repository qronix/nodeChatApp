class Users{
    constructor(){
        this.users = [];
    }
    addUser(id,name,room){
        var user = {id,name,room};
        this.users.push(user);
        return user;
    }
    removeUser(id){
        let user = this.getUser(id);

        if(user){
            this.users = this.users.filter((user)=>user.id !== id);
        }
        return user;
    }
    getUser(id){
        return this.users.filter((user)=>user.id===id)[0];
    }
    getUserList(room){
        var users = this.users.filter((user)=>user.room === room);
        var userNames = users.map((user)=>user.name);
        return userNames;
    }
    getUserRoom(id){
        var room = this.users.filter((user)=>user.id===id)[0].room;
        return room;
    }
}

module.exports={
    Users
}
//addUser(id, name, room)
//removeUser(id)
//getUser(id)
//getUserList(room)