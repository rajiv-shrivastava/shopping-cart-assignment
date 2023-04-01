import React, { useState, useEffect } from "react";
import { DropdownButton,Dropdown ,ButtonGroup} from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import axios from "axios";

export default function Products() {
  const [productCategories, setproductCategories] = useState([]);
  useEffect(() => {
    axios({
      method: "GET",
      url: `http://localhost:5000/products`,
      crossdomain: true,
    })
      .then((res) => {
        setproductCategories(res.data.products);
      })
      .catch((err) => {
        console.log("error in fetching categories");
      });
  }, []);

  const renderDropdownItems = () => {
    const dropItems = [];
    let cats = ["one","two", "threee"];

    cats.map((item, i) => {
      dropItems.push(
        <Dropdown.Item href="#/action-1">{item}</Dropdown.Item>);
    });

    return <>
    <DropdownButton id="dropdown-basic-button" title={cats[0]} className="text-center">
      {dropItems}
      </DropdownButton>
      </>
  };

  const renderProducts = () => {
    let categoryCards = [];
    if (productCategories && productCategories.length) {
      productCategories.map((category, i) =>
        categoryCards.push(<ProductCard categoryData={category} index={i} key={i}/>)
      );
    }
    return categoryCards;
  };

  return (
    <div className="container">
      <div>
        {renderDropdownItems()}
      </div>
      {renderProducts()}
    </div>
  );
}
