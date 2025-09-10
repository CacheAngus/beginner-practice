import { ArrowLeftIcon } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router";
import api from "../backend/axios.ts";
// const navigate = useNavigate();

function CreatePage() {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      toast.error("All fields are required");
      return;
    }
    setIsLoading(true);
    try {
      await api.post(`/notes`, { title, content });
      toast.success("Note created successfully");
      // navigate("/");
    } catch (error) {
      toast.error("Problem creating note");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Link to={"/"} className="btn btn-ghost mb-6">
            <ArrowLeftIcon className="size-5" />
            Back to Notes
          </Link>
          <div className="card bg-base-100">
            <div className="card-body">
              <h2 className="card-title text-2xl mb-4">
                <form onSubmit={handleSubmit}>
                  <div className="form-control mb-4">
                    <label className="label-text">Title</label>
                    <input
                      type="text"
                      placeholder="Note title"
                      className="input input-bordered"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                  <div className="form-control mb-4">
                    <label className="label-text">Content</label>
                    <textarea
                      placeholder="Write your note here..."
                      className="textarea textarea-bordered h-32"
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                    />
                  </div>
                  <div className="card-actions justify-end">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={isLoading}
                    >
                      {isLoading ? "Creating..." : "Create note"}
                    </button>
                  </div>
                </form>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatePage;
