import { useState } from 'react';
import { styled, Box } from '@mui/system';
import ModalUnstyled from '@mui/base/ModalUnstyled';

const StyledModal = styled(ModalUnstyled)`
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

const Backdrop = styled('div')`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  bgcolor: 'background.paper',
  -webkit-tap-highlight-color: transparent;
`;

const style = {
  width: 400,
  border: '2px solid #000',
  p: 2,
  px: 4,
  pb: 3,
};

export default function ModalUnstyledDemo({patients}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  

  return (
    <div>
      <button type="button" onClick={handleOpen}>
         Visualizar
      </button>
      <StyledModal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={handleClose}
        BackdropComponent={Backdrop}
      >
        <Box sx={style}>

        <h2 id="unstyled-modal-title">{}</h2>
          <p id="unstyled-modal-description"></p>
           <p>Imagem</p>
           <p>Nome completo</p>
           <p>Email</p>
           <p>Gênero</p>
           <p>Data de nascimento</p>
           <p>Telefone</p>
           <p>Nacionalidade</p>
           <p>Endereço</p>
           <p>ID (Número de identificação)</p>
           <p>URL para compartilhamento</p>
        </Box>
      </StyledModal>
    </div>
  );
}
