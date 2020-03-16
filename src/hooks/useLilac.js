import { useEffect } from 'react';

export const useLilac = () => useEffect(() => {
  if (typeof window !== 'undefined' && !global.LILAC_READY) {
    // eslint-disable-next-line global-require
    require('@webcomponents/webcomponentsjs/webcomponents-bundle');
    // eslint-disable-next-line global-require
    require('@codear/lilac');
    global.LILAC_READY = true;
  }
}, []);
