const InvariantError = require('../../exceptions/InvariantError');
const { UserPayloadSchema } = require('./schema');
 
const UsersValidator = {
  validateUserPayload: (payload) => {
    const { error } = UserPayloadSchema.validate(payload);
    if (error) {
      throw new InvariantError(error.message);
    }
  },
};
 
module.exports = UsersValidator;