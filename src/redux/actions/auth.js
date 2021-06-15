import { apiGet, apiPost, setUserData, clearUserData } from "../../utils/utils";
import store from "../store";
import { ALL_FORUMS_API, FORUMS_API, GET_FORUMS_API } from "../../config/urls";
import types from "../types";

const { dispatch } = store;


 
export function forums(data) {
  return new Promise((resolve, reject) => {
    apiPost(FORUMS_API, data)
      .then(res => {
         resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  });
}
export function allForum(data) {
  return new Promise((resolve, reject) => {
    apiGet(ALL_FORUMS_API, data)
      .then(res => {
         resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  });
}

export function getForums(data) {
  return new Promise((resolve, reject) => {
    apiPost(GET_FORUMS_API, data)
      .then(res => {
         resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  });
}

 
