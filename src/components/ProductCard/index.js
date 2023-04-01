import React from 'react'
import { Card ,Row,Col,Image,Button} from 'react-bootstrap';
import ImgrSrc from "../../../static/images/category/baby.png"

export default function CategoryCard(props){
    const renderCols = () => {
        let colData =<>
        <Col sm={4}> <img src={ImgrSrc} height="100px" width="150px"/></Col>
            < Col sm={8}> 
                <Card.Title>{props.categoryData.name}</Card.Title>
                <Card.Text style={{fontSize: "12px",fontWeight: "500"}}>
                    {props.categoryData.description}
                </Card.Text>
                <Card.Text className='mb-2'>
                <Button style={{borderRadius: "0px",padding: "10px",backgroundColor: "#bb2b56",border: "none"}}> Buy Now @ {props.categoryData.price}</Button>
                </Card.Text>
            </Col>
            </>
        return colData
    }

    return (<>
     <Card style={{ width: '100%' ,margin: '10px',height:'200px',border: "0px",boxShadow: "0px 2px 1px 0px grey"}}>
      <Card.Body >
        <Row>       
            {renderCols()}   
        </Row>
      </Card.Body>
    </Card>
        
    </>)
}