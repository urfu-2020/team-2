import {Sequelize} from "sequelize-typescript";

function initialize() {
    const sequelize = new Sequelize('TUT_DOLZHEN_BYT_URI');
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

export {initialize}