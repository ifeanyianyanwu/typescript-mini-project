import { FC } from "react";
import { IState as IProps } from "../App";

const List: FC<IProps> = ({ people }) => {
    const renderList = (): JSX.Element[] => {
        return people.map((person) => (
            <li className="List">
                <div className="List-header">
                    <img src={person.url} alt="picture" className="List-img" />
                    <h2>{person.name}</h2>
                </div>
                <p>{person.age} years old</p>
                <p className="List-note">{person.note}</p>
            </li>
        ));
    };
    return <ul>{renderList()}</ul>;
};

export default List;
