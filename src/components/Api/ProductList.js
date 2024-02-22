import React, { useState, useEffect } from "react";
import axios from "axios";

import { Card, CardActions, CardContent, CardMedia } from "@mui/material";
import { Button, Typography, Modal, TextField } from "@mui/material";
import { Box, Divider, Alert } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: 500,
  maxHeight: "90vh",
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

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
  const [,setOrderSuccess] = useState(false);

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
          "user-token": "E380835E-69F9-476D-89A0-C3990DAAC816",
        },
      };
      const response = await axios.request(options);
      console.log("Pedido realizado com sucesso:", response.data);
      setOrderSuccess(true);
      setThankYou(true);
    } catch (error) {
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
      {checkoutData.products.slice(0, 3).map((product) => (
        <div key={product.product_id} className="max-w-xs mx-2 my-4">
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
              <Typography gutterBottom variant="h5" component="div">
                {product.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
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
        <Modal
          open={true}
          onClose={closeModal}
          aria-labelledby="product-modal-title"
          aria-describedby="product-modal-description"
        >
          <Box sx={style}>
            <Typography id="product-modal-title" variant="h5" align="center">
              {selectedProduct.name}
            </Typography>
            <Divider variant="middle" />
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                size="small"
                margin="normal"
                variant="outlined"
                label="Nome"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <TextField
                fullWidth
                size="small"
                margin="normal"
                variant="outlined"
                label="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                InputProps={{
                  endAdornment: <EmailOutlinedIcon color="action" />,
                }}
                required
              />
              <TextField
                fullWidth
                size="small"
                margin="normal"
                variant="outlined"
                label="Número de telefone"
                type="tel"
                name="phone_number"
                value={formData.phone_number}
                onChange={handleInputChange}
                required
                inputProps={{
                  pattern: "[0-9]*",
                }}
                InputProps={{
                  endAdornment: <LocalPhoneOutlinedIcon color="action" />,
                }}
              />
              <div className="flex gap-4">
                <TextField
                  fullWidth
                  size="small"
                  margin="normal"
                  variant="outlined"
                  label="Rua"
                  name="street"
                  value={formData.street}
                  onChange={handleInputChange}
                  required
                />
                <TextField
                  size="small"
                  margin="normal"
                  variant="outlined"
                  label="N°"
                  name="street_number"
                  value={formData.street_number}
                  onChange={handleInputChange}
                  required
                  inputProps={{
                    pattern: "[0-9]*",
                  }}
                />
              </div>
              <TextField
                fullWidth
                size="small"
                margin="normal"
                variant="outlined"
                label="Bairro"
                name="district"
                value={formData.district}
                onChange={handleInputChange}
                required
              />
              <div className="flex gap-4">
                <TextField
                  fullWidth
                  size="small"
                  margin="normal"
                  variant="outlined"
                  label="Cidade"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                />
                <TextField
                  size="small"
                  margin="normal"
                  variant="outlined"
                  label="Estado"
                  name="state"
                  type="text"
                  value={formData.state}
                  onChange={handleInputChange}
                />
              </div>
              <Divider variant="middle" />
              <div className="mt-2 flex justify-center">
                <Button variant="contained" color="success" type="submit">
                  Confirmar
                </Button>
              </div>
            </form>
          </Box>
        </Modal>
      )}
      {thankYou && (
        <div className="fixed inset-0 flex justify-start items-center animate-fade-right">
          <Alert variant="filled" severity="success">
            Obrigado por sua compra!
          </Alert>
        </div>
      )}
    </div>
  );
}

export default ProductList;
