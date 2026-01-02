import { Award, Banknote, PieChart, TrendingUp } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';
import LeaderboardCard from './LeaderboardCard';

const leaderboardData = [
  { rank: 1, companyName: 'Finowlish', currentRevenue: '7.04 Lac', pipelineRevenue: '0.7 Lac' },
  { rank: 2, companyName: 'Nakshtra Ventures', currentRevenue: '1.59 Lac', pipelineRevenue: '0.25 Lac' },
  { rank: 3, companyName: 'Staywealthy', currentRevenue: '1.07 Lac', pipelineRevenue: '0.11 Lac' },
  { rank: 4, companyName: 'Jhaveri Securities', currentRevenue: '0.53 Lac', pipelineRevenue: '0.53 Lac' },
  { rank: 5, companyName: 'Konfidence Investment', currentRevenue: '0.12 Lac', pipelineRevenue: '0.24 Lac' },
];

const Leaderboard = () => {
  return (
    <section className="min-h-screen bg-background py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lark-purple/10 border border-lark-purple/20 mb-6">
            <Award className="w-5 h-5 text-lark-purple" />
            <span className="text-sm font-medium text-lark-purple">MFD Premia Accelerator</span>
          </div>
          
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-foreground">Day-Zero </span>
            <span className="text-gradient-lark">Leaderboard</span>
          </h1>
          
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Top performing Mutual Fund Distributors in our accelerator program
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-lark opacity-10 rounded-xl blur-xl group-hover:opacity-20 transition-opacity" />
            <div className="relative bg-card border border-lark-purple/30 rounded-xl p-6 shadow-lg glow-purple">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-gradient-lark">
                  <Banknote className="w-5 h-5 text-white" />
                </div>
                <span className="text-base font-medium text-muted-foreground">Total LAMF Sanctioned</span>
              </div>
              <div className="font-display text-3xl sm:text-4xl font-bold text-foreground">
                ₹<AnimatedCounter target={1.03} duration={2500} decimals={2} /> Cr
              </div>
              <p className="text-xs text-muted-foreground mt-2">By MFD Premia Members</p>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-pink opacity-10 rounded-xl blur-xl group-hover:opacity-20 transition-opacity" />
            <div className="relative bg-card border border-lark-pink/30 rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-gradient-pink">
                  <PieChart className="w-5 h-5 text-white" />
                </div>
                <span className="text-base font-medium text-muted-foreground">Total Portfolio Fetched</span>
              </div>
              <div className="font-display text-3xl sm:text-4xl font-bold text-foreground">
                ₹<AnimatedCounter target={7.85} duration={2500} decimals={2} /> Cr
              </div>
              <p className="text-xs text-muted-foreground mt-2">By MFD Premia Members</p>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-lark opacity-10 rounded-xl blur-xl group-hover:opacity-20 transition-opacity" />
            <div className="relative bg-card border border-lark-purple/30 rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-gradient-lark">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <span className="text-base font-medium text-muted-foreground">Aggregate AUM</span>
              </div>
              <div className="font-display text-3xl sm:text-4xl font-bold text-foreground">
                ₹<AnimatedCounter target={40244} duration={2500} decimals={0} /> Cr
              </div>
              <p className="text-xs text-muted-foreground mt-2">By MFD Premia Members</p>
            </div>
          </div>
        </div>

        {/* Podium Layout */}
        <div className="relative">
          {/* Background decorative elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-lark-purple/5 rounded-full blur-3xl" />
          </div>

          {/* Top 3 - Podium Style */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 mb-6">
            {/* 2nd Place - Left */}
            <div className="mt-8">
              <LeaderboardCard {...leaderboardData[1]} isElevated />
            </div>
            
            {/* 1st Place - Center (Elevated) */}
            <div>
              <LeaderboardCard {...leaderboardData[0]} isElevated />
            </div>
            
            {/* 3rd Place - Right */}
            <div className="mt-8">
              <LeaderboardCard {...leaderboardData[2]} isElevated />
            </div>
          </div>

          {/* 4th & 5th Place - Base Level */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto">
            <LeaderboardCard {...leaderboardData[3]} />
            <LeaderboardCard {...leaderboardData[4]} />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Leaderboard;
