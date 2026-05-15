import React from "react";

export const TodoItem = ({ text }) => {
    const [isCompleted, setIsCompleted] = React.useState(false);
    const [isDeleted, setIsDeleted] = React.useState(false);

    const handleDelete = () => {        // Implement delete functionality here
    }

    return (
        <div className={`item-con ${isDeleted ? 'deleted' : ''}`}>
            <div onClick={() => setIsCompleted(prev => !prev)} className={`item-check ${isCompleted ? 'checked' : ''}`}></div>
            <p className={`todo-item ${isCompleted ? 'completed' : ''}`}>{text}</p>
            <div className="item-del" onClick={() => setIsDeleted(true)}>X</div>
        </div>
    );
};
