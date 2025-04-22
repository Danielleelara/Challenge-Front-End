import React from "react";
import { Box } from "@mui/system";
import styled from "styled-components";
import { Modal as ModalMUI } from "@mui/material";
import Avatar from "@mui/material/Avatar";


const StyledModal = styled(ModalMUI)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled("div")`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const StyledAvatar = styled(Avatar)`
  position: "relative";
  top: -80px;
  margin: 0 auto;
`;

const Description = styled.p`
  margin: 0
  
`;

const style = {
  width: 400,
  height: 300,
  color: "#FFBB33",
  textAlign: "center",
  bgcolor: "#222",
  borderRadius: "10%",
  p: 2,
  px: 4,
  pb: 3
};

export type Patient = {
    gender: string,
    name: {
        title:  string,
        first:  string,
        last:  string,
    },
    location: {
        street: {
            number: number,
            name:  string,
        },
        city: string,
        state:  string,
        country: string,
        postcode:  number,
        coordinates: {
            latitude:  string,
            longitude:  string,
        },
        timezone: {
            offset:  string,
            description:  string,
        }
    },
    email:  string,
    login: {
        uuid: string,
        username:  string,
        password:  string,
        salt:  string,
        md5:  string,
        sha1:  string,
        sha256: string,
    },
    dob: {
        date:  string,
        age:  number,
    },
    registered: {
        date: string,
        age:  number,
    },
    phone:  number,
    cell: number,
    id: {
        name: string,
        value:  number,
    },
    picture: {
        large:  string,
        medium:  string,
        thumbnail:  string,
    },
    nat: string,
}

type Props = {
  open: boolean; 
  handleClose: ()=> void; 
  currentPatient: Patient;
}


export default function Modal({ open, currentPatient, handleClose }: Props) {
  return (
    <StyledModal
      aria-labelledby="unstyled-modal-title"
      aria-describedby="unstyled-modal-description"
      BackdropComponent={Backdrop}
      open={open}
      onClose={handleClose}
    >
      <Box sx={style}>
        <StyledAvatar
          sx={{ width: 120, height: 120, position: "relative", right: "10px" }}
          src={currentPatient?.picture?.medium}
          alt={currentPatient?.name?.first}
        />
        <Description>
          Nome completo:{" "}
          {`${currentPatient?.name?.first} ${currentPatient?.name?.last}`}
        </Description>
        <Description>Email: {currentPatient?.email}</Description>
        <Description>Gênero: {currentPatient?.gender}</Description>
        <Description>Telefone: {currentPatient?.phone}</Description>
        <Description>Nacionalidade: {currentPatient?.nat}</Description>
        <Description>
          Endereço:
          {`${currentPatient?.location?.street?.name} ${currentPatient?.location?.street?.number}, ${currentPatient?.location?.city} - ${currentPatient?.location?.state}`}
        </Description>
        <Description>
          ID (Número de identificação): {currentPatient?.id?.value}
        </Description>
      </Box>
    </StyledModal>
  );
}
