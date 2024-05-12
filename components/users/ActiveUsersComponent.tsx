import { useOthers, useSelf } from "@/liveblocks.config";

//custom
import styles from "./index.module.css";
import { AvatarComponent } from "./AvatarComponent";
import { generateRandomName } from "@/lib/utils";
import { useMemo } from "react";

const ActiveUsersComponent = () => {
  const users = useOthers();
  const currentUser = useSelf();
  const hasMoreUsers = users.length > 3;

  //prevent user profile colors from changing
  const memorizeUsers = useMemo(() => {
    return (
      <div className="flex items-center justify-center gap-1">
        <div className="flex pl-3">
          {currentUser && (
            <AvatarComponent
              name="You"
              otherStyles="border-[3px] border-primary-green"
            />
          )}

          {users.slice(0, 3).map(({ connectionId }) => {
            return (
              <AvatarComponent
                key={connectionId}
                name={generateRandomName()}
                otherStyles="-ml-3"
              />
            );
          })}

          {hasMoreUsers && (
            <div className={styles.more}>+{users.length - 3}</div>
          )}
        </div>
      </div>
    );
  }, [users.length]);

  return memorizeUsers;
};

export default ActiveUsersComponent;
