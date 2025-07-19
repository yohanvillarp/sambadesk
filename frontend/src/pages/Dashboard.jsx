import Carousel from '../components/Carousel';
import dashboardItems from "../data/dashboardItems";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {

  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();
  const activeItem = dashboardItems[activeIndex];

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10 md:px-20">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-4">SambaDesk</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Administra tu dominio <span className="font-semibold">Samba AD</span> directamente desde tu navegador.
          </p>
        </header>

        <section>
          <Carousel
            items={dashboardItems}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        </section>

        <div className="mt-10 flex gap-4 flex-wrap justify-center">
          {activeItem.actions?.map((action, i) => (
            <button
              key={i}
              onClick={() => navigate(action.path)}
              className="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5"
            >
              {action.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
