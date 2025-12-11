import { useNavigate } from 'react-router-dom';

const ServiceDetailsLayout = ({ title, description, features, image }) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-sky-50 text-slate-800 pt-16">
      <div className="container mx-auto px-4 py-12">
        <button 
          onClick={() => navigate('/', { state: { scrollTo: 'services' } })}
          className="mb-8 flex items-center text-sky-600 hover:text-sky-500"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </button>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h1 className="text-4xl font-bold mb-6 text-sky-900">{title}</h1>
            <p className="text-slate-700 mb-8">{description}</p>
            <div className="bg-white border border-sky-200 p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-4 text-sky-800">Key Features</h2>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-sky-600 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <img src={image} alt={title} className="rounded-lg shadow-xl w-full border border-sky-200" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsLayout;
