function getList(author, keyworld) {
  let sql = `select * from blogs where 1=1 `;
  if (author) {
    sql += `and author = '${author}' `;
  }
  if (keyworld) {
    sql += `and title like '%${keyworld}%' `;
  }
  sql += `order by createtime desc;`;
  return exec(sql);
}
