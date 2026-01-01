import { useMemo, useState } from "react";
import { CalendarRange } from "lucide-react";
import { PageScaffold } from "@/components/layout/PageScaffold";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { DateRange } from "react-day-picker";

const DateRangePickerPage = () => {
  const [range, setRange] = useState<DateRange | undefined>(undefined);

  const label = useMemo(() => {
    if (!range?.from) return "Belum dipilih";
    if (!range?.to) return "Pilih tanggal akhir";
    return `${range.from.toLocaleDateString()} – ${range.to.toLocaleDateString()}`;
  }, [range]);

  const apply = () => {
    toast({ title: "Rentang tanggal diterapkan", description: label });
  };

  return (
    <PageScaffold
      title="Rentang Tanggal"
      subtitle={label}
      icon={<CalendarRange className="w-5 h-5 text-primary" />}
      metaDescription="Pilih rentang tanggal untuk filter statistik SafeHome."
    >
      <section className="space-y-4">
        <Card variant="glass">
          <CardHeader>
            <CardTitle className="text-base">Pilih rentang</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Calendar
              mode="range"
              selected={range}
              onSelect={setRange}
              numberOfMonths={1}
            />
            <Button className="w-full" onClick={apply}>
              Terapkan
            </Button>
          </CardContent>
        </Card>
      </section>
    </PageScaffold>
  );
};

export default DateRangePickerPage;
