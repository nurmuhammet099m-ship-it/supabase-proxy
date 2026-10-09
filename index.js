const express = require('express');
const proxy = require('express-http-proxy');
const app = express();
const PORT = process.env.PORT || 3000;

app.use('/', proxy('https://hifaxjsvxspicwzccrsh.supabase.co'));

app.listen(PORT, () => {
  console.log(`Proxy running on port ${PORT}`);
});
