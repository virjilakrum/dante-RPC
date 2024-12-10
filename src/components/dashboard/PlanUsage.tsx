import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { formatNumber } from '@/lib/utils/format';
import { Flame } from 'lucide-react';

interface PlanUsageProps {
  plan: string;
  credits: number;
  maxCredits: number;
}

export function PlanUsage({ plan, credits, maxCredits }: PlanUsageProps) {
  const usagePercentage = (credits / maxCredits) * 100;

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-medieval">
          {plan} Plan
        </CardTitle>
        <Flame className="h-5 w-5 text-red-500" />
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Credits Used</span>
            <span>{formatNumber(credits)} / {formatNumber(maxCredits)}</span>
          </div>
          <Progress value={usagePercentage} />
        </div>
        <div className="text-sm text-muted-foreground">
          {usagePercentage >= 80 ? (
            <p className="text-red-500">Warning: Credit usage high</p>
          ) : (
            <p>Credit usage normal</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}