import { DoubleEllipseGradient } from "../../ellipseGradient";

const NavigationItemsWrapper = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  return (
    <div className="h-[800px] md:h-full relative lg:py-[30px] md:py-[15px] md:container">
      {children}
    </div>
  );
};

export default NavigationItemsWrapper