import React, { useState, useEffect } from "react";
import { DropdownButton,Dropdown} from "react-bootstrap";
import ProductCard from "../../components/ProductCard";
import axios from "axios";
import {fetchProductCategories} from "../../actions/apiActions"
import "./productsStyle.scss"

export default function Products() {
  const [productList, setproductList] = useState([]);
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
      })
      .catch((err) => {
        console.log("error in fetching products");
      });
  }, []);


  const renderDropdownItems = () => {
    const dropItems = [];
    let cats = categoryList;
    cats.map((item, i) => {
      dropItems.push(
        <Dropdown.Item href="#/action-1" key={item.id} data-title={item.id}>{item.name}</Dropdown.Item>);
    });
    return <>
    <DropdownButton id="dropdown-basic-button" title={categoryList[0].name} className="text-center">
      {dropItems}
      </DropdownButton>
      </>
  };

  const renderProducts = () => {
    let categoryCards = [];
    if (productList && productList.length) {
      productList.map((category, i) =>
        categoryCards.push(<ProductCard categoryData={category} index={i} key={i}/>)
      );
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