"use client"; // Required since this is a client component
import React, { FC } from 'react';
import { Modal, Box } from "@mui/material";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  activeItem?: number; // Made optional and typed as number (adjust if needed)
  component: React.ComponentType<any>; // Use ComponentType for better typing
  setRoute?: (route: string) => void; // Optional as in your version
}

const CustomModal: FC<Props> = ({ open, setOpen, setRoute, activeItem, component: Component }) => {
  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[450px] bg-white dark:bg-slate-900 rounded-[8px] shadow p-4 outline-none"
      >
        <Component setOpen={setOpen} setRoute={setRoute} activeItem={activeItem} />
      </Box>
    </Modal>
  );
};

export default CustomModal;