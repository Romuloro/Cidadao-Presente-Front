import React, { useEffect, useState, useRef } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import MyMap from "../Map/MyMap";
import { ModalLocalidadeStyled } from "./style";

import { createLocalidade } from "../../api/api";

export default function FormDialog({ pickLocalidadeId }) {
  const [open, setOpen] = React.useState(false);
  const [selectPosition, setSelectPosition] = useState(null);
  const [coordsData, setCoordsData] = useState(null);
  const [descricao, setDescricao] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    postCoords();
  };

  const postCoords = async (mapCoord) => {
    /* console.log(mapCoord); */
    setCoordsData(mapCoord);
    console.log("data", coordsData, "descrição", descricao);
    const nickName = localStorage.getItem("user");
    
    /* try {
      const resultCreatedLocalidade = await createLocalidade(
        coordsData,
        descricao,
        nickName
      );

      const getCidadaoId = await getCidadao()

      const {id} = resultCreatedLocalidade.data
      pickLocalidadeId(id);

    } catch (error) {
      console.log(error);
    } */
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Onde é a sua demanda?
      </Button>

      <Dialog className="modal-container" open={open} onClose={handleClose}>
        <DialogTitle>Adicionar a Localização</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Aqui você deve colocar a sua localidade
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="outlined-basic"
            label="Qual é a descrição da sua localidade."
            fullWidth
            variant="standard"
            className="descricao_localidade"
            value={descricao}
            onChange={(e) => {
              setDescricao(e.target.value);
            }}
          />
          <ModalLocalidadeStyled>
            <div className="modal-container">
              <MyMap postCoords={postCoords} selectPosition={selectPosition} />
            </div>
          </ModalLocalidadeStyled>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>OK</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
