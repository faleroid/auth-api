const ClientError = require("./ClientError");

class InvarriantError extends ClientError{
    constructor(message){
        super(message);

        this.name = 'InvarriantError';
    }
}

module.exports = InvarriantError;