import PropertyCard from "./PropertyCard";
import { properties } from "./property-data";
import Link from "next/link";

export default function FeaturedPropertiesSection() {
  return (
    // SECTION: внешний отступ секции от других секций страницы
    <section className="py-[80px]">
      {/* CONTAINER: ограничение ширины и центрирование */}
      <div className="container-main">
        {/* SECTION CONTENT: общая вертикальная колонка всей секции */}
        <div className="flex flex-col gap-10">
          {/* HEADER BLOCK: верхняя часть секции */}
          <div className="flex flex-col gap-6">
            {/* SECTION LABEL: маленький верхний текст */}
            <div className="inline-flex items-center self-start rounded-full border border-black/10 px-4 py-2">
              <span className="mr-2 h-3 w-3 rounded-full bg-black" />
              <span className="text-4 font-medium">Feautered Propreties</span>
            </div>

            {/* HEADER ROW: заголовок слева + описание справа */}
            <div className="flex items-start justify-between gap-10">
              {/* SECTION TITLE: основной заголовок */}
              <h1 className="-mt-1 max-w-[780px]  leading-[1.10] font-semibold tracking-[-0.03em]">
                Discover Urbanouse Properties
              </h1>

              {/* SECTION DESCRIPTION: текст справа от заголовка */}
              <p className="max-w-[500px] text-4 font-regular text-[#8C8C8C]">
                Explore an exclusive selection of premium properties,
                meticulously curated to provide you with the best in luxury
                living and prime real estate investment options, tailored to
                your needs
              </p>
            </div>
          </div>

          {/* TABS BLOCK: ряд кнопок-фильтров */}
          <div className="flex items-center justify-center gap-5 my-5">
            {/* ACTIVE TAB */}
            <button className="rounded-full bg-[#090C1B] min-w-[100px] px-4 py-2 text-5 font-medium text-white">
              All Properties
            </button>

            {/* DEFAULT TAB */}
            <button className="rounded-full border border-[#E7E7E7] min-w-[100px] bg-white px-4 py-2 text-5 font-medium text-[#090C1B]">
              Family House
            </button>

            {/* DEFAULT TAB */}
            <button className="rounded-full border border-[#E7E7E7] min-w-[100px] bg-white px-4 py-2 text-5 font-medium text-[#090C1B]">
              Villa
            </button>

            {/* DEFAULT TAB */}
            <button className="rounded-full border border-[#E7E7E7] min-w-[100px] bg-white px-4 py-2 text-4 text-5 font-medium text-[#090C1B]">
              Apartment
            </button>
          </div>
          {/* CARTS */}
          <div className="grid grid-cols-3 gap-x-5 gap-y-[60px]">
            {properties.map((item) => (
              <Link key={item.id} href={`/property/${item.id}`}>
                <PropertyCard {...item} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
