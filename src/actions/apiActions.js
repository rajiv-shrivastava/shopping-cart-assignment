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

const registerAction = (loginBody) => {
  return apiObject
    .post("register",loginBody)
    .then((res) => {
      setTimeout(() => {
        window.location.href = '/'
      }, 2000);
      
    })
    .catch((err) => {
      return {
        error: `Error ${err}`,
      };
    });
};

const checkoutAction = (ordersBody) => {
  return apiObject
    .post("checkout",ordersBody)
    .then((res) => {
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
  window.location.href = "/"
}

export { fetchProductCategories ,loginAction,isLoggedIn,logout,checkoutAction,registerAction};
