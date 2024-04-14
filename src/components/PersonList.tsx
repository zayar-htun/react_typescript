import React from "react";

type PersonListProps = {
    nameArray: {
        first: string;
        last: string;
    }[];
};

export default function PersonList(props: PersonListProps) {
    return (
        <div>
            <h1>Name List</h1>
            {props.nameArray.map(name => {
                return (
                    <h1 key={name.first}>
                        {name.first} + {name.last}
                    </h1>
                );
            })}
        </div>
    );
}
