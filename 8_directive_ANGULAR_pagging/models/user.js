var data = require('../dataUser');
module.exports = function (sequenlize, Datatypes) {
    var User = sequenlize.define('User',{
       id:{
           type:Datatypes.INTEGER,
           primaryKey: true,
           autoIncrement: true,
       },
       username:{
           type:Datatypes.STRING,
           allowNull: false,
           unique: true
       },
       password:{
           type:Datatypes.STRING,
           allowNull:false
       },
       name:{
           type:Datatypes.STRING,
           allowNull: false,
       },
       gender:{
           type:Datatypes.STRING,
           allowNull: false,
       },
       age:{
           type:Datatypes.INTEGER,
           allowNull:false
       }
    },{
        freezeTableName:true
    });

    //User.sync({ force:true})
    /*
    data.forEach(function (user, index) {
        user.username += index;
        User.create(user);
    });*/
    return User;
}