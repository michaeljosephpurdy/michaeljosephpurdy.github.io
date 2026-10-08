export const esc = (s = '') =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// ISO date/datetime -> YYYYMMDD
export const ymd = (iso) => esc(String(iso).slice(0, 10).replaceAll('-', ''));

// `root` is the relative path back to the site root, so output works from any host/subpath.
export const layout = ({ title, root, body }) => `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(title)} - mikepurdy.dev</title>
  <link rel="stylesheet" href="${root}style.css">
</head>
<body>
  <main>${body.replaceAll('href="site:', `href="${root}`)}</main>
  <footer></footer>
</body>
</html>
`;
