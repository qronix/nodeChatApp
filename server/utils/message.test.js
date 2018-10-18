var expect = require('expect');

var {generateMessage} = require('./message');

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