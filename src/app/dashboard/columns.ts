import { ColumnDef } from "@tanstack/react-table";

export type CdcRow = {
  id: string;
  geographyType: string | null;
  geography: string | null;
  groupName: string | null;
  groupCategory: string | null;
  indicatorName: string | null;
  indicatorCategory: string | null;
  timePeriod: string | null;
  timeYear: string | null;
  timeType: string | null;
  estimate: string | null;
  coninfNintyFive: string | null;
  sampleSize: string | null;
  suppressionFlag: number | null;
  updatedAt: number | null;
  createdAt: number | null;
};

export const columns: ColumnDef<CdcRow>[] = [
  {
    accessorKey: "geographyType",
    header: "Geography Type",
  },
  {
    accessorKey: "geography",
    header: "Geography",
  },
  {
    accessorKey: "groupName",
    header: "Group Name",
  },
  {
    accessorKey: "groupCategory",
    header: "Group Category",
  },
  {
    accessorKey: "indicatorName",
    header: "Indicator Name",
  },
  {
    accessorKey: "indicatorCategory",
    header: "Indicator Category",
  },
  {
    accessorKey: "timePeriod",
    header: "Time Period",
  },
  {
    accessorKey: "timeYear",
    header: "Time Year",
  },
  {
    accessorKey: "timeYear",
    header: "Time Type",
  },
  {
    accessorKey: "estimate",
    header: "Estimate %",
  },
  {
    accessorKey: "coninfNintyFive",
    header: "Coninf_95%",
  },
  {
    accessorKey: "sampleSize",
    header: "Sample Size",
  },
  {
    accessorKey: "suppressionFlag",
    header: "Suppression Flag",
  },
];
