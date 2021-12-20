import React from "react";
import Grid from '@material-ui/core/Grid';
import BookDetailImage from "../../atoms/BookDetailImage";
import { Typography } from "@material-ui/core"; 
import SecondaryTabs from "../SecondaryTabs";

const BookDetails = () => {

    const { data } = useQuery(BOOK_DETAILS);

    const [sendToKindle, setSendToKindle] = React.useState(false);
    
    const handleSendToKindle = () => {
        setSendToKindle(true);
    };
    
    const handleReadNow = () => {

    }

    const handleBuy = () => {

    }

    const handleEmail = () => {

    }

    const handleContinueReading = () => {
        
    }

    return (
        <div>
            <Grid>
                <Grid item>
                    <Typography>{ data.bookName }</Typography>
                    <Typography>Book Tagline</Typography>
                    <Typography>Authors</Typography>

                    {/* Icon Labels */}
                    {/* Buttons in a Grid */}
                    <Grid>
                        <Grid item>
                            <button onClick={ handleReadNow }>
                                Read now
                            </button>
                        </Grid>
                        <Grid item>
                            <button onClick={ handleBuy }>
                                Buy Book
                            </button>
                        </Grid>
                        <Grid item>
                            <Button onClick={handleSendToKindle}>Send to Kindle</Button>
                        </Grid>
                    </Grid>

                    <SecondaryTabs />
                </Grid>
                <Grid item>
                    <BookDetailImage />
                </Grid>
            </Grid>
            <React.Fragment> 
                if(sendToKindle){
                    <Modal>
                        <Box>
                            <h1>Set up your kindle</h1>
                            <Button onClick={handleEmail}>Add email</Button>
                        </Box>
                    </Modal>
                }else{
                    <Modal>
                        <Box>
                            <h1>The Grid was successfully sent to your kindle</h1>
                            <Button onClick={handleContinueReading}>Continue Reading</Button>
                        </Box>
                    </Modal>
                }
            </React.Fragment>
        </div>
    )
}

export default BookDetails;