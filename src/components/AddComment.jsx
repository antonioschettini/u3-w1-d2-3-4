import { Component } from "react";
import { Form, Button } from "react-bootstrap";

class AddComment extends Component {
  state = {
    comment: {
      comment: "",
      rate: "1",
      elementId: this.props.asin,
    },
  };
  sendComment = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          method: "POST",
          body: JSON.stringify(this.state.comment),
          headers: {
            "Content-type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWYzM2E2NGYwNDIwZDAwMTUxNTVhNjEiLCJpYXQiOjE3Nzc1NDc4NzYsImV4cCI6MTc3ODc1NzQ3Nn0.qQzs0E2KpWLjJyx3prcC6DD4L4xxHoGe2Pfk9ct8G6o",
          },
        },
      );
      if (response.ok) {
        alert("Inviato!");
        this.setState({
          comment: { ...this.state.comment, comment: "", rate: "1" },
        });
        this.props.finishUpdate();
      }
    } catch (error) {
      console.log("Errore nell'invio del commento", error);
    }
  };
  render() {
    return (
      <Form className="mt-3" onSubmit={this.sendComment}>
        <Form.Group className="mb-2">
          <Form.Control
            required
            type="text"
            placeholder="Scrivi una recensione..."
            value={this.state.comment.comment}
            onChange={(e) =>
              this.setState({
                comment: { ...this.state.comment, comment: e.target.value },
              })
            }
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Select
            value={this.state.comment.rate}
            onChange={(e) =>
              this.setState({
                comment: { ...this.state.comment, rate: e.target.value },
              })
            }
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Select>
        </Form.Group>
        <Button variant="primary" type="submit">
          Invia
        </Button>
      </Form>
    );
  }
}

export default AddComment;
