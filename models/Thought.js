const { Schema, model } = require("mongoose");
const dayjs = require("dayjs");

const reactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: new Schema.Types.ObjectId(),
    },
    reactionBody: {
        type: String,
        required: true,
        maxLength: 280,
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: dayjs(),
        get: (v) => `${dayjs(v).format("MMM DD, YYY at hh:mm a")}`,
    },
});

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280,
        },
        createdAt: {
            type: Date,
            default: dayjs(),
            get: (v) => `${dayjs(v).format("MMM DD, YYY at hh:mm a")}`,
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

thoughtSchema.virtual("reactionCount").get(function () {
    console.log(`Reaction count: ${this.reactions.length}`);
    return this.reactions.length;
});

const Thought = model("Thought", thoughtSchema);

module.exports = Thought;
