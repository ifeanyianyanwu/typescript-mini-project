import React, { useState, FC } from "react";
import { IState as Props } from "../App";

interface IProps {
    people: Props["people"];
    setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>;
}

const AddToList: FC<IProps> = ({ people, setPeople }) => {
    const [input, setInput] = useState({
        name: "",
        age: "",
        note: "",
        img: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ): void => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
    };

    const handleClick = (): void => {
        if (!input.name || !input.age || !input.img) return;

        setPeople([
            ...people,
            {
                name: input.name,
                age: parseInt(input.age),
                note: input.note,
                url: input.img,
            },
        ]);
        setInput({
            name: "",
            age: "",
            note: "",
            img: "",
        });
    };

    return (
        <div className="AddToList">
            <input
                type="text"
                placeholder="Name"
                className="AddToList-input"
                value={input.name}
                name="name"
                onChange={handleChange}
            />
            <input
                type="text"
                placeholder="Age"
                className="AddToList-input"
                value={input.age}
                name="age"
                onChange={handleChange}
            />
            <input
                type="text"
                placeholder="Image Url"
                className="AddToList-input"
                value={input.img}
                name="img"
                onChange={handleChange}
            />
            <textarea
                placeholder="Notes"
                className="AddToList-input"
                value={input.note}
                onChange={handleChange}
                name="note"
            />
            <button className="AddToList-btn" onClick={handleClick}>
                Add To List
            </button>
        </div>
    );
};

export default AddToList;
