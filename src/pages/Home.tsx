const Home = () => {
  return (
    <div className="flex min-h-screen w-full bg-white">
      {/* Image */}
      <div className="hidden w-1/2 flex-col items-center relative lg:flex">
        <div className="absolute inset-0 z-0">
          <img
            src="src/assets/home.png"
            alt="home"
            className="h-full w-full object-cover opacity-80"
          />
        </div>
        <div className="z-10 max-w-xl px-8 text-center mt-8">
          <h1 className="text-3xl/snug font-medium text-black">
            More Than Admissions.
          </h1>
          <span className="text-3xl/snug font-medium text-black">
            It’s About Informed Decisions.
          </span>
          <p className="text-sm text-gray-700 mt-4">
            Zusamen is not just about getting into a university — it’s about
            connecting with real people who’ve been there, learning from their
            experiences, and making one of the biggest decisions of your life
            with clarity and confidence.
          </p>
        </div>
      </div>
      <div className="flex w-full flex-col justify-center bg-white px-8 py-12 lg:w-1/2 lg:px-20">
        <div className="mx-auto w-full max-w-md">
          {/* Logo */}
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-semibold text-gray-900">zusammen</h1>
            <p className="text-sm mt-4 font-regular text-gray-700">
              One Platform for <br /> Global Education and Careers
            </p>
            <p className="text-sm mt-1 text-gray-700"></p>
            <div className="border-t border-gray-300 mt-5"></div>
          </div>
          <form action="" className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Example"
                className="w-full rounded-md border border-gray-400 px-4 py-2 text-sm outline-none focus:border-black focus:ring-1 focus:ring-gray-800"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name=""
                id=""
                placeholder="example@mail.com"
                className="w-full rounded-md border border-gray-400 px-4 py-2 text-sm outline-none focus:border-black focus:ring-1 focus:ring-gray-800"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Phone
              </label>
              <div className="flex items-center w-full rounded-md border border-gray-400 px-4 py-2 text-sm outline-none focus:border-black focus:ring-1 focus:ring-gray-800">
                <span className="flex items-center pr-3 text-sm ">+91 </span>
                <input
                  type="tel"
                  name=""
                  id=""
                  placeholder="98450 98450"
                  className="w-full border-none text-sm outline-none"
                />
              </div>
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                name=""
                id=""
                placeholder="password"
                className="w-full rounded-md border border-gray-400 px-4 py-2 text-sm outline-none focus:border-black focus:ring-1 focus:ring-gray-800"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                name=""
                id=""
                placeholder="password"
                className="w-full rounded-md border border-gray-400 px-4 py-2 text-sm outline-none focus:border-black focus:ring-1 focus:ring-gray-800"
              />
            </div>
          </form>
          {/* button */}
          <button className="w-full bg-[#29394D] p-2 text-white font-md rounded-md mt-6 hover:bg-[#29394D]/90 hover:scale-105 transition-all">
            Signup
          </button>
          <div className="mt-6 text-center">
            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
            </div>
            <p className="mt-2 text-sm text-gray-500 py-4">
              Already have an account?
            </p>
            <button className="w-full rounded-md border border-[#29394D] p-2">
              Login
            </button>
          </div>
          <p className="mt-12 text-center text-[10px] text-gray-400">
            © 2025 Riskwolf. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
