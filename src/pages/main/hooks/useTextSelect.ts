import { useSnackbar } from "notistack";
import { useEffect, type RefObject } from "react";

/**
 * Хук `useTextSelect` копирует выделенный текст в буфер обмена.
 *
 * Работает только при завершении выделения (событие `mouseup`).
 *
 * @param ref - React Ref на элемент, внутри которого отслеживается выделение.
 */
export const useTextSelect = (ref: RefObject<HTMLDivElement | null>) => {
  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    const handleSelection = () => {
      const selection = window.getSelection();
      if (!selection || selection.isCollapsed) return;

      const selectedText = selection.toString();

      //selection внутри ref
      if (ref.current && selection.anchorNode) {
        if (ref.current.contains(selection.anchorNode)) {
          navigator.clipboard
            .writeText(selectedText)
            .then(() => {
              enqueueSnackbar("Скопировано в буфер:" + selectedText, {
                variant: "success",
                autoHideDuration: 1000,
              });
            })
            .catch(() => {
              enqueueSnackbar("Ошибка копирования", {
                variant: "error",
                autoHideDuration: 1000,
              });
            });
        }
      }
    };

    document.addEventListener("mouseup", handleSelection);

    return () => {
      document.removeEventListener("mouseup", handleSelection);
    };
  }, [enqueueSnackbar, ref]);
};
