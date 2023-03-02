const { User, Thought } = require("../models");

module.exports = {
    getThoughts(req, res) {
        Thought.find()
            .populate("reactions")
            .then((thoughts) => res.json(thoughts))
            .catch((err) => res.status(500).json(err));
    },
    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
            .populate("reactions")
            .then((thought) => (!thought ? res.status(404).json({ message: "No thought found." }) : res.json(thought)))
            .catch((err) => res.status(500).json(err));
    },
    createThought(req, res) {
        Thought.create(req.body)
            .then((thought) => {
                return User.findOneAndUpdate({ _id: req.body.userId }, { $addToSet: { thoughts: thought._id } }, { new: true });
            })
            .then(res.json("Thought created."))
            .catch((err) => res.status(500).json(err));
    },
    updateThought(req, res) {
        Thought.findOneAndUpdate({ _id: req.params.thoughtId }, { $set: req.body }, { runValidatiors: true, new: true })
            .then((thought) => (!thought ? res.status(404).json({ message: "No thought found." }) : res.json(thought)))
            .catch((err) => res.status(500).json(err));
    },
    deleteThought(req, res) {
        Thought.findOneAndDelete({ _id: req.params.thoughtId })
            .then(res.json("Thought deleted."))
            .catch((err) => res.status(500).json(err));
    },
    addReaction(req, res) {
        console.log(req.body);
        Thought.findOneAndUpdate({ _id: req.params.thoughtId }, { $addToSet: { reactions: req.body } }, { runValidators: true, new: true })
            .then((thought) => (!thought ? res.status(404).json({ message: "No thought with this id." }) : res.json(thought)))
            .catch((err) => res.status(500).json(err));
    },
    deleteReaction(req, res) {
        Thought.findOneAndUpdate({ _id: req.params.thoughtId }, { $pull: { reactions: { reactionId: req.params.reactionId } } }, { runValidators: true, new: true })
            .then((thought) => (!thought ? res.status(404).json({ message: "No thought with this id." }) : res.json(thought)))
            .catch((err) => res.status(500).json(err));
    },
};
