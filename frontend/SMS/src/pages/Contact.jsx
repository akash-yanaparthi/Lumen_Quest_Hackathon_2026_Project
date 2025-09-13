export default function Contact() {
  return (
    <div className="max-w-lg mx-auto bg-white shadow-xl rounded-2xl p-8">
      <h2 className="text-2xl font-bold text-purple-700 text-center mb-6">
        Contact Us
      </h2>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-400"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-400"
        />
        <textarea
          rows="4"
          placeholder="Your Message"
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-400"
        />
        <button
          type="submit"
          className="w-full py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
