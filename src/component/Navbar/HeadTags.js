import React from "react";
import { Helmet } from "react-helmet";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/elagent-icon/style.css";
import "../../assets/etline-icon/style.css";
import "../../assets/flaticon/flaticon.css";
import "../../assets/css/animate.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../assets/css/style.css";
import "../../assets/css/responsive.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "popper.js";

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
