"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("Contact");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    success: false,
    error: false,
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ success: false, error: false, message: "" });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "7fbd2175-78b2-497a-9788-ef0b647e13b2",
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: "New contact from portfolio website",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({
          success: true,
          error: false,
          message: t("form.success"),
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus({
          success: false,
          error: true,
          message: result.message || t("form.error"),
        });
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        error: true,
        message: t("form.errorGeneric"),
      });
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      id="contact"
      className={`py-20  relative overflow-hidden transition-opacity duration-1000 `}
    >
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 `}>
          <h2 className="text-4xl md:text-5xl font-bold text-pink-eraser mb-4">
            {t("headline")}
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            {t("subheadline")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className={`transition-all duration-700 delay-300 `}>
            <form
              onSubmit={handleSubmit}
              className="bg-gray-900/50 backdrop-blur-md p-8 rounded-2xl border border-gray-800 shadow-lg"
            >
              {submitStatus.success && (
                <div className="mb-6 p-4 bg-green-900/50 border border-green-600 rounded-lg text-green-200">
                  {submitStatus.message}
                </div>
              )}

              {submitStatus.error && (
                <div className="mb-6 p-4 bg-red-900/50 border border-red-600 rounded-lg text-red-200">
                  {submitStatus.message}
                </div>
              )}

              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-gray-300 mb-2 text-sm font-medium"
                >
                  {t("form.nameLabel")}
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    placeholder={t("form.namePlaceholder")}
                  />
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-gray-300 mb-2 text-sm font-medium"
                >
                  {t("form.emailLabel")}
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    placeholder={t("form.emailPlaceholder")}
                  />
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-gray-300 mb-2 text-sm font-medium"
                >
                  {t("form.messageLabel")}
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    maxLength={500}
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    placeholder={t("form.messagePlaceholder")}
                  />
                  <div className="flex justify-between items-center mt-1">
                    <div></div>
                    <span className="text-sm text-gray-400">
                      {t("form.charCount")}
                      {formData.message.length}/500
                    </span>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg bg-pink-eraser font-medium text-white transition-all  flex justify-center items-center ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    {t("form.sending")}
                  </>
                ) : (
                  t("form.sendButton")
                )}
              </button>
            </form>
          </div>
          <div className={`space-y-8 transition-all duration-700 delay-500 `}>
            <div className="bg-gray-900/40 backdrop-blur-md p-6 rounded-2xl border border-gray-800 shadow-lg">
              <h3 className="text-2xl font-bold mb-4">{t("info.title")}</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-indigo-900/50 p-3 rounded-lg mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-indigo-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 mb-1">
                      {t("info.emailLabel")}
                    </h4>
                    <a
                      href="mailto:contact@hajdu.dev"
                      className="text-white hover:text-blue-400 transition-colors"
                    >
                      {t("info.emailValue")}
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-indigo-900/50 p-3 rounded-lg mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-indigo-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 mb-1">
                      {t("info.locationLabel")}
                    </h4>
                    <p className="text-white">{t("info.locationValue")}</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="text-sm font-semibold text-gray-400 mb-3">
                  {t("info.connectLabel")}
                </h4>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/Hajdudev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/peter-hajdu-44298b326/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-gray-900/40 backdrop-blur-md space-y-3 p-6 rounded-2xl border border-gray-800 shadow-lg">
              <div className="flex items-center gap-2">
                <svg
                  className="w-6 h-6 text-pink-eraser"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z"
                  />
                </svg>
                <span className="text-pink-eraser font-semibold">
                  {t("thankYouBox.title")}
                </span>
              </div>
              <p className="text-gray-300">
                {t("thankYouBox.replyTime", { hours: "24" })}
              </p>
              <p className="text-gray-400 text-sm italic">
                {t("thankYouBox.quote")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
