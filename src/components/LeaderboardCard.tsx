import { Trophy, TrendingUp, Target } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LeaderboardCardProps {
  rank: number;
  companyName: string;
  currentRevenue: string;
  pipelineRevenue: string;
  isElevated?: boolean;
}

const getRankStyles = (rank: number) => {
  switch (rank) {
    case 1:
      return {
        border: 'border-gold/60',
        glow: 'glow-gold',
        badge: 'bg-gradient-gold',
        icon: 'text-gold-dark',
        ring: 'ring-2 ring-gold/40',
        cardBg: 'bg-gradient-to-br from-amber-50 to-yellow-50',
      };
    case 2:
      return {
        border: 'border-silver/60',
        glow: 'glow-silver',
        badge: 'bg-gradient-silver',
        icon: 'text-silver-dark',
        ring: 'ring-2 ring-silver/40',
        cardBg: 'bg-gradient-to-br from-slate-50 to-gray-100',
      };
    case 3:
      return {
        border: 'border-bronze/60',
        glow: 'glow-bronze',
        badge: 'bg-gradient-bronze',
        icon: 'text-bronze-dark',
        ring: 'ring-2 ring-bronze/40',
        cardBg: 'bg-gradient-to-br from-orange-50 to-amber-50',
      };
    default:
      return {
        border: 'border-border',
        glow: '',
        badge: 'bg-lark-purple',
        icon: 'text-lark-purple',
        ring: '',
        cardBg: 'bg-card',
      };
  }
};

const LeaderboardCard = ({
  rank,
  companyName,
  currentRevenue,
  pipelineRevenue,
  isElevated = false,
}: LeaderboardCardProps) => {
  const styles = getRankStyles(rank);

  return (
    <div
      className={cn(
        'relative group',
        isElevated && rank === 1 && 'transform -translate-y-6 scale-105 z-10',
        isElevated && rank !== 1 && 'transform -translate-y-2'
      )}
      style={{ animationDelay: `${rank * 0.1}s` }}
    >
      <div
        className={cn(
          'relative rounded-xl border p-5 transition-all duration-500 shadow-lg',
          'hover:scale-[1.02] hover:-translate-y-1 hover:shadow-xl',
          styles.border,
          styles.glow,
          styles.ring,
          styles.cardBg,
          'card-shine',
          rank === 1 && 'animate-pulse-glow'
        )}
      >
        {/* Rank Badge */}
        <div
          className={cn(
            'absolute -top-3 -right-3 w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-lg shadow-lg',
            styles.badge,
            'text-white'
          )}
        >
          #{rank}
        </div>

        {/* Trophy Icon for Top 3 */}
        {rank <= 3 && (
          <div className={cn('absolute -top-4 left-4', styles.icon)}>
            <Trophy className="w-6 h-6" fill="currentColor" />
          </div>
        )}

        {/* Company Name */}
        <h3 className="font-display font-bold text-lg text-foreground mb-4 pr-8">
          {companyName}
        </h3>

        {/* Stats */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <TrendingUp className={cn('w-4 h-4', styles.icon)} />
              <span>Current Revenue</span>
            </div>
            <span className="font-semibold text-foreground">₹{currentRevenue}</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <Target className="w-4 h-4 text-lark-pink" />
              <span>Pipeline</span>
            </div>
            <span className="font-medium text-lark-pink">₹{pipelineRevenue}</span>
          </div>
        </div>

        {/* Decorative gradient line */}
        <div
          className={cn(
            'absolute bottom-0 left-0 right-0 h-1 rounded-b-xl',
            rank === 1 && 'bg-gradient-gold',
            rank === 2 && 'bg-gradient-silver',
            rank === 3 && 'bg-gradient-bronze',
            rank > 3 && 'bg-gradient-lark'
          )}
        />
      </div>
    </div>
  );
};

export default LeaderboardCard;
