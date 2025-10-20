"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
export default function Filter() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const handleFilter = (filter) => {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  // const searchParams = useSearchParams();
  // const pathname = usePathname();
  // const router = useRouter();

  // const handleFilter = (filter) => {
  //   const params = new URLSearchParams(searchParams);
  //   params.set("capacity", filter);
  //   router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  //   console.log(params);
  // };

  return (
    <div className="border border-primary-800">
      <button
        className="px-5 py-2 hover:bg-primary-700"
        onClick={() => handleFilter("small")}
      >
        1&mdash;2 Guests
      </button>
      <button
        className="px-5 py-2 hover:bg-primary-700"
        onClick={() => handleFilter("medium")}
      >
        3&mdash;5 Guests
      </button>
      <button
        className="px-5 py-2 hover:bg-primary-700"
        onClick={() => handleFilter("large")}
      >
        6&mdash;8 Guests
      </button>
      <button
        className="px-5 py-2 hover:bg-primary-700"
        onClick={() => handleFilter("all")}
      >
        All Cabins
      </button>
    </div>
  );
}
