
const Final = () => {
  return (
    <div className="flex min-h-screen bg-white">
      <div className="hidden w-1/2 flex-col items-center relative lg:flex">
        <div className="absolute inset-0 z-0">
          <img
            src="/home.png"
            alt="left"
            className="h-full w-full object-cover opacity-80"
          />
        </div>
        <div className="z-10 max-w-xl px-8 text-center mt-8">
          <h1 className="text-3xl/snug font-medium text-black">
            More Than Admissions.
            <br />
            It’s About Informed Decisions.
          </h1>

          <p className="text-sm text-gray-700 mt-4">
            Zusamen is not just about getting into a university — it’s about
            connecting with real people who’ve been there, learning from their
            experiences, and making one of the biggest decisions of your life
            with clarity and confidence.
          </p>
        </div>
      </div>
      <div className="flex w-full justify-center py-12 px-8 lg:w-1/2">
        <img
          src="/final.png"
          alt="final"
          className="object-scale-down"
        />
      </div>
    </div>
  );
};

export default Final;
