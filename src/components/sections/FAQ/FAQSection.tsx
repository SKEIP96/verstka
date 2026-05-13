import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "./faq-data";

export default function FAQSection() {
  return (
    <section className="bg-white py-16 lg:py-[80px]">
      <div className="container-main">
        {/* FAQ WRAPPER */}
        <div className="grid grid-cols-1 gap-10 lg:min-h-[400px] lg:grid-cols-2 lg:items-center lg:gap-[80px]">
          {/* FAQ HEADER */}
          <div className="order-1 flex flex-col items-end text-right lg:order-2">
            {/* LABEL */}
            <div className="mb-6 inline-flex items-center rounded-full border border-black/10 px-4 py-2 lg:mb-8">
              <span className="mr-2 h-3 w-3 rounded-full bg-black" />
              <span className="text-4 font-medium">FAQ&apos;s</span>
            </div>

            {/* TITLE */}
            <h1 className="max-w-[620px] font-bold">
              Frequently Asked Questions
            </h1>

            {/* SUBTITLE */}
            <p className="mt-4 max-w-[600px] text-5 font-regular text-brand-muted lg:mt-6 lg:text-3">
              Have questions about buying, selling, or renting with Urbanouse?
              We’ve got the answers to help guide you through the process.
            </p>
          </div>

          {/* FAQ LIST */}
          <div className="order-2 lg:order-1 lg:flex lg:h-full lg:min-h-[500px] lg:items-center">
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
                  <AccordionTrigger className="py-5 text-left text-5 font-medium hover:no-underline lg:py-6 lg:text-4">
                    {item.question}
                  </AccordionTrigger>

                  <AccordionContent className="max-w-[560px] text-6 font-regular text-brand-muted lg:text-5">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}