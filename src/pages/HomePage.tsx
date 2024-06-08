import Accordion from "../components/Accordion";
import Button from "../components/Button";
import Card from "../components/Card";
import Carousel from "../components/Carousel";
import Checkbox from "../components/Checkbox";
import Counter from "../components/Counter";
import ListGroup from "../components/ListGroup";
import Modal from "../components/Modal";
import RadioButton from "../components/RadioButton";
import Table from "../components/Table";
import TodoList from "../components/TodoList";

const HomePage = () => {
  const handleClick = () => {
    alert("Button clicked!");
  };
  return (
    <>
      <Carousel />
      <div className="mx-5">
        <Card />
        <hr className="my-4" />

        <div className="row">
          <div className="col-12 col-md-6">
            <TodoList />
          </div>
          <div className="col-12 d-block d-md-none">
            <hr />
          </div>
          <div className="col-12 col-md-6">
            <Counter />
          </div>
        </div>
        <hr className="my-4" />
        <div className="row">
          <div className="col-12 col-md-3">
            <Checkbox />
          </div>
          <div className="col-12 d-block d-md-none">
            <hr />
          </div>
          <div className="col-12 col-md-3">
            <RadioButton />
          </div>
          <div className="col-12 d-block d-md-none">
            <hr />
          </div>
          <div className="col-12 col-md-3">
            <h2 className="py-4">Button</h2>
            <Button
              label="Primary Button"
              onClick={handleClick}
              variant="primary"
            />
            <Button
              label="Secondary Button"
              onClick={handleClick}
              variant="secondary"
              className="m-2"
            />
            <Button
              label="Large Button"
              onClick={handleClick}
              variant="success"
              size="lg"
              className="m-2"
            />
            <Button
              label="Small Button"
              onClick={handleClick}
              variant="danger"
              size="sm"
              className="m-2"
            />
            <Button
              label="Disabled Button"
              onClick={handleClick}
              variant="warning"
              disabled
              className="m-2"
            />
          </div>
          <div className="col-12 d-block d-md-none">
            <hr />
          </div>
          <div className="col-12 col-md-3">
            <Modal />
          </div>
        </div>
        <hr className="my-4" />
        <Accordion />
        <hr className="my-4" />

        <ListGroup />
        <hr className="my-4" />
        <Table />
      </div>
    </>
  );
};

export default HomePage;
