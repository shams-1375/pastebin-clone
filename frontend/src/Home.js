import { useState } from "react";

function Home() {
    const [text, setText] = useState("");
    const [expire, setExpire] = useState("");
    const [views, setViews] = useState("");
    const [link, setLink] = useState("");
    const [loading, setLoading] = useState(false);

    const createPaste = async () => {
        if (!text.trim()) return alert("Text cannot be empty");

        setLoading(true);

        const res = await fetch("https://backend-6t71.onrender.com/api/paste", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                content: text,
                expireMinutes: expire,
                maxViews: views
            })
        });

        const data = await res.json();
        setLink(`https://frontend-0dvm.onrender.com/paste/${data.id}`);
        setLoading(false);
    };


    return (
        <div className="min-vh-100 d-flex justify-content-center align-items-center bg-light">
            <div className="card shadow-lg border-0 p-4" style={{ maxWidth: "600px", width: "100%" }}>

                <h3 className="text-center mb-3 fw-bold">
                    Pastebin Clone
                </h3>

                <textarea
                    className="form-control mb-3"
                    rows="8"
                    placeholder="Paste your text here..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />

                <div className="row g-2 mb-3">
                    <div className="col">
                        <input
                            className="form-control"
                            placeholder="Expire (minutes)"
                            value={expire}
                            onChange={(e) => setExpire(e.target.value)}
                        />
                    </div>

                    <div className="col">
                        <input
                            className="form-control"
                            placeholder="Max views"
                            value={views}
                            onChange={(e) => setViews(e.target.value)}
                        />
                    </div>
                </div>

                <button
                    className="btn btn-primary w-100"
                    onClick={createPaste}
                    disabled={loading} >
                    {loading ? "Creating..." : "Create Link"}
                </button>

                {link && (
                    <div className="alert alert-success mt-3">
                        <small>Share this link:</small>
                        <div className="d-flex align-items-center mt-1">
                            <a href={link}
                                className="me-2 text-break"
                                target="_blank"
                                rel="noreferrer">
                                {link}
                            </a>
                            <button
                                className="btn btn-sm btn-outline-secondary"
                                onClick={() => navigator.clipboard.writeText(link)} >
                                Copy
                            </button>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
}

export default Home;
