import { BsFillPlayFill } from "react-icons/bs";
import { useRouter } from "next/router";

interface PlayButtonProps {
  movieId: string;
  isSmall?: boolean;
}

const PlayButton: React.FC<PlayButtonProps> = ({
  movieId,
  isSmall
}) => {
  const router = useRouter();

  return isSmall ? (
    <div
      onClick={() => router.push(`/watch/${movieId}`)}
      className="
        cursor-pointer
        w-6
        h-6
        lg:w-10
        lg:h-10
        bg-white
        rounded-full
        flex
        justify-center
        items-center
        transition
        hover:bg-neutral-300
      "
    >
      <BsFillPlayFill size={30} />
    </div>
  ) : (
    <button
      onClick={() => router.push(`/watch/${movieId}`)}
      className="
        bg-white
        rounded-md
        py-1 md:py-2
        px-2 md:px-4
        w-auto
        text-xs lg:text-lg
        font-semibold
        flex
        flex-row
        items-center
        gap-1
        hover:bg-neutral-300
        transition
      "
    >
      <BsFillPlayFill size={25} />
      Play
    </button>
  );
}

export default PlayButton;
