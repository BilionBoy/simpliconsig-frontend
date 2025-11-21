import { DashboardHeader } from "@/components/dashboard-header"
import { StatsOverview } from "@/components/stats-overview"
import { RiskDistribution } from "@/components/risk-distribution"
import { TechStackChart } from "@/components/tech-stack-chart"
import { ReadinessDistribution } from "@/components/readiness-distribution"
import { CriticalApplications } from "@/components/critical-applications"
import { MigrationTimeline } from "@/components/migration-timeline"
import { fetchEstatisticas } from "@/lib/fetch-estatisticas"

export default async function DashboardPage() {
  const stats = await fetchEstatisticas()

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground mt-2">
            Mapeamento e análise de prontidão das 293 aplicações do Governo de Rondônia para migração ao SAURON v2
          </p>
        </div>

        <div className="space-y-8">
          <StatsOverview stats={stats} />
          
          <div className="grid gap-6 lg:grid-cols-2">
            <RiskDistribution />
            <TechStackChart />
          </div>

          <ReadinessDistribution />

          <div className="grid gap-6 lg:grid-cols-2">
            <CriticalApplications />
            <MigrationTimeline />
          </div>
        </div>
      </main>
    </div>
  )
}
