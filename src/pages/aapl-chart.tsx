import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { AAPLStockChartView } from 'src/sections/aapl-chart/views/aapl-chart';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {`AAPL Stock Chart - ${CONFIG.appName}`}</title>
      </Helmet>

      <AAPLStockChartView />
    </>
  );
}
