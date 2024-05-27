import { CdcRow } from "@/app/dashboard/columns";
import { db } from "../../../../db";
import { cdc } from "../../../../db/schema";

export const syncCdcData = async () => {
  await db.delete(cdc);
  const response = await fetch(
    "https://data.cdc.gov/api/views/qz99-wyhv/rows.json?accessType=DOWNLOAD",
    {
      headers: {
        "sec-ch-ua":
          '"Google Chrome";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        "upgrade-insecure-requests": "1",
      },
      referrerPolicy: "strict-origin-when-cross-origin",
      body: null,
      method: "GET",
    }
  ).then(function (response) {
    return response.json();
  });
  const modeledData = response["data"].map((row: any) => ({
    id: row[1],
    createdAt: row[3],
    updatedAt: row[5],
    geographyType: row[8],
    geography: row[9],
    groupName: row[10],
    groupCategory: row[11],
    indicatorName: row[12],
    indicatorCategory: row[13],
    timePeriod: row[14],
    timeYear: row[15],
    timeType: row[16],
    estimate: row[17],
    coninfNintyFive: row[18],
    sampleSize: row[19],
    suppressionFlag: row[20],
  }));

  console.log(modeledData.length);
  while (modeledData.length) {
    await db.insert(cdc).values(modeledData.splice(0, 2000));
  }
};

export const getCdcData = async (): Promise<CdcRow[]> => {
  const data = await db.select().from(cdc);
  return data;
};
