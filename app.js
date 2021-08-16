const handleBlogRouter = require("./src/router/blog");
const access = require("./src/utils/log.js");
const serverHandle = (req, res) => {
  // 设置返回格式
  res.setHeader("Content-type", "application/json");
  // 处理 blog 路由
  const blogData = handleBlogRouter(req, res);
  if (blogData) {
    res.end(JSON.stringify(blogData));
    access.access(
      `${req.method} -- ${req.url} -- ${
        req.headers["user-agent"]
      } -- ${Date.now()}`
    );
    return;
  }

  // 404
  res.writeHead(404, { "Content-type": "text/plain" });
  res.write("404 Not Found\n");
  res.end();
};
module.exports = serverHandle;
