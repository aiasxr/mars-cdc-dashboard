import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { getCdcData, syncCdcData } from "../api/cdc/getData";
import { signOut } from "../auth";
import { DataTable } from "./data-table";
import { columns } from "./columns";

export default async function Dashboard() {
  const data = await getCdcData();

  return (
    <div className="w-screen h-screen bg-slate-700">
      <NavigationMenu className="w-full">
        <NavigationMenuList className="flex w-screen justify-between p-2">
          <p className="text-white font-medium text-2xl">CDC Dashboard</p>
          <div className="space-x-4 flex">
            <form
              action={async () => {
                "use server";
                await syncCdcData();
              }}
            >
              <Button variant="outline" type="submit">
                Sync Data
              </Button>
            </form>
            <form
              action={async () => {
                "use server";
                await signOut();
              }}
            >
              <Button variant="outline" type="submit">
                Logout
              </Button>
            </form>
          </div>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="flex justify-center w-screen bg-slate-700">
        <div className="w-[90%] bg-slate-900 p-10 rounded-lg">
          <DataTable columns={columns} data={data} />
        </div>
      </div>
    </div>
  );
}
