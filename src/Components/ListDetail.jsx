import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { Spinner } from "reactstrap";

const ListDetail = () => {
  const responce  = useParams();
  console.log(responce);

  const GetData = async () => {
    const value = await fetch(`http://localhost:3004/posts/${responce.id}`);
    if (!value.ok) {
      throw new Error("Network Responce do not ok");
    }
    console.log("Getting Data");
    return value.json();
  };
  const query = useQuery("Posts", GetData);
  if (query.isError) {
    alert("Error");
  }
  return (
    <>
      <div className="w-25 m-auto">
        <h1>List Details</h1>
        {query.isLoading ? (
          <Spinner className="loading  m-auto">Loading...</Spinner>
        ) : null}
        <div className="card ">
          <img
            className="card-img-top"
            src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
            alt=""
          />
          <div className="card-body">
            <h1 className="card-title">{query.data?.userName}</h1>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <strong>{query.data?.firstName}</strong>
            <span>{query.data?.lastName}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListDetail;
