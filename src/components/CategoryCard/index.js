import React from "react";
import { Card, Row, Col, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import babyImgSrc from "../../../static/images/category/baby.png";
import fruitImgSrc from "../../../static/images/category/fruits.png";
import BeverageImgSrc from "../../../static/images/category/beverages.png";
import BakeryImgSrc from "../../../static/images/category/bakery.png";
import seaFoodImgSrc from "../../../static/images/category/seafood.png";
import BeautyHygeneSrc from "../../../static/images/category/beauty.png";

import "./categoryCardStyle.scss";

export default function CategoryCard(props) {
  const renderCols = () => {
    let colData = [];
    const imgSrc = {
      beverages: BeverageImgSrc,
      "bakery-cakes-dairy": BakeryImgSrc,
      baby: babyImgSrc,
      "fruit-and-veg": fruitImgSrc,
      seafood: seaFoodImgSrc,
      "beauty-hygiene": BeautyHygeneSrc,
    };
    if (props.index % 2 === 0) {
      colData.push(
        <React.Fragment key={props.index}>
          <Col sm={{ span: 3, offset: 2 }}>
            <img
              src={`${imgSrc[props.categoryData.key]}`}
              height="150px"
              width="150px"
            />
          </Col>
          ,
          <Col sm={5}>
            <Card.Title>{props.categoryData.name}</Card.Title>
            <Card.Text>{props.categoryData.description}</Card.Text>
            <Link to="/products" state={{ category: props.categoryData.name }}>
              <Button
                style={{
                  borderRadius: "0px",
                  padding: "10px",
                  backgroundColor: "#bb2b56",
                  border: "none",
                }}
              >
                {" "}
                Explore {props.categoryData.key}
              </Button>
            </Link>
          </Col>
        </React.Fragment>
      );
    } else {
      colData.push(
        <React.Fragment key={props.index}>
          <Col sm={{ span: 5, offset: 2 }}>
            <Card.Title>{props.categoryData.name}</Card.Title>
            <Card.Text>{props.categoryData.description}</Card.Text>
            <Link to="/products" state={{ category: props.categoryData.name }}>
              <Button
                style={{
                  borderRadius: "0px",
                  padding: "10px",
                  backgroundColor: "#bb2b56",
                  border: "none",
                }}
              >
                {" "}
                Explore {props.categoryData.key}
              </Button>
            </Link>
          </Col>
          ,
          <Col sm={3}>
            <Image
              src={`${imgSrc[props.categoryData.key]}`}
              height="150px"
              width="150px"
            />
          </Col>
        </React.Fragment>
      );
    }
    return colData;
  };

  return (
    <>
      <Card
        style={{
          width: "100%",
          margin: "10px",
          height: "250px",
          border: "0px",
          boxShadow: "0px 2px 1px 0px grey",
        }}
      >
        <Card.Body>
          <Row>{renderCols()}</Row>
        </Card.Body>
      </Card>
    </>
  );
}
