import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, {useState} from "react";

function ClearModal(props) {
    const {setItems, open} = props

    const [show, setShow] = useState(open || false);

    const handleClose = () =>  setShow(false);
    const handleShow = () =>  setShow(true);
    const handleClear = () => {
        setShow(false)
        setItems([])
    }

    return (
        <div
            className="modal show"
            style={{display: 'flex', position: 'initial'}}
        >
            <button className={"py-2"} onClick={handleShow}>Clear</button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Clear all items</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure want to delete all items?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClear}>
                        Clear
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default ClearModal;