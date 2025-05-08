
const HeroText = () => {
    return (
      <div className="flex flex-col justify-center items-start space-y-6">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight text-gray-800">
          Impulsa tu conocimiento <br />
          <span className="text-sky-500">inspira al mundo</span>
        </h1>
        <p className="text-gray-600 text-lg">
          Ingresa tu número de identidad para ver tus cursos y certificados
        </p>
        <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-3 px-6 rounded-md shadow transition">
          Ver mis certificados
        </button>
      </div>
    );
  };
  
  export default HeroText;
  