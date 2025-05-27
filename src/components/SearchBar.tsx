import { useForm, Controller } from "react-hook-form";
import * as Slider from "@radix-ui/react-slider";
import { Home, MapPin, Search, Wallet } from "lucide-react";
import type { SearchFormData } from "@/types";
import { propertyOptions } from "@/constants";

interface SearchBarProps {
  defaultValues?: SearchFormData;
  onSearch: (data: SearchFormData) => void;
}

const DEFAULT_MIN = 500000;
const DEFAULT_MAX = 6000000;

export default function SearchBar({ defaultValues, onSearch }: SearchBarProps) {
  const { control, register, handleSubmit } = useForm<SearchFormData>({
    defaultValues: {
      ...defaultValues,
      priceRange: defaultValues?.priceRange ?? [DEFAULT_MIN, DEFAULT_MAX],
    },
  });

  const onSubmit = (data: SearchFormData) => {
    onSearch(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mb-15 flex flex-wrap flex-col md:flex-row gap-6 lg:flex-nowrap items-start md:items-center justify-between rounded-2xl shadow-xs bg-white p-4 sm:px-6 w-full border border-gray-200"
    >
      <div className="flex items-center gap-3">
        <div className="bg-accent text-white p-3 rounded-lg">
          <Home size={22} />
        </div>
        <div className="flex flex-col">
          <label className="font-semibold text-primary" htmlFor="propertyType">
            Property Type
          </label>
          <select
            id="propertyType"
            {...register("propertyType")}
            className="font-medium text-secondary text-sm mt-1 cursor-pointer -ml-1"
          >
            <option value="">Select</option>
            {propertyOptions.map((opt) => (
              <option key={opt.label} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="hidden md:block h-14 border-l border-l-secondary/30 mx-1" />

      <div className="flex items-center gap-3">
        <div className="bg-accent text-white p-3 rounded-xl">
          <MapPin size={22} />
        </div>
        <div className="flex flex-col">
          <label className="font-semibold text-primary" htmlFor="location">
            Location
          </label>
          <input
            id="location"
            type="text"
            placeholder="Enter location"
            {...register("location")}
            className="font-medium text-secondary text-sm mt-px"
          />
        </div>
      </div>

      <div className="hidden md:block h-14 border-l border-l-secondary/30 mx-1" />

      <div className="flex items-center gap-3 w-64">
        <div className="bg-accent text-white p-3 rounded-xl">
          <Wallet size={22} />
        </div>
        <div className="w-full">
          <label className="font-semibold text-primary" htmlFor="priceRange">
            Price Range
          </label>
          <Controller
            control={control}
            name="priceRange"
            render={({ field: { value, onChange } }) => (
              <>
                <Slider.Root
                  className="relative flex items-center select-none touch-none w-full h-5"
                  min={DEFAULT_MIN}
                  max={DEFAULT_MAX}
                  step={50000}
                  value={value}
                  onValueChange={onChange}
                >
                  <Slider.Track className="bg-gray-300 relative grow rounded-full h-1 cusor-pointer">
                    <Slider.Range className="absolute bg-blue-500 rounded-full h-full" />
                  </Slider.Track>
                  <Slider.Thumb className="block w-4 h-4 bg-white border border-gray-400 rounded-full cursor-pointer" />
                  <Slider.Thumb className="block w-4 h-4 bg-white border border-gray-400 rounded-full cursor-pointer" />
                </Slider.Root>
                {value && (
                  <div className="text-xs text-secondary mt-1">
                    ₦{value[0].toLocaleString()} – ₦{value[1].toLocaleString()}
                  </div>
                )}
              </>
            )}
          />
        </div>
      </div>

      <div className="hidden lg:block h-14 border-l border-l-secondary/30 mx-1" />

      <button
        type="submit"
        className="w-full lg:w-fit flex items-center justify-center gap-2 bg-accent text-white text-lg px-6 py-3 rounded-xl hover:bg-accent/90 transition-all group cursor-pointer"
      >
        Search{" "}
        <Search
          size={22}
          className="transition-all duration-300 ease-in-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      </button>
    </form>
  );
}
