require("dotenv").config();
const app = require("./app");

const PORT = process.env.PORT_URL || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
