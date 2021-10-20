import React from 'react';
import './admin.css';

//React Bootstrap
import { Accordion, Card, Button } from 'react-bootstrap';


const AdminList = ({ products, setEdit, setProduct, deleteProduct, setDescription}) => {

    const handleEdit = (product) => {
        setEdit(true);

        setProduct({
            id: product._id,
            title: product.title,
            price: product.price,
            category: product.category,
            description: product.description,
            information: {
                marca: product.information.marca,
                model: product.information.model,
                oferta: {
                    active: product.information.oferta.active,
                    priceSale:  product.information.oferta.priceSale
                }
            }
        })

        setDescription({text: product.description})

    }
    
    return (
        <React.Fragment>
            <Accordion defaultActiveKey="0">

                {
                    products && products.docs !== undefined && (
                        products.docs.map((product, i) => (
                            <Card key={product._id}>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey={i+1} style={{textDecoration: 'none'}}>
                                       {product.title.toUpperCase()}
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey={i+1}>
                                    <Card.Body style={{display: 'flex', justifyContent: 'space-between'}}>
                                        <strong>26/11/2015</strong>
                                        <div className="buttons">
                                            {product.state ? (
                                                <button className="btn btn-outline-success" onClick={() => handleEdit(product)}>Visible</button>
                                            ): <button className="btn btn-outline-dark">Oculto</button>}

                                            <button className="btn btn-warning mx-2" onClick={() => handleEdit(product)}>Edit</button>
                                            <button className="btn btn-danger" onClick={() => deleteProduct(product._id, products)}>Delete</button>
                                        </div>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        )
                        )
                    )
                }
                
            </Accordion>
        </React.Fragment>
    )
}

export default AdminList;