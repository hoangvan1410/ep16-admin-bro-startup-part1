const { default: AdminBro } = require('admin-bro');
const AdminBroMongoose = require('admin-bro-mongoose');

AdminBro.registerAdapter(AdminBroMongoose);

const {User} =require('./users/user.entity');
const {Account}=require('./accounts/account.entity');
const {Rate}=require('./rates/rate.entity');
/** @type {import('admin-bro').AdminBroOptions} */
const options = {
  resources: [
    User,
    Account,
    Rate,
  ],
};

module.exports = options;
