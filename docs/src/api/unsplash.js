import axios from "axios";

export default axios.create({
	baseURL: "https://api.unsplash.com",
	headers: {
		Authorization:
			"Client-ID d5b276dc9d634a2088f008322b145f149e1116b325e39d4547315c347f56425c"
	}
});
