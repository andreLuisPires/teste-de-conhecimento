import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductList from "./ProductList";
import VideoComponent from "./VideoComponent";

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

function CheckoutComponent() {
  const [checkoutData, setCheckoutData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = {
          method: "GET",
          url: "https://api-candidate.ogruposix.com/checkout/95BD9233-8FDC-48AD-B4C5-E5BAF7578C15",
          headers: {
            "user-token": "E380835E-69F9-476D-89A0-C3990DAAC816",
          },
        };
        const response = await axios.request(options);
        setCheckoutData(response.data.object[0]);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  if (!checkoutData) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center w-[100%]">
      <div className="flex justify-center text-center">
        <div className="flex mt-[110px] sm:mt-[110px] md:mt-[120px] lg:mt-[130px] xl:mt-[140px] 2xl:mt-[140px] w-[1050px] p-3 animate-fade-left animate-delay-200">
          <span className="text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl font-semibold">
            {checkoutData.video_headline}
          </span>
        </div>
      </div>
      <div className="w-[100%] flex justify-center animate-fade-left animate-delay-300">
        <div className="p-11 w-[1102px]">
          {checkoutData.video_url && (
            <VideoComponent videoUrl={checkoutData.video_url} />
          )}
        </div>
      </div>
      <div className="w-[100%] flex justify-center p-4 animate-fade-left animate-delay-400">
        <div className="flex justify-center bg-[#002C4B] text-white w-[1020px] rounded-[10px]">
          <span className="p-5 text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl font-semibold">
            {checkoutData.video_sub_headline}
          </span>
        </div>
      </div>
      <div className="mt-[100px] animate-fade-left animate-delay-500">
        <span className="text-[30px] font-bold flex justify-center">
          Produtos Disponíveis
        </span>
        <div className="mt-[30px] animate-fade-left animate-delay-600">
          <ProductList checkoutData={checkoutData} />
        </div>
      </div>
    </div>
  );
}

export default CheckoutComponent;
