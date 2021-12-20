import React from "react";

const Typography = () => {

    const { text } = props;

    return (
        <div>
            <Typography variant="h6">
                { text }
            </Typography>
        </div>
    )
}

export default Typography;