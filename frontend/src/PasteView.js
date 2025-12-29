import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

function PasteView() {
  const { id } = useParams();
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`https://backend-6t71.onrender.com/api/paste/${id}`)
      .then(res => res.json())
      .then(data => {
        if (data.error) setError(data.error);
        else setContent(data.content);
      });
  }, [id]);

  return (
    <div className="min-vh-100 bg-light d-flex justify-content-center align-items-center">
      <div className="card shadow border-0 p-4" style={{ maxWidth: "600px", width: "100%" }}>
        
        <h4 className="mb-3 fw-bold">Paste</h4>

        {error ? (
          <div className="alert alert-danger">{error}</div>
        ) : (
          <pre className="bg-dark text-light p-3 rounded">
            {content}
          </pre>
        )}

        <Link to="/" className="btn btn-link mt-3">
          Create New paste
        </Link>

      </div>
    </div>

  );
}

export default PasteView;
