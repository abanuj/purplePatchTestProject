/* eslint-disable */
export const staticToken = () => { return "Token cd5b44d2d7a65add905ad4d02183b6d5079e9945"; }

export const headerOptions = token => (token ? { headers: { "hash_token": token, "Content-Type": "application/json", "token": staticToken() } } : { headers: { "Content-Type": "application/json", "Authorization": staticToken() } });

export const metaHeaderOptions = () => ({ headers: { Authorization: "Simple simnxB3dwTN8kds9p6SGMpGoOJC1", "Content-Type": "application/json" } });

export const fileHeaderOptions = token => (token ? { headers: { "x-auth-token": token, "Content-Type": "multipart/form-data" } } : {});

export const fileDownloadHeaderOptions = token => (token ? { headers: { "x-auth-token": token }, responseType: "blob" } : {});



