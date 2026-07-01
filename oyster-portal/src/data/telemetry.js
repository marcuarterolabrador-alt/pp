// Simulated Hobo logger telemetry for a single spring/summer season.
// Degree-days accumulate above a 10C baseline; spawning is flagged once the
// cumulative sum crosses the gametogenesis maturity threshold (~150 degree-days).

const BASELINE_TEMP = 10
export const DEGREE_DAY_THRESHOLD = 150

function generateSeries() {
  const days = 120 // roughly April -> August
  const series = []
  let cumulativeDegreeDays = 0
  let spawningTriggeredAt = null

  for (let day = 0; day < days; day++) {
    const seasonalTemp =
      9 + 8 * Math.sin((Math.PI * day) / days) + Math.sin(day / 5) * 0.8
    const temperature = Number(seasonalTemp.toFixed(2))

    const salinity = Number((33.5 + Math.sin(day / 9) * 1.2 + (Math.random() - 0.5) * 0.3).toFixed(2))

    const light = Number(
      Math.max(0, 8000 + 6000 * Math.sin((Math.PI * day) / days) + (Math.random() - 0.5) * 400).toFixed(0)
    )

    const dailyDegreeDay = Math.max(0, temperature - BASELINE_TEMP)
    cumulativeDegreeDays += dailyDegreeDay

    if (spawningTriggeredAt === null && cumulativeDegreeDays >= DEGREE_DAY_THRESHOLD) {
      spawningTriggeredAt = day
    }

    series.push({
      day,
      label: `Day ${day}`,
      temperature,
      salinity,
      light,
      degreeDays: Number(cumulativeDegreeDays.toFixed(1)),
      spawning: spawningTriggeredAt !== null && day === spawningTriggeredAt,
    })
  }

  return { series, spawningTriggeredAt }
}

export const { series: telemetrySeries, spawningTriggeredAt } = generateSeries()
