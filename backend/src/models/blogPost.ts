import { Schema, model } from 'mongoose';

const blogPostSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
    validate: {
      validator: function(v: string) {
        return /^(http|https):\/\/[^ "]+$/.test(v);
      },
      message: (props: { value: string }) => `${props.value} is not a valid URL!`,
    },
  },
}, { timestamps: true });

const BlogPost = model('BlogPost', blogPostSchema);

export default BlogPost;