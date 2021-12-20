import React from "react";

const IconLabels = ({iconName, value}) => {
    return (
        <div>
            <Button 
                startIcon={ iconName }>
                  { value }
            </Button>
        </div>
    )
}

export default IconLabels;