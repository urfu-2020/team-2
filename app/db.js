const seq = require("sequelize");
let uri = process.env.DB_URI;
const sequelize = new seq.Sequelize(uri);

class User extends seq.Model {}

User.init({
    id: {
        type: seq.DataTypes.INTEGER,
        primaryKey: true
    },
    firstName: {
        type: seq.DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: seq.DataTypes.STRING
    }
}, {
    sequelize,
    modelName: 'User'
});

function initialize() {
    authenticate(sequelize);
    sequelize.sync();
}

async function authenticate(sequelize) {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

module.exports = {initialize, User};