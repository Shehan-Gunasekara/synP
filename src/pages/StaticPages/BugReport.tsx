import React, { useState, useContext } from "react";
import axios from "axios";
import { useAuth } from "../../features/auth/context/useAuth";
import { Input } from "../../components/ui/Input";

const BugReport = () => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    name: user ? user.displayName : "",
    email: user ? user.email : "",
    description: "",
    screenshot: "",
  });

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage(null);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_END_POINT_URL}/api/bug-reports/v1/new`,
        // `http://localhost:3000/api/bug-reports/v1/new`,
        {
          userId: user ? user.uid : null,
          userEmail: user ? user.email : null,
          //   userName: formData.name,
          //   email: formData.email,
          message: formData.description,
          attachment: formData.screenshot,
        }
      );

      if (response.data.success) {
        setStatusMessage(
          "Your bug report has been submitted successfully! Thank you for your feedback."
        );
        setFormData({ name: "", email: "", description: "", screenshot: "" });
      } else {
        setStatusMessage(
          `Failed to submit the bug report. Please try again. ${response.data.message}`
        );
      }
    } catch (error) {
      console.error("Error submitting bug report:", error);
      setStatusMessage("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-white to-black/5">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="mb-12 space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-xl sm:text-3xl md:text-5xl font-semibold bg-gradient-to-br from-black to-black/60 bg-clip-text text-transparent">
              Bug Report
            </h1>
            <p className="text-base lg:text-xl text-black/60 max-w-2xl mx-auto">
              Please describe the issue you encountered. We appreciate your
              feedback.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-white p-6 rounded-lg shadow-md"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              {/* <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Tell us what you want to report"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                required
              /> */}

              <Input
                multiline
                rows={4}
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Tell us what you want to report"
                className="text-base"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Screenshot or Video Link
              </label>
              {/* <input
                type="text"
                name="screenshot"
                value={formData.screenshot}
                onChange={handleChange}
                placeholder="Provide a link to the screenshot or footage"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              /> */}

              <Input
                value={formData.screenshot}
                name="screenshot"
                onChange={handleChange}
                placeholder="Paste your link here"
                className="text-base"
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 focus:outline-none text-white bg-black hover:bg-black/90 px-6 py-3"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
          {statusMessage && (
            <p className="text-center text-red-500">{statusMessage}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BugReport;
