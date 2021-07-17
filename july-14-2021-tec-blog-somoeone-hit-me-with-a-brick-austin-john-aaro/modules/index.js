
var sq = new Sequelize(dbname, user, password, config);

db = {
    Sequelize: Sequelize,
    sequelize: sq,
    Post: sq.import(__dirname + '/Post.js'),
    User: sq.import(__dirname + '/User.js')
}
module.exports = db; 




// let User = require('./User');
// let Post = require('./Post');
// let Comment = require('./Comment');


// User.hasMany(Post, {
//   foreignKey: 'user_id'
// });

// User.hasMany(Comment, {
//   foreignKey: 'user_id'
// });

// Post.belongsTo(User, {
//   foreignKey: 'user_id',
// });

// Post.hasMany(Comment, {
//   foreignKey: 'post_id',
// });

// Comment.belongsTo(User, {
//   foreignKey: 'user_id'
// });

// Comment.belongsTo(Post, {
//   foreignKey: 'post_id'
// });

// module.exports = { User, Post, Comment };  

