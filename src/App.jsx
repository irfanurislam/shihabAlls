import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [myData, setMyData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("data.json");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setMyData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  const getFirst15Words = (description) => {
    return (
      description.split(" ").slice(0, 10).join(" ") +
      (description.split(" ").length > 10 ? "..." : "")
    );
  };

  return (
    <div className="flex items-center justify-center min-h-screen container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {myData &&
          myData.map((datas) => (
            <div
              key={datas.title}
              className="rounded-xl shadow-xl border border-slate-200 min-h-full min-w-full"
            >
              <div className="p-5 flex flex-col">
                <div className="rounded-xl overflow-hidden">
                  <img
                    className="w-full"
                    src="https://i.ibb.co.com/0n8ck0G/ustsqw1468250014.jpg"
                    alt={datas.title}
                  />
                </div>
                <h5 className="text-2xl md:text-3xl font-medium mt-3">
                  {datas.title}
                </h5>
                <p className="text-slate-500 text-lg mt-3 h-32">
                  {getFirst15Words(datas?.description)}
                </p>
                <div className="flex justify-between items-center gap-2">
                  <a
                    href={datas.visitWeb}
                    className="text-center bg-blue-400 text-white px-3 py-1 rounded-xl font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out"
                  >
                    Visit web
                  </a>
                  <a
                    href={datas.visitWeb}
                    className="text-center bg-blue-400 text-white py-1 px-3 rounded-xl font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out"
                  >
                    server
                  </a>
                  <a
                    href={datas.visitWeb}
                    className="text-center bg-blue-400 text-white py-1 px-3 rounded-xl font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out"
                  >
                    Client
                  </a>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
