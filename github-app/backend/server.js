// github-app/backend/server.js
import app from "./app.js";
import config from "./config.js";

app.listen(config.PORT, () => {
  console.log(`TEOS Forge GitHub App backend listening on :${config.PORT}`);
});
