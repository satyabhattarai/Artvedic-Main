import Image from "next/image";
import Link from "next/link";

const Chooseform = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <header className="py-4 text-center text-white ">
        <h1 className="text-4xl font-bold">Artistic Ventures</h1>
        <p className="mt-4 text-gray-400 text-l">
          (Choose what you are planning to do)
        </p>
      </header>
      <div>
        <main className="items-center justify-center gap-8 p-4 mt-8 ">
          <Link href={"/uploadform"}>
            <section className="p-8 mb-8 bg-white rounded-lg shadow-md cursor-pointer option-container">
              <h2 className="mb-4 text-3xl font-semibold">
                Sell Your Artworks
              </h2>
              <p className="mb-4 text-gray-600">
                Explore the possibility of selling your beautiful artworks to
                art enthusiasts.
              </p>
            </section>
          </Link>
          <Link href={"/bidrequests"}>
            <section className="p-8 mb-8 bg-white rounded-lg shadow-md cursor-pointer option-container">
              <h2 className="mb-4 text-3xl font-semibold">Bid Requests</h2>
              <p className="mb-4 text-gray-600">
                Dive into bid requests.
              </p>
            </section>
          </Link>
          <Link href={"/workshopform"}>
            <section className="p-8 mb-8 bg-white rounded-lg shadow-md cursor-pointer option-container">
              <h2 className="mb-4 text-3xl font-semibold">
                Start Art Teaching Workshop
              </h2>
              <p className="mb-4 text-gray-600">
                Share your artistic skills by starting art teaching workshops
                and inspiring others.
              </p>
            </section>
          </Link>
          <Link href={"/commissions"}>
            <section className="p-8 mb-8 bg-white rounded-lg shadow-md cursor-pointer option-container">
              <h2 className="mb-4 text-3xl font-semibold">
                Commission Requests
              </h2>
              <p className="mb-4 text-gray-600">
                Share your artistic skills by taking commissioned orders
                from buyers.
              </p>
            </section>
          </Link>
        </main>
      </div>
    </div>
  );
};

export default Chooseform;
