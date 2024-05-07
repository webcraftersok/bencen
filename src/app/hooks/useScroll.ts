import { useRouter } from 'next/navigation';
import { scrollToId } from '../utils';

export const useScroll = (id: number, offset: number, desiredPath: string, scrollToTop: boolean) => {
  const router = useRouter();

  return () => {
    router.replace(desiredPath, {
      scroll: scrollToTop,
    });
    setTimeout(() => scrollToId(id, offset), scrollToTop ? 1300 : 0);
  };
};
