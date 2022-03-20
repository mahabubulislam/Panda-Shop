import React, { useEffect, useState } from 'react';
import { Button, Modal } from "react-bootstrap"
const ReactModal = (props) => {
    console.log(props.detail.product)
    const {title, category, description, image, price, rating} =props.detail.product
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button className="btn btn-info w-50 mx-2" onClick={handleShow}>
                Details
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Category: {category}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h3>{title}</h3>
                    <img className='w-50' src={image} alt="" />
                    <p>{description}</p>
                    <div className="d-flex justify-content-between">
                    <p>Price: ${price}</p>
                    <p>Rating: {rating.rate}</p>
                    <p>Total Sells: {rating.count}</p>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default ReactModal;