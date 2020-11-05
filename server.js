const { connectToDB } = require("./utils/db");

(async function () {
  await connectToDB();
})();
