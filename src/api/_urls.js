import { CONFIG } from "./../config";

export const URL = {
    GET_USER: () => `${CONFIG.BASE_URL}customers/list-new/?offset=0&limit=200`,
};