import { DoubleEllipseGradient } from "../../ellipseGradient";

const NavigationItemsWrapper = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  return (
    <div className="h-[800px] md:h-full relative lg:py-[30px] md:py-[15px] md:container">
      <DoubleEllipseGradient className="md:hidden absolute bottom-0 -z-10 md:right-0" />
      {children}
    </div>
  );
};

export default NavigationItemsWrapper