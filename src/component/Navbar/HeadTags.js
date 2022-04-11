import React from "react";

import { Helmet } from "react-helmet";

const HeadTags = () => (
  <Helmet>
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=AW-389792692"
    ></script>

    <script>
      {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'AW-389792692');
      `}
    </script>
  </Helmet>
);

export default HeadTags;
