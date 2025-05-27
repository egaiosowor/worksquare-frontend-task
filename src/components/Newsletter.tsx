export function Newsletter() {
  return (
    <section className="px-4 py-15 sm:pb-30 w-full bg-[#f4f7fa]">
      <div className="p-10 sm:py-13 sm:px-14 flex flex-col sm:flex-row  sm:items-center justify-between gap-10 bg-accent max-w-6xl mx-auto rounded-4xl">
        <div>
          <h2 className="mb-4 text-4xl md:text-5xl lg:text-6xl text-white font-espuma">
            Sign up for <br /> our Newsletter
          </h2>
          <p className="text-white/70 text-base lg:text-lg max-w-[44ch]">
            Stay informed about our latest properties at DreamDwell Estates by
            subscribing to regular updates directly to your inbox.
          </p>
        </div>
        <form className="w-full lg:flex-1 flex flex-col items-center gap-4">
          <input
            type="email"
            required
            placeholder="Enter your Email Address"
            className="text-white text-lg placeholder:text-white/70 border border-white rounded-xl px-4.5 sm:px-2 py-5.5 lg:px-4.5 w-full"
          />
          <button
            type="submit"
            className="w-full lg:max-w-[60%]  flex items-center justify-center gap-2 text-accent bg-white text-lg px-6 py-4 rounded-xl cursor-pointer"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
