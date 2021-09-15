import { get } from "lodash";
import { http, headerOptions } from "../core";
import { URL } from "./_urls.js";


const apiUserList = async () => {
    const data = [];
    const response = await http.post(URL.GET_USER(), data, headerOptions());
    if (response && response.status >= 400) {
        const errorMessage = get(response, "data.message", "");
        throw new Error(errorMessage || "Something went wrong!");
    }
    return response || null;
};




export { apiUserList };