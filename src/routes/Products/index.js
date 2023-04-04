import React, { useState, useEffect } from "react";
import { Form} from "react-bootstrap";
import ProductCard from "../../components/ProductCard";
import axios from "axios";
import {fetchProductCategories} from "../../actions/apiActions"
import "./productsStyle.scss"
import { useLocation } from "react-router-dom";


export default function Products() {
  const [productList, setproductList] = useState([]);
  const [initalproductList, setinitalproductList] = useState([]);
  const [categoryList, setcategoryList] = useState([]);
  const location = useLocation();
  const [defaultCategory, setDefaultCategory] = useState();

  const fetchCategories = async() => {
    const response = await fetchProductCategories();
    setcategoryList(response)
  }

  useEffect(() => {
    location && location.state && location.state.category  ? setDefaultCategory(location.state.category) : setDefaultCategory('All Products')
  },[])


  useEffect(() => {
    fetchCategories()
  }, []);


  useEffect(() => {
    axios({
      method: "GET",
      url: `http://localhost:5000/products`,
      crossdomain: true,
    })
      .then((res) => {
        setproductList(res.data.products);
        setinitalproductList(res.data.products);
      })
      .catch((err) => {
        console.log("error in fetching products");
      });
  }, []);

  const handleCategoryChange = (e) => {  
    if(e.target.value === "All Products"){
      setproductList(initalproductList)
    } 
    else{
      let catId = categoryList.find(cat => cat.name === e.target.value).id
      let filtedredProducts = initalproductList.filter(prod => prod.category === catId)
      setproductList(filtedredProducts)
    } 
  }


  const renderDropdownItems = () => {
    const dropItems = [];
    let cats = categoryList;
    cats.map((item, i) => {
      dropItems.push(<option key={item.id} value={item.category}>{item.name} </option>);
    });
    return <>
      <Form.Select aria-label="Default select example" id="dropdown-basic-button" onChange={handleCategoryChange} value={defaultCategory}>
          <option>All Products</option>
          {dropItems}
        </Form.Select>
      </>
  };

  const renderProducts = () => {
    let productCards = null;
    if (productList && productList.length) {
      productCards = []
      productList.map((category, i) =>
        productCards.push(<ProductCard categoryData={category} index={i} key={i}/>)
      );
    }
    else {
      productCards = <div className="noProducts"> No Products available for category</div>
    }
    return productCards;
  };

  return (
    <div className="container">
      <div>
        {categoryList && categoryList.length && renderDropdownItems()}
      </div>
      {renderProducts()}
    </div>
  );
}