import { cookies } from 'next/headers';
import { TabBar } from "@/components";


export const metadata = {
    title: 'Cookies Page',
    description: 'Seo Title',
};

export default async function CookiesPage(){

    const coockieStore = cookies();
    const cookieTab = (await coockieStore).get('selectedTab')?.value ?? '1' ;

    

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <span className="text-3xl"> Tabs </span>
            <TabBar currentTap={ +cookieTab } />
        </div>
    );
};