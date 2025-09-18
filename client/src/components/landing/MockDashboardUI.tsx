"use client";

import {
  BadgeCent,
  BadgeQuestionMark,
  BriefcaseMedical,
  CalendarDays,
  ChevronDown,
  Download,
  Inbox,
  Info,
  PanelsTopLeft,
  Search,
  Settings,
  SquareUser,
  TrendingUp,
  UserSquare,
} from "lucide-react";
import Image from "next/image";
import { Input } from "../ui/input";

import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

// ================== MOCK DATA ==================
const overviewCards = [
  {
    title: "Patients",
    value: "1,273",
    change: "+85",
    changeText: "Patient increase of 6% in 7 days",
    icon: UserSquare,
    trend: "up",
  },
  {
    title: "Doctors",
    value: "356",
    change: "+12",
    changeText: "Doctor growth of 3% in 7 days",
    icon: BriefcaseMedical,
    trend: "up",
  },
  {
    title: "Appointments",
    value: "894",
    change: "-34",
    changeText: "Appointments dropped 2% in 7 days",
    icon: CalendarDays,
    trend: "down",
  },
];

const appointmentData = [
  { month: "January", count: 120 },
  { month: "February", count: 180 },
  { month: "March", count: 150 },
  { month: "April", count: 95 },
  { month: "May", count: 210 },
  { month: "June", count: 175 },
];

const doctorSpecialtiesData = [
  { specialty: "Cardiology", doctors: 40 },
  { specialty: "Orthopedics", doctors: 32 },
  { specialty: "Neurology", doctors: 28 },
  { specialty: "Pediatrics", doctors: 35 },
  { specialty: "General", doctors: 50 },
];

const chartConfig = {
  count: { label: "Appointments", color: "var(--chart-1)" },
  doctors: { label: "Doctors", color: "var(--chart-2)" },
} satisfies ChartConfig;

// ================== COMPONENT ==================
const MockDashboardUI = () => {
  return (
    <div className="h-[800px] w-full max-w-[1280px] cursor-not-allowed rounded-lg bg-gray-50 p-2 shadow-md ring-1 ring-gray-950/10">
      <div className="flex h-full w-full gap-10 rounded-lg p-5 shadow-xl ring-1 ring-gray-950/10">
        {/* SIDEBAR */}
        <div className="min-w-64 border-r pr-5">
          <div className="flex gap-2">
            <Image src={"/logo.svg"} width={20} height={20} alt="logo" />
            <span className="font-semibold">MEDORA</span>
          </div>
          <div className="my-5 h-px w-full bg-gray-200" />

          {/* MAIN MENU */}
          <div className="space-y-3">
            <h6 className="text-[13px] font-medium text-gray-700">Main menu</h6>
            <div className="space-y-3">
              <div className="bg-primary/10 before:bg-primary relative flex items-center gap-2.5 rounded-md p-3 font-semibold text-gray-700 before:absolute before:-left-5 before:h-full before:w-1 before:rounded-tr-lg">
                <PanelsTopLeft className="text-primary size-5" />
                <span className="text-sm">Overview</span>
              </div>
              <div className="group hover:bg-primary/10 flex cursor-not-allowed items-center gap-2.5 rounded-md p-3 font-medium text-gray-600">
                <Inbox className="group-hover:text-primary size-5" />
                <span className="text-sm">Inbox</span>
              </div>
              <div className="group hover:bg-primary/10 flex cursor-not-allowed items-center gap-2.5 rounded-md p-3 font-medium text-gray-600">
                <CalendarDays className="group-hover:text-primary size-5" />
                <span className="text-sm">Appointments</span>
              </div>
            </div>
          </div>

          {/* OTHER MENU */}
          <div className="my-8 space-y-3">
            <h6 className="text-[13px] font-medium text-gray-700">
              Other menu
            </h6>
            <div className="space-y-3">
              <div className="group hover:bg-primary/10 flex cursor-not-allowed items-center gap-2.5 rounded-md p-3 font-medium text-gray-600">
                <SquareUser className="group-hover:text-primary size-5" />
                <span className="text-sm">Patient</span>
              </div>
              <div className="group hover:bg-primary/10 flex cursor-not-allowed items-center gap-2.5 rounded-md p-3 font-medium text-gray-600">
                <BriefcaseMedical className="group-hover:text-primary size-5" />
                <span className="text-sm">Doctor</span>
              </div>
              <div className="group hover:bg-primary/10 flex cursor-not-allowed items-center gap-2.5 rounded-md p-3 font-medium text-gray-600">
                <BadgeCent className="group-hover:text-primary size-5" />
                <span className="text-sm">Administration</span>
              </div>
            </div>
          </div>

          {/* SETTING MENU */}
          <div className="my-8 space-y-3">
            <h6 className="text-[13px] font-medium text-gray-700">
              Help & Settings
            </h6>
            <div className="space-y-3">
              <div className="group hover:bg-primary/10 flex cursor-not-allowed items-center gap-2.5 rounded-md p-3 font-medium text-gray-600">
                <BadgeQuestionMark className="group-hover:text-primary size-5" />
                <span className="text-sm">Help & Center</span>
              </div>
              <div className="group hover:bg-primary/10 flex cursor-not-allowed items-center gap-2.5 rounded-md p-3 font-medium text-gray-600">
                <Settings className="group-hover:text-primary size-5" />
                <span className="text-sm">Settings</span>
              </div>
            </div>
          </div>

          {/* USER BUTTON */}
          <div className="my-12 flex items-center gap-2">
            <div className="bg-primary flex size-9 items-center justify-center rounded-full text-sm text-white">
              SM
            </div>
            <div>
              <span className="text-sm font-medium text-gray-800">
                AdminMedora
              </span>
              <p className="text-muted-foreground text-xs">
                contact-medora@gmail.com
              </p>
            </div>
          </div>
        </div>

        {/* MAIN DATA */}
        <div className="h-full w-full cursor-not-allowed space-y-7">
          {/* SEARCH BAR */}
          <div className="flex h-10 w-72 items-center gap-3 rounded-md border border-gray-300 pl-4 text-sm text-gray-500">
            <Search className="size-5" />
            <span>Search...</span>
          </div>

          {/* OVERVIEW ANALYTICS */}
          <div>
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold">Overview</h2>
                <p className="text-muted-foreground text-[13px]">
                  Access a detailed overview of key metrics and patient outcomes
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 rounded-md border bg-white px-4 py-2 text-sm shadow-sm">
                  <CalendarDays className="size-4" />
                  Day
                  <ChevronDown className="size-4" />
                </div>
                <div className="bg-primary flex items-center gap-2 rounded-md px-4 py-2 text-[13px] text-white">
                  <Download className="size-4" />
                  Export
                </div>
              </div>
            </div>
          </div>

          {/* OVERVIEW CARDS */}
          <div className="flex items-center gap-8">
            {overviewCards.map((card, i) => (
              <div
                key={i}
                className="w-72 space-y-3 rounded-md border bg-white p-4 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <card.icon className="size-5" />
                    <div className="flex items-center gap-1 text-xs">
                      {card.title} <Info className="size-3" />
                    </div>
                  </div>
                  <div className="rounded border px-3 py-1.5 text-xs">
                    See detail
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <h2 className="text-2xl font-semibold">{card.value}</h2>
                  <div
                    className={`rounded px-2 py-0.5 pt-1 text-xs ${
                      card.trend === "up"
                        ? "bg-green-600/10 text-green-600"
                        : "bg-red-600/10 text-red-600"
                    }`}
                  >
                    {card.change}
                  </div>
                </div>
                <div className="flex gap-3">
                  <p className="text-[13px] text-gray-600">{card.changeText}</p>
                  <TrendingUp
                    className={`size-5 ${card.trend === "up" ? "text-green-600" : "rotate-180 text-red-600"}`}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* CHARTS */}
          <div className="flex items-center gap-6">
            {/* BAR CHART */}
            <Card className="w-[480px]">
              <CardHeader>
                <CardTitle>Appointments Overview</CardTitle>
                <CardDescription>January - June 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig}>
                  <BarChart accessibilityLayer data={appointmentData}>
                    <CartesianGrid vertical={false} />
                    <XAxis
                      dataKey="month"
                      tickLine={false}
                      tickMargin={10}
                      axisLine={false}
                      tickFormatter={(v) => v.slice(0, 3)}
                    />
                    <ChartTooltip
                      cursor={false}
                      content={<ChartTooltipContent hideLabel />}
                    />
                    <Bar dataKey="count" fill="#2b7fff" radius={8} />
                  </BarChart>
                </ChartContainer>
              </CardContent>
              <CardFooter className="flex-col items-start gap-2 text-sm">
                <div className="flex gap-2 leading-none font-medium">
                  Trending up by 4.8% this month{" "}
                  <TrendingUp className="h-4 w-4" />
                </div>
                <div className="text-muted-foreground leading-none">
                  Showing appointments over the last 6 months
                </div>
              </CardFooter>
            </Card>

            {/* RADAR CHART */}
            <Card className="h-[420px] w-[420px]">
              <CardHeader className="items-center pb-4">
                <CardTitle>Doctor Specialties</CardTitle>
                <CardDescription>
                  Distribution across specialties
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-0">
                <ChartContainer
                  config={chartConfig}
                  className="mx-auto aspect-square max-h-[220px]"
                >
                  <RadarChart data={doctorSpecialtiesData}>
                    <ChartTooltip
                      cursor={false}
                      content={<ChartTooltipContent hideLabel />}
                    />
                    <PolarGrid
                      radialLines={false}
                      polarRadius={[90]}
                      strokeWidth={1}
                    />
                    <PolarAngleAxis dataKey="specialty" />
                    <Radar dataKey="doctors" fill="#2b7fff" fillOpacity={0.6} />
                  </RadarChart>
                </ChartContainer>
              </CardContent>
              <CardFooter className="flex-col gap-2 text-sm">
                <div className="flex items-center gap-2 leading-none font-medium">
                  Most popular: General Practice{" "}
                  <TrendingUp className="h-4 w-4" />
                </div>
                <div className="text-muted-foreground flex items-center gap-2 leading-none">
                  Sample distribution by specialty
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MockDashboardUI;
