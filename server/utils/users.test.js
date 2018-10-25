const expect = require('expect');
const {Users} = require('./../utils/users');


describe('Users',()=>{
    var users;
    beforeEach(()=>{
        users = new Users();
        users.users =[{
            id:'1',
            name:'Mike',
            room:'Ballers'
        },{
            id:'2',
            name:'Anthony',
            room:'Pimps'
        },{
            id:'3',
            name:'Jon',
            room:'Ballers'
        }]
    });
    it('Should add new users',()=>{
        var users = new Users();
        var user = {
            id:'123',
            name:'Jon',
            room:'Ballers'
        };
        var resUser = users.addUser(user.id,user.name,user.room);
        expect(users.users).toEqual([user]);
    });
    it('Should return names for Ballers room',()=>{
        var userList = users.getUserList('Ballers');
        expect(userList).toEqual(['Mike','Jon']);
    });
    it('Should return names for Pimps room',()=>{
        var userList = users.getUserList('Pimps');
        expect(userList).toEqual(['Anthony']);
    });
    it('Should remove user from the users array',()=>{
        var id = '3';
        let user = users.removeUser(id);
        expect(user.id).toBe(id);
        expect(users.users.length).toBe(2);
        expect(users.users).toInclude(users.users[0],users.users[2]);
        console.log(`User ${user.name} has been removed`);
    });
    it('Should not remove invalid user',()=>{
        let id = '99';
        let user = users.removeUser(id);
        expect(user).toNotExist;
        expect(users.users.length).toBe(3);
    })
    it('Should return the user by id',()=>{
        var user = users.getUser('2');
        expect(user.name).toBe('Anthony');
    });
    it('Should not find user',()=>{
        var user = users.getUser('4');
        expect(user).toNotExist();
    });
});