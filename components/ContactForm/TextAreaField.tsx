export default function TextAreaField({
  value,
  setValue,
  disabled,
}: {
  value: string;
  setValue: (v: string) => void;
  disabled: boolean;
}) {
  return (
    <div>
      <textarea
        placeholder="Your Message"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={disabled}
        rows={6}
        maxLength={5000}
        className="p-2 w-full resize-none border border-white rounded focus:outline-none"
        required
      />
      <div className="text-right text-sm text-gray-500">
        {value.length}/5000 characters
      </div>
    </div>
  );
}
