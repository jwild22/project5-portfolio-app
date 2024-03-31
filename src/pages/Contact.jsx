export default function Contact() {
  return (
    <div className="w-full p-4 md:h-screen">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full items-center gap-6">
        <div className="flex flex-col items-center justify-center gap-6">
          <h3 className="text-5xl font-medium inline">Contact</h3>
          <p>Submit the form below to get in touch with me</p>
        </div>
        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/nbdongva"
            method="POST"
            className="flex flex-col items-center justify-center w-full md:w-1/2 gap-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md w-96 focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="p-2 bg-transparent border-2 rounded-md w-96 focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md w-96 focus:outline-none"
            ></textarea>
            <button className="text-white bg-gradient-to-b from-cyan-600 to-teal-600 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
