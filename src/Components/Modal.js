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
  background-color: white;
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
  bgcolor: 'background.paper',
  border: '2px solid #000',
  p: 2,
  px: 4,
  pb: 3,
};

export default function Modal({open, handleClose, currentPatient}) {

  return (
    <div>
      <StyledModal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        BackdropComponent={Backdrop}
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>

        <h2 id="unstyled-modal-title">{}</h2>
          <p id="unstyled-modal-description"></p>
           <img src={currentPatient?.picture?.thumbnail} alt={currentPatient?.name?.first}  />
           <p>Nome completo: {`${currentPatient?.name?.first} ${currentPatient?.name?.last}`}</p>
           <p>Email: {currentPatient?.email}</p>
           <p>Gênero: {currentPatient?.gender}</p>
           <p>Data de nascimento{currentPatient?.dob.date}</p>
           <p>Telefone: {currentPatient?.phone}</p>
           <p>Nacionalidade: {currentPatient?.nat}</p>
           <p>Endereço: {`${currentPatient?.location?.street?.name} ${currentPatient?.location?.street?.number}, ${currentPatient?.location?.city} - ${currentPatient?.location?.state}`}</p>
           <p>ID (Número de identificação): {currentPatient.id.value}</p>
           <p>URL para compartilhamento</p>
        </Box>
      </StyledModal>
    </div>
  );
}
