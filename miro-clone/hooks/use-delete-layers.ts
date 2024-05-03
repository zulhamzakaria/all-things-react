import { useSelf, useMutation } from "@/liveblocks.config";

export const useDeleteLayers = () => {
  const selection = useSelf((me) => me.presence.selection);

  return useMutation(
    ({ storage, setMyPresence }) => {
      const liveLayer = storage.get("layers");
      const liveLayerId = storage.get("layerIds");
      for (const id of selection) {
        liveLayer.delete(id);
        const idx = liveLayerId.indexOf(id);
        if (idx !== -1) {
          liveLayerId.delete(idx);
        }
      }
      setMyPresence({ selection: [] }, { addToHistory: true });
    },
    [selection]
  );
};
