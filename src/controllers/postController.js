const Post = require("../models/postModel");

exports.getAllPosts = async (req, res, next) => {
  try {
    const posts = await Post.find();

    res.status(200).json({
      status: "success",
      count: posts.length,
      data: {
        posts,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "error",
    });
  }
};

exports.getOnePost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: {
        post,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "error",
    });
  }
};

exports.createPost = async (req, res, next) => {
  try {
    const post = await Post.create(req.body);

    res.status(200).json({
      status: "success",
      data: {
        post,
      },
    });
  } catch (e) {
    console.log(e);
    res.status(400).json({
      status: "error",
    });
  }
};

exports.updatePost = async (req, res, next) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: "success",
      data: {
        post,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "error",
    });
  }
};

exports.deletePost = async (req, res, next) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);

    res.status(200).json({
      status: "success",
    });
  } catch (e) {
    console.log(e);
    res.status(400).json({
      status: "error",
    });
  }
};

exports.deleteAllPosts = async (req, res, next) => {
    try {
       await Post.deleteMany();
  
      res.status(200).json({
        status: "success",
      });
    } catch (e) {
      console.log(e);
      res.status(400).json({
        status: "error",
      });
    }
  };
  
