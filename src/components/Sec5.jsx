import React from "react";
function Sec5() {
  return (
    <div className="md:h-[439px] md:flex">
  <div className="md:w-[50%] hidden md:block">
    <img src="./Piscina.png" alt="" className="w-[100%] h-[439px]" />
  </div>
  <div className="bg-white md:w-[50%] px-5 py-5 backhotel flex flex-col justify-center ">
    <div className="text-[18px] text-left hotelphases">
      <div className="hotelofi">
        <h1 className="text-[33px] font-bold text-white">HOTEL OFICIAL</h1>
      </div>
      <p className="mt-4 text-white text-center md:text-left">
        O SJ Premium Hotels by Atlantica está localizado no
        Setor Oeste, região nobre de Goiânia.
        <br />
        Próximo ao Shopping Bougainville, às Avenidas 85
        e República do Líbano, principais avenidas da cidade,
        das Praças do Sol e Tamandaré e poucos minutos do
        Centro de Convenções. Situado a 5 km do
        Estádio Serra Dourada.
      </p>
    </div>
  </div>
</div>


  );
}

export default Sec5;
