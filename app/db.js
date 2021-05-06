import {Sequelize, Model, DataTypes} from "sequelize";
const sequelize = new Sequelize('TUT_DOLZHEN_BYT_URI');

class User extends Model {}

User.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    modelName: 'User'
});

function initialize() {
    authenticate(sequelize);
}

async function authenticate(sequelize) {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

export {initialize, User}