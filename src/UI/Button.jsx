function Button({ type, children, onClick }) {
  let classes = "";
  if (type === "primary") {
    classes = "bg-blue-600 text-white p-2 rounded-sm hover:bg-blue-950";
  } else if (type === "secondary") {
    classes = "bg-gray-600 text-white p-2 rounded-sm hover:bg-gray-950";
  } else {
    classes = "bg-blue-600 text-white p-2 rounded-sm hover:bg-blue-950";
  }

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
