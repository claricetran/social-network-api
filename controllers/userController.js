const { User, Thought } = require("../models");

module.exports = {
    getUsers(req, res) {
        User.find()
            .select("-__v")
            .populate("friends")
            .populate("thoughts")
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err));
    },
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
            .select("-__v")
            .populate("friends")
            .populate({
                path: "thoughts",
                populate: "reactions",
            })
            .then((user) => (!user ? res.status(404).json({ message: "No user found." }) : res.json(user)))
            .catch((err) => res.status(500).json(err));
    },
    createUser(req, res) {
        User.create(req.body)
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },
    updateUser(req, res) {
        User.findOneAndUpdate({ _id: req.params.userId }, { $set: req.body }, { runValidators: true, new: true })
            .then((user) => (!user ? res.status(404).json({ message: "No user found." }) : res.json(user)))
            .catch((err) => res.status(500).json(err));
    },
    deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.userId })
            .then((user) => (!user ? res.status(404).json({ message: "No user found." }) : Thought.deleteMany({ _id: { $in: user.thoughts } })))
            .then(() => res.json({ message: "User and related thoughts deleted." }))
            .catch((err) => res.status(500).json(err));
    },
    addFriend(req, res) {
        User.findOneAndUpdate({ _id: req.params.userId }, { $addToSet: { friends: req.params.friendId } }, { new: true })
            .then((user) => (!user ? res.status(404).json({ message: "No user found." }) : res.json(user)))
            .catch((err) => res.status(500).json(err));
    },
    deleteFriend(req, res) {
        User.findOneAndUpdate({ _id: req.params.userId }, { $pull: { friends: req.params.friendId } }, { new: true })
            .then((user) => (!user ? res.status(404).json({ message: "No user found." }) : res.json(user)))
            .catch((err) => res.status(500).json(err));
    },
};
