const mongoose = require("mongoose");
const { Schema } = mongoose;

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      minlength: 10,
      maxlength: 140,
      trim: true,
    },

    content: {
      type: String,
      required: true,
      minlength: 140,
      maxlength: 10000,
      trim: true,
    },

    slug: {
      type: String,
      required: false,
      trim: true,
      unique: true,
    },
  },
  { timestamps: true }
);

postSchema.pre("save", async function (next) {
  // Replace all special characters to have only word or numbers in the slug
  let slug = this.title.replace(/[^a-zA-Z0-9 ]/g, "").toLowerCase();
  slug = slug.split(" ").join("-");
  this.slug = slug;
  let slugNumber = 1;
  let slugExists = await this.constructor.findOne({ slug: this.slug });
  // While there's an document with the same slug. Recreate the slug adding a number to the end.
  while (slugExists) {
    // If a number was added already, remove the added number and add the next number.
    if (slugNumber > 1) {
      this.slug =
        this.slug.split("-").slice(0, -1).join("-") + "-" + slugNumber;
    } else {
      this.slug = this.slug + "-" + slugNumber;
    }
    slugNumber++;
    slugExists = await this.constructor.findOne({ slug: this.slug });
  }
  next();
});

const postModel = mongoose.model("posts", postSchema);

module.exports = postModel;
