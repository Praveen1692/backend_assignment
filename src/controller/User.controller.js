


const { count } = require("console");
const userService = require("../services/User.services.js");


async function getAll(req, res, next) {
    try {
        const users = await userService.getAllUsers();

        res.status(200).json({ data: users, count: users.length })

    } catch (error) {
        next(error)

    }

}

async function create(req, res, next) {
    try {
        const user = await userService.createUser(req.body);
        res.status(201).json({ message: "User created", data: user })

    } catch (error) {
        next(error);

    }

}


async function getOne(req, res, next) {
    try {
        const user = await userService.getUserById(req.params.id);

        if (!user) {
            return res.status(400).json({ error: "User Not Found" })
        }
        res.status(200).json({ message: "User is Found", data: user })

    } catch (error) {
        next(error)

    }

}

async function update(req, res, next) {
    const id = req.params.id;
    const field = req.body;
    try {
        const user = await userService.updatedUser(id, field);
        if (!user) {
            return res.status(404).json({ error: "User is not found" })
        }

        res.status(200).json({ message: "User Updated", data: user })

    } catch (error) {
        next(error)

    }

}

async function remove(req, res, next) {
    const id = req.params.id;
    try {
        const deletedUser = await userService.deleteUser(id);
        if (!deletedUser) {
            return res.status(404).json({ error: "User is not found" })
        }
        res.json({ message: "User is deleted" })

    } catch (error) {
        next(error)

    }

}

async function getRecentUser(req, res, next) {
    try {
        const user = await userService.getRecentUser();
        res.json({ data: user, count: user.length });

    } catch (error) {
        next(error);

    }

}


module.exports = {
    getAll,
    create,
    getOne,
    update,
    remove,
    getRecentUser
}