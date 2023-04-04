import React, { useState, useEffect } from "react";
import { Form} from "react-bootstrap";
import ProductCard from "../../components/ProductCard";
import axios from "axios";
import {fetchProductCategories} from "../../actions/apiActions"
import "./productsStyle.scss"

export default function Products() {
  const [productList, setproductList] = useState([]);
  const [initalproductList, setinitalproductList] = useState([]);
  const [categoryList, setcategoryList] = useState([]);
  

  const fetchCategories = async() => {
    const response = await fetchProductCategories();
    setcategoryList(response)
  }

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
      <Form.Select aria-label="Default select example" id="dropdown-basic-button" onChange={handleCategoryChange}>
          <option>All Products</option>
          {dropItems}
        </Form.Select>
      </>
  };

  const renderProducts = () => {
    let categoryCards = null;
    if (productList && productList.length) {
      categoryCards = []
      productList.map((category, i) =>
        categoryCards.push(<ProductCard categoryData={category} index={i} key={i}/>)
      );
    }
    else {
      categoryCards = <div className="noProducts"> No Products available for category</div>
    }
    return categoryCards;
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