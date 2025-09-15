import { Button } from "react-bootstrap";
import { cn } from "../utils/helpers";

function ButtonComponent({
  buttonText,
  loading,
  handleButtonClick,
  className,
  style,
  disabled,
  ...rest
}: any) {
  return (
    <Button
      variant="dark"
      disabled={disabled}
      style={style}
      onClick={handleButtonClick}
      className={cn(
        "w-full md:max-w-76 max-w-68 !mx-auto !px-12 min-h-13 !rounded-full !bg-[#ff769a] border-0",
        className
      )}
      {...rest} // Only spreads valid button props (like type, id, etc.)
    >
      {loading ? "Please wait..." : buttonText}
    </Button>
  );
}

export default ButtonComponent;