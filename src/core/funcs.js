/* eslint-disable */
import RNFetchBlob from "rn-fetch-blob";
const fs = RNFetchBlob.fs;
export const runFuncs = fns => args => fns && fns.forEach(fn => fn & fn(args));

export const randomId = () =>
  Math.random()
    .toString(36)
    .slice(2);

export const kFormatter = num => {
  return Math.abs(num) > 999 ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k" : Math.sign(num) * Math.abs(num);
};

export const staticToken = () => { return "Token cd5b44d2d7a65add905ad4d02183b6d5079e9945"; }

export const headerOptions = token => (token ? { headers: { "hash_token": token, "Content-Type": "application/json", "token": staticToken() } } : { headers: { "Content-Type": "application/json", "Authorization": staticToken() } });

export const metaHeaderOptions = () => ({ headers: { Authorization: "Simple simnxB3dwTN8kds9p6SGMpGoOJC1", "Content-Type": "application/json" } });

export const fileHeaderOptions = token => (token ? { headers: { "x-auth-token": token, "Content-Type": "multipart/form-data" } } : {});

export const fileDownloadHeaderOptions = token => (token ? { headers: { "x-auth-token": token }, responseType: "blob" } : {});

export const getMembershipDateYear = (dateString) => {
  const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const date = new Date(dateString);
  return `Member since ${month[date.getMonth()]} ${date.getFullYear()}`;
}

export const getFullAddress = (address, state_name, city_name) => {
  let fullAddress = "";
  if (address) fullAddress = `${address}, `;
  if (state_name) fullAddress += `${state_name}, `;
  if (city_name) fullAddress += `${city_name}`;
  return fullAddress;
}

export const blobToFile = (theBlob, fileName) => {
  return new File([theBlob], fileName, { lastModified: new Date().getTime(), type: theBlob.type })
}

export const loadBase64FileFromURL = async (url) => {
  RNFetchBlob.config({
    fileCache: true
  })
  const response = await RNFetchBlob.fetch("GET", url);
  const base64Data = response.data;
  response.flush();
  return base64Data
}


