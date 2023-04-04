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
      window.location.href = "/";
      return res        
    })
    .catch((err) => {
      return {
        error: `Error ${err}`,
      };
    });
};

const isLoggedIn = () => {
  let logInStatus = false;
  if(sessionStorage.getItem('AUTH_TOKEN')){
    logInStatus = true
  }
  return logInStatus;

}

const logout = () => {
  sessionStorage.removeItem('AUTH_TOKEN')
  window.location.reload()
}

export { fetchProductCategories ,loginAction,isLoggedIn,logout};
