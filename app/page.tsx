"use client"

import AppBarChart from "@/components/charts/AppBarChart";

import { AppPieChart } from "@/components/charts/AppPieChart";
import AppTransactionCard from "@/components/cards/AppTransactionCard";
import AppTaskCard from "@/components/cards/AppTaskCard";
import AppContentCard from "@/components/cards/AppContentCard";
import  AppAreaChart from "@/components/charts/AppAreaChart";
import {useEffect} from "react";
import {useRouter} from "next/navigation";
import {useAuth} from "@/context/AuthContext";


const Homepage = () => {
    const { user } = useAuth()
    const router = useRouter()
    // const [delayedLoading, setDelayedLoading] = useState(true)

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setDelayedLoading(false)
    //     }, 3000)
    //
    //     return () => clearTimeout(timer)
    // }, [])

    useEffect(() => {
        if (user) {
            router.push('/')
        }
    }, [user, router])

    // if (isLoading || delayedLoading) {
    //     return (
    //         <div className="relative min-h-screen">
    //             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
    //                 <Spinner size="large" show />
    //             </div>
    //         </div>
    //     )
    // }
  return (
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4 mb-8 p-4">
          <div className="bg-primary-foreground rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2 border border-gray-400">
              <AppBarChart />
          </div>
          <div className="bg-primary-foreground rounded-lg border border-gray-400">
              <AppPieChart />
          </div>
          <div className="bg-primary-foreground rounded-lg border border-gray-400">
              <AppTransactionCard />
          </div>

          <div className="bg-primary-foreground rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2 border border-gray-400">
              <AppAreaChart />
          </div>
          <div className="bg-primary-foreground rounded-lg border border-gray-400">
              <AppTaskCard />
          </div>
          <div className="bg-primary-foreground rounded-lg border border-gray-400">
              <AppContentCard/>
          </div>
      </div>
  );
};

export default Homepage;
