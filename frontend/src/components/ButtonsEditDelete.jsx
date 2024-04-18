import React from 'react'; // Importing React library
import { Button } from 'react-bootstrap';

const ButtonsEditDelete = ({ onDelete, onUpdate, size='sm', rounded=false }) => {
    return (
        <div className="d-flex justify-content-end"> 
            {/* Delete Button */}
            <Button
                variant='danger' 
                size={size} 
                className="me-1" 
                onClick={onDelete} // onClick event handler for delete action
                style={{borderRadius: rounded ? "50%" : ""}} 
            >
                <i className="fa-solid fa-trash-can"></i> {/* Trash can icon */}
            </Button>
            {/* Update Button */}
            <Button 
                variant='warning' 
                size={size} 
                onClick={onUpdate} // onClick event handler for update action
                style={{borderRadius: rounded ? "50%" : ""}} 
            >
                <i className="fa-solid fa-pen-to-square"></i> {/* Edit icon */}
            </Button>
        </div>
    );
};

export default ButtonsEditDelete; // Exporting the ButtonsEditDelete component
