import React from "react";
import BookCard from "../../molecules/BookCard";

const MyLibrary = () => {
    return (
        <div>
            <Grid>
                <Grid item>
                    <BookCard />
                </Grid>
                <Grid item>
                    <BookCard />
                </Grid>
            </Grid>
        </div>
    )
}

export default MyLibrary;