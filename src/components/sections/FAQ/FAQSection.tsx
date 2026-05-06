import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "./faq-data";

export default function FAQSection() {
  return (
    <section className="section bg-white py-[80px]">
      <div className="container-main">
        {/* FAQ WRAPPER */}
        <div className="grid grid-cols-2 items-top gap-[80px] min-h-[400px]">
          {/* FAQ LIST */}
          <div className="min-h-[500px] flex h-full items-center">
            <Accordion
              type="single"
              defaultValue="faq-1"
              collapsible
              className="w-full"
            >
              {faqs.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={`faq-${item.id}`}
                  className="border-b border-black/10"
                >
                  <AccordionTrigger className="py-6 text-left text-[18px] font-medium hover:no-underline">
                    {item.question}
                  </AccordionTrigger>

                  <AccordionContent className="max-w-[560px] text-[16px] font-regular leading-[1.6] text-[#8C8C8C]">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* FAQ HEADER */}
          <div className="flex flex-col items-end text-right">
            {/* LABEL */}
            <div className="mb-8 inline-flex items-center rounded-full border border-black/10 px-4 py-2">
              <span className="mr-2 h-3 w-3 rounded-full bg-black" />
              <span className="text-4 font-medium">FAQ&apos;s</span>
            </div>

            {/* TITLE */}
            <h1 className="max-w-[620px]  font-bold leading-[1.1]">
              Frequently Asked Questions
            </h1>

            {/* SUBTITLE */}
            <p className="mt-6 max-w-[600px] text-3 font-regular text-[#8C8C8C]">
              Have questions about buying, selling, or renting with Urbanouse?
              We’ve got the answers to help guide you through the process.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
