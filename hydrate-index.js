const { renderToString } = require('./hydrate');
const fs = require('fs');

const html = fs.readFileSync("./src/index.html", { encoding: "utf-8" });

renderToString(html, {
  prettyHtml: true,
}).then((results) => {
  if (!fs.existsSync('./www/ssr')) {
    fs.mkdirSync('./www/ssr', { recursive: true })
  }
  fs.writeFileSync("./www/ssr/index.html", results.html, {
    encoding: "utf-8",
  });
});
