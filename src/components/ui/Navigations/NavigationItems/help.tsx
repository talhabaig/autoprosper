import {
  SheetSectionItems,
} from "@/components/ui/sheet";

const Help = () => {
  const navigationData = [
    {
      label: "FAQ’s",
      link: "#",
    },
    {
      label: "Contact Us",
      link: "#",
    },
    {
      label: "Live Chat",
      link: "#",
    },
    {
      label: "(877) 291-2886",
      link: "#",
    },
    {
      label: "support@autoprosper.com",
      link: "#",
    }
  ];

  
  return (
    <div className="flex-col">
      <SheetSectionItems title="" items={navigationData} />
    </div>
  );
};

export default Help;
