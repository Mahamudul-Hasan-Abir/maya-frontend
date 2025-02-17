import { Sidebar, SidebarContent, SidebarRail } from "@/components/ui/sidebar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Checkbox } from "./ui/checkbox";
const filterOptions = [
  { id: 1, label: "Signs of Aging" },
  { id: 2, label: "Uneven Skin Tone" },
  { id: 3, label: "Signs of Congestion" },
  { id: 4, label: "Textural Irregularities" },
  { id: 5, label: "Dryness" },
  { id: 6, label: "Crow's Feet" },
  { id: 7, label: "Dullness" },
  { id: 8, label: "Cleansing" },
  { id: 9, label: "Dark Circles" },
  { id: 10, label: "Hair" },
  { id: 11, label: "Look of Redness" },
  { id: 12, label: "Visible Shine" },
  { id: 13, label: "Puffiness" },
  { id: 14, label: "Barrier Support" },
];

export function AppSidebar() {
  return (
    <Sidebar>
      {/* Can Add things here */}
      <div className="h-[44px]"></div>

      <SidebarContent>
        <div className="md:ml-[70px] mx-5 md:mx-0">
          <h1 className="text-2xl font-bold">Filter</h1>
          {/* Ingredient Accordian */}
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-base font-semibold">
                Ingredient
              </AccordionTrigger>
              <AccordionContent>
                {filterOptions.map((option) => (
                  <div key={option.id} className="flex gap-3 my-3 items-center">
                    <Checkbox className="border-[#E9EAEB]"></Checkbox>
                    <p>{option.label}</p>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-base font-semibold">
                Active Ingredient
              </AccordionTrigger>
              <AccordionContent>
                {filterOptions.map((option) => (
                  <div key={option.id} className="flex gap-3 my-3 items-center">
                    <Checkbox className="border-[#E9EAEB]"></Checkbox>
                    <p>{option.label}</p>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-base font-semibold">
                Product Type
              </AccordionTrigger>
              <AccordionContent>
                {filterOptions.map((option) => (
                  <div key={option.id} className="flex gap-3 my-3 items-center">
                    <Checkbox className="border-[#E9EAEB]"></Checkbox>
                    <p>{option.label}</p>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-base font-semibold">
                Preferencess
              </AccordionTrigger>
              <AccordionContent>
                {filterOptions.map((option) => (
                  <div key={option.id} className="flex gap-3 my-3 items-center">
                    <Checkbox className="border-[#E9EAEB]"></Checkbox>
                    <p>{option.label}</p>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-base font-semibold">
                Formet
              </AccordionTrigger>
              <AccordionContent>
                {filterOptions.map((option) => (
                  <div key={option.id} className="flex gap-3 my-3 items-center">
                    <Checkbox className="border-[#E9EAEB]"></Checkbox>
                    <p>{option.label}</p>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-base font-semibold">
                Time of Use
              </AccordionTrigger>
              <AccordionContent>
                {filterOptions.map((option) => (
                  <div key={option.id} className="flex gap-3 my-3 items-center">
                    <Checkbox className="border-[#E9EAEB]"></Checkbox>
                    <p>{option.label}</p>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-base font-semibold">
                Reginmen Step
              </AccordionTrigger>
              <AccordionContent>
                {filterOptions.map((option) => (
                  <div key={option.id} className="flex gap-3 my-3 items-center">
                    <Checkbox className="border-[#E9EAEB]"></Checkbox>
                    <p>{option.label}</p>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
