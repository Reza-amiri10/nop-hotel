import CabinCard from "@/app/_components/CabinCard";
import { getCabins } from "../_lib/data-service";

export default async function CabinList({ filters }) {
  const cabins = await getCabins();

  if (!cabins) return null;

  let displayCabins;
  if (filters === "small")
    displayCabins = cabins.filter((cabin) => cabin.maxCapacity <= 2);
  if (filters === "medium")
    displayCabins = cabins.filter(
      (cabin) => cabin.maxCapacity <= 4 && cabin.maxCapacity >= 3
    );
  if (filters === "large")
    displayCabins = cabins.filter((cabin) => cabin.maxCapacity >= 5);
  if (filters === "all") displayCabins = cabins;
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {displayCabins.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}
