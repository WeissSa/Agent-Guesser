import axios from "axios";

const API = {
    /**
     * 
     * @param {Object} stats contains acs, kd, kpr, apr, fkpr, and adr
     * @returns Agent name as a lowercase string
     */
    getAgent: async(stats)  => {
        return await axios.post(process.env.REACT_APP_BASE_URL + "/api/v1/guess", {...stats});
    }
};

export default API;