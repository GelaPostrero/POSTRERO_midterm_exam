//import all required modules
import { Sequelize, DataTypes } from 'sequelize';
import express from 'express';

const app = express();

//this connects the sequelize to mysql
const sequelize = new Sequelize('user_db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

//defining the user model
const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

//this sync with the database
sequelize.sync();

//defining the route /user
app.get('/users', async (req, res) => {
    const users = await User.findAll();
    res.json(users);
});

//starts the server on port 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});