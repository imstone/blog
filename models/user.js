var mongodb = require('./db');
function User(user){
    this.name = user.name;
    this.password = user.password;
    this.email = user.email;
}

module.exports = User;
// zhushi
User.prototype.save = function(callback) {
    var user = {
        name: this.name,
        password: this.password,
        email: this.email
    };
    mongodb.open(function(err, db){
        if(!err){
            console.log('connect db');
            db.collection('users',{safe:true}, function(err, collection){
                if (err) {
                    mongodb.close();
                    return callback(err);
                }
                collection.insert(user,{safe:true},function(err, result){
                    mongodb.close();
                    if (err) {
                        mongodb.close();
                        return callback(err);
                    }
                    callback(null, user[0])
                }); 
            })
        }else{
            return callback(err)
        }
    })
};