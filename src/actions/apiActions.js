import apiObject from "./apiObject";

const fetchProductCategories = () => {
  return apiObject
    .get("categories")
    .then((res) => {
      return res.data.categories;
    })
    .catch((err) => {
      return {
        error: `Error ${err}`,
      };
    });
};

const loginAction = (loginBody) => {
  return apiObject
    .post("login",loginBody)
    .then((res) => {
      return res
    })
    .catch((err) => {
      return {
        error: `Error ${err}`,
      };
    });
};

export { fetchProductCategories ,loginAction};
