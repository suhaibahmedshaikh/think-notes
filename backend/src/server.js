import app from "./app.js";
import { PORT } from "./configs/envConfig.js";
import { connectDB } from "./configs/dbConfig.js";

const startServer = async () => {
  try {
    // connect to DB
    await connectDB();

    // start server
    app.listen(PORT, () => {
      console.log(`Server is running on PORT: ${PORT}`);
    });
  } catch (error) {
    console.error("Error starting server: ", error);
    process.exit(1);
  }
};

startServer();