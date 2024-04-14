import React from "react";

type StatusProps = {
    status: "error" | "loading" | "success";
};

export default function Status(props: StatusProps) {
    let message;
    if (props.status === "error") {
        message = "Error Fetching Data";
    } else if (props.status === "loading") {
        message = "Loading .....";
    } else if (props.status === "success") {
        message = "Data fetched successfully!";
    }
    return (
        <div>
            {message}
        </div>
    );
}
