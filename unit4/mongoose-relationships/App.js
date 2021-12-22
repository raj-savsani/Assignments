const express = require("express");
const app = express();
app.use(express.json());

const mongoose = require("mongoose");
const connect = () => {
    return mongoose.connect("mongodb://127.0.0.1:27017/library_system");
};

const bookSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        body: { type: String, required: true },
        author_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "author",
            required: true,
        },
        section_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "section",
            required: true,
        },
    },
    {
        versionKey: false,
        timestamps: true,
    }
);
const Book = mongoose.model("book", bookSchema);

const authorSchema = new mongoose.Schema(
    {
        first_name: { type: String, required: true },
        last_name: { type: String, required: false },
    },
    {
        versionKey: false,
        timestamps: true,
    }
);
const Author = mongoose.model("author", authorSchema);

const sectionSchema = new mongoose.Schema(
    {
        section: { type: String, required: true },
    },
    {
        versionKey: false,
        timestamps: true,
    }
);
const Section = mongoose.model("section", sectionSchema);

const userSchema = new mongoose.Schema(
    {
        first_name: { type: String, required: true },
        last_name: { type: String, required: false },
        book_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "book",
            required: true,
        },
    },
    {
        versionKey: false,
        timestamps: true,
    }
);
const User = mongoose.model("user", userSchema);

app.post("/author", async (req, res) => {
    try {
        const author = await Author.create(req.body);

        return res.status(201).send(author);
    } catch (e) {
        return res.status(500).send({ message: e.message });
    }
});

app.post("/section", async (req, res) => {
    try {
        const section = await Section.create(req.body);

        return res.status(201).send(section);
    } catch (e) {
        return res.status(500).send({ message: e.message });
    }
});

app.get("/author", async (req, res) => {
    try {
        const author = await Author.find().lean().exec();

        return res.status(200).send(author);
    } catch (e) {
        return res.status(500).send({ message: e.message });
    }
});

app.get("/author/:id", async (req, res) => {
    try {
        const author = await Author.findById(req.params.id).lean().exec();

        return res.status(200).send(author);
    } catch (e) {
        return res.status(500).send({ message: e.message });
    }
});

// correct
app.post("/book", async (req, res) => {
    try {
        const book = await Book.create(req.body);

        return res.status(201).send(book);
    } catch (e) {
        return res.status(500).send({ message: e.message });
    }
});

app.get("/books", async (req, res) => {
    try {
        const book = await Book.find().populate('author_id').populate('section_id').lean().exec();

        return res.status(200).send(book);
    } catch (e) {
        return res.status(500).send({ message: e.message });
    }
});

// correct
// find books in a section
app.get("/book/section_id=:section_id", async (req, res) => {
    try {
        const book = await Book.find({ section_id: req.params.section_id })
            .populate("author_id")
            .populate("section_id")
            .lean()
            .exec();

        return res.status(200).send(book);
    } catch (e) {
        return res.status(500).send({ message: e.message });
    }
});

// correct
// find all books written by an author
app.get("/book/author_id=:author_id", async (req, res) => {
    try {
        const book = await Book.find({ author_id: req.params.author_id })
            .populate("author_id")
            .populate("section_id")
            .lean()
            .exec();

        return res.status(200).send(book);
    } catch (e) {
        return res.status(500).send({ message: e.message });
    }
});

// correct
// find books in a section that are not checked out
app.get(
    "/book/author_id=:author_id/section_id=:section_id",
    async (req, res) => {
        try {
            const book = await Book.find({
                author_id: req.params.author_id,
                section_id: req.params.section_id,
            })
                .populate("author_id")
                .populate("section_id")
                .lean()
                .exec();

            return res.status(200).send(book);
        } catch (e) {
            return res.status(500).send({ message: e.message });
        }
    }
);

// user has buy a book
app.post("/user/:book_id", async (req, res) => {
    try {
        const user = await User.create(req.body);

        return res.status(201).send(user);
    } catch (e) {
        return res.status(500).send({ message: e.message });
    }
});

// will return all checkout books
// find books that are checked out
app.get("/user/books", async (req, res) => {
    try {
        const books = await User.find({}, { book_id: 1 })
            .populate("book_id")
            .populate({
                path: "book_id",
                populate: {
                    path: "author_id",
                },
            })
            .populate({
                path: "book_id",
                populate: {
                    path: "section_id",
                },
            })
            .lean()
            .exec();

        return res.status(201).send(books);
    } catch (e) {
        return res.status(500).send({ message: e.message });
    }
});

// get books by author_id and section_id
// find books of 1 author inside a section
app.get(
    "/books/author_id=:author_id/section_id=:section_id",
    async (req, res) => {
        try {
            const books = await Book.find({
                author_id: req.params.author_id,
                section_id: req.params.section_id,
            })
                .lean()
                .exec();

            return res.status(201).send(books);
        } catch (e) {
            return res.status(500).send({ message: e.message });
        }
    }
);

app.listen(4321, async () => {
    await connect();
    console.log("LISTENING ON PORT 4321.");
});
