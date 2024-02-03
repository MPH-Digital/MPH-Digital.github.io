import clsx from "clsx";
import Heading from "@theme/Heading";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Technical Documentation",
    //Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        <Link
          className="button button--secondary button--lg"
          to="/technical-docs/intro"
        >
          View the docs
        </Link>
      </>
    ),
  },
  {
    title: "Buisness Documentation",
    // Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        <Link
          className="button button--secondary button--lg"
          to="/business-docs/intro"
        >
          View the docs
        </Link>
      </>
    ),
  },
  {
    title: "Team Resources",
    // Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        <Link
          className="button button--secondary button--lg"
          to="/technical-docs/intro"
        >
          View the docs
        </Link>
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        {/* <Svg className={styles.featureSvg} role="img" /> */}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
