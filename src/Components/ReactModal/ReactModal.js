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
                    <Modal.Title>Category: {category.toUpperCase()}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h3>{title}</h3>
                    <img className='w-50' src={image} alt="" />
                    <p className='text-capitalize'>{description}</p>
                    <div className="d-flex justify-content-between">
                    <p className='fw-bold'>Price: ${price}</p>
                    <p className='fw-bold'>Rating: {rating.rate}</p>
                    <p className='fw-bold'>Total Sells: {rating.count}</p>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default ReactModal;