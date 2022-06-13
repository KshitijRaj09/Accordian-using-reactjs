export const ExpandCollapse = ({ sign, isActiveToggler }) => (
  <span className="expand-collapse" onClick={isActiveToggler}>
    {sign}
  </span>
);
