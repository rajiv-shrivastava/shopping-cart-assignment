import React from 'react'
import { Card ,Row,Col,Image,Button} from 'react-bootstrap';
import ImgrSrc from "../../../static/images/category/baby.png"

export default function CategoryCard(props){

    const renderCols = () => {
        let colData = []

        if(props.index % 2 === 0){
            colData.push(<React.Fragment key={props.index}><Col sm={6}> 
                <img src={ImgrSrc} height="100px" width="150px"/>
              </Col>,
              < Col sm={4} offset={6}> 
                <Card.Title>{props.categoryData.name}</Card.Title>
                <Card.Text>
                    {props.categoryData.description}
                </Card.Text>
                <Button style={{borderRadius: "0px",padding: "10px",backgroundColor: "#bb2b56",border: "none"}}> Explore {props.categoryData.key}</Button>
              </Col>
              </React.Fragment>)
        }
        else{
            colData.push(
              <React.Fragment key={props.index}>
              <Col sm={6}> 
              <Card.Title>{props.categoryData.name}</Card.Title>
                <Card.Text>
                    {props.categoryData.description}
                </Card.Text>
                <Button style={{borderRadius: "0px",padding: "10px",backgroundColor: "#bb2b56",border: "none"}}> Explore {props.categoryData.key}</Button>
              </Col>,<Col sm={6 }> 
                <Image src={ImgrSrc} height="100px" width="150px"/>
              </Col>
              </React.Fragment>)

        }
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