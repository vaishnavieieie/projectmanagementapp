import { Link, useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import { useQuery } from "@apollo/client";
import { GET_PROJECT } from "../queries/projectQueries";
import ClientInfo from "../components/ClientInfo";
import DeleteProjectButton from "../components/DeleteProjectButton";
import EditProjectForm from "../components/EditProjectForm";

const Project = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_PROJECT, { variables: { id } });

  if (loading) return <Spinner />;
  if (error) return <p>Something went wrong...</p>;
  return (
    <>
      {!loading && !error && (
        <div className="mx-auto w-75 card p-5">
          <Link to="/" className="btn btn-secondary btn-sm w-25 mb-3 rounded">
            Back
          </Link>
          <h1>Project : {data.project.name}</h1>
          <p className="text-muted">{data.project.description}</p>
          <h5 className="mt-3">Project Status</h5>
          <p className="text-pri">{data.project.status}</p>
          <ClientInfo client={data.project.client} />
          <DeleteProjectButton projectId={data.project.id} />
          <EditProjectForm project={data.project} />
        </div>
      )}
    </>
  );
};

export default Project;
