import Image from "next/image";
import styles from "./Avatar.module.css";

export function AvatarComponent({
  name,
  otherStyles,
}: {
  name: string;
  otherStyles: string;
}) {
  return (
    <div
      className={`${styles.avatar} ${otherStyles} h-9 w-9`}
      data-tooltip={name}
    >
      <Image
        fill
        src={`https://liveblocks.io/avatars/avatar-${Math.floor(
          Math.random() * 30
        )}.png`}
        alt={name}
        className={styles.avatar_picture}
      />
    </div>
  );
}
