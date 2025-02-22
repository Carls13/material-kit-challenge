import axios from 'axios';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSearchParams } from 'react-router-dom';

import { CONFIG } from 'src/config-global';

import { OverviewAnalyticsView } from 'src/sections/overview/view';

// ----------------------------------------------------------------------

export default function Page() {
  const [searchParams] = useSearchParams();

  // Check if code is not present in URL
  if (window.location.search === '' && !localStorage.getItem('code')) {
    // Redirect to login page
    window.location.href = '/sign-in';
  } else {
    // Get code from URL
    const code = searchParams.get('code');

    if (code) {
      localStorage.setItem('code', code);
    }
  }

  return (
    <>
      <Helmet>
        <title> {`Dashboard - ${CONFIG.appName}`}</title>
        <meta
          name="description"
          content="The starting point for your next project with Minimal UI Kit, built on the newest version of Material-UI ©, ready to be customized to your style"
        />
        <meta name="keywords" content="react,material,kit,application,dashboard,admin,template" />
      </Helmet>

      <OverviewAnalyticsView />
    </>
  );
}
