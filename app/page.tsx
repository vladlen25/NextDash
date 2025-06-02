import AppBarChart from "@/components/charts/AppBarChart";
import { AppAreaChat } from "@/components/charts/AppAreaChart";
import { AppPieChart } from "@/components/charts/AppPieChart";
import AppTransactionCard from "@/components/cards/AppTransactionCard";
import AppTaskCard from "@/components/cards/AppTaskCard";

const Homepage = () => {
  return (
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4 mb-8">
          <div className="bg-primary-foreground rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
              <AppBarChart />
          </div>
          <div className="bg-primary-foreground rounded-lg">
              <AppPieChart />
          </div>
          <div className="bg-primary-foreground rounded-lg">
              <AppTransactionCard title={"Latest Transaction"} />
          </div>

          <div className="bg-primary-foreground rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
              <AppAreaChat />
          </div>
          <div className="bg-primary-foreground rounded-lg">
              <AppTaskCard />
          </div>
          <div className="bg-primary-foreground rounded-lg">
              <AppTransactionCard title={"Popular Content"} />
          </div>
      </div>
  );
};

export default Homepage;
