import { aeoSeoLoops } from "./aeo-seo";
import { apArLoops } from "./ap-ar";
import { coldOutreachLoops } from "./cold-outreach";
import { creativesLoops } from "./creatives";
import { emailLoops } from "./emails";
import { landingPageLoops } from "./landing-pages";
import { pricingLoops } from "./pricing";
import { procurementLoops } from "./procurement";
import { warmOutreachLoops } from "./warm-outreach";

export const loops = [
  ...landingPageLoops,
  ...creativesLoops,
  ...aeoSeoLoops,
  ...pricingLoops,
  ...emailLoops,
  ...coldOutreachLoops,
  ...warmOutreachLoops,
  ...apArLoops,
  ...procurementLoops,
];
