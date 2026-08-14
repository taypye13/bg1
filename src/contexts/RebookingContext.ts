import { createContext } from 'react';

import { LLMP, LLSP } from '@/api/itinerary';

export interface Rebooking {
  current: LLMP | LLSP | undefined;
  auto: boolean;
  begin: (booking: LLMP | LLSP, auto?: boolean) => void;
  end: () => void;
}

export default createContext<Rebooking>({
  current: undefined,
  auto: false,
  begin: () => undefined,
  end: () => undefined,
});
