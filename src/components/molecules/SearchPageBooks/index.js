import React from "react";
import Typography from "../../atoms/Typography";

const SearchPageBooks = ({bookList=[]}) => {
    const { data } = useQuery(BOOK_DETAILS);

    const handleRedirect = () => {
        // when this button is clicked, the page details will be displayed
    }

    return (
      <>
      { bookList.map((data,index) => {
          if (data) {
            return (
                <Grid direction='row'>
                    <Button onClick={ handleVotes}>
                        { data.BOOK_DETAILS.totalVotes }
                        {/* Button to handle the votes with upvote and downvote icons */}
                    </Button>
                    <img src = {data.BOOK_DETAILS.imageSrc} />
                    <Grid onClick={handleRedirect} direction='column'>
                        <Grid item>
                            <Typography> { data.BOOK_DETAILS.bookName }</Typography>
                            <Typography> { data.BOOK_DETAILS.authorName } </Typography>
                        </Grid>
                    </Grid>
                </Grid>
             )	
           }
           return null
      }) }
      </>
    );
  }
  
export default SearchPageBooks;