import { Helmet } from "react-helmet-async";
import SkullFoto from "../../assets/skull.png";


export default function Head({ title,desc, keywords }) {
  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/svg+xml" href={SkullFoto} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <meta name="description" content={desc} />
        <meta name="keywords" content={keywords} />
      </Helmet>
    </>
  );
}
