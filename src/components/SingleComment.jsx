import { ListGroup, Button } from "react-bootstrap";

const SingleComment = (props) => {
  const deleteComment = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          props.comment._id,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWYzM2E2NGYwNDIwZDAwMTUxNTVhNjEiLCJpYXQiOjE3Nzc1NDc4NzYsImV4cCI6MTc3ODc1NzQ3Nn0.qQzs0E2KpWLjJyx3prcC6DD4L4xxHoGe2Pfk9ct8G6o",
          },
        },
      );
      if (response.ok) {
        alert("Cancellato!");
        props.finishUpdate();
      }
    } catch (error) {
      console.log("Errore nella cancellazione", error);
    }
  };
  return (
    <ListGroup.Item className="d-flex justify-content-between">
      <span>
        {props.comment.rate}⭐ - {props.comment.comment}
      </span>
      <Button variant="danger" size="sm" onClick={deleteComment}>
        X
      </Button>
    </ListGroup.Item>
  );
};

export default SingleComment;
