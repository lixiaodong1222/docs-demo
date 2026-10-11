import path from "node:path";
import fs from "node:fs";
console.log("==== auto_sidebar 模块加载成功 ====");
// 文件根目录
const DIR_PATH = path.resolve();
// 白名单,过滤不是文章的文件和文件夹
const WHITE_LIST = [
  "index.md",
  ".vitepress",
  "node_modules",
  ".idea",
  "assets",
];
// 判断是否是文件夹
const isDirectory = (p) => fs.lstatSync(p).isDirectory();
// 取差值
const intersections = (arr1, arr2) =>
  Array.from(new Set(arr1.filter((item) => !new Set(arr2).has(item))));

// 递归生成侧边栏
function getList(params, path1, pathname) {
  const res = [];
  for (const file of params) {
    const fullPath = path.join(path1, file);
    const isDir = isDirectory(fullPath);

    if (isDir) {
      // 文件夹递归
      const subFiles = fs.readdirSync(fullPath);
      res.push({
        text: file,
        collapsible: true,
        items: getList(subFiles, fullPath, `${pathname}/${file}`),
      });
    } else {
      const filename = path.basename(file);
      const suffix = path.extname(filename);
      if (suffix !== ".md") continue;

      // ✅ 提前去除 .md
      const title = filename.replace(/\.md$/, "");
      let link;
      if (filename === "index.md") {
        // index.md 路由末尾带斜杠
        link = `${pathname}/`;
      } else {
        // 普通md，不带后缀
        link = `${pathname}/${title}`;
      }
      res.push({
        text: title,
        link: link,
      });
    }
  }
  return res;
}

export const set_sidebar = (pathname) => {
  const dirPath = path.join(DIR_PATH, pathname);
  console.log("【set_sidebar】读取目录：", dirPath);
  try {
    const files = fs.readdirSync(dirPath);
    console.log("【set_sidebar】目录下文件列表：", files);
    const items = intersections(files, WHITE_LIST);
    console.log("【set_sidebar】过滤后文件：", items);
    const sidebarData = getList(items, dirPath, pathname);
    console.log("【set_sidebar】生成侧边栏结果：", JSON.stringify(sidebarData,null,2));
    return sidebarData;
  } catch(err) {
    console.error("【set_sidebar 读取文件夹异常】", err);
    return [];
  }
};
