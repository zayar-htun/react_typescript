import React from "react";

type PersonProps = {
    name: {
        first: string;
        last: string;
    };
};

export default function Person(props:PersonProps) {
    return (
        <div>
            <label>First Name</label> <p>{props.name.first}</p>
            <label>Last Name</label> <p>{props.name.last}</p>
        </div>
    );
}
