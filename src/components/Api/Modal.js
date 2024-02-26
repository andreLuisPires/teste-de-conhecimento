import React from "react";
import { Modal, Typography, Box, Divider, TextField, Button } from "@mui/material";
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

function ModalComponent({
  open,
  onClose,
  selectedProduct,
  formData,
  handleInputChange,
  handleSubmit,
}) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="product-modal-title"
      aria-describedby="product-modal-description"
    >
      <Box sx={style}>
        <Typography 
            id="product-modal-title" 
            variant="h5" 
            align="center"
        >
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
            <Button 
                variant="contained"
                color="success"
                type="submit"
            >
              Confirmar
            </Button>
          </div>
        </form>
      </Box>
    </Modal>
  );
}

export default ModalComponent;
