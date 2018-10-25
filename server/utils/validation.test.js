const expect = require('expect');
const {isRealString} = require('./../utils/validation');

describe('isRealString',()=>{
    it('Should reject non-string values',()=>{
        var nonString = 3;
        var res = isRealString(nonString);
        expect(res).toBe(false);
    });
    it('Should reject strings with only spaces',()=>{
        var testString = "    ";
        var res = isRealString(testString);
        expect(res).toBe(false);
    });
    it('Should allow a string value',()=>{
        var isAString = "test";
        var res = isRealString(isAString);
        expect(res).toBe(true);
    });
    it('Should allow strings which include spaces AND non-space values',()=>{
        var isAString = " test string ";
        var res = isRealString(isAString);
        expect(res).toBe(true);
    });
});