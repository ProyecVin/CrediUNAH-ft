const Insigne = () => {
    return (
         <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-10">
  {/* Texto a la izquierda */}
  <div className="flex flex-col justify-center items-start space-y-4 text-left">
    <h1 className="text-2xl md:text-4xl font-semibold leading-snug text-gray-800">
      Gana Una Insignia por tu Logro <br />
    </h1>
    <p className="text-gray-600 text-base md:text-lg">
      Puedes ser premiado de acuerdo con tu buen desempeño
    </p>
  </div>

  {/* Imagen a la derecha, centrada verticalmente */}
  <img
    className="object-cover object-center w-full max-w-md rounded-lg shadow-xl h-72 shadow-blue-gray-900/50 md:h-64"
    src="images/carousel/carousel-06.jpg"
    alt="nature image"
  />
</div>

    )
}

export default Insigne;