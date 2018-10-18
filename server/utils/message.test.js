var expect = require('expect');

var {generateMessage,generateLocationMessage} = require('./message');

describe('generateMessage',()=>{
    it('should generate correct message object',()=>{
        //store res in variable
        //assert from match
        //assert text match
        //assert createdAt is number
        var from = "testSuite";
        var text = "testing";
        var res = generateMessage(from,text);

        expect(res.from).toBe(from);
        expect(res.text).toBe(text);
        expect(typeof res.createdAt).toBe('number');
    });
});

describe('generateLocationMessage',()=>{
    it('should generate a correct location object',()=>{
        var latitude = 12324;
        var longitude = 23234;
        var from = "Admin";
        var url = `http://www.google.com/maps?q=${latitude},${longitude}`;

        var locationObj = generateLocationMessage(from,latitude,longitude);

        expect(locationObj).toInclude({
            from,
            url
        });
        expect(locationObj.from).toBe(from);
        expect(locationObj.url).toBe(url);
        expect(typeof locationObj.createdAt).toBe('number');
    });
});