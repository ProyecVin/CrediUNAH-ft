const Texttwo = () => {
    return (
       <div className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-8">
  {/* Imagen a la izquierda */}
  <div className="min-h-[140px] w-full lg:w-1/2 flex justify-center">
    <img
      className="object-cover object-center w-full max-w-md rounded-lg shadow-xl h-72 shadow-blue-gray-900/50"
      src="images/carousel/carousel-05.jpg"
      alt="nature image"
    />
  </div>

  {/* Contenido a la derecha */}
  <div className="flex flex-col justify-center items-center w-full lg:w-1/2 space-y-4 text-center">
    <h1 className="text-2xl md:text-4xl font-bold leading-tight text-gray-800">
      Cómo organizar tus certificados como un profesional
    </h1>
    <p className="text-gray-600 text-base md:text-lg">
      En nuestra plataforma, diseñamos un sistema para que gestiones tus logros académicos.
      Con solo ingresar tu número de identidad puedes acceder para visualizar tus certificados.
    </p>
    <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-3 px-6 rounded-md shadow transition">
      Ver más
    </button>

    
  </div>
</div>

    )
}

export default Texttwo;