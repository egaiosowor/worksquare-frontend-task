interface PillProps {
  label: string;
}

export default function Pill({ label }: PillProps) {
  return (
    <span className="py-1 px-1.5 sm:py-1.5 sm:px-3 text-xs text-primary bg-white rounded-full">
      {label}
    </span>
  );
}
