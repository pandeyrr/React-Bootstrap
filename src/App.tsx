import ListGroup from "./components/ListGroup";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Table from "./components/Table";
import Carousel from "./components/Carousel";
import Accordion from "./components/Accordion";
import Modal from "./components/Modal";
import Footer from "./components/Footer";
import Video from "./components/Video";

function App() {
  return (
    <>
      <Navbar />
      <Carousel />
      <div className="p-5">
        <Card />
        <Accordion />
        <ListGroup />
        <Video />

        <Table />
        <Modal />
      </div>
      <Footer />
    </>
  );
}

export default App;
