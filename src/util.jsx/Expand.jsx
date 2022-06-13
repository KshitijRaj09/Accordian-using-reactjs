export const ExpandCollapse = ({
  sign,
  isActiveToggler,
  fontSize,
  fontWeight
}) => (
  <span
    className="expand-collapse"
    style={{ fontSize: `${fontSize}px`, fontWeight: `${fontWeight}px` }}
    onClick={isActiveToggler}
  >
    {sign}
  </span>
);
