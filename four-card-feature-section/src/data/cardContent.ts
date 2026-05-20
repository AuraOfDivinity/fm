import supervisorIcon from "../assets/icon-supervisor.svg";
import teamBuilderIcon from "../assets/icon-team-builder.svg";
import karmaIcon from "../assets/icon-karma.svg";
import calculatorIcon from "../assets/icon-calculator.svg";

export type TCardContent = {
  title: string;
  description: string;
  color: "red" | "blue" | "cyan" | "orange";
  image: string;
};

export type TCardContentMap = {
  supervisor: TCardContent;
  teamBuilder: TCardContent;
  karma: TCardContent;
  calculator: TCardContent;
};

export const baseData: TCardContentMap = {
  supervisor: {
    title: "Supervisor",
    description: "Monitors activity to identify project roadblocks",
    color: "cyan",
    image: supervisorIcon,
  },
  teamBuilder: {
    title: "Team Builder",
    description:
      "Scans our talent network to create the optimal team for your project",
    color: "red",
    image: teamBuilderIcon,
  },
  karma: {
    title: "Karma",
    description: "Regularly evaluates our talent to ensure quality",
    color: "orange",
    image: karmaIcon,
  },
  calculator: {
    title: "Calculator",
    description:
      "Uses data from past projects to provide better delivery estimates",
    color: "blue",
    image: calculatorIcon,
  },
};
