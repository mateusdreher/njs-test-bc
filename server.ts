import { app } from "./src/app";
import * as dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT || 3004;

try {
	app.listen(PORT);

	console.log(`Server running at ${PORT}`);
}
catch(error) {
	console.error(error)
}