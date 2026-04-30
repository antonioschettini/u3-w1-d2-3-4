import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";

const CommentsList = (props) => (
  <ListGroup>
    {props.comments.map((comment) => (
      <SingleComment
        key={comment._id}
        comment={comment}
        finishUpdate={props.finishUpdate}
      />
    ))}
  </ListGroup>
);

export default CommentsList;
