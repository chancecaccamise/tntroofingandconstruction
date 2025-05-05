import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: "How do I know if I need a new roof or just a repair?",
    answer: "If your roof has minor issues like a few missing shingles or a small leak, a repair may be sufficient. However, if you’re noticing widespread damage, sagging areas, or if your roof is over 15–20 years old, it might be time for a replacement. Our team offers free inspections to help you decide.",
  },
  {
    question: "How long does a typical roof last?",
    answer: "Depending on the material, most roofs last between 15–30 years. Asphalt shingles typically last 20 years, while metal or tile can last 40 years or more with proper maintenance.",
  },
  {
    question: "What types of roofing materials do you offer?",
    answer: "We install a variety of materials including asphalt shingles, metal roofing, tile, flat roofing systems, and more! We’ll help you choose the best option based on your home’s needs, style, and budget.",
  },
  {
    question: "How long will the roofing process take?",
    answer: "Most residential roofing projects take 1–2 days, depending on the size of the roof and weather conditions. We strive to minimize disruptions and keep your property clean throughout the process.",
  },
  {
    question: "What should I do to prepare my home before roofing work begins?",
    answer: "We recommend removing valuables from walls and ceilings, securing pets, and moving vehicles away from the driveway. Our team will handle the rest, including protecting landscaping and cleanup afterward.",
  },
  {
    question: "Do you offer free roof inspections or estimates?",
    answer: "Yes, we provide free inspections and detailed estimates. Whether you’re concerned about storm damage or simply due for a checkup, we’re here to help.",
  },
  {
    question: "What should I do if my roof is damaged in a storm?",
    answer: "Contact us right away for a free storm damage inspection. We’ll document the damage, secure any exposed areas, and guide you through the next steps.",
  },
  {
    question: "Will you help with the insurance claim process?",
    answer: "Yes, we specialize in insurance restoration. Our team will assist with documentation, meet with your adjuster, and make sure you get the coverage you’re entitled to.",
  },
  {
    question: "How do I know if my roof damage will be covered by insurance?",
    answer: "Most homeowners insurance policies cover damage caused by wind, hail, and falling debris. We’ll inspect the damage and let you know if a claim is warranted before you contact your provider.",
  },
  {
    question: "How much does a new roof cost?",
    answer: "Roof costs vary depending on size, material, and labor. We offer competitive pricing and transparent quotes. Call us for a free estimate specific to your home.",
  },
  {
    question: "What kind of workmanship warranty do you provide?",
    answer: "We stand behind our work with a 10-year workmanship warranty on all new installations. If there’s an issue due to our labor, we’ll make it right—no questions asked.",
  },
  {
    question: "Do you handle gutters, siding, or other construction?",
    answer: "Yes, TNT Roofing and Construction offers complete exterior services including gutters, siding, soffit, fascia, and even painting. We’re your one-stop shop for home exterior — and even some interior improvements!",
  },
  {
    question: "Can you help with interior repairs after a roof leak or storm damage?",
    answer: "Absolutely. We don’t just stop at the roof—we also repair ceilings, drywall, and insulation damaged by leaks or storms.",
  },
  {
    question: "Do you offer emergency repair services?",
    answer: "Yes, we provide emergency tarping and repair services to protect your home after severe weather or sudden damage. Call us 24/7 for urgent needs.",
  },
  {
    question: "What sets your company apart from other roofing contractors?",
    answer: "We pride ourselves on honest work, transparent communication, and top-quality craftsmanship. Our local roots and storm restoration expertise make us a trusted name in the industry.",
  },
]

export default function FAQ() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Frequently asked questions
          </h2>
          <dl className="mt-16 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure key={faq.question} as="div" className="py-6 first:pt-0 last:pb-0">
                <dt>
                  <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                    <span className="text-base/7 font-semibold">{faq.question}</span>
                    <span className="ml-6 flex h-7 items-center">
                      <PlusSmallIcon aria-hidden="true" className="size-6 group-data-[open]:hidden" />
                      <MinusSmallIcon aria-hidden="true" className="size-6 group-[&:not([data-open])]:hidden" />
                    </span>
                  </DisclosureButton>
                </dt>
                <DisclosurePanel as="dd" className="mt-2 pr-12">
                  <p className="text-base/7 text-gray-600">{faq.answer}</p>
                </DisclosurePanel>
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
