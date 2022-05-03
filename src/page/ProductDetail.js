import React, { useEffect, useState } from "react";
import { Dropdown, Col, Container, DropdownButton, Row, Button} from "react-bootstrap";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/HyeL99/hnm-site/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
    console.log(data);
  };
  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <Container className="mt-4">
      <Row>
        <Col className="detail-image">
          <img src={product?.img} />
        </Col>
        <Col>
          <div>{product?.title}</div>
          <div>₩{product?.price}</div>
          <div>{product?.choice ? "Conscious Choice" : ""}</div>
          <div>
            <DropdownButton
              id="dropdown-basic-button"
              title="사이즈 선택"
              variant="danger"
            >
              {product?.size.map((item, index) => (
                <Dropdown.Item eventKey={index}>{item}</Dropdown.Item>
              ))}
            </DropdownButton>
          </div>
          <div>
          <Button variant="dark">추가</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
