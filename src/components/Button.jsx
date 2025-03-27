const Button = ({ onClick, disabled, children }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`max-w-[100px] px-4 py-2 rounded-lg text-white font-medium transition ${
        disabled
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-blue-600 hover:bg-blue-700"
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
