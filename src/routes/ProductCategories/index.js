import React, { useState, useEffect } from "react";
import CategoryCard from "../../components/CategoryCard";
import axios from "axios";
import {fetchProductCategories} from "../../actions/apiActions"

import "./ProductCategories.scss"

export default function ProductLandingPage() {
  const [productCategories, setproductCategories] = useState([]);

  const fetchCategories = async() => {
    const response = await fetchProductCategories();
    setproductCategories(response)
  }

  useEffect(() => {
    fetchCategories()
  }, []);

  const renderCategories = () => {
    let categoryCards = [];
    if (productCategories && productCategories.length) {
      productCategories.map((category, i) =>
        categoryCards.push(<CategoryCard categoryData={category} index={i} key={i}/>)
      );
    }
    return categoryCards;
  };

  return <div className="container">{renderCategories()}</div>;
}
