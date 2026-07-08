import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section className="flex flex-col items-center justify-center text-center p-6">
        <h2 className="text-gray-400 font-light text-xl">Reliable, efficient delivery</h2>
        <h1 className="text-gray-500 font-bold text-xl mb-3">Powered by Technology</h1>
        <p className="text-gray-400">
          Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful
        </p>
      </section>

      <section className="grid grid-cols-1 p-8">
        <div className="shadow-lg rounded-md border-t-5 border-t-cyan p-8 mb-5">
          <h2 className="text-gray-500 font-bold text-lg">Supervisor</h2>
          <p className="text-gray-400 mb-5">Monitors activity to identify project roadblocks</p>
          <Image src="/icon-supervisor.svg" alt="supervisor icon" width={50} height={50} className="ml-auto block" />
        </div>

        {/* Inicio Contenedor doble */}
        <div className="">
          <div className="shadow-lg rounded-md border-t-5 border-t-red p-8 mb-5">
            <h2 className="text-gray-500 font-bold text-lg">Team Builder</h2>
            <p className="text-gray-400 mb-5">Scans our talent network to create the optimal team for your project</p>
            <Image src="/icon-team-builder.svg" alt="team builder icon" width={50} height={50} className="ml-auto block" />
          </div>

          <div className="shadow-lg rounded-md border-t-5 border-t-orange p-8 mb-5">
            <h2 className="text-gray-500 font-bold text-lg">Karma</h2>
            <p className="text-gray-400 mb-5">Regularly evaluates our talent to ensure quality</p>
            <Image src="/icon-karma.svg" alt="karma icon" width={50} height={50} className="ml-auto block" />
          </div>
        </div>
        {/* Fin contenedor doble */}

        <div className="shadow-lg rounded-md border-t-5 border-t-blue p-8 mb-5">
          <h2 className="text-gray-500 font-bold text-lg">Calculator</h2>
          <p className="text-gray-400 mb-5">Uses data from past projects to provide better delivery estimates</p>
          <Image src="/icon-calculator.svg" alt="calculator icon" width={50} height={50} className="ml-auto block" />
        </div>
      </section>
    </div>
  );
}
