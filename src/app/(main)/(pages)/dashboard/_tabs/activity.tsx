"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import ActivityComments from "../components/activity-comments"
import ActivityLike from "../components/activity-like"
import ActivitySharing from "../components/activity-sharing"
import ActivityFollower from "../components/activity-follower"
import TabsImpression from "./impression"
import { differenceInCalendarDays, subDays } from "date-fns"

interface TabsServiceProps {
  dateRange: { from?: Date; to?: Date };
}

const simulationData = {
  totalServices: 1398, // 
  totalComments: 166038, // 
  sharingMeta: 183849, // 
  likesMeta: 4289882, // 
  followersInsta: 1838039, // 
  commentChartMeta: [
    { name: "01/02", pv: 3200 },
    { name: "02/02", pv: 2800 },
    { name: "03/02", pv: 3000 },
    { name: "04/02", pv: 2600 },
    { name: "05/02", pv: 3400 },
    { name: "06/02", pv: 3600 },
    { name: "07/02", pv: 3100 },
    { name: "08/02", pv: 2900 },
    { name: "09/02", pv: 3700 },
    { name: "10/02", pv: 3900 },
    { name: "11/02", pv: 4500 },
    { name: "12/02", pv: 4800 },
    { name: "13/02", pv: 4700 },
    { name: "14/02", pv: 4600 },
    { name: "15/02", pv: 4100 },
    { name: "16/02", pv: 4300 },
    { name: "17/02", pv: 4200 },
    { name: "18/02", pv: 4050 },
    { name: "19/02", pv: 3850 },
    { name: "20/02", pv: 3750 },
    { name: "21/02", pv: 3450 },
    { name: "22/02", pv: 4150 },
    { name: "23/02", pv: 4250 },
    { name: "24/02", pv: 3950 },
    { name: "25/02", pv: 3550 },
    { name: "26/02", pv: 3250 },
    { name: "27/02", pv: 3350 },
    { name: "28/02", pv: 3650 },
    { name: "29/02", pv: 3450 },
    { name: "30/02", pv: 3150 },
    { name: "01/03", pv: 3200 },
    { name: "02/03", pv: 2800 },
    { name: "03/03", pv: 3000 },
    { name: "04/03", pv: 2600 },
    { name: "05/03", pv: 3400 },
    { name: "06/03", pv: 3600 },
    { name: "07/03", pv: 3100 },
    { name: "08/03", pv: 2900 },
    { name: "09/03", pv: 3700 },
    { name: "10/03", pv: 3900 },
    { name: "11/03", pv: 4500 },
    { name: "12/03", pv: 4800 },
    { name: "13/03", pv: 4700 },
    { name: "14/03", pv: 4600 },
    { name: "15/03", pv: 4100 },
    { name: "16/03", pv: 4300 },
    { name: "17/03", pv: 4200 },
    { name: "18/03", pv: 4050 },
    { name: "19/03", pv: 3850 },
    { name: "20/03", pv: 3750 },
    { name: "21/03", pv: 3450 },
    { name: "22/03", pv: 4150 },
    { name: "23/03", pv: 4250 },
    { name: "24/03", pv: 3950 },
    { name: "25/03", pv: 3550 },
    { name: "26/03", pv: 3250 },
    { name: "27/03", pv: 3350 },
    { name: "28/03", pv: 3650 },
    { name: "29/03", pv: 3450 },
    { name: "30/03", pv: 3150 }
  ], // 
  sharingChartMeta: [
    { name: "01/02", pv: 240 },
    { name: "02/02", pv: 139 },
    { name: "03/02", pv: 220 },
    { name: "04/02", pv: 280 },
    { name: "05/02", pv: 290 },
    { name: "06/02", pv: 300 },
    { name: "07/02", pv: 310 },
    { name: "08/02", pv: 250 },
    { name: "09/02", pv: 280 },
    { name: "10/02", pv: 190 },
    { name: "11/02", pv: 250 },
    { name: "12/02", pv: 260 },
    { name: "13/02", pv: 270 },
    { name: "14/02", pv: 300 },
    { name: "15/02", pv: 305 },
    { name: "16/02", pv: 250 },
    { name: "17/02", pv: 289 },
    { name: "18/02", pv: 180 },
    { name: "19/02", pv: 256 },
    { name: "20/02", pv: 324 },
    { name: "21/02", pv: 312 },
    { name: "22/02", pv: 334 },
    { name: "23/02", pv: 355 },
    { name: "24/02", pv: 366 },
    { name: "25/02", pv: 377 },
    { name: "26/02", pv: 388 },
    { name: "27/02", pv: 400 },
    { name: "28/02", pv: 340 },
    { name: "29/02", pv: 290 },
    { name: "30/02", pv: 280 },
    { name: "01/03", pv: 212 },
    { name: "02/03", pv: 250 },
    { name: "03/03", pv: 265 },
    { name: "04/03", pv: 270 },
    { name: "05/03", pv: 275 },
    { name: "06/03", pv: 290 },
    { name: "07/03", pv: 300 },
    { name: "08/03", pv: 255 },
    { name: "09/03", pv: 295 },
    { name: "10/03", pv: 305 },
    { name: "11/03", pv: 220 },
    { name: "12/03", pv: 234 },
    { name: "13/03", pv: 240 },
    { name: "14/03", pv: 256 },
    { name: "15/03", pv: 262 },
    { name: "16/03", pv: 280 },
    { name: "17/03", pv: 300 },
    { name: "18/03", pv: 310 },
    { name: "19/03", pv: 320 },
    { name: "20/03", pv: 330 },
    { name: "21/03", pv: 340 },
    { name: "22/03", pv: 360 },
    { name: "23/03", pv: 370 },
    { name: "24/03", pv: 380 },
    { name: "25/03", pv: 390 },
    { name: "26/03", pv: 400 },
    { name: "27/03", pv: 410 },
    { name: "28/03", pv: 420 },
    { name: "29/03", pv: 430 },
    { name: "30/03", pv: 440 }
  ], // 
  likesChartMeta: [
    { name: "01/02", pv: 38297 },
    { name: "02/02", pv: 107134 },
    { name: "03/02", pv: 247598 },
    { name: "04/02", pv: 123165 },
    { name: "05/02", pv: 214367 },
    { name: "06/02", pv: 198345 },
    { name: "07/02", pv: 378674 },
    { name: "08/02", pv: 148569 },
    { name: "09/02", pv: 345783 },
    { name: "10/02", pv: 203498 },
    { name: "11/02", pv: 327680 },
    { name: "12/02", pv: 146789 },
    { name: "13/02", pv: 223567 },
    { name: "14/02", pv: 410298 },
    { name: "15/02", pv: 253478 },
    { name: "16/02", pv: 304281 },
    { name: "17/02", pv: 188672 },
    { name: "18/02", pv: 259837 },
    { name: "19/02", pv: 373682 },
    { name: "20/02", pv: 479330 },
    { name: "21/02", pv: 174298 },
    { name: "22/02", pv: 389273 },
    { name: "23/02", pv: 229854 },
    { name: "24/02", pv: 283954 },
    { name: "25/02", pv: 165873 },
    { name: "26/02", pv: 157943 },
    { name: "27/02", pv: 278943 },
    { name: "28/02", pv: 490287 },
    { name: "01/03", pv: 219854 },
    { name: "02/03", pv: 439054 },
    { name: "03/03", pv: 283017 },
    { name: "04/03", pv: 475829 },
    { name: "05/03", pv: 327600 },
    { name: "06/03", pv: 448671 },
    { name: "07/03", pv: 278901 },
    { name: "08/03", pv: 383200 },
    { name: "09/03", pv: 215643 },
    { name: "10/03", pv: 187634 },
    { name: "11/03", pv: 306175 },
    { name: "12/03", pv: 292364 },
    { name: "13/03", pv: 349871 },
    { name: "14/03", pv: 387610 },
    { name: "15/03", pv: 182374 },
    { name: "16/03", pv: 398275 },
    { name: "17/03", pv: 257638 },
    { name: "18/03", pv: 438726 },
    { name: "19/03", pv: 374926 },
    { name: "20/03", pv: 295732 },
    { name: "21/03", pv: 384217 },
    { name: "22/03", pv: 173984 },
    { name: "23/03", pv: 273945 },
    { name: "24/03", pv: 454183 },
    { name: "25/03", pv: 391074 },
    { name: "26/03", pv: 138754 },
    { name: "27/03", pv: 310984 },
    { name: "28/03", pv: 449022 },
    { name: "29/03", pv: 238793 },
    { name: "30/03", pv: 490827 }
  ], // 
  followersChartInsta: [
    { name: "01/02", pv: 2765 },
    { name: "02/02", pv: 3675 },
    { name: "03/02", pv: 1945 },
    { name: "04/02", pv: 3012 },
    { name: "05/02", pv: 4250 },
    { name: "06/02", pv: 3987 },
    { name: "07/02", pv: 1406 },
    { name: "08/02", pv: 3125 },
    { name: "09/02", pv: 3638 },
    { name: "10/02", pv: 1903 },
    { name: "11/02", pv: 4873 },
    { name: "12/02", pv: 2567 },
    { name: "13/02", pv: 3925 },
    { name: "14/02", pv: 1899 },
    { name: "15/02", pv: 4912 },
    { name: "16/02", pv: 3840 },
    { name: "17/02", pv: 3573 },
    { name: "18/02", pv: 4762 },
    { name: "19/02", pv: 1843 },
    { name: "20/02", pv: 4513 },
    { name: "21/02", pv: 1608 },
    { name: "22/02", pv: 3582 },
    { name: "23/02", pv: 4209 },
    { name: "24/02", pv: 3886 },
    { name: "25/02", pv: 3554 },
    { name: "26/02", pv: 2674 },
    { name: "27/02", pv: 3245 },
    { name: "28/02", pv: 1565 },
    { name: "29/02", pv: 4119 },
    { name: "30/02", pv: 4622 },
    { name: "01/03", pv: 2809 },
    { name: "02/03", pv: 3529 },
    { name: "03/03", pv: 3219 },
    { name: "04/03", pv: 4671 },
    { name: "05/03", pv: 3568 },
    { name: "06/03", pv: 2299 },
    { name: "07/03", pv: 4538 },
    { name: "08/03", pv: 1361 },
    { name: "09/03", pv: 4690 },
    { name: "10/03", pv: 2813 },
    { name: "11/03", pv: 1158 },
    { name: "12/03", pv: 2871 },
    { name: "13/03", pv: 4561 },
    { name: "14/03", pv: 4642 },
    { name: "15/03", pv: 2881 },
    { name: "16/03", pv: 3921 },
    { name: "17/03", pv: 2480 },
    { name: "18/03", pv: 1259 },
    { name: "19/03", pv: 3627 },
    { name: "20/03", pv: 1501 },
    { name: "21/03", pv: 2189 },
    { name: "22/03", pv: 1702 },
    { name: "23/03", pv: 3752 },
    { name: "24/03", pv: 3509 },
    { name: "25/03", pv: 2371 },
    { name: "26/03", pv: 2386 },
    { name: "27/03", pv: 1941 },
    { name: "28/03", pv: 4912 },
    { name: "29/03", pv: 2452 },
    { name: "30/03", pv: 3502 }
  ], // 
  pageImpressions: 1838049, //
  reactionsMeta: 248409, // 
  rangeInsta: 4948194, //
  interactionsInsta: 10294858, // 
  viewsInsta: 329384753, // 
  engagementRateInsta: 394, //
  rangeMeta: 3817593, //
  interactionsMeta: 8472948, // 
  viewsMeta: 24829481, // 
  engagementRateMeta: 538, //
}

export default function TabsActivity({ dateRange }: TabsServiceProps) {
  const calculateDateDifference = (from?: Date, to?: Date): number => {
    if (!from || !to) {
      const today = new Date();
      const defaultFrom = subDays(today, 7);
      return differenceInCalendarDays(today, defaultFrom);
    }
    return differenceInCalendarDays(to, from) + 1;
  };

  function formatNumberDivision100(value: number) {
    const numericValue = value / 100;

    return `${numericValue}%`
  }

  function formatNumber(value: number) {
    return new Intl.NumberFormat('pt-BR').format(value);
  }

  const dateDifference = calculateDateDifference(dateRange.from, dateRange.to);

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 col-span-2">
        <div className="col-span-1 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 ">
          <Card className="bg-neutral-100 dark:bg-neutral-900">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total de Comentários ~ Fb
              </CardTitle>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5 3L2.5 3.00002C1.67157 3.00002 1 3.6716 1 4.50002V9.50003C1 10.3285 1.67157 11 2.5 11H7.50003C7.63264 11 7.75982 11.0527 7.85358 11.1465L10 13.2929V11.5C10 11.2239 10.2239 11 10.5 11H12.5C13.3284 11 14 10.3285 14 9.50003V4.5C14 3.67157 13.3284 3 12.5 3ZM2.49999 2.00002L12.5 2C13.8807 2 15 3.11929 15 4.5V9.50003C15 10.8807 13.8807 12 12.5 12H11V14.5C11 14.7022 10.8782 14.8845 10.6913 14.9619C10.5045 15.0393 10.2894 14.9965 10.1464 14.8536L7.29292 12H2.5C1.11929 12 0 10.8807 0 9.50003V4.50002C0 3.11931 1.11928 2.00003 2.49999 2.00002Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {formatNumber(simulationData.totalComments)}
              </div>
              <p className="text-xs text-muted-foreground">
                {dateDifference > 1 ? `Período de ${dateDifference} dias` :
                  `Período de 1 dia`}
              </p>
            </CardContent>
          </Card>
          <Card className="bg-neutral-100 dark:bg-neutral-900">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Compartilhamento ~ Fb
              </CardTitle>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.20308 1.04312C1.00481 0.954998 0.772341 1.0048 0.627577 1.16641C0.482813 1.32802 0.458794 1.56455 0.568117 1.75196L3.92115 7.50002L0.568117 13.2481C0.458794 13.4355 0.482813 13.672 0.627577 13.8336C0.772341 13.9952 1.00481 14.045 1.20308 13.9569L14.7031 7.95693C14.8836 7.87668 15 7.69762 15 7.50002C15 7.30243 14.8836 7.12337 14.7031 7.04312L1.20308 1.04312ZM4.84553 7.10002L2.21234 2.586L13.2689 7.50002L2.21234 12.414L4.84552 7.90002H9C9.22092 7.90002 9.4 7.72094 9.4 7.50002C9.4 7.27911 9.22092 7.10002 9 7.10002H4.84553Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {formatNumber(simulationData.sharingMeta)}
              </div>
              <p className="text-xs text-muted-foreground">
                {dateDifference > 1 ? `Período de ${dateDifference} dias` :
                  `Período de 1 dia`}
              </p>
            </CardContent>
          </Card>
        </div>
        <Card className="col-span-2 bg-neutral-100 dark:bg-neutral-900">
          <CardHeader>
            <CardTitle>Comentários ~ Fb</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <ActivityComments data={simulationData.commentChartMeta} />
          </CardContent>
        </Card>
        <Card className="col-span-2 bg-neutral-100 dark:bg-neutral-900">
          <CardHeader>
            <CardTitle>Compartilhamento ~ Fb</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <ActivitySharing data={simulationData.sharingChartMeta} />
          </CardContent>
        </Card>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 col-span-2 mt-4">
        <div className="col-span-1 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 ">
          <Card className="bg-neutral-100 dark:bg-neutral-900">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Curtidas ~ Fb
              </CardTitle>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.89346 2.35248C3.49195 2.35248 2.35248 3.49359 2.35248 4.90532C2.35248 6.38164 3.20954 7.9168 4.37255 9.33522C5.39396 10.581 6.59464 11.6702 7.50002 12.4778C8.4054 11.6702 9.60608 10.581 10.6275 9.33522C11.7905 7.9168 12.6476 6.38164 12.6476 4.90532C12.6476 3.49359 11.5081 2.35248 10.1066 2.35248C9.27059 2.35248 8.81894 2.64323 8.5397 2.95843C8.27877 3.25295 8.14623 3.58566 8.02501 3.88993C8.00391 3.9429 7.98315 3.99501 7.96211 4.04591C7.88482 4.23294 7.7024 4.35494 7.50002 4.35494C7.29765 4.35494 7.11523 4.23295 7.03793 4.04592C7.01689 3.99501 6.99612 3.94289 6.97502 3.8899C6.8538 3.58564 6.72126 3.25294 6.46034 2.95843C6.18109 2.64323 5.72945 2.35248 4.89346 2.35248ZM1.35248 4.90532C1.35248 2.94498 2.936 1.35248 4.89346 1.35248C6.0084 1.35248 6.73504 1.76049 7.20884 2.2953C7.32062 2.42147 7.41686 2.55382 7.50002 2.68545C7.58318 2.55382 7.67941 2.42147 7.79119 2.2953C8.265 1.76049 8.99164 1.35248 10.1066 1.35248C12.064 1.35248 13.6476 2.94498 13.6476 4.90532C13.6476 6.74041 12.6013 8.50508 11.4008 9.96927C10.2636 11.3562 8.92194 12.5508 8.00601 13.3664C7.94645 13.4194 7.88869 13.4709 7.83291 13.5206C7.64324 13.6899 7.3568 13.6899 7.16713 13.5206C7.11135 13.4709 7.05359 13.4194 6.99403 13.3664C6.0781 12.5508 4.73641 11.3562 3.59926 9.96927C2.39872 8.50508 1.35248 6.74041 1.35248 4.90532Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {formatNumber(simulationData.likesMeta)}
              </div>
              <p className="text-xs text-muted-foreground">
                {dateDifference > 1 ? `Período de ${dateDifference} dias` :
                  `Período de 1 dia`}
              </p>
            </CardContent>
          </Card>
          <Card className="bg-neutral-100 dark:bg-neutral-900">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Seguidores ~ Ig
              </CardTitle>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 0.875C5.49797 0.875 3.875 2.49797 3.875 4.5C3.875 6.15288 4.98124 7.54738 6.49373 7.98351C5.2997 8.12901 4.27557 8.55134 3.50407 9.31167C2.52216 10.2794 2.02502 11.72 2.02502 13.5999C2.02502 13.8623 2.23769 14.0749 2.50002 14.0749C2.76236 14.0749 2.97502 13.8623 2.97502 13.5999C2.97502 11.8799 3.42786 10.7206 4.17091 9.9883C4.91536 9.25463 6.02674 8.87499 7.49995 8.87499C8.97317 8.87499 10.0846 9.25463 10.8291 9.98831C11.5721 10.7206 12.025 11.8799 12.025 13.5999C12.025 13.8623 12.2376 14.0749 12.5 14.0749C12.7623 14.075 12.975 13.8623 12.975 13.6C12.975 11.72 12.4778 10.2794 11.4959 9.31166C10.7244 8.55135 9.70025 8.12903 8.50625 7.98352C10.0187 7.5474 11.125 6.15289 11.125 4.5C11.125 2.49797 9.50203 0.875 7.5 0.875ZM4.825 4.5C4.825 3.02264 6.02264 1.825 7.5 1.825C8.97736 1.825 10.175 3.02264 10.175 4.5C10.175 5.97736 8.97736 7.175 7.5 7.175C6.02264 7.175 4.825 5.97736 4.825 4.5Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {formatNumber(simulationData.followersInsta)}
              </div>
              <p className="text-xs text-muted-foreground">
                {dateDifference > 1 ? `Período de ${dateDifference} dias` :
                  `Período de 1 dia`}
              </p>
            </CardContent>
          </Card>
        </div>
        <Card className="col-span-2 bg-neutral-100 dark:bg-neutral-900">
          <CardHeader>
            <CardTitle>Curtidas ~ Fb</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <ActivityLike data={simulationData.likesChartMeta} />
          </CardContent>
        </Card>
        <Card className="col-span-2 bg-neutral-100 dark:bg-neutral-900">
          <CardHeader>
            <CardTitle>Seguidores ~ Ig</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <ActivityFollower data={simulationData.followersChartInsta} />
          </CardContent>
        </Card>
      </div>
      <div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 col-span-2 mt-4">
          <Card className="bg-neutral-100 dark:bg-neutral-900">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Impressões de Página
              </CardTitle>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.69667 0.0403541C8.90859 0.131038 9.03106 0.354857 8.99316 0.582235L8.0902 6.00001H12.5C12.6893 6.00001 12.8625 6.10701 12.9472 6.27641C13.0319 6.4458 13.0136 6.6485 12.8999 6.80001L6.89997 14.8C6.76167 14.9844 6.51521 15.0503 6.30328 14.9597C6.09135 14.869 5.96888 14.6452 6.00678 14.4178L6.90974 9H2.49999C2.31061 9 2.13748 8.893 2.05278 8.72361C1.96809 8.55422 1.98636 8.35151 2.09999 8.2L8.09997 0.200038C8.23828 0.0156255 8.48474 -0.0503301 8.69667 0.0403541ZM3.49999 8.00001H7.49997C7.64695 8.00001 7.78648 8.06467 7.88148 8.17682C7.97648 8.28896 8.01733 8.43723 7.99317 8.5822L7.33027 12.5596L11.5 7.00001H7.49997C7.353 7.00001 7.21347 6.93534 7.11846 6.8232C7.02346 6.71105 6.98261 6.56279 7.00678 6.41781L7.66968 2.44042L3.49999 8.00001Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {formatNumber(simulationData.pageImpressions)}
              </div>
              <p className="text-xs text-muted-foreground">
                {dateDifference > 1 ? `Período de ${dateDifference} dias` :
                  `Período de 1 dia`}
              </p>
            </CardContent>
          </Card>
          <Card className="bg-neutral-100 dark:bg-neutral-900">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Alcance ~ Ig
              </CardTitle>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 3.5C6 2.67157 6.67157 2 7.5 2C8.32843 2 9 2.67157 9 3.5C9 4.32843 8.32843 5 7.5 5C6.67157 5 6 4.32843 6 3.5ZM8 5.94999C9.14112 5.71836 10 4.70948 10 3.5C10 2.11929 8.88071 1 7.5 1C6.11929 1 5 2.11929 5 3.5C5 4.70948 5.85888 5.71836 7 5.94999V13.5C7 13.7761 7.22386 14 7.5 14C7.77614 14 8 13.7761 8 13.5V5.94999Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {formatNumber(simulationData.rangeInsta)}
              </div>
              <p className="text-xs text-muted-foreground">
                {dateDifference > 1 ? `Período de ${dateDifference} dias` :
                  `Período de 1 dia`}
              </p>
            </CardContent>
          </Card>
          <Card className="bg-neutral-100 dark:bg-neutral-900">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Interações ~ Ig
              </CardTitle>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.9 0.499976C13.9 0.279062 13.7209 0.0999756 13.5 0.0999756C13.2791 0.0999756 13.1 0.279062 13.1 0.499976V1.09998H12.5C12.2791 1.09998 12.1 1.27906 12.1 1.49998C12.1 1.72089 12.2791 1.89998 12.5 1.89998H13.1V2.49998C13.1 2.72089 13.2791 2.89998 13.5 2.89998C13.7209 2.89998 13.9 2.72089 13.9 2.49998V1.89998H14.5C14.7209 1.89998 14.9 1.72089 14.9 1.49998C14.9 1.27906 14.7209 1.09998 14.5 1.09998H13.9V0.499976ZM11.8536 3.14642C12.0488 3.34168 12.0488 3.65826 11.8536 3.85353L10.8536 4.85353C10.6583 5.04879 10.3417 5.04879 10.1465 4.85353C9.9512 4.65827 9.9512 4.34169 10.1465 4.14642L11.1464 3.14643C11.3417 2.95116 11.6583 2.95116 11.8536 3.14642ZM9.85357 5.14642C10.0488 5.34168 10.0488 5.65827 9.85357 5.85353L2.85355 12.8535C2.65829 13.0488 2.34171 13.0488 2.14645 12.8535C1.95118 12.6583 1.95118 12.3417 2.14645 12.1464L9.14646 5.14642C9.34172 4.95116 9.65831 4.95116 9.85357 5.14642ZM13.5 5.09998C13.7209 5.09998 13.9 5.27906 13.9 5.49998V6.09998H14.5C14.7209 6.09998 14.9 6.27906 14.9 6.49998C14.9 6.72089 14.7209 6.89998 14.5 6.89998H13.9V7.49998C13.9 7.72089 13.7209 7.89998 13.5 7.89998C13.2791 7.89998 13.1 7.72089 13.1 7.49998V6.89998H12.5C12.2791 6.89998 12.1 6.72089 12.1 6.49998C12.1 6.27906 12.2791 6.09998 12.5 6.09998H13.1V5.49998C13.1 5.27906 13.2791 5.09998 13.5 5.09998ZM8.90002 0.499976C8.90002 0.279062 8.72093 0.0999756 8.50002 0.0999756C8.2791 0.0999756 8.10002 0.279062 8.10002 0.499976V1.09998H7.50002C7.2791 1.09998 7.10002 1.27906 7.10002 1.49998C7.10002 1.72089 7.2791 1.89998 7.50002 1.89998H8.10002V2.49998C8.10002 2.72089 8.2791 2.89998 8.50002 2.89998C8.72093 2.89998 8.90002 2.72089 8.90002 2.49998V1.89998H9.50002C9.72093 1.89998 9.90002 1.72089 9.90002 1.49998C9.90002 1.27906 9.72093 1.09998 9.50002 1.09998H8.90002V0.499976Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {formatNumber(simulationData.interactionsInsta)}
              </div>
              <p className="text-xs text-muted-foreground">
                {dateDifference > 1 ? `Período de ${dateDifference} dias` :
                  `Período de 1 dia`}
              </p>
            </CardContent>
          </Card>
          <Card className="bg-neutral-100 dark:bg-neutral-900">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Visualizações ~ Ig
              </CardTitle>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 11C4.80285 11 2.52952 9.62184 1.09622 7.50001C2.52952 5.37816 4.80285 4 7.5 4C10.1971 4 12.4705 5.37816 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11ZM7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C1.65639 10.2936 4.30786 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C13.3436 4.70638 10.6921 3 7.5 3ZM7.5 9.5C8.60457 9.5 9.5 8.60457 9.5 7.5C9.5 6.39543 8.60457 5.5 7.5 5.5C6.39543 5.5 5.5 6.39543 5.5 7.5C5.5 8.60457 6.39543 9.5 7.5 9.5Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {formatNumber(simulationData.viewsInsta)}
              </div>
              <p className="text-xs text-muted-foreground">
                {dateDifference > 1 ? `Período de ${dateDifference} dias` :
                  `Período de 1 dia`}
              </p>
            </CardContent>
          </Card>
          <Card className="bg-neutral-100 dark:bg-neutral-900">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Taxa de Engajamento ~ Ig
              </CardTitle>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.85357 3.85355L7.65355 3.05353C8.2981 2.40901 9.42858 1.96172 10.552 1.80125C11.1056 1.72217 11.6291 1.71725 12.0564 1.78124C12.4987 1.84748 12.7698 1.97696 12.8965 2.10357C13.0231 2.23018 13.1526 2.50125 13.2188 2.94357C13.2828 3.37086 13.2779 3.89439 13.1988 4.44801C13.0383 5.57139 12.591 6.70188 11.9464 7.34645L7.49999 11.7929L6.35354 10.6465C6.15827 10.4512 5.84169 10.4512 5.64643 10.6465C5.45117 10.8417 5.45117 11.1583 5.64643 11.3536L7.14644 12.8536C7.34171 13.0488 7.65829 13.0488 7.85355 12.8536L8.40073 12.3064L9.57124 14.2572C9.65046 14.3893 9.78608 14.4774 9.9389 14.4963C10.0917 14.5151 10.2447 14.4624 10.3535 14.3536L12.3535 12.3536C12.4648 12.2423 12.5172 12.0851 12.495 11.9293L12.0303 8.67679L12.6536 8.05355C13.509 7.19808 14.0117 5.82855 14.1887 4.58943C14.2784 3.9618 14.2891 3.33847 14.2078 2.79546C14.1287 2.26748 13.9519 1.74482 13.6035 1.39645C13.2552 1.04809 12.7325 0.871332 12.2045 0.792264C11.6615 0.710945 11.0382 0.721644 10.4105 0.8113C9.17143 0.988306 7.80189 1.491 6.94644 2.34642L6.32322 2.96968L3.07071 2.50504C2.91492 2.48278 2.75773 2.53517 2.64645 2.64646L0.646451 4.64645C0.537579 4.75533 0.484938 4.90829 0.50375 5.0611C0.522563 5.21391 0.61073 5.34954 0.742757 5.42876L2.69364 6.59928L2.14646 7.14645C2.0527 7.24022 2.00002 7.3674 2.00002 7.50001C2.00002 7.63261 2.0527 7.75979 2.14646 7.85356L3.64647 9.35356C3.84173 9.54883 4.15831 9.54883 4.35357 9.35356C4.54884 9.1583 4.54884 8.84172 4.35357 8.64646L3.20712 7.50001L3.85357 6.85356L6.85357 3.85355ZM10.0993 13.1936L9.12959 11.5775L11.1464 9.56067L11.4697 11.8232L10.0993 13.1936ZM3.42251 5.87041L5.43935 3.85356L3.17678 3.53034L1.80638 4.90074L3.42251 5.87041ZM2.35356 10.3535C2.54882 10.1583 2.54882 9.8417 2.35356 9.64644C2.1583 9.45118 1.84171 9.45118 1.64645 9.64644L0.646451 10.6464C0.451188 10.8417 0.451188 11.1583 0.646451 11.3535C0.841713 11.5488 1.1583 11.5488 1.35356 11.3535L2.35356 10.3535ZM3.85358 11.8536C4.04884 11.6583 4.04885 11.3417 3.85359 11.1465C3.65833 10.9512 3.34175 10.9512 3.14648 11.1465L1.14645 13.1464C0.95119 13.3417 0.951187 13.6583 1.14645 13.8535C1.34171 14.0488 1.65829 14.0488 1.85355 13.8536L3.85358 11.8536ZM5.35356 13.3535C5.54882 13.1583 5.54882 12.8417 5.35356 12.6464C5.1583 12.4512 4.84171 12.4512 4.64645 12.6464L3.64645 13.6464C3.45119 13.8417 3.45119 14.1583 3.64645 14.3535C3.84171 14.5488 4.1583 14.5488 4.35356 14.3535L5.35356 13.3535ZM9.49997 6.74881C10.1897 6.74881 10.7488 6.1897 10.7488 5.5C10.7488 4.8103 10.1897 4.25118 9.49997 4.25118C8.81026 4.25118 8.25115 4.8103 8.25115 5.5C8.25115 6.1897 8.81026 6.74881 9.49997 6.74881Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {formatNumberDivision100(simulationData.engagementRateInsta)}
              </div>
              <p className="text-xs text-muted-foreground">
                {dateDifference > 1 ? `Período de ${dateDifference} dias` :
                  `Período de 1 dia`}
              </p>
            </CardContent>
          </Card>
          <Card className="bg-neutral-100 dark:bg-neutral-900">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Reações ~ Fb
              </CardTitle>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.97942 1.25171L6.9585 1.30199L5.58662 4.60039C5.54342 4.70426 5.44573 4.77523 5.3336 4.78422L1.7727 5.0697L1.71841 5.07405L1.38687 5.10063L1.08608 5.12475C0.820085 5.14607 0.712228 5.47802 0.914889 5.65162L1.14406 5.84793L1.39666 6.06431L1.43802 6.09974L4.15105 8.42374C4.23648 8.49692 4.2738 8.61176 4.24769 8.72118L3.41882 12.196L3.40618 12.249L3.32901 12.5725L3.25899 12.866C3.19708 13.1256 3.47945 13.3308 3.70718 13.1917L3.9647 13.0344L4.24854 12.861L4.29502 12.8326L7.34365 10.9705C7.43965 10.9119 7.5604 10.9119 7.6564 10.9705L10.705 12.8326L10.7515 12.861L11.0354 13.0344L11.2929 13.1917C11.5206 13.3308 11.803 13.1256 11.7411 12.866L11.671 12.5725L11.5939 12.249L11.5812 12.196L10.7524 8.72118C10.7263 8.61176 10.7636 8.49692 10.849 8.42374L13.562 6.09974L13.6034 6.06431L13.856 5.84793L14.0852 5.65162C14.2878 5.47802 14.18 5.14607 13.914 5.12475L13.6132 5.10063L13.2816 5.07405L13.2274 5.0697L9.66645 4.78422C9.55432 4.77523 9.45663 4.70426 9.41343 4.60039L8.04155 1.30199L8.02064 1.25171L7.89291 0.944609L7.77702 0.665992C7.67454 0.419604 7.32551 0.419604 7.22303 0.665992L7.10715 0.944609L6.97942 1.25171ZM7.50003 2.60397L6.50994 4.98442C6.32273 5.43453 5.89944 5.74207 5.41351 5.78103L2.84361 5.98705L4.8016 7.66428C5.17183 7.98142 5.33351 8.47903 5.2204 8.95321L4.62221 11.461L6.8224 10.1171C7.23842 9.86302 7.76164 9.86302 8.17766 10.1171L10.3778 11.461L9.77965 8.95321C9.66654 8.47903 9.82822 7.98142 10.1984 7.66428L12.1564 5.98705L9.58654 5.78103C9.10061 5.74207 8.67732 5.43453 8.49011 4.98442L7.50003 2.60397Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {formatNumber(simulationData.reactionsMeta)}
              </div>
              <p className="text-xs text-muted-foreground">
                {dateDifference > 1 ? `Período de ${dateDifference} dias` :
                  `Período de 1 dia`}
              </p>
            </CardContent>
          </Card>
          <Card className="bg-neutral-100 dark:bg-neutral-900">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Alcance ~ Fb
              </CardTitle>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 3.5C6 2.67157 6.67157 2 7.5 2C8.32843 2 9 2.67157 9 3.5C9 4.32843 8.32843 5 7.5 5C6.67157 5 6 4.32843 6 3.5ZM8 5.94999C9.14112 5.71836 10 4.70948 10 3.5C10 2.11929 8.88071 1 7.5 1C6.11929 1 5 2.11929 5 3.5C5 4.70948 5.85888 5.71836 7 5.94999V13.5C7 13.7761 7.22386 14 7.5 14C7.77614 14 8 13.7761 8 13.5V5.94999Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {formatNumber(simulationData.rangeMeta)}
              </div>
              <p className="text-xs text-muted-foreground">
                {dateDifference > 1 ? `Período de ${dateDifference} dias` :
                  `Período de 1 dia`}
              </p>
            </CardContent>
          </Card>
          <Card className="bg-neutral-100 dark:bg-neutral-900">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Interações ~ Fb
              </CardTitle>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.9 0.499976C13.9 0.279062 13.7209 0.0999756 13.5 0.0999756C13.2791 0.0999756 13.1 0.279062 13.1 0.499976V1.09998H12.5C12.2791 1.09998 12.1 1.27906 12.1 1.49998C12.1 1.72089 12.2791 1.89998 12.5 1.89998H13.1V2.49998C13.1 2.72089 13.2791 2.89998 13.5 2.89998C13.7209 2.89998 13.9 2.72089 13.9 2.49998V1.89998H14.5C14.7209 1.89998 14.9 1.72089 14.9 1.49998C14.9 1.27906 14.7209 1.09998 14.5 1.09998H13.9V0.499976ZM11.8536 3.14642C12.0488 3.34168 12.0488 3.65826 11.8536 3.85353L10.8536 4.85353C10.6583 5.04879 10.3417 5.04879 10.1465 4.85353C9.9512 4.65827 9.9512 4.34169 10.1465 4.14642L11.1464 3.14643C11.3417 2.95116 11.6583 2.95116 11.8536 3.14642ZM9.85357 5.14642C10.0488 5.34168 10.0488 5.65827 9.85357 5.85353L2.85355 12.8535C2.65829 13.0488 2.34171 13.0488 2.14645 12.8535C1.95118 12.6583 1.95118 12.3417 2.14645 12.1464L9.14646 5.14642C9.34172 4.95116 9.65831 4.95116 9.85357 5.14642ZM13.5 5.09998C13.7209 5.09998 13.9 5.27906 13.9 5.49998V6.09998H14.5C14.7209 6.09998 14.9 6.27906 14.9 6.49998C14.9 6.72089 14.7209 6.89998 14.5 6.89998H13.9V7.49998C13.9 7.72089 13.7209 7.89998 13.5 7.89998C13.2791 7.89998 13.1 7.72089 13.1 7.49998V6.89998H12.5C12.2791 6.89998 12.1 6.72089 12.1 6.49998C12.1 6.27906 12.2791 6.09998 12.5 6.09998H13.1V5.49998C13.1 5.27906 13.2791 5.09998 13.5 5.09998ZM8.90002 0.499976C8.90002 0.279062 8.72093 0.0999756 8.50002 0.0999756C8.2791 0.0999756 8.10002 0.279062 8.10002 0.499976V1.09998H7.50002C7.2791 1.09998 7.10002 1.27906 7.10002 1.49998C7.10002 1.72089 7.2791 1.89998 7.50002 1.89998H8.10002V2.49998C8.10002 2.72089 8.2791 2.89998 8.50002 2.89998C8.72093 2.89998 8.90002 2.72089 8.90002 2.49998V1.89998H9.50002C9.72093 1.89998 9.90002 1.72089 9.90002 1.49998C9.90002 1.27906 9.72093 1.09998 9.50002 1.09998H8.90002V0.499976Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {formatNumber(simulationData.interactionsMeta)}
              </div>
              <p className="text-xs text-muted-foreground">
                {dateDifference > 1 ? `Período de ${dateDifference} dias` :
                  `Período de 1 dia`}
              </p>
            </CardContent>
          </Card>
          <Card className="bg-neutral-100 dark:bg-neutral-900">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Visualizações ~ Fb
              </CardTitle>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 11C4.80285 11 2.52952 9.62184 1.09622 7.50001C2.52952 5.37816 4.80285 4 7.5 4C10.1971 4 12.4705 5.37816 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11ZM7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C1.65639 10.2936 4.30786 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C13.3436 4.70638 10.6921 3 7.5 3ZM7.5 9.5C8.60457 9.5 9.5 8.60457 9.5 7.5C9.5 6.39543 8.60457 5.5 7.5 5.5C6.39543 5.5 5.5 6.39543 5.5 7.5C5.5 8.60457 6.39543 9.5 7.5 9.5Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {formatNumber(simulationData.viewsMeta)}
              </div>
              <p className="text-xs text-muted-foreground">
                {dateDifference > 1 ? `Período de ${dateDifference} dias` :
                  `Período de 1 dia`}
              </p>
            </CardContent>
          </Card>
          <Card className="bg-neutral-100 dark:bg-neutral-900">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Taxa de Engajamento ~ Fb
              </CardTitle>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.85357 3.85355L7.65355 3.05353C8.2981 2.40901 9.42858 1.96172 10.552 1.80125C11.1056 1.72217 11.6291 1.71725 12.0564 1.78124C12.4987 1.84748 12.7698 1.97696 12.8965 2.10357C13.0231 2.23018 13.1526 2.50125 13.2188 2.94357C13.2828 3.37086 13.2779 3.89439 13.1988 4.44801C13.0383 5.57139 12.591 6.70188 11.9464 7.34645L7.49999 11.7929L6.35354 10.6465C6.15827 10.4512 5.84169 10.4512 5.64643 10.6465C5.45117 10.8417 5.45117 11.1583 5.64643 11.3536L7.14644 12.8536C7.34171 13.0488 7.65829 13.0488 7.85355 12.8536L8.40073 12.3064L9.57124 14.2572C9.65046 14.3893 9.78608 14.4774 9.9389 14.4963C10.0917 14.5151 10.2447 14.4624 10.3535 14.3536L12.3535 12.3536C12.4648 12.2423 12.5172 12.0851 12.495 11.9293L12.0303 8.67679L12.6536 8.05355C13.509 7.19808 14.0117 5.82855 14.1887 4.58943C14.2784 3.9618 14.2891 3.33847 14.2078 2.79546C14.1287 2.26748 13.9519 1.74482 13.6035 1.39645C13.2552 1.04809 12.7325 0.871332 12.2045 0.792264C11.6615 0.710945 11.0382 0.721644 10.4105 0.8113C9.17143 0.988306 7.80189 1.491 6.94644 2.34642L6.32322 2.96968L3.07071 2.50504C2.91492 2.48278 2.75773 2.53517 2.64645 2.64646L0.646451 4.64645C0.537579 4.75533 0.484938 4.90829 0.50375 5.0611C0.522563 5.21391 0.61073 5.34954 0.742757 5.42876L2.69364 6.59928L2.14646 7.14645C2.0527 7.24022 2.00002 7.3674 2.00002 7.50001C2.00002 7.63261 2.0527 7.75979 2.14646 7.85356L3.64647 9.35356C3.84173 9.54883 4.15831 9.54883 4.35357 9.35356C4.54884 9.1583 4.54884 8.84172 4.35357 8.64646L3.20712 7.50001L3.85357 6.85356L6.85357 3.85355ZM10.0993 13.1936L9.12959 11.5775L11.1464 9.56067L11.4697 11.8232L10.0993 13.1936ZM3.42251 5.87041L5.43935 3.85356L3.17678 3.53034L1.80638 4.90074L3.42251 5.87041ZM2.35356 10.3535C2.54882 10.1583 2.54882 9.8417 2.35356 9.64644C2.1583 9.45118 1.84171 9.45118 1.64645 9.64644L0.646451 10.6464C0.451188 10.8417 0.451188 11.1583 0.646451 11.3535C0.841713 11.5488 1.1583 11.5488 1.35356 11.3535L2.35356 10.3535ZM3.85358 11.8536C4.04884 11.6583 4.04885 11.3417 3.85359 11.1465C3.65833 10.9512 3.34175 10.9512 3.14648 11.1465L1.14645 13.1464C0.95119 13.3417 0.951187 13.6583 1.14645 13.8535C1.34171 14.0488 1.65829 14.0488 1.85355 13.8536L3.85358 11.8536ZM5.35356 13.3535C5.54882 13.1583 5.54882 12.8417 5.35356 12.6464C5.1583 12.4512 4.84171 12.4512 4.64645 12.6464L3.64645 13.6464C3.45119 13.8417 3.45119 14.1583 3.64645 14.3535C3.84171 14.5488 4.1583 14.5488 4.35356 14.3535L5.35356 13.3535ZM9.49997 6.74881C10.1897 6.74881 10.7488 6.1897 10.7488 5.5C10.7488 4.8103 10.1897 4.25118 9.49997 4.25118C8.81026 4.25118 8.25115 4.8103 8.25115 5.5C8.25115 6.1897 8.81026 6.74881 9.49997 6.74881Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {formatNumberDivision100(simulationData.engagementRateMeta)}
              </div>
              <p className="text-xs text-muted-foreground">
                {dateDifference > 1 ? `Período de ${dateDifference} dias` :
                  `Período de 1 dia`}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
