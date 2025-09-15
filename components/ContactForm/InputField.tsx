export default function InputField({
  placeholder,
  value,
  setValue,
  disabled,
}: {
  placeholder: string;
  value: string;
  setValue: (v: string) => void;
  disabled: boolean;
}) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      disabled={disabled}
      className="p-2 w-full border border-white rounded focus:outline-none"
      required
    />
  );
}
