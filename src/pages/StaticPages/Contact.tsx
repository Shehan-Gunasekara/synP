import React, { useState } from "react";
import { Card } from "../../components/ui/Card";
import { Input } from "../../components/ui/Input";
import { Button } from "../../components/ui/Button";
import { Send, Loader } from "lucide-react";
import { useAuth } from "../../features/auth/context/useAuth";

import axios from "axios";

export function Contact() {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage(null);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_END_POINT_URL}/api/messages/v1/new`,
        // 'http://localhost:3000/api/messages/v1/new',
        {
          userId: user ? user.uid : null,
          userName: user ? user?.displayName : formData.name,
          email: user ? user.email : formData.email,
          type: "contact",
          subject: formData.subject,
          message: formData.message,
        }
      );
      if (response.data.success) {
        setStatusMessage(
          "Your message has been sent successfully! We'll get back to you within 48hrs."
        );
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatusMessage(
          `Failed to send the message. Please try again.${response.data.message}`
        );
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setStatusMessage("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="w-full max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-xl mx-auto mb-16 text-center space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold bg-gradient-to-br from-black to-black/60 bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-base lg:text-xl text-black/60">
            Have questions? We'd love to hear from you.
          </p>
        </div>
        <div className="flex justify-center">
          <Card className="w-full max-w-xl p-8 space-y-6">
            <h2 className="text-xl font-medium">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {!user && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name (optional)"
                  />
                  <Input
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@gmail.com"
                    required
                  />
                </div>
              )}
              <Input
                label="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="How can we help? (optional)"
              />
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Message*
                </label>
                {/* <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full rounded-lg border-gray-200 shadow-sm focus:border-black focus:ring-black resize-none"
                  placeholder="Your message..."
                  required
                /> */}
                <Input
                  multiline
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  className="text-base"
                  required
                />
              </div>
              {statusMessage && (
                <div
                  className={`text-sm font-medium ${
                    statusMessage.includes("successfully")
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {statusMessage}
                </div>
              )}
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? (
                  <>
                    <Loader className="w-4 h-4 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </main>
  );
}
