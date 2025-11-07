const InvarriantError = require('../InvariantError');

describe('InvarriantError', ()=>{
    it('should create invarriantError correctly', ()=>{
        const invarriantError = new InvarriantError('an error occurs');

        expect(invarriantError.statusCode).toEqual(400);
        expect(invarriantError.message).toEqual('an error occurs');
        expect(invarriantError.name).toEqual('InvarriantError');
    })
})