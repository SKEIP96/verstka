import { agents } from "./agent-data";
import { AgentCarousel } from "./AgentCarousel";

export default function TopAgentsSection() {
  return (
    <section className="overflow-hidden py-[40px]">
      {/* HEADER */}
      <div className="container-main">
        <div className="flex flex-col gap-4">
          {/* LABEL */}
          <div className="inline-flex self-start items-center rounded-full border border-black/10 px-4 py-2">
            <span className="mr-2 h-3 w-3 rounded-full bg-black" />
            <span className="text-4 font-medium">Top Rate Agents</span>
          </div>

          {/* TITLE */}
          <h2 className="font-semibold text-black">
            Meet One of Our Top-Performing Agents
          </h2>

          {/* SUBTITLE */}
          <p className="text-4 font-regular text-[#8C8C8C]">
            A dedicated section highlighting an agent who’s gone above and
            beyond
          </p>
        </div>
      </div>

      {/* FULL WIDTH CAROUSEL */}
      <div className="mt-8 w-full">
        <AgentCarousel agents={agents} />
      </div>
    </section>
  );
}
