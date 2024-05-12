import { LiveCursorProps } from "@/types/type";

//custom
import { COLORS } from "@/constants";
import CursorComponent from "./CursorComponent";

const LiveCursorsComponent = ({ others }: LiveCursorProps) => {
  return others.map(({ connectionId, presence }) => {
    if (!presence?.cursor) return null;

    return (
      <CursorComponent
        key={connectionId}
        color={COLORS[Number(connectionId) % COLORS.length]}
        x={presence.cursor.x}
        y={presence.cursor.y}
        message={presence.message}
      />
    );
  });
};

export default LiveCursorsComponent;
