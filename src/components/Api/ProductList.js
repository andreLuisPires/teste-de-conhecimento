import React, { useState, useEffect } from "react";
import axios from "axios";
import ModalComponent from "./Modal";

import { Card, CardActions, CardContent, CardMedia } from "@mui/material";
import { Button, Typography, Alert } from "@mui/material";

function ProductList({ checkoutData }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_number: "",
    street_number: "",
    street: "",
    district: "",
    city: "",
    state: "",
  });

  const [thankYou, setThankYou] = useState(false);
  const [, setOrderSuccess] = useState(false);

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const orderData = {
        ...formData,
        product_id: selectedProduct.product_id,
      };
      const options = {
        method: "POST",
        url: `https://api-candidate.ogruposix.com/buy/${selectedProduct.product_id}`,
        data: orderData,
        headers: {
          "Content-Type": "application/json",
          "user-token": "E380835E-69F9-476D-89A0-C3990DAAC816"
        },
      };
      const response = await axios.request(options);
      console.log("Pedido realizado com sucesso:", response.data);
      setOrderSuccess(true);
      setThankYou(true);
    } 
    catch (error) {
      console.error("Error placing order:", error);
    }

    setFormData({
      name: "",
      email: "",
      phone_number: "",
      street_number: "",
      street: "",
      district: "",
      city: "",
      state: "",
    });
    closeModal();
  };

  useEffect(() => {
    let timer;
    if (thankYou) {
      timer = setTimeout(() => {
        setThankYou(false);
        setOrderSuccess(false);
      }, 2500);
    }
    return () => clearTimeout(timer);
  }, [thankYou]);

  return (
    <div className="flex flex-wrap justify-center gap-3">
      {checkoutData.products.slice(0).map((product) => (
        <div 
          key={product.product_id}
          className="max-w-xs mx-2 my-4"
        >
          <Card
            className="h-full w-[300px] flex flex-col justify-between"
            elevation={24}
          >
            <CardMedia
              className="h-48"
              image={product.image_url}
              title={product.name}
            />
            <CardContent>
              <Typography 
                gutterBottom 
                variant="h5" 
                component="div"
              >
                {product.name}
              </Typography>
              <Typography 
                variant="body2" 
                color="text.secondary"
              >
                Preço: R$ {product.price}
                <br />
                Desconto: R$ {product.discount}
                <br />
                Frete: {product.freight}
                <br />
                {product.best_choice && (
                  <span className="text-red-600 font-bold mt-2 flex justify-center animate-wiggle animate-infinite">
                    Melhor Escolha!
                  </span>
                )}
              </Typography>
            </CardContent>
            <div className="flex justify-end">
              <CardActions>
                <Button
                  variant="contained"
                  color="success"
                  onClick={() => openModal(product)}
                >
                  Comprar
                </Button>
              </CardActions>
            </div>
          </Card>
        </div>
      ))}
      {selectedProduct && (
        <ModalComponent
          open={!!selectedProduct}
          onClose={closeModal}
          selectedProduct={selectedProduct}
          formData={formData}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
        />
      )}
      {thankYou && (
        <div className="fixed inset-0 flex justify-start items-center animate-fade-right">
          <Alert 
            variant="filled"
            severity="success"
          >
            Obrigado por sua compra!
          </Alert>
        </div>
      )}
    </div>
  );
}

export default ProductList;
