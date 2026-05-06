import { agents } from "./agent-data";
import { AgentCarousel } from "./AgentCarousel"; // импорт созданного компонента

export default function TopAgentsSection() {
  return (
    <section className="py-[40px]">
      <div className="container-main">
        <div className="flex flex-col gap-8">
          {/* HEADER SECTION (оставляем без изменений) */}
          <div className="flex flex-col gap-4">
            <div className="inline-flex self-start items-center rounded-full border border-black/10 px-4 py-2">
              <span className="mr-2 h-3 w-3 rounded-full bg-black" />
              <span className="text-4 font-medium">Top Rate Agents</span>
            </div>
            <h3 className="font-semibold text-black">
              Meet One of Our Top-Performing Agents
            </h3>
            <p className="text-4 text-[#8C8C8C]">
              A dedicated section highlighting an agent who’s gone above and beyond
            </p>
          </div>

          {/* AGENT SLIDER */}
          <div className="relative w-full">
            <AgentCarousel agents={agents} />
          </div>
        </div>
      </div>
    </section>
  );
}