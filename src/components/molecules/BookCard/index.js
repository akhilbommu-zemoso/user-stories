import React from "react";

const BookCard = ({ imageSrc }) => {

    const { data } = useQuery(BOOKCARD_DETAILS);

    const handleReadMore = () => {

    }

    return (
        <div>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    image={imageSrc}
                />
                <CardContent>
                    <Typography>{ data.bookName }</Typography>
                    <Typography>{ data.bookTagline }</Typography>
                    <Typography>{ data.bookAuthor }</Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick = { handleReadMore }>...</Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default BookCard;