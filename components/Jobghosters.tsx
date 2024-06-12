import Card from "./neo/Card";
import { companies } from "../lib/companies";

const Jobghosters = () => (
  <section
    id="companies"
    className="flex flex-wrap py-12 p-4 gap-4 justify-center"
  >
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <div className="inline-block rounded-lg bg-neutral-100 px-3 py-1 text-sm dark:bg-neutral-800">
            Companies that Ghost{" "}
          </div>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Sharing Experiences to Foster Transparency{" "}
          </h2>
          <p className="max-w-[900px] text-neutral-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-neutral-400">
            Explore the community-curated list of companies that have left job
            seekers in the dark. Contribute your experiences to help others stay
            informed.{" "}
          </p>
        </div>
      </div>
    </div>
    {companies.map((company) => (
      <div
        key={company.name}
        className="
         flex-grow-0 flex-shrink-0 
         w-full 
         sm:w-1/3 
         lg:w-1/4
         p-2
       "
      >
        <Card
          thumbnail="/assets/jobghoster.jpg"
          calllToActionLink={company.website}
          title={company.name}
          description={company.description}
          callToActionText={company.ghostedDuration}
        />
      </div>
    ))}
  </section>
);

export default Jobghosters;
