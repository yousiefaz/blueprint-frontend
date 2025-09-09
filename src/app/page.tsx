import Navbar from "@/components/Navbar";
import { ArrowRightCircle } from "lucide-react";

const Home = () => {
  return (
    <main className="overflow-x-hidden pt-24 lg:pt-28 antialiased">
      <div className="relative container">
        <section id="Home" className="relative">
          <div className="flex flex-col text-center space-y-12">
            <div className="flex flex-col items-center space-y-6">
              <p className="capitalize border border-slate-700 py-1 px-3 text-xs rounded-3xl cursor-pointer hover:border-sky-500 hover:bg-slate-800 shadow-md trasition-all">
                new features are now available.
                <ArrowRightCircle className="inline ml-1 w-4 h-4" />
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};
export default Home;
