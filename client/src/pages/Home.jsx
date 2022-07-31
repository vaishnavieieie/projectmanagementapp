import Clients from "../components/Clients";
import AddClientModal from "../components/AddClientModal";
import AddProjectModal from "../components/AddProjectModal";
import Projects from "../components/Projects";
const Home = () => {
  return (
    <>
      <div className="d-flex ">
        <AddClientModal />
        <AddProjectModal />
      </div>

      <Projects />
      <hr></hr>
      <Clients />
    </>
  );
};

export default Home;
