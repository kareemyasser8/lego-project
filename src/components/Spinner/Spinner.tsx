interface Props {
  color: 'text-warning' | 'text-primary' | 'text-success';
  size?: string;
  borderWidth?: string;
}

const Spinner = ({ color, size, borderWidth }: Props) => {
  const defaultSize = '5rem';
  const defaultBorderWidthSize = "0.5rem";

  const spinnerStyle = {
    width: size || defaultSize,
    height: size || defaultSize,
    borderWidth: borderWidth || defaultBorderWidthSize,
  };

  return (
    <div className="col-12 d-flex align-items-center justify-content-center h-100">
      <div
        style={spinnerStyle}
        className={`spinner-border spinner-border-xl ${color}`}
        role="status"
      ></div>
    </div>
  );
};

export default Spinner;

