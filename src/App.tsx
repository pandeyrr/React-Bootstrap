import ListGroup from "./components/ListGroup";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Table from "./components/Table";
import Carousel from "./components/Carousel";
import Accordion from "./components/Accordion";
import Modal from "./components/Modal";
import Footer from "./components/Footer";
// import Video from "./components/Video";
import Counter from "./components/Counter";
import Button from "./components/Button";
import TodoList from "./components/TodoList";
import ToggleSwitch from "./components/ToggleSwitch";

function App() {
  const handleClick = () => {
    alert("Button clicked!");
  };
  return (
    <>
      <Navbar />
      <Carousel />
      <div className="mx-5">
        <Card />

        <TodoList />
        <hr />
        <ToggleSwitch />
        <hr />

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
        <hr />

        <Counter />
        <hr />

        <Accordion />
        <hr />
        <ListGroup />
        <hr />
        {/* <Video /> */}

        <Table />
        <hr />
        <Modal />
      </div>
      <Footer />
    </>
  );
}

export default App;
