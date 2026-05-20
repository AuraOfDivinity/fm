import { baseData } from "../data/cardContent";
import Card from "./Card";
import styles from "./FeatureSection.module.css";

const { supervisor, teamBuilder, karma, calculator } = baseData;

const FeatureSection = () => {
  return (
    <div className={styles.featureSection}>
      <div className={styles.featureSection__heading}>
        <div className={styles.featureSection__headingTitles}>
          <p className="text-preset-2">Reliable, efficient delivery</p>
          <p className="text-preset-1">Powered by Technology</p>
        </div>
        <p className="text-preset-4">
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </p>
      </div>
      <div className={styles.featureSection__cards}>
        <div className={styles.featureSection__supervisor}>
          <Card
            title={supervisor.title}
            description={supervisor.description}
            img_url={supervisor.image}
            border_color={supervisor.color}
          />
        </div>
        <div className={styles.featureSection__teamBuilder}>
          <Card
            title={teamBuilder.title}
            description={teamBuilder.description}
            img_url={teamBuilder.image}
            border_color={teamBuilder.color}
          />
        </div>
        <div className={styles.featureSection__karma}>
          <Card
            title={karma.title}
            description={karma.description}
            img_url={karma.image}
            border_color={karma.color}
          />
        </div>
        <div className={styles.featureSection__calculator}>
          <Card
            title={calculator.title}
            description={calculator.description}
            img_url={calculator.image}
            border_color={calculator.color}
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
