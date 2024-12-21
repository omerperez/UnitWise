import { NavigateBefore, NavigateNext } from "@mui/icons-material";
import { AnimatePresence, motion } from "framer-motion";
import { Button, Tooltip } from "../../components/ui";

type CollapseButtonProps = {
  open: boolean;
  onClick: () => void;
};
export const CollapseButton = ({ open, onClick }: CollapseButtonProps) => {
  const rotateOpenValue = open ? -1 : 1;
  return (
    <Tooltip
      title={<b>{open ? "Collapse Sidebar" : "Pin Sidebar"}</b>}
      placement="right"
      variant="light"
      size="md"
    >
      <Button
        onClick={onClick}
        className="relative"
        fullWidth
        size="lg"
        variant="ghost"
      >
        <div className="text-neutral-400 px-4 absolute inset-0 flex items-center justify-end">
          <AnimatePresence mode="wait">
            <motion.div
              key="NavigateBefore"
              initial={{ rotate: rotateOpenValue * 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: rotateOpenValue * 90, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {open ? (
                <NavigateBefore color="inherit" fontSize="small" />
              ) : (
                <NavigateNext color="inherit" fontSize="small" />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </Button>
    </Tooltip>
  );
};
