import React from "react";
import CertificatesData from '../resources/certificate.json'
import CertificateCard from "../Components/cards/CertificateCard";

export default function Certificates() {

  let certificateComponents = CertificatesData.map((certificate,index) => {

    return(

        <CertificateCard name={certificate.name} link={certificate.link} key={index} />

    )


  })



  return (
    <div className="w-[80%] ml-[10%] h-[calc(100vh-150px)] mt-10 text-white">
      <h1 className="text-4xl BebasFont mb-10 text-white">CERTIFICATES</h1>

        {certificateComponents}
    
    </div>
  );
}
