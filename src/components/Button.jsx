const Button = ({ onClick, disabled, children }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`max-w-[100px] px-4 py-2 rounded-lg text-white font-medium transition ${
        disabled
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-emerald-600 hover:bg-emerald-700"
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
