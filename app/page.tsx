import AppBarChart from "@/components/charts/AppBarChart";

import { AppPieChart } from "@/components/charts/AppPieChart";
import AppTransactionCard from "@/components/cards/AppTransactionCard";
import AppTaskCard from "@/components/cards/AppTaskCard";
import AppContentCard from "@/components/cards/AppContentCard";
import  AppAreaChart from "@/components/charts/AppAreaChart";

const Homepage = () => {
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
