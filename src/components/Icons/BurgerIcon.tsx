const BurgerIcon: React.FC<{ fill: 'black' | 'white' }> = ({ fill = 'white' }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="5" y="10" width="20" height="2" fill={fill} />
      <rect x="5" y="19" width="20" height="2" fill={fill} />
    </svg>
  );
};

export default BurgerIcon;
