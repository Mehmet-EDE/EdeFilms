import Link from "next/link";
import Dropdownmenu from '@/Components/DropdownMenu'


interface CategoryProps {
    category: {
        id: number;
        name: string;
    }[];
}

function Categories({ category }: CategoryProps) {
    const longCategories = category.slice(10, category.length)
    const shortCategories = category.slice(0, 10)

    return (
        <div className='flex justify-center items-center flex-wrap h-18 gap-6'>
            {shortCategories.map((cat) => (
                <Link
                    key={cat.id}
                    href={`/${cat.id}`}
                    passHref
                    className='flex items-center p-4 justify-center bg-opacity-75 bg-black border border-gray-700 shadow-md rounded-md font-semibold hover:z-9 hover:scale-90 transition-transform duration-300'
                >
                        {cat.name}
         </Link>
            ))}
            {longCategories.length > 0 && (
                <Dropdownmenu categories={longCategories} />
            )}
        </div>
    );
}


export { CategoriesLoading } from "./loading";
export default Categories;
