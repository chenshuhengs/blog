const handleBlogRouter = (req, res) => {
  const method = req.method; // GET / POST
  const url = req.url;
  //   获取博客列表
  if (method === "GET" && url === "/api/blog/list") {
    return {
      msg: "这是获取博客列表的接口",
    };
  }
};

module.exports = handleBlogRouter;
