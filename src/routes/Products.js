import React,{useState,useEffect} from 'react';
import { Card } from 'react-bootstrap';
import ProductCard from "../components/ProductCard"
import axios from 'axios';


export default function Products() {
    const [productCategories,setproductCategories] = useState([])
    useEffect(() => {
        axios({
            method: 'GET',
            url: `http://localhost:5000/products`,
            crossdomain: true
          }).then(res => {
            setproductCategories(res.data.products)
        }).catch(err => {
            console.log("error in fetching categories")
        })
    }, [])

    const renderCategories = () =>{
        let categoryCards = []
        if(productCategories && productCategories.length){
            productCategories.map((category,i) => categoryCards.push(<ProductCard categoryData={category} index={i}/>))
        }
        return categoryCards
    }

    return (
      <div className='container'>
      {renderCategories()}
      </div>
    );
  }