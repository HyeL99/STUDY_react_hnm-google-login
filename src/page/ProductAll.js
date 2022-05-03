import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../component/ProductCard';

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();

    const getProducts = async ()=>{
      let searchQuery = query.get('q') || "";
      let url = `https://my-json-server.typicode.com/HyeL99/hnm-google-login/products?q=${searchQuery}`;
      let response = await fetch(url);
      let  data = await response.json();
      console.log(data)
      setProductList(data);

    }
    useEffect(()=>{
        getProducts(); //API 호출 함수
    }, [query]);

  return (
    <div>
      <Container className='mt-4'>
        <Row>
          {productList.map((menu)=>(<Col md={3} sm={12} key={menu.id}><ProductCard item={menu}/></Col>))}
        </Row>
      </Container>
    </div>
  )
}

export default ProductAll
